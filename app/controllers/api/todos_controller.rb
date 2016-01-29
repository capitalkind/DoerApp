class Api::TodosController < ApplicationController

  def index
    dbTodos = Todo.all
    render json: {todos: dbTodos}
  end

  def create
    new_todo = Todo.create( todo_params )
    render json: new_todo
  end

  def destroy
    todo = Todo.find(params[:id])
    todo.destroy
    dbTodos = Todo.all
    render json: {todos: dbTodos}
  end

  def update
    todo = Todo.find(params[:id])
    todo.update
    dbTodos = Todo.all
    render json: {todos: dbTodos}
  end

  private

  def todo_params
    params.require('todo').permit(:title, :content)
  end

end
