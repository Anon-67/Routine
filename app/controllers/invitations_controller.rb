class InvitationsController < ApplicationController

    def create
        invitation = Invitation.create(user_id: params[:user_id], event_id: params[:event_id])
    end
end
