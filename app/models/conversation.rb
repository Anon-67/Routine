class Conversation < ApplicationRecord
    has_many :handshakes
    has_many :users, through: :handshakes
end
