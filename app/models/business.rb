# == Schema Information
#
# Table name: businesses
#
#  id           :bigint           not null, primary key
#  name         :string           not null
#  city         :string           not null
#  state        :string           not null
#  zip_code     :string           not null
#  phone_number :string
#  category     :string
#  price_range  :float
#  longitude    :float
#  latitude     :float
#  user_id      :bigint           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  rating       :float
#
class Business < ApplicationRecord

    validates :name, presence: true
    validates :city, presence: true
    validates :state, presence: true
    validates :zip_code, presence: true

    belongs_to :owner,
        class_name: :User,
        foreign_key: :user_id

    has_one_attached :photo

    has_many :reviews,
        primary_key: :id,
        foreign_key: :business_id,
        class_name: :Review,
        dependent: :destroy
    
    has_many :reviewers,
        through: :reviews,
        source: :reviewer,
        dependent: :destroy

    def update_rating
        count = reviewers.count
        return update(rating: 0) if count == 0
        sum = reviewers.sum(:rating)
        update(rating: sum / count)
    end

    
end
