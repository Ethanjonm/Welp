# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  zip_code        :string           not null
#  fname           :string           not null
#  lname           :string           not null
#  birthday        :date
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
  has_secure_password
  
  validates :email,
            uniqueness: true,
            presence: true,
            length: { in: 3..255 },
            format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { in: 6..255 }, allow_nil: true
  validates :session_token, presence: true, uniqueness: true
  validates :fname, presence: true
  validates :lname, presence: true

  before_validation :ensure_session_token


  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    # has_secure_password gives us the authenticate method
    if user&.authenticate(password) 
        return user
    else
        nil 
    end
  end

  def reset_session_token!
    self.update!(session_token: generate_unique_session_token)
    self.session_token
  end


  private

  def generate_unique_session_token
    loop do
      token = SecureRandom.base64
      break token unless User.exists?(session_token: token)
    end
  end

  def ensure_session_token
    self.session_token ||= generate_unique_session_token
  end


end
