class CreateTrainings < ActiveRecord::Migration[6.1]
  def change
    create_table :trainings do |t|
      t.date :date
      t.float :distance
      t.time :time
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
