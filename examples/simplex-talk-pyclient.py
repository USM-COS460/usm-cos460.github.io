#!/usr/bin/env python3

import socket
import sys

HOST = '127.0.0.1'  # Standard loopback interface address (localhost)
PORT = 5432        # Port to listen on (non-privileged ports are > 1023)

if len(sys.argv) <= 1:
    print('usage: simplex-talk host')
    exit(1)

with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
    s.connect((HOST, PORT))
    while True:
        data = sys.stdin.readline()
        if not data:
            break
        s.sendall(bytearray(data, encoding='UTF-8'))
