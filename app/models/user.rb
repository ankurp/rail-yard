class User < ApplicationRecord
  devise :masqueradable, :database_authenticatable, :registerable, :recoverable, :rememberable, :validatable

  has_one_attached :avatar
  has_person_name

  has_many :notifications, as: :recipient
end
