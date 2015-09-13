class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.references :user, index: true, foreign_key: true
      t.references :gym, index: true, foreign_key: true
      t.boolean :approved, null: false, default: false
      t.timestamp :reviewed_at
      t.text :description
      t.boolean :main, null: false, default: false

      t.timestamps null: false
    end
  end
end
