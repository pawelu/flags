class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.references :user, index: true, foreign_key: true
      t.references :gym, index: true, foreign_key: true
      t.text :content
      t.boolean :approved, null: false, default: false
      t.timestamp :reviewed_at

      t.timestamps null: false
    end
  end
end
