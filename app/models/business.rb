class Business < ApplicationRecord

    validates :name, presence: true
    validates :city, presence: true
    validates :state, presence: true
    validates :zip_code, presence: true

    belongs_to :owner,
        class_name: :User,
        foreign_key: :user_id

    
end
