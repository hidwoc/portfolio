class AddAdminToProject < ActiveRecord::Migration[6.1]
  def change
    add_reference :projects, :admin, null: false, foreign_key: true
  end
end
