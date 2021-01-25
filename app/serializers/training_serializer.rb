class TrainingSerializer
  include JSONAPI::Serializer
  attributes :date, :distance, :time, :user_id
end
