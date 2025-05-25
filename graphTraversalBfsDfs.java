import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Queue;
import java.util.Set;

class Graph {

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

    public void bfs(String source) {

        Queue<String> queue = new java.util.LinkedList<>();
        queue.add(source);
        Set<String> visited = new HashSet<>();
        visited.add(source);

        while (queue.size() > 0) {
            String current = queue.poll();

            System.out.println(current);
            for (String neighbor : adjacencyList.get(current)) {
                if (visited.contains(neighbor)) {
                    continue;
                }
                queue.add(neighbor);
                visited.add(neighbor);
            }
        }

    }

    public void dfs(String source) {
        Set<String> visited = new HashSet<>();
        visited.add(source);
        dfsHelper(source, visited);
    }

    private void dfsHelper(String current, Set<String> visited) {
        System.out.println(current);
        for (String connection : adjacencyList.get(current)) {
            if (visited.contains(connection)) {
                continue;
            }
            visited.add(connection);
            dfsHelper(connection, visited);
        }
    }

}

public class Solution {

    public static void main(String[] args) {
        Graph graph = new Graph();
        // abhi, mahesh, renu, mrinalika, laxmi, kriti, raman
        graph.signUp("abhi");
        graph.signUp("mahesh");
        graph.signUp("renu");
        graph.signUp("mrinalika");
        graph.signUp("laxmi");
        graph.signUp("kriti");
        graph.signUp("raman");

        graph.connect("abhi", "mahesh");
        graph.connect("abhi", "kriti");

        graph.connect("renu", "kriti");
        graph.connect("renu", "raman");

        graph.connect("mahesh", "mrinalika");
        graph.connect("mrinalika", "laxmi");

        System.out.println("BFS starting from 'abhi':");
        graph.bfs("abhi");
        // abhi, kriti, mahesh, renu, mrinalika, raman, laxmi

        graph.dfs("abhi");
        // abhi, mahesh,, mrinalika,, laxmi,kriti,renu, raman

    }
}
