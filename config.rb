# ====================================
#   Activate Plugins
# ====================================

activate :livereload
activate :syntax, css_class: 'syntax'
activate :directory_indexes

activate :autoprefixer do |config|
  config.browsers = ['last 3 versions', 'Explorer >= 10']
  config.cascade = false
end

# ====================================
#   Global Variables
# ====================================

# ----- Configuration ----- #

set :markdown_engine, :redcarpet
set :markdown, :fenced_code_blocks => true, :smartypants => true

helpers do
  def get_posts
    sitemap.resources.select { | resource | resource.data.type == 'post' }
      .sort_by { | resource| resource.data.date }
      .reverse
  end

  def pretty_date( date )
    date.strftime( '%B %d, %Y' )
  end

  def page_title
    if current_page.data.title
      "#{ current_page.data.title } | #{ title }"
    else
      title
    end
  end
end

# ----- Paths ----- #

set :css_dir, 'assets/stylesheets'
set :js_dir, 'assets/javascripts'
set :images_dir, 'assets/images'
set :fonts_dir, 'assets/fonts'

# ----- Site ----- #

set :title, 'Louis Novick'

# ====================================
#   Build
# ====================================

configure :build do
  activate :minify_css
  activate :minify_html
  activate :minify_javascript
  activate :asset_hash
  activate :relative_assets
end

# ----- Deploy ----- #

activate :deploy do |deploy|
  deploy.build_before = false
  deploy.method = :git
  #deploy.remote   = 'git@github.com:louisnovick/louisnovick.github.io.git' # remote name or git url, default: origin
  deploy.branch   = 'master'
end
