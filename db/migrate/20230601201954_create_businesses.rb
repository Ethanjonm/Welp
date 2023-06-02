class CreateBusinesses < ActiveRecord::Migration[7.0]
  def change
    create_table :businesses do |t|
      t.string "name", null: false
      t.string "city", null: false
      t.string "state", null: false
      t.string "zip_code", null: false
      t.string "phone_number"
      t.string "category"
      t.float "price_range"
      t.float "longitude"
      t.float "latitude"
      t.bigint "user_id", null: false

      t.timestamps
    end

    add_index :businesses, :name
    add_index :businesses, :city
    add_index :businesses, :state
    add_index :businesses, :zip_code


  end
end
