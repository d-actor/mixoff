class CreatePlaylists < ActiveRecord::Migration[5.1]
  def change
    create_table :playlists do |t|
      t.string :name
      t.belongs_to :user, foreign_key: true
      t.belongs_to :mixoff, foreign_key: true

      t.timestamps
    end
  end
end
