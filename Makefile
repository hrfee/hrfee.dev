.PHONY: clean

all: out/index.html out/remixicon.css out/bundle.css

out/index.html: index.html
	mkdir -p out
	NOTEMPLATE=1 node ./scripts/missing-colors.js index.html out/index.html
	cp 404.html favicon.ico out/

REMIXICON_SRC = node_modules/remixicon/fonts/remixicon.css node_modules/remixicon/fonts/remixicon.woff2
out/remixicon.css: $(REMIXICON_SRC) $(wildcard *.html)
	mkdir -p out
	cp $(REMIXICON_SRC) out/
	npx uncss $(wildcard *.html) --stylesheets out/remixicon.css > out/_remixicon.css
	mv out/_remixicon.css out/remixicon.css

out/bundle.css: base.css $(wildcard *.html)
	mkdir -p out
	npx esbuild --bundle base.css --outfile=out/bundle.css --external:remixicon.css --minify
	npx tailwindcss -c tailwind.config.js -i out/bundle.css -o out/bundle.css

clean:
	rm -r out
