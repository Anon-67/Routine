class EventSerializer < ActiveModel::Serializer
  attributes :id, :body, :start, :end
  has_one :user
end
