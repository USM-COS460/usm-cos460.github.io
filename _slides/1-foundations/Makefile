.PHONY: dev prebuild postbuild all clean

BASE=$(shell basename `pwd`)
DST=../../slides/$(BASE)

all: $(DST)

# For local development
dev: 
	make prebuild
	npx slidev --open slides.md
	make postbuild

# For remote development on archlinux.lan
dev-archlinux:
	make prebuild
	npx slidev --remote --bind archlinux.lan slides.md
	make postbuild

# Links and copies to prepare for slidev build
prebuild:
	-ln -s ../shared/components .
	-ln -s ../shared/setup .
	-cp ../shared/package*.json .
	npm install --prefix ../shared/
	-ln -s ../shared/node_modules .

# Remove links and copies after slidev build
postbuild:
	-rm -rf components setup package*.json
	-rm -rf node_modules

# This is the main target, runs slidev build
$(DST): slides.md
	make prebuild
	npx slidev build --base /slides/$(BASE)/ --out ../../slides/$(BASE)/ slides.md
	make postbuild

clean:
	-rm -rf dist
	-rm -rf components setup package*.json
	-rm node_modules

distclean: clean
	-rm -rf ../../slides/$(BASE)