class EventSerializer < ActiveModel::Serializer
  attributes :id, :body, :start, :end_time
  has_one :user
end
