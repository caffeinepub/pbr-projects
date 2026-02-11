import Runtime "mo:core/Runtime";
import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Time "mo:core/Time";
import Order "mo:core/Order";
import Array "mo:core/Array";
import Iter "mo:core/Iter";

actor {
  module Enquiry {
    public func compare(a : Enquiry, b : Enquiry) : Order.Order {
      Nat.compare(a.timestamp, b.timestamp);
    };
  };

  type Enquiry = {
    name : Text;
    email : Text;
    message : Text;
    timestamp : Nat;
  };

  let enquiries = Map.empty<Nat, Enquiry>();
  var nextId = 0;

  public shared ({ caller }) func submitEnquiry(name : Text, email : Text, message : Text) : async () {
    let enquiry : Enquiry = {
      name;
      email;
      message;
      timestamp = Time.now().toNat();
    };

    enquiries.add(nextId, enquiry);
    nextId += 1;
  };

  public query ({ caller }) func getAllEnquiries() : async [Enquiry] {
    enquiries.values().toArray().sort();
  };

  public query ({ caller }) func getEnquiryById(id : Nat) : async Enquiry {
    switch (enquiries.get(id)) {
      case (null) { Runtime.trap("Enquiry not found") };
      case (?enquiry) { enquiry };
    };
  };
};
