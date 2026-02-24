import Map "mo:core/Map";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";
import Principal "mo:core/Principal";
import Array "mo:core/Array";
import Order "mo:core/Order";

actor {
  type Lead = {
    name : Text;
    phone : Text;
    email : Text;
    message : Text;
  };

  let leads = Map.empty<Principal, Lead>();

  module Lead {
    public func compare(lead1 : Lead, lead2 : Lead) : Order.Order {
      switch (Text.compare(lead1.name, lead2.name)) {
        case (#equal) { Text.compare(lead1.email, lead2.email) };
	      case (order) { order };
      };
    };
  };

  public shared ({ caller }) func submitContactForm(name : Text, phone : Text, email : Text, message : Text) : async () {
    if (leads.containsKey(caller)) { Runtime.trap("This user has already submitted the form.") };
    let lead : Lead = {
      name;
      phone;
      email;
      message;
    };
    leads.add(caller, lead);
  };

  public query ({ caller }) func hasSubmittedForm() : async Bool {
    leads.containsKey(caller);
  };

  public query func getLead(user : Principal) : async Lead {
    switch (leads.get(user)) {
      case (null) { Runtime.trap("Lead does not exist") };
      case (?lead) { lead };
    };
  };

  public query func getAllLeads() : async [Lead] {
    leads.values().toArray().sort();
  };
};
