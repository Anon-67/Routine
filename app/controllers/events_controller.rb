class EventsController < ApplicationController
    def index
        render json: Event.all 
    end

    def create
        message = Event.create(body: params[:body], start: params[:start], end: params[:end], user_id: session[:user_id])
        render json: message, status: :created
    end
end
