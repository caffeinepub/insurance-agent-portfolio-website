import Time "mo:core/Time";
import Runtime "mo:core/Runtime";
import Array "mo:core/Array";
import Set "mo:core/Set";
import Iter "mo:core/Iter";
import Principal "mo:core/Principal";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";
import MixinStorage "blob-storage/Mixin";
import Migration "migration";

(with migration = Migration.run)
actor {
  include MixinStorage();

  // TYPES
  type UserProfile = {
    name : Text;
    email : Text;
  };

  // New type for persistent quote submissions
  type PersistentQuoteSubmission = {
    name : Text;
    phone : Text;
    email : Text;
    city : Text;
    coverageType : Text;
    message : Text;
    timestamp : Int;
  };

  // Existing types (can be phased out)
  type CoverageType = {
    #auto;
    #home;
    #life;
    #business;
  };

  type BestTimeToCall = {
    #morning;
    #afternoon;
    #evening;
    #anyTime;
  };

  type BusinessInfo = {
    phone : Text;
    email : Text;
    whatsapp : Text;
    address : Text;
    licensedStates : [Text];
  };

  // LEGACY STATE
  var businessName = "Reeves Insurance Solutions";
  var businessInfo : BusinessInfo = {
    phone = "(213) 555-0123";
    email = "john@reevesinsurance.com";
    whatsapp = "+12135550123";
    address = "Los Angeles, CA";
    licensedStates = ["CA", "NY", "TX"];
  };

  let userProfiles = Set.empty<Principal>();

  // ADMIN SYSTEM
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // Persistent storage for quote submissions
  var persistentQuotes : [PersistentQuoteSubmission] = [];

  // PUBLIC METHODS

  // Save profile (user access - stub)
  public shared ({ caller }) func saveCallerUserProfile(_profile : UserProfile) : async () {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller);
  };

  // Get profile (user access - stub)
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    null;
  };

  // Get other user's profile (only admin or owner - stub)
  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    null;
  };

  // Submit persistent quote
  public shared ({ caller }) func submitQuote(quote : PersistentQuoteSubmission) : async () {
    if (not AccessControl.hasPermission(accessControlState, caller, #guest)) {
      Runtime.trap("Unauthorized: Only guests and above can submit quotes");
    };
    let entry : PersistentQuoteSubmission = {
      quote with timestamp = Time.now();
    };
    persistentQuotes := persistentQuotes.concat([entry]);
  };

  // Get all persistent quotes (admin-only)
  public query ({ caller }) func getQuotes() : async [PersistentQuoteSubmission] {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can access persistentQuotes");
    };
    persistentQuotes;
  };

  // Get persistent quote by index (admin only)
  public query ({ caller }) func getQuoteByIndex(index : Nat) : async PersistentQuoteSubmission {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can access persistentQuotes");
    };

    if (index >= persistentQuotes.size()) {
      Runtime.trap("Quote not found");
    };

    persistentQuotes[index];
  };

  // Update business info (admin only)
  public shared ({ caller }) func updateBusinessInfo(name : Text, info : BusinessInfo) : async () {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can update business info");
    };
    businessName := name;
    businessInfo := info;
  };

  // Get business info (public)
  public query func getBusinessInfo() : async {
    name : Text;
    info : BusinessInfo;
  } {
    {
      name = businessName;
      info = businessInfo;
    };
  };
};

