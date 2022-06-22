class User < ApplicationRecord
    has_secure_password
    validates :username, uniqueness: { case_sensitive: false }

    has_many :invitations
    has_many :events, through: :invitations
    has_many :handshakes
    has_many :conversations, through: :handshakes
end
