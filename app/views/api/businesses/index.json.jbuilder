@businesses.each do |business| 
    json.set! business.id do 
        json.extract! business, 
        :id,
        :name,
        :city,
        :state,
        :zip_code,
        :price_range,
        :category,
        :phone_number,
        :latitude,
        :longitude,
        :rating,
        :user_id,
        :created_at,
        :updated_at
    end
end