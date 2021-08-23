class CreateSocials < ActiveRecord::Migration[6.1]
  def change
    create_table :socials do |t|
      t.string :link
      t.string :icon
      t.references :admin, null: false, foreign_key: true

      t.timestamps
    end
  end
end
