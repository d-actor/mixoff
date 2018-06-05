class Playlist < ApplicationRecord
  belongs_to :user
  belongs_to :mixoff
  has_many :songs
end
