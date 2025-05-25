import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

public class Graph {

    Map<String, Set<String>> adjacencyList = new HashMap<>();

    public void signUp(String username) {
        adjacencyList.put(username, new HashSet<>());
    }

    public void connect(String username1, String username2) {
        adjacencyList.get(username1).add(username2);
        adjacencyList.get(username2).add(username1);
    }

    public void disconnect(String username1, String username2) {
        adjacencyList.get(username1).remove(username2);
        adjacencyList.get(username2).remove(username1);
    }

    public void deactivate(String username) {
        adjacencyList.remove(username);
        for (Set<String> connections : adjacencyList.values()) {
            connections.remove(username);
        }
    }

}
