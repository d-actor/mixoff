class CreatePlaylistables < ActiveRecord::Migration[5.1]
  def change
    create_table :playlistables do |t|
      t.integer :playlist_id, foreign_key: true
      t.integer :playlistable_id, foreign_key: true
      t.string :playlistable_type

      t.timestamps
    end
  end
end
