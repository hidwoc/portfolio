class AddImgToAdmin < ActiveRecord::Migration[6.1]
  def change
    add_column :admins, :img, :string
  end
end
