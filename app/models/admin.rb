class Admin < ApplicationRecord
  has_many :projects
  has_many :skills
  has_many :socials
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }

  has_secure_password
end
