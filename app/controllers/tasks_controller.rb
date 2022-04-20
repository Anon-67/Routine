class TasksController < ApplicationController

    def index
        tasks = Task.all.where(user_id: session[:user_id]).order(:due_date)        
        render json: tasks.all.where(completed: false).where("due_date < ?", Date.today).or(tasks.all.where(due_date: Date.today.all_day))
    end

    def create
        task = Task.create(body: params[:body], user_id: session[:user_id], completed: false, due_date: params[:due])
        render json: task, status: :created
    end

    def update
        task = Task.find(params[:id])
        task.update(completed: params[:completed])
        render json: task, status: :ok
    end
end
