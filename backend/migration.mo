import Map "mo:core/Map";
import Set "mo:core/Set";
import Iter "mo:core/Iter";
import Principal "mo:core/Principal";

module {
  type OldActor = {
    nextQuoteId : Nat;
    quoteSubmissions : Map.Map<Nat, QuoteSubmission>;
    userProfiles : Map.Map<Principal, { name : Text; email : Text }>;
    businessName : Text;
    businessInfo : {
      phone : Text;
      email : Text;
      whatsapp : Text;
      address : Text;
      licensedStates : [Text];
    };
  };

  type QuoteSubmission = {
    id : Nat;
    name : Text;
    phone : Text;
    email : Text;
    zipCode : Text;
    coverageType : {
      #auto;
      #home;
      #life;
      #business;
    };
    bestTimeToCall : {
      #morning;
      #afternoon;
      #evening;
      #anyTime;
    };
    timestamp : Int;
  };

  type NewActor = {
    userProfiles : Set.Set<Principal>;
    businessName : Text;
    businessInfo : {
      phone : Text;
      email : Text;
      whatsapp : Text;
      address : Text;
      licensedStates : [Text];
    };
    persistentQuotes : [{
      name : Text;
      phone : Text;
      email : Text;
      city : Text;
      coverageType : Text;
      message : Text;
      timestamp : Int;
    }];
  };

  // Migration function called by the main actor via the with-clause
  public func run(old : OldActor) : NewActor {
    // Convert original userProfiles Map to new Set
    let newUserProfiles = old.userProfiles.keys().foldLeft(Set.empty<Principal>(), func(profiles, principal) { profiles });

    // Drop old quote submissions and nextQuoteId
    { old with userProfiles = newUserProfiles; persistentQuotes = [] };
  };
};
