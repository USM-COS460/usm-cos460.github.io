# makefile - Simple makefile for computer network example code
#
# 2019/09/02 - Stephen Houser, University of Southern Maine
#

CC=gcc

default: build_c build_java

# C99 Implementation 
build_c: simplex-talk-client simplex-talk-server 

simplex-talk-client: simplex-talk-client.c
	$(CC) -o $@ $< $(CLFAGS)

simplex-talk-server: simplex-talk-server.c
	$(CC) -o $@ $< $(CLFAGS)

run_c_server:
	./simplex-talk-server

run_c_client:
	./simplex-talk-client localhost

clean_c:
	-rm simplex-talk-client simplex-talk-server

# Java Implementation
JFLAGS = -g
JC = javac
.SUFFIXES: .java .class
.java.class:
	$(JC) $(JFLAGS) $*.java

build_java: SimplexTalkClient.class #SimplexTalkServer.class 

SimplexTalkClient.class: SimplexTalkClient.java

SimplexTalkServer.class: SimplexTalkServer.java

run_java_client: SimplexTalkClient.class
	java SimplexTalkClient localhost

run_java_server: SimplexTalkServer.class
	java SimplexTalkServer

clean_java:
	-rm *.class

# Python3 Implementation
run_python_server:
	python3 simplex-talk-pyserver.py

run_python_client:
	python3 simplex-talk-pyclient.py localhost

clean_python:
	-rm *.pyc

# Clean
clean: clean_c clean_java clean_python