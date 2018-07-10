class CreateMixoffs < ActiveRecord::Migration[5.1]
  def change
    create_table :mixoffs do |t|
      t.string :title
      t.text :description
      t.boolean :recurring

      t.timestamps
    end
  end
end
