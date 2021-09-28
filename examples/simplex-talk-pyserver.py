#!/usr/bin/env python3

import socket

HOST = '127.0.0.1'  # Standard loopback interface address (localhost)
PORT = 5433        # Port to listen on (non-privileged ports are > 1023)

with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
    s.bind((HOST, PORT))
    s.listen()
    while True:
        (conn, addr) = s.accept()
        while True:
            data = conn.recv(1024)
            if not data:
                break
            print(data.decode('utf-8'), end='')

        conn.close()
