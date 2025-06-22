var findTheCity = function (n, edges, distanceThreshold) {
    let distances = [];

    for (let i = 0; i < n; i++) {
        distances[i] = []
        for (let j = 0; j < n; j++) {
            if (i == j) {
                distances[i][j] = 0;
            } else {
                distances[i][j] = Infinity;
            }
        }
    }

    for (let [from, to, weight] of edges) {
        distances[from][to] = weight;
        distances[to][from] = weight;
    }

    floydWarshall(distances);

    let city;
    let minCount = Infinity;

    for (let i = 0; i < n; i++) {
        let count = 0;
        for (let j = 0; j < n; j++) {
            if (distances[i][j] <= distanceThreshold) {
                count++;
            }
        }
        if (count <= minCount) {
            minCount = count;
            city = i;
        }
    }

    return city;

};

function floydWarshall(dist) {
    let n = dist.length;

    // Iterate over all possible intermediate nodes (middleMan)
    for (let middleMan = 0; middleMan < n; middleMan++) {

        // Iterate over all pairs of nodes (i, j)
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                dist[i][j] = Math.min(dist[i][j], dist[i][middleMan] + dist[middleMan][j]);
            }
        }
    }
}
