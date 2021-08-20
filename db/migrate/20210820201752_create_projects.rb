class CreateProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :projects do |t|
      t.string :name
      t.string :description
      t.string :techstack
      t.string :site
      t.string :repo
      t.string :img

      t.timestamps
    end
  end
end
