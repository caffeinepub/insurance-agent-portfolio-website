import Map "mo:core/Map";
import Text "mo:core/Text";
import Iter "mo:core/Iter";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";
import Array "mo:core/Array";
import Order "mo:core/Order";

import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";


// Specify the migration in the with-clause

actor {
  // TYPE DEFINITIONS
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

  // STATE
  var nextId = 0;
  let quoteSubmissions = Map.empty<Nat, QuoteSubmission>();
  let userProfiles = Map.empty<Principal, UserProfile>();

  // ADMIN AUTHENTICATION SYSTEM
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // PUBLIC FUNCTIONS

  // Save user profile
  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Get caller's profile
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  // Get any user's profile (admin access)
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
  ) : async () {
    let submission : QuoteSubmission = {
      id = nextId;
      name;
      phone;
      email;
      zipCode;
      coverageType;
      bestTimeToCall;
      timestamp = Time.now();
    };

    quoteSubmissions.add(nextId, submission);
    nextId += 1;
  };

  // Get all quote submissions (admin access)
  public query ({ caller }) func getQuoteSubmissions() : async [QuoteSubmission] {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can access submissions");
    };
    quoteSubmissions.values().toArray();
  };

  // Get specific quote by id (admin only)
  public query ({ caller }) func getQuoteById(id : Nat) : async QuoteSubmission {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can access submissions");
    };

    switch (quoteSubmissions.get(id)) {
      case (null) { Runtime.trap("Quote not found") };
      case (?quote) { quote };
    };
  };
};
