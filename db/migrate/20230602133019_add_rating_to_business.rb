class AddRatingToBusiness < ActiveRecord::Migration[7.0]
  def change
    add_column :businesses, :rating, :float
  end
end
