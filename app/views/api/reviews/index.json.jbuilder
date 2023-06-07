@reviews.each do |review|
    json.set! review.id do 
        json.extract! review, 
        :id, 
        :body, 
        :rating, 
        :user_id,
        :business_id,
        :created_at,
        :updated_at
    end
end