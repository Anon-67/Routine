require "rails_helper"

RSpec.describe HandshakesController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/handshakes").to route_to("handshakes#index")
    end

    it "routes to #show" do
      expect(get: "/handshakes/1").to route_to("handshakes#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/handshakes").to route_to("handshakes#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/handshakes/1").to route_to("handshakes#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/handshakes/1").to route_to("handshakes#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/handshakes/1").to route_to("handshakes#destroy", id: "1")
    end
  end
end
