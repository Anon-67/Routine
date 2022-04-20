class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.text :body
      t.belongs_to :user, null: false, foreign_key: true
      t.boolean :completed
      t.datetime :due_date

      t.timestamps
    end
  end
end
