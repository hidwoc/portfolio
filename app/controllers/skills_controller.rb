class SkillsController < ApplicationController
  before_action :authorize_request, only: %i[create update destroy]
  before_action :set_skill, only: %i[show update destroy]

  # GET /skills
  def index
    @skills = Skill.all.order(:created_at)

    render json: @skills
  end

  # GET /skills/:id
  def show
    render json: @skill
  end

  # POST /skills
  def create
    @skill = Skill.new(skill_params)

    if @skill.save
      render json: @skill, status: :created
    else
      render json: @skill.errors, status: :unprocessable_entity
    end
  end

  # PUT /skills/:id
  def update
    if @skill.update(skill_params)
      render json: @skill, status: :ok
    else
      render json: @skill.errors, status: :unprocessable_entity
    end
  end

  # DELETE /skills/:id
  def destroy
    @skill.destroy
  end

  private

  def set_skill
    @skill = Skill.find(params[:id])
  end

  def skill_params
    params
      .require(:skill)
      .permit(:name, :icon, :category)
  end
end
