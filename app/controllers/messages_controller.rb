class MessagesController < ApplicationController

    def index
        render json: Message.all
    end

    def create
        message = Message.create(body: params[:body], user_id: session[:user_id], sent_to: params[:sent_to])
        render json: message, status: :created
    end

    def show
        recieved = Message.all.where(sent_to: session[:user_id]).where(user_id: params[:id])
        sent = Message.all.where(user_id: session[:user_id]).where(sent_to: params[:id])
        messages = sent + recieved
        render json: messages.sort
    end

    private

    def stefan
        user = User.find_by(firstname: "Stefan")
    end

    def sent_to(id)
        user = User.find_by(id: id )
    end
end
