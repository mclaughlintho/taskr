class TasksController < ApplicationController
  
  def index
    @tasks = Task.all
    @task = Task.new
  end
  
  def show
    @task = Task.find(params[:id])
  end
  
  def create
    @task = Task.create(task_params)
    render @task
  end
  
  def update
    @task = Task.find(params[:id])
    @task.update_attributes(task_params)
    render @task
  end
  
  def destroy
    @task = Task.find(params[:id])
    @task.delete
    render nothing: true
  end
  
  private
  
  def task_params
    params.require(:task).permit(:title, :complete)
  end
    
end
