class CreateMixoffs < ActiveRecord::Migration[5.1]
  def change
    create_table :mixoffs do |t|
      t.string :name
      t.string :month

      t.timestamps
    end
  end
end
