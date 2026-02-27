import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Text "mo:core/Text";
import Set "mo:core/Set";
import Iter "mo:core/Iter";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";
import Array "mo:core/Array";
import Char "mo:core/Char";
import Principal "mo:core/Principal";
import Order "mo:core/Order";

import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";
import MixinStorage "blob-storage/Mixin";



actor {
  include MixinStorage();

  // TYPES
  type UserProfile = {
    name : Text;
    email : Text;
  };

  type QuoteSubmission = {
    id : Nat;
    name : Text;
    phone : Text;
    email : Text;
    zipCode : Text;
    coverageType : CoverageType;
    bestTimeToCall : BestTimeToCall;
    timestamp : Int;
  };

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

  module QuoteSubmission {
    public func compare(q1 : QuoteSubmission, q2 : QuoteSubmission) : Order.Order {
      Nat.compare(q1.id, q2.id);
    };
  };

  type BusinessInfo = {
    phone : Text;
    email : Text;
    whatsapp : Text;
    address : Text;
    licensedStates : [Text];
  };

  // STATE
  var nextQuoteId = 1;
  var businessName = "Reeves Insurance Solutions";
  var businessInfo : BusinessInfo = {
    phone = "(213) 555-0123";
    email = "john@reevesinsurance.com";
    whatsapp = "+12135550123";
    address = "Los Angeles, CA";
    licensedStates = ["CA", "NY", "TX"];
  };

  let userProfiles = Map.empty<Principal, UserProfile>();
  let quoteSubmissions = Map.empty<Nat, QuoteSubmission>();

  // ADMIN SYSTEM
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // FUNCIONES PÚBLICAS

  // Save profile (user access)
  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Get profile (user access)
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  // Get other user's profile (only admin or owner)
  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  // Submit quote
  public shared ({ caller }) func submitQuote(
    name : Text,
    phone : Text,
    email : Text,
    zipCode : Text,
    coverageType : CoverageType,
    bestTimeToCall : BestTimeToCall,
  ) : async Nat {
    let id = nextQuoteId;
    nextQuoteId += 1;

    let submission : QuoteSubmission = {
      id;
      name;
      phone;
      email;
      zipCode;
      coverageType;
      bestTimeToCall;
      timestamp = Time.now();
    };

    quoteSubmissions.add(id, submission);
    id;
  };

  // Get all quotes (admin-only)
  public query ({ caller }) func getQuoteSubmissions() : async [QuoteSubmission] {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can access submissions");
    };
    quoteSubmissions.values().toArray();
  };

  // Get quote by ID (admin only)
  public query ({ caller }) func getQuoteById(id : Nat) : async QuoteSubmission {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can access submissions");
    };

    switch (quoteSubmissions.get(id)) {
      case (null) { Runtime.trap("Quote not found") };
      case (?quote) { quote };
    };
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
