class EventsController < ApplicationController
    def index
        events = Event.all.where(user_id: session[:user_id])
        
        render json: events.all.where(start: Date.today.all_day).or(events.all.where("start < ?", Date.today).where("end_time >= ?", Date.today)).order(:start) 
    end

    def create
        event = Event.create(body: params[:body], start: params[:start], end_time: params[:end_time], user_id: session[:user_id])
        render json: event, status: :created
    end
end
