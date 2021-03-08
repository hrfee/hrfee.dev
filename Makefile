all:
	-mkdir -p out
	cp index.html favicon.ico out/
	cp -r node_modules/remixicon/fonts/remixicon.css node_modules/remixicon/fonts/remixicon.woff2 out/
	npx esbuild --bundle base.css --outfile=out/bundle.css --external:remixicon.css --minify

