module ApplicationHelper
  def webpack_bundle_tag(src, options = {})
    Webpack.check_if_running! if Rails.env.development?

    path = Rails.root.join('webpack-assets.json')
    file = File.read(path)
    json = JSON.parse(file)

    asset = json[src]['js']

    javascript_include_tag("/assets/#{asset}", options)
  end
end
