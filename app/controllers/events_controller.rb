class EventsController < ApplicationController
    def index
        events = User.find(session[:user_id]).events        
        render json: events.all.where(start: Date.today.all_day).or(events.all.where("start < ?", Date.today).where("end_time >= ?", Date.today)).order(:start)
    end

    def create
        event = Event.create(body: params[:body], start: params[:start], end_time: params[:end_time])
        Invitation.create(user_id: session[:user_id], event_id: event.id)
        render json: event, status: :created
    end
end
