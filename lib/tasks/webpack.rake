namespace :webpack do
  desc 'copy images from npm leaflet installation folder to public'
  task leaflet: :environment do
    leaflet_npm_images_path = 'app/assets/node_modules/leaflet/dist/images'
    leaflet_public_images_path = 'public/webpack/leaflet'
    FileUtils.cp_r(Dir[leaflet_npm_images_path + '/*'], leaflet_public_images_path)
  end
end
