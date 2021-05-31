all:
	-mkdir -p out
	cp index.html 404.html favicon.ico out/
	cp -r node_modules/remixicon/fonts/remixicon.css node_modules/remixicon/fonts/remixicon.woff2 out/
	npx esbuild --bundle base.css --outfile=out/bundle.css --external:remixicon.css --minify
	npx uncss index.html 404.html --stylesheets out/bundle.css > out/_bundle.css
	mv out/_bundle.css out/bundle.css
	npx uncss index.html 404.html --stylesheets out/remixicon.css > out/_remixicon.css
	mv out/_remixicon.css out/remixicon.css

debug:
	-mkdir -p out
	cp index.html 404.html favicon.ico out/
	cp -r node_modules/remixicon/fonts/remixicon.css node_modules/remixicon/fonts/remixicon.woff2 out/
	npx esbuild --bundle base.css --outfile=out/bundle.css --external:remixicon.css --minify

monitor:
	nodemon -e html,css -i out --exec "make debug && python -m http.server -d out"
