# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

User.destroy_all
Business.destroy_all
Review.destroy_all


User.create!(email: "ethan@ethan.com", password: "password", fname: "Ethan", lname: "Mercado", zip_code: "10011" )
User.create!(email: "billy@billy.com", password: "password", fname: "Billy", lname: "Mays", zip_code: "10011" )
User.create!(email: "joey@joey.com", password: "password", fname: "Joey", lname: "Wheeler", zip_code: "10011" )
User.create!(email: "jerry@jerry.com", password: "password", fname: "Jerry", lname: "Mouse", zip_code: "10011" )
User.create!(email: "tom@tom.com", password: "password", fname: "Tom", lname: "Cat", zip_code: "10011" )
User.create!(email: "demo@demo.com", password: "password", fname: "Demo", lname: "Red", zip_code: "10011" )


Business.create!(name: "Best Burgers", city: "Manhattan", state: "NY", zip_code: "10011", phone_number: "555-555-5555", category: "Burgers", price_range: 3, rating: 4, latitude: 40.618715, longitude: -74.033196)
Business.create!(name: "Good Food", city: "Manhattan", state: "NY", zip_code: "10011", phone_number: "555-555-5555", category: "Pizza", price_range: 4, rating: 2, latitude: 40.674246, longitude: -73.975202)
Business.create!(name: "Please Eat", city: "Manhattan", state: "NY", zip_code: "10011", phone_number: "555-555-5555", category: "Ramen", price_range: 1, rating: 1, latitude: 40.64184, longitude: -73.96338)
Business.create!(name: "Food House", city: "Manhattan", state: "NY", zip_code: "10011", phone_number: "555-555-5555", category: "Burgers", price_range: 5, rating: 4, latitude: 40.738771, longitude: -73.988459)
Business.create!(name: "Munch", city: "Manhattan", state: "NY", zip_code: "10011", phone_number: "555-555-5555", category: "Burgers", price_range: 3, rating: 5, latitude: 40.670647, longitude: -73.978283)
Business.create!(name: "Pizza Pizza", city: "Manhattan", state: "NY", zip_code: "10011", phone_number: "555-555-5555", category: "Pizza", price_range: 4, rating: 3, latitude: 40.651878, longitude: -73.949846)
Business.create!(name: "Ramen Place", city: "Manhattan", state: "NY", zip_code: "10011", phone_number: "555-555-5555", category: "Ramen", price_range: 5, rating: 2, latitude: 40.72394, longitude: -74.003072)
Business.create!(name: "Tim Tom's", city: "Manhattan", state: "NY", zip_code: "10011", phone_number: "555-555-5555", category: "Ramen", price_range: 2, rating: 5, latitude: 40.64767, longitude: -73.97387)
Business.create!(name: "Yummy Food", city: "Manhattan", state: "NY", zip_code: "10011", phone_number: "555-555-5555", category: "Burgers", price_range: 1, rating: 4, latitude: 40.71565, longitude: -73.99310)
Business.create!(name: "Mario Bro's", city: "Manhattan", state: "NY", zip_code: "10011", phone_number: "555-555-5555", category: "Pizza", price_range: 5, rating: 1, latitude: 40.73053, longitude: -73.98822)
Business.create!(name: "Can Opener", city: "Manhattan", state: "NY", zip_code: "10011", phone_number: "555-555-5555", category: "Pizza", price_range: 4, rating: 5, latitude: 40.747443, longitude: -73.903030)

