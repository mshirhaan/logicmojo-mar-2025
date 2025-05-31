var findOrder = function(numCourses, prerequisites) {
    let map = {}
    let res = []

    let map1 = {}

    for(let i = 0; i<numCourses; i++) {
        map[i] = new Set();
        map1[i] = new Set();
    }

    for(let prerequisite of prerequisites) {
        let [dependent, dependency] = prerequisite;
        map[dependent].add(dependency);
        map1[dependency].add(dependent)
    }

    let queue = [];
    for(let key in map) {
        if(map[key].size == 0) {
            queue.push(key);
            delete map[key];
        }
    }

    while(queue.length) {
        let dependency = queue.shift();
        res.push(+dependency)
        for(let dependent of map1[dependency]) {
            let set = map[dependent];
            set.delete(+dependency)
            if(set.size == 0) {
                queue.push(dependent);
                delete map[dependent];
            }
        }

    }

    console.log(map)

    if(Object.keys(map).length) {
        return [];
    }
    return res;
};
