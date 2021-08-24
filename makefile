#
# makefile - make based maintenance for Stephen Houser's website
#
# Development Targets:
# make build            : Build content to internal "_site" (default target)
# make serve		: Build and serve from internal "_site" (primary development target)
# make local            : Build to ~user/public_html or ~user/Sites
#
# Production Target:
# make publish		: Publish to Production (GitHub)
#
# Underlying alternate publishing locations
# make publish-usm	    : Publishes the USM		  -- http://people.usm.maine.edu/houser
# make publish-n1sh		: Publish to n1sh.net	  -- http://n1sh.net/~houser
# make publish-github	: Publish to Git Hub	  -- http://stephenhouser.github.io
#

# How to run jekyll
JEKYLL_CMD=bundle exec jekyll

# Set to do a dry run.
#RSOPTS=-n --delete
DATE=$(shell date +"%Y-%m-%d")

##### DEVELOPMENT TARGETS ####
default: build

# Build into _site
build:
	$(JEKYLL_CMD) build

# Start local web server
# - Serve content from http://localhost:4000 (root)
serve:
	$(JEKYLL_CMD) serve --watch --host=0.0.0.0 --drafts --unpublished --future

check:
	python -m venv venv
	source venv/bin/activate
	pip3 install install git+https://github.com/linkchecker/linkchecker.git
	linkchecker https://stephenhouser.com
	deactivate

##### PRODUCTION TARGET ####
publish: publish-github

##### UTILITY TARGETS #####
tidy: clean-mac-files
	@echo "ERROR: TIDY IS BROKEN"
	@echo find "$(DEST)" -type f -name "*.html" -exec tidy -config _config/tidy.conf {} \;

clean:
	rm -rf _site/*

clean-mac-files:
	@find . -name ._* -exec rm -rf {} \;
	@find . -name .DS_Store -exec rm {} \;
	@find . -name *~ -exec rm {} \;

# Site is hosted on GitHub and using GitHub Pages
publish-github: clean-mac-files
	# Don't need to build, github will do that.
	git push github -v --all
