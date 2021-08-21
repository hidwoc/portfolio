class Admin < ApplicationRecord
  has_many :projects
  has_many :skills
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  
  has_secure_password
end
