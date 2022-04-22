class InvitationSerializer < ActiveModel::Serializer
  attributes :id, :event_id, :user_id
  has_one :user
  has_one :event
end
