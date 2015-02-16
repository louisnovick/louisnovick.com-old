activate :livereload
activate :syntax
activate :minify_html
activate :bourbon
activate :neat
activate :directory_indexes

helpers do
  def get_posts
    sitemap.resources.select { | resource | resource.data.type == 'post' }
      .sort_by { | resource| resource.data.date }
      .reverse
  end

  def pretty_date( date )
    date.strftime( '%B %d, %Y' )
  end
end

set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'

set :markdown_engine, :redcarpet
set :markdown, fenced_code_blocks: true, footnotes: true, smartypants: true

configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :asset_hash
  activate :relative_assets
end

activate :deploy do |deploy|
  deploy.method = :git
  # deploy.remote   = 'custom-remote' # remote name or git url, default: origin
  deploy.branch   = 'master' 
  deploy.commit_message = 'timestamp ' + 'version'   
end
