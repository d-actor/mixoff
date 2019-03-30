class CreatePlaylistables < ActiveRecord::Migration[5.1]
  def change
    create_table :playlistables do |t|
      t.integer :playlistable_id
      t.integer :playlist_id
      t.integer :owner_id

      t.timestamps
    end
  end
end
