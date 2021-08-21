class AdminsController < ApplicationController
  before_action :authorize_request, only: %i[verify update]
  before_action :set_admin, only: %i[show update]

  # POST /admins
  # def create
  #   admin = Admin.new(admin_register_params)
  #   if admin.save
  #     token = create_token(admin.id)
  #     render json: {
  #       admin: admin.attributes.except("password_digest"),
  #       token: token,
  #     }, status: :created
  #   else
  #     render json: admin.errors, status: :unprocessable_entity
  #   end
  # end
  
  # GET /admins/:id
  def show
    render json: @admin
  end

  # POST /admins/login
  def login
    admin = Admin.find_by(email: admin_login_params[:email])

    if admin && admin.authenticate(admin_login_params[:password])
      token = create_token(admin.id)
      render json: {
               admin: admin.attributes.except('password_digest'),
               token: token,
             },
             status: :ok
    else
      render json: { error: 'unauthorized' }, status: :unauthorized
    end
  end

  # PUT /admins/:id/update
  def update
    if @admin.update(admin_params)
      render json: @admin, status: :ok
    else
      render json: @admin.errors, status: :unprocessable_entity
    end
  end

  # GET /admins/verify
  def verify
    render json: @current_admin.attributes.except('password_digest'),
           status: :ok
  end

  private

  def set_admin
    @admin = Admin.first
  end

  # def admin_register_params
  #   params.require(:admin).permit(:username, :email, :password)
  # end

  def admin_login_params
    params.require(:admin).permit(:email, :password)
  end

  def admin_params
    params
      .require(:admin)
      .permit(
        :username,
        :email,
        :password,
        :title,
        :bio,
        :linkedin,
        :resume,
        :github,
        :instagram,
        :facebook,
        :twitter,
      )
  end

  def create_token(id)
    payload = { id: id, exp: 24.hours.from_now.to_i }
    JWT.encode(payload, SECRET_KEY)
  end
end
