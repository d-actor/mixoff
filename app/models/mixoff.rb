class Mixoff < ApplicationRecord
  acts_as_followable
  has_many :playlists
  has_many :users, through: :playlists
end

