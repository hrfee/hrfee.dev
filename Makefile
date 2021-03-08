all:
	-mkdir -p out
	cp index.html favicon.ico out/
	cp -r node_modules/remixicon/fonts/remixicon.css node_modules/remixicon/fonts/remixicon.woff2 out/
	npx esbuild --bundle base.css --outfile=out/bundle.css --external:remixicon.css --minify
	npx uncss index.html --stylesheets out/bundle.css > out/_bundle.css
	mv out/_bundle.css out/bundle.css
	npx uncss index.html --stylesheets out/remixicon.css > out/_remixicon.css
	mv out/_remixicon.css out/remixicon.css

