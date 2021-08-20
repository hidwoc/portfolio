class AddColumnToAdmin < ActiveRecord::Migration[6.1]
  def change
    add_column :admins, :title, :string
    add_column :admins, :bio, :string
    add_column :admins, :linkedin, :string
    add_column :admins, :resume, :string
    add_column :admins, :github, :string
    add_column :admins, :instagram, :string
    add_column :admins, :facebook, :string
    add_column :admins, :twitter, :string
  end
end
