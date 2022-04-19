class MessageSerializer < ActiveModel::Serializer
  attributes :id, :body, :sent_to
  has_one :user
end
