#!/Users/surya/.rvm/rubies/ruby-2.5.1/bin/ruby
require 'find'

class AllLinksBuilder
  def initialize(dir: Dir.pwd, file: 'all_links.html')
    @dir = dir
    @file = file
  end

  def write_to_file
    File.open(@file, 'w') do |file|
      file.write(html)
    end
  end

  def html
    html = "<ul>\n"
    Find.find(@dir) do |path|
      next unless path =~ /\.html\Z|md\Z/
      href = path.gsub("#{@dir}/", '')
      name = href.split('/').last
      puts href
      html = html+"\n<li><a href='#{href}' target='_blank'>#{href}</a></li>"
    end
    html = html+"\n</ul>"
  end
end

AllLinksBuilder.new(dir: Dir.pwd, file: 'all_links.html').write_to_file