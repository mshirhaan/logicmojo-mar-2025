class Solution {
    floydWarshall(dist) {
        let n = dist.length;
        
        // Iterate over all possible intermediate nodes (middleMan)
        for (let middleMan = 0; middleMan < n; middleMan++) {
            
            // Iterate over all pairs of nodes (i, j)
            for (let i = 0; i < n; i++) {
                for (let j = 0; j < n; j++) {
                    
                    // If there's no valid path between i -> middleMan or middleMan -> j (infinity), skip the update
                    if (dist[i][middleMan] !== 100000000 && dist[middleMan][j] !== 100000000) {
                        dist[i][j] = Math.min(dist[i][j], dist[i][middleMan] + dist[middleMan][j]);
                    }
                }
            }
        }
    }
}
