class RemoveUserIdFromBusiness < ActiveRecord::Migration[7.0]
  def change
    remove_column :businesses, :user_id, :bigint
  end
end
