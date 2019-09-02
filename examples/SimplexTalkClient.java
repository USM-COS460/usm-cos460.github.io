import java.io.*;
import java.net.*;

public class SimplexTalkClient {
    public static void main(String[] args) throws UnknownHostException, IOException, ClassNotFoundException, InterruptedException {
		//establish socket connection to server
		Socket socket = new Socket("localhost", 5432);
		PrintWriter output = new PrintWriter(socket.getOutputStream());
		
		BufferedReader reader = new BufferedReader(new InputStreamReader(System.in)); 
		while (true) {
        	String data = reader.readLine(); 
			System.out.println(data);
			output.flush();
		}
    }
}