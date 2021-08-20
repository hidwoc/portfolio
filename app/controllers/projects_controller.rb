class ProjectsController < ApplicationController
  before_action :authorize_request, only: %i[create update destroy]
  before_action :set_project, only: %i[show update destroy]

  # GET /projects
  def index
    @projects = Project.all.order(:created_at)

    render json: @projects
  end

  # GET /projects/:id
  def show
    render json: @project
  end

  # POST /projects
  def create
    @project = Project.new(project_params)

    if @project.save
      render json: @project, status: :created
    else
      render json: @project.errors, status: :unprocessable_entity
    end
  end

  # PUT /projects/:id
  def update
    if @project.update(project_params)
      render json: @project, status: :ok
    else
      render json: @project.errors, status: :unprocessable_entity
    end
  end

  # DELETE /projects/:id
  def destroy
    @project.destroy
  end

  private

  def set_project
    @project = Project.find(params[:id])
  end

  def project_params
    params
      .require(:project)
      .permit(:name, :description, :techstack, :site, :repo, :img)
  end
end
