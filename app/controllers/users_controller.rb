class UsersController < ApplicationController
    before_action :authorize, only: [:show]

    def show
        user = User.find(session[:user_id])
        render json: user
    end

    def index
        render json: User.all
    end

    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id]  = user.id
            render json: user, status: :created
        else
            render json: { error: "Invalid user" }, status: 422
        end
    end

    private 

    def authorize
        return render json: { error: "Invalid User" }, status: :unauthorized unless session.include? :user_id
    end

    def user_params
        params.permit(:firstname, :lastname, :username, :password, :password_confirmation)
    end
end
