class CreateMessages < ActiveRecord::Migration[6.1]
  def change
    create_table :messages do |t|
      t.string :body
      t.belongs_to :user, null: false, foreign_key: true
      t.integer :sent_to

      t.timestamps
    end
  end
end
