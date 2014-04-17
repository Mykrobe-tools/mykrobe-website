#!/usr/bin/ruby
require 'tempfile'

source_directory = "masters"
destination_directory = "../website/app/images"

#http://stackoverflow.com/questions/11592085/imagemagick-convert-svg-to-png-not-working-with-rsvg-enabled

Dir.glob(source_directory+"/*.svg") do |filename|
	puts filename
	filename_no_extension = File.basename(filename,File.extname(filename))

	png_file_name = File.join(destination_directory,filename_no_extension + '.png')
	png_file_name_retina = File.join(destination_directory,filename_no_extension + '@2x.png')
	svg_file_name = File.join(destination_directory,filename_no_extension + '.svg')

	# command = 'convert -background none "'+filename+'" png32:"'+png_file_name+'"'
	command = 'rsvg-convert "'+filename+'" -o "'+png_file_name+'"'
	system(command)
	puts command

	command = 'optipng "'+png_file_name+'"'
	system(command)
	puts command

	command = 'rsvg-convert "'+filename+'" -x 2.0 -y 2.0 -o "'+png_file_name_retina+'"'
	system(command)
	puts command

	command = 'optipng "'+png_file_name_retina+'"'
	system(command)
	puts command

	command = 'python scour.py -i "'+filename+'" -o "'+svg_file_name+'"'
	system(command)
	puts command
end