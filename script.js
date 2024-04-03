class Node {
    constructor ([a, b]) {
        this.position = [a, b]

        this.one = null
        this.two = null
        this.tree = null
        this.four = null
        this.five = null
        this.six = null
        this.seven = null
        this.eight = null
    }
}




class Graph {
    constructor ([a, b], [c, d]) {
        this.visited = []
        this.firstA = a
        this.firstB = b
        this.output = []
        this.node = this.buildGraph([a, b], [c, d])
    }


    buildGraph ([a, b], [c, d]) {

        let node = new Node([a, b])


        if (a < 0 || b < 0) {
            node.position = null
            return null
        } 

        if (node.position[0] > 7 || node.position[1] > 7) {
            node.position = null
            return null
        } 

        
        for (let i = 0; i < this.visited.length; i++) {
            if (node.position[0] === this.visited[i][0] && node.position[1] === this.visited[i][1]) {
                node.position = null
                return null
            }
        }

        

        if (node.position[0] === c && node.position[1] === d) {
            
            return node
        } 

        


        this.visited.push(node.position)

        if (
            (node.position[0] == c - 1 && node.position[1] == d + 2) ||
            (node.position[0] == c + 1 && node.position[1] == d + 2) ||
            (node.position[0] == c + 2 && node.position[1] == d + 1) ||
            (node.position[0] == c + 2 && node.position[1] == d - 1) ||
            (node.position[0] == c + 1 && node.position[1] == d - 2) ||
            (node.position[0] == c - 1 && node.position[1] == d - 2) ||
            (node.position[0] == c - 2 && node.position[1] == d - 1) ||
            (node.position[0] == c - 2 && node.position[1] == d + 1)
            
        ) {
            this.visited.pop()
        }


        node.one = this.buildGraph([a - 1, b + 2], [c, d])
        node.two = this.buildGraph([a + 1, b + 2], [c, d])

        node.tree = this.buildGraph([a + 2, b + 1], [c, d])
        node.four = this.buildGraph([a + 2, b - 1], [c, d])

        node.five = this.buildGraph([a + 1, b - 2], [c, d])
        node.six = this.buildGraph([a - 1, b - 2], [c, d])

        node.seven = this.buildGraph([a - 2, b - 1], [c, d])
        node.eight = this.buildGraph([a - 2, b + 1], [c, d])

        return node

    }


    levelOrder (node) {
        
        if(!node) return []
        const queue = []
        
        queue.push(node)
        while(queue.length) {
            // Remove all the current nodes in the queue and add each node's children to the queue
            const len = queue.length
            const row = []
            for(let i = 0; i < len; i++) {
                const cur = queue.shift()
                if(cur.one) queue.push(cur.one)
                if(cur.two) queue.push(cur.two)
                if(cur.tree) queue.push(cur.tree)
                if(cur.four) queue.push(cur.four)
                if(cur.five) queue.push(cur.five)
                if(cur.six) queue.push(cur.six)
                if(cur.seven) queue.push(cur.seven)
                if(cur.eight) queue.push(cur.eight)
                // Push the current node data to the row array
                row.push(cur.position)
            }
            // Push the current row array into the this.output array
            
            this.output.push(row)
        }
        return this.output
    
    }



    shortestPath ([c, d]) {

        for (let i = 0; i < this.output.length; i++) {
            for (let e = 0; e < this.output[i].length; e++) {
                if (c === this.output[i][e][0] && d === this.output[i][e][1]) {
                    return i
                }
            
    
                
            }  
        }

    
    }


}


const graph = new Graph([0, 0], [3, 3])


console.log(graph.levelOrder(graph.node))


function Get ([a, b]) {

    for (let i = 0; i < graph.visited.length; i++) {
        if (a === graph.visited[i][0] && b === graph.visited[i][1]) {
            return true
        }
        
    }
}

console.log(Get([2, 4]))


// function shortestPath ([c, d]) {

//     for (let i = 0; i < levelOrder(graph.node).length; i++) {
//         for (let e = 0; e < levelOrder(graph.node)[i].length; e++) {
//             if (c === levelOrder(graph.node)[i][0] && d === levelOrder(graph.node)[i][1]) {
//                 return i
//             }

//             return i
//         }  
//     }

    

// }

console.log(graph.shortestPath([3, 3]))




// function getShortestPath(current) {

//     let path = []

//     let i = 0

//     getPosition(current)

//     function getPosition(current) {

//         if (current == null) return 

//         if (current.one != null) {
//             return current.position
//         }

//         if (current.two != null) {
//             return current.position
//         }

//         if (current.tree != null) {
//             return current.position
//         }

//         if (current.four != null) {
//             return current.position
//         }

//         if (current.five != null) {
//             return current.position
//         }

//         if (current.six != null) {
//             return current.position
//         }

//         if (current.seven != null) {
//             return current.position
//         }

//         if (current.eight != null) {
//             return current.position
//         }


//         // remove the return









//         path[i] = getPosition(current.one)
//         path[i] = getPosition(current.two)
//         path[i] = getPosition(current.tree)
//         path[i] = getPosition(current.four)
//         path[i] = getPosition(current.five)
//         path[i] = getPosition(current.six)
//         path[i] = getPosition(current.seven)
//         path[i] = getPosition(current.eight)
//     }


    


    // for (let i = 0; i < graph.shortestPath ([c, d]); i++) {

    //     path[i] = getPosition(current.one)
    //     path[i] = getPosition(current.two)
    //     path[i] = getPosition(current.tree)
    //     path[i] = getPosition(current.four)
    //     path[i] = getPosition(current.five)
    //     path[i] = getPosition(current.six)
    //     path[i] = getPosition(current.seven)
    //     path[i] = getPosition(current.eight)

    //     console.log(path[i])
    // }


//}


// console.log(getShortestPath(graph.node, [3, 3]))


Object.keys(graph.node).forEach(function(key) {
    console.log(graph.node[key])
})


// this is bullshit. even if i find a way to get every position of the path i pass trough the function, how does it decide which way to go when there more then one next value to explore. I think  went with the wrong method from the beginning