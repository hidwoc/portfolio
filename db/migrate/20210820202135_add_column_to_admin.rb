class AddColumnToAdmin < ActiveRecord::Migration[6.1]
  def change
    add_column :admins, :title, :string
    add_column :admins, :bio, :string
    add_column :admins, :resume, :string
  end
end
