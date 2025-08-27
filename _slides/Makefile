
SRC = introduction 1-foundations p1-guessing-game

all:
	make -C introduction
	make -C 1-foundations
	make -C p1-guessing-game

clean:
	make -C introduction clean
	make -C 1-foundations clean
	make -C p1-guessing-game clean

distclean: clean
	make -C introduction distclean
	make -C 1-foundations distclean
	make -C p1-guessing-game distclean
	-rm -rf shared/node_modules shared/package-lock.json
