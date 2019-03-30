class Playlist < ApplicationRecord
  belongs_to :playlistable, polymorphic: true
end

