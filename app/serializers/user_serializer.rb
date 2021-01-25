class UserSerializer
  include JSONAPI::Serializer
  attributes :name, :email

  has_many :trainings
end
