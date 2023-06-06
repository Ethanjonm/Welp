# == Schema Information
#
# Table name: reviews
#
#  id          :bigint           not null, primary key
#  body        :text             not null
#  rating      :integer          not null
#  business_id :bigint           not null
#  user_id     :bigint           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Review < ApplicationRecord

    validates :body, presence: true
    validates :rating, presence: true, inclusion: { in: (1..5) }

    belongs_to :reviewer,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :business,
        primary_key: :id,
        foreign_key: :business_id,
        class_name: :Business

    private

    def update_average_rating
        business.update_average_rating
    end

end
