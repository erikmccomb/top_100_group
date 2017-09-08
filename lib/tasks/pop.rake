namespace :pop do
  desc "Populate Songs"
  task songs: :environment do
    100.times do
      song = Song.create(title: Faker::HitchhikersGuideToTheGalaxy.marvin_quote)
    end
  end
end
