class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :handshakes, :conversations
end
