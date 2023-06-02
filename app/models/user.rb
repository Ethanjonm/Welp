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

  has_many :businesses,
    class_name: :Business,
    foreign_key: :user_id,
    dependent: :destroy

  def self.find_by_credentials(email, password)
    # debugger
    user = User.find_by(email: email)
    # debugger
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
