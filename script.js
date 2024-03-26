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

        // i need to faire en sorte bena the cases before the end point don´t enter the visited array

        if (node.position[0] === c && node.position[1] === d) {
            
            return node
        } 

        if (
            (node.position[0] == this.firstA - 1 && node.position[1] == this.firstB + 2) ||
            (node.position[0] == this.firstA + 1 && node.position[1] == this.firstB + 2) ||
            (node.position[0] == this.firstA + 2 && node.position[1] == this.firstB + 1) ||
            (node.position[0] == this.firstA + 2 && node.position[1] == this.firstB - 1) ||
            (node.position[0] == this.firstA + 1 && node.position[1] == this.firstB - 2) ||
            (node.position[0] == this.firstA - 1 && node.position[1] == this.firstB - 2) ||
            (node.position[0] == this.firstA - 2 && node.position[1] == this.firstB - 1) ||
            (node.position[0] == this.firstA - 2 && node.position[1] == this.firstB + 1)
            
        ) {

            let current

            

            // cd one
            if (a - 1 == c - 1 && b + 2 == d + 2 ) {
                node.one = [c - 1, d + 2]
                node = new Node ([c - 2, d + 1])

                checkPosition()

                return node
            }

            if (a + 1 == c - 1 && b + 2 == d + 2 ) {
                node.two = [c - 1, d + 2]
                node = new Node ([c - 2, d + 1])

                checkPosition()

                return node
            }

            if (a + 2 == c - 1 && b + 1 == d + 2 ) {
                node.tree = new Node ([c - 1, d + 2])
                current = node.tree

                checkPosition()

                return node
            }

            if (a + 2 == c - 1 && b - 1 == d + 2 ) {
                node.four = [c - 1, d + 2]
                node = new Node ([c - 2, d + 1])

                checkPosition()

                return node
            }

            if (a + 1 == c - 1 && b - 2 == d + 2 ) {
                node.five = [c - 1, d + 2]
                node = new Node ([c - 2, d + 1])

                checkPosition()

                return node
            }

            if (a - 1 == c - 1 && b - 2 == d + 2 ) {
                node.six = [c - 1, d + 2]
                node = new Node ([c - 2, d + 1])

                checkPosition()

                return node
            }

            if (a - 2 == c - 1 && b - 1 == d + 2 ) {
                node.seven = new Node ([c - 1, d + 2])
                current = node.seven

                checkPosition()

                return node
            }

            if (a - 2 == c - 1 && b + 1 == d + 2) {
                node.eight = new Node ([c - 1, d + 2])
                
                current = node.eight

                checkPosition()

                return node
            }



            // cd two
            if (a - 1 == c + 1 && b + 2 == d + 2 ) {
                node.one = [c + 1, d + 2]
                node = new Node ([c - 2, d + 1])

                checkPosition()

                return node
            }

            if (a + 1 == c + 1 && b + 2 == d + 2 ) {
                node.two = [c + 1, d + 2]
                node = new Node ([c - 2, d + 1])

                checkPosition()

                return node
            }

            if (a + 2 == c + 1 && b + 1 == d + 2 ) {
                node.tree = [c + 1, d + 2]
                node = new Node ([c - 2, d + 1])

                checkPosition()

                return node
            }

            if (a + 2 == c + 1 && b - 1 == d + 2 ) {
                node.four = [c + 1, d + 2]
                node = new Node ([c - 2, d + 1])

                checkPosition()

                return node
            }

            if (a + 1 == c + 1 && b - 2 == d + 2 ) {
                node.five = [c + 1, d + 2]
                node = new Node ([c - 2, d + 1])

                checkPosition()

                return node
            }

            if (a - 1 == c + 1 && b - 2 == d + 2 ) {
                node.six = [c + 1, d + 2]
                node = new Node ([c - 2, d + 1])

                checkPosition()

                return node
            }

            if (a - 2 == c + 1 && b - 1 == d + 2 ) {
                node.seven = [c + 1, d + 2]
                node = new Node ([c - 2, d + 1])

                checkPosition()

                return node
            }

            if (a - 2 == c + 1 && b + 1 == d + 2) {
                node.eight = [c + 1, d + 2]
                node = new Node ([c - 2, d + 1])

                checkPosition()

                return node
            }

            
            // cd tree
            if (a - 1 == c + 2 && b + 2 == d + 1 ) {
                node.one = [c + 2, d + 1]
                node = new Node ([c - 2, d + 1])

                checkPosition()

                return node
            }

            if (a + 1 == c + 2 && b + 2 == d + 1 ) {
                node.two = new Node ([c + 2, d + 1])
                current = node.two

                checkPosition()

                return node
            }

            if (a + 2 == c + 2 && b + 1 == d + 1 ) {
                node.tree = [c + 2, d + 1]
                node = new Node ([c - 2, d + 1])

                checkPosition()

                return node
            }

            if (a + 2 == c + 2 && b - 1 == d + 1 ) {
                node.four = new Node ([c + 2, d + 1])

                current = node.four
                // node.four.node = new Node ([c - 2, d + 1])

                checkPosition()

                return node
            }

            if (a + 1 == c + 2 && b - 2 == d + 1 ) {
                node.five = [c + 2, d + 1]
                node = new Node ([c - 2, d + 1])

                checkPosition()

                return node
            }

            if (a - 1 == c + 2 && b - 2 == d + 1 ) {
                node.six = [c + 2, d + 1]
                node = new Node ([c - 2, d + 1])

                checkPosition()

                return node
            }

            if (a - 2 == c + 2 && b - 1 == d + 1 ) {
                node.seven = [c + 2, d + 1]
                node = new Node ([c - 2, d + 1])

                checkPosition()

                return node
            }

            if (a - 2 == c + 2 && b + 1 == d + 1) {
                node.eight = [c + 2, d + 1]
                node = new Node ([c - 2, d + 1])

                checkPosition()

                return node
            }



            // cd four
            if (a - 1 == c + 2 && b + 2 == d - 1 ) {
                node.one = [c + 2, d - 1]
                node = new Node ([c - 2, d + 1])

                checkPosition()

                return node
            }

            if (a + 1 == c + 2 && b + 2 == d - 1 ) {
                node.two = [c + 2, d - 1]
                node = new Node ([c - 2, d + 1])

                checkPosition()

                return node
            }

            if (a + 2 == c + 2 && b + 1 == d - 1 ) {
                node.tree = new Node ([c + 2, d - 1])
                current = node.tree

                checkPosition()

                return node
            }

            if (a + 2 == c + 2 && b - 1 == d - 1 ) {
                node.four = [c + 2, d - 1]
                node = new Node ([c - 2, d + 1])

                checkPosition()

                return node
            }

            if (a + 1 == c + 2 && b - 2 == d - 1 ) {
                node.five = [c + 2, d - 1]
                node = new Node ([c - 2, d + 1])

                checkPosition()

                return node
            }

            if (a - 1 == c + 2 && b - 2 == d - 1 ) {
                node.six = [c + 2, d - 1]
                node = new Node ([c - 2, d + 1])

                checkPosition()

                return node
            }

            if (a - 2 == c + 2 && b - 1 == d - 1 ) {
                node.seven = [c + 2, d - 1]
                node = new Node ([c - 2, d + 1])

                checkPosition()

                return node
            }

            if (a - 2 == c + 2 && b + 1 == d - 1) {
                node.eight = [c + 2, d - 1]
                node = new Node ([c - 2, d + 1])

                checkPosition()

                return node
            }



            // cd five
            if (a - 1 == c + 1 && b + 2 == d - 2 ) {
                node.one = [c + 1, d - 2]
                node = new Node ([c - 2, d + 1])

                checkPosition()

                return node
            }

            if (a + 1 == c + 1 && b + 2 == d - 2 ) {
                node.two = [c + 1, d - 2]
                node = new Node ([c - 2, d + 1])

                checkPosition()

                return node
            }

            if (a + 2 == c + 1 && b + 1 == d - 2 ) {
                node.tree = [c + 1, d - 2]
                node = new Node ([c - 2, d + 1])

                checkPosition()

                return node
            }

            if (a + 2 == c + 1 && b - 1 == d - 2 ) {
                node.four = [c + 1, d - 2]
                node = new Node ([c - 2, d + 1])

                checkPosition()

                return node
            }

            if (a + 1 == c + 1 && b - 2 == d - 2 ) {
                node.five = [c + 1, d - 2]
                node = new Node ([c - 2, d + 1])

                checkPosition()

                return node
            }

            if (a - 1 == c + 1 && b - 2 == d - 2 ) {
                node.six = [c + 1, d - 2]
                node = new Node ([c - 2, d + 1])

                checkPosition()

                return node
            }

            if (a - 2 == c + 1 && b - 1 == d - 2 ) {
                node.seven = [c + 1, d - 2]
                node = new Node ([c - 2, d + 1])

                checkPosition()

                return node
            }

            if (a - 2 == c + 1 && b + 1 == d - 2) {
                node.eight = [c + 1, d - 2]
                node = new Node ([c - 2, d + 1])

                checkPosition()

                return node
            }

            // cd six
            if (a - 1 == c - 1 && b + 2 == d - 2 ) {
                node.one = [c - 1, d - 2]
                node = new Node ([c - 2, d + 1])

                checkPosition()

                return node
            }

            if (a + 1 == c - 1 && b + 2 == d - 2 ) {
                node.two = [c - 1, d - 2]
                node = new Node ([c - 2, d + 1])

                checkPosition()

                return node
            }

            if (a + 2 == c - 1 && b + 1 == d - 2 ) {
                node.tree = [c - 1, d - 2]
                node = new Node ([c - 2, d + 1])

                checkPosition()

                return node
            }

            if (a + 2 == c - 1 && b - 1 == d - 2 ) {
                node.four = new Node ([c - 1, d - 2])
                current = node.four

                checkPosition()

                return node
            }

            if (a + 1 == c - 1 && b - 2 == d - 2 ) {
                node.five = [c - 1, d - 2]
                node = new Node ([c - 2, d + 1])

                checkPosition()

                return node
            }

            if (a - 1 == c - 1 && b - 2 == d - 2 ) {
                node.six = [c - 1, d - 2]
                node = new Node ([c - 2, d + 1])

                checkPosition()

                return node
            }

            if (a - 2 == c - 1 && b - 1 == d - 2 ) {
                node.seven = [c - 1, d - 2]
                node = new Node ([c - 2, d + 1])

                checkPosition()

                return node
            }

            if (a - 2 == c - 1 && b + 1 == d - 2) {
                node.eight.position = [c - 1, d - 2]
                node = new Node ([c - 2, d + 1])

                checkPosition()

                return node
            }

            // cd seven
            if (a - 1 == c - 2 && b + 2 == d - 1 ) {
                node.one = [c - 2, d - 1]
                node = new Node ([c - 2, d + 1])

                checkPosition()

                return node
            }

            if (a + 1 == c - 2 && b + 2 == d - 1 ) {
                node.two = [c - 2, d - 1]
                node = new Node ([c - 2, d + 1])

                checkPosition()

                return node
            }

            if (a + 2 == c - 2 && b + 1 == d - 1 ) {
                node.tree = [c - 2, d - 1]
                node = new Node ([c - 2, d + 1])

                checkPosition()

                return node
            }

            if (a + 2 == c - 2 && b - 1 == d - 1 ) {
                node.four = [c - 2, d - 1]
                node = new Node ([c - 2, d + 1])

                checkPosition()

                return node
            }

            if (a + 1 == c - 2 && b - 2 == d - 1 ) {
                node.five = [c - 2, d - 1]
                node = new Node ([c - 2, d + 1])

                checkPosition()

                return node
            }

            if (a - 1 == c - 2 && b - 2 == d - 1 ) {
                node.six = [c - 2, d - 1]
                node = new Node ([c - 2, d + 1])

                checkPosition()

                return node
            }

            if (a - 2 == c - 2 && b - 1 == d - 1 ) {
                node.seven = [c - 2, d - 1]
                node = new Node ([c - 2, d + 1])

                checkPosition()

                return node
            }

            if (a - 2 == c - 2 && b + 1 == d - 1) {
                node.eight = [c - 2, d - 1]
                node = new Node ([c - 2, d + 1])

                checkPosition()

                return node
            }

            // cd eight
            if (a - 1 == c - 2 && b + 2 == d + 1 ) {
                node.one = [c - 2, d + 1]
                node = new Node ([c - 2, d + 1])

                checkPosition()

                return node
            }

            if (a + 1 == c - 2 && b + 2 == d + 1 ) {
                node.two = [c - 2, d + 1]
                node = new Node ([c - 2, d + 1])

                checkPosition()

                return node
            }

            if (a + 2 == c - 2 && b + 1 == d + 1 ) {
                node.tree = [c - 2, d + 1]
                node = new Node ([c - 2, d + 1])

                checkPosition()

                return node
            }

            if (a + 2 == c - 2 && b - 1 == d + 1 ) {
                node.four = [c - 2, d + 1]
                node = new Node ([c - 2, d + 1])

                checkPosition()

                return node
            }

            if (a + 1 == c - 2 && b - 2 == d + 1 ) {
                node.five = [c - 2, d + 1]
                node = new Node ([c - 2, d + 1])

                checkPosition()

                return node
            }

            if (a - 1 == c - 2 && b - 2 == d + 1 ) {
                node.six = [c - 2, d + 1]
                node = new Node ([c - 2, d + 1])

                checkPosition()

                return node
            }

            if (a - 2 == c - 2 && b - 1 == d + 1 ) {
                node.seven = [c - 2, d + 1]
                node.seven.node = new Node ([c - 2, d + 1])

                checkPosition()

                return node

                // write a check function for this, do not copy pasta in every if
            }

            if (a - 2 == c - 2 && b + 1 == d + 1) {
                node.eight = [c - 2, d + 1]
                node = new Node ([c - 2, d + 1])

                checkPosition()

                return node
            }





            // else if (
            //         (node.one == null) &&
            //         (node.two == null) &&
            //         (node.tree == null) &&
            //         (node.four == null) &&
            //         (node.five == null) &&
            //         (node.six == null) &&
            //         (node.seven == null) &&
            //         (node.eight == null)
            //     ) {
            //     node.position = null
            //     return null
            // }





            function checkPosition () {

                if (current.position[0] - 1 == c && current.position[1] + 2 == d) {
                    current.one = [c, d]
                    return current
                }

                if (current.position[0] + 1 == c && current.position[1] + 2 == d) {
                    current.two = [c, d]
                    return current
                }

                if (current.position[0] + 2 == c && current.position[1] + 1 == d) {
                    current.tree = [c, d]
                    return current
                }

                if (current.position[0] + 2 == c && current.position[1] - 1 == d) {
                    current.four = [c, d]
                    return current
                }

                if (current.position[0] + 1 == c && current.position[1] - 2 == d) {
                    current.five = [c, d]
                    return current
                }

                if (current.position[0] - 1 == c && current.position[1] - 2 == d) {
                    current.six = [c, d]
                    return current
                }

                if (current.position[0] - 2 == c && current.position[1] - 1 == d) {
                    current.seven = [c, d]
                    return current
                }

                if (current.position[0] - 2 == c && current.position[1] + 1 == d) {
                    current.eight = [c, d]
                    return current
                }


            }



            // return node


            
            
            // // node.position = [c, d]
            


            // return node
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


        


        
        // if (
        //     (node.position[0] == this.firstA - 1 && node.position[1] == this.firstB + 2) ||
        //     (node.position[0] == this.firstA + 1 && node.position[1] == this.firstB + 2) ||
        //     (node.position[0] == this.firstA + 2 && node.position[1] == this.firstB - 1) ||
        //     (node.position[0] == this.firstA + 2 && node.position[1] == this.firstB + 1) ||
        //     (node.position[0] == this.firstA + 1 && node.position[1] == this.firstB - 2) ||
        //     (node.position[0] == this.firstA - 1 && node.position[1] == this.firstB - 2) ||
        //     (node.position[0] == this.firstA - 2 && node.position[1] == this.firstB - 1) ||
        //     (node.position[0] == this.firstA - 2 && node.position[1] == this.firstB + 1)
            
        // ) {

        //     let removed

        //     let i

        //     for (i = 0; i < this.visited.length; i++) {
        //         if (a === this.visited[i][0] && b === this.visited[i][1]) {
        //             removed = this.visited.splice(i, 1)
        //         }
                
        //     }

            // if (
            //     (c == this.firstA - 1 && d == this.firstB + 1) ||
            //     (c == this.firstA && d == this.firstB + 1) ||
            //     (c == this.firstA + 1 && d == this.firstB + 1) ||
            //     (c == this.firstA + 1 && d == this.firstB) ||
            //     (c == this.firstA + 1 && d == this.firstB - 1) ||
            //     (c == this.firstA && d == this.firstB - 1) ||
            //     (c == this.firstA - 1 && d == this.firstB - 1) ||
            //     (c == this.firstA - 1 && d == this.firstB)
            // ) {
            //     this.visited.splice(i, 0, ...removed)
    
            // }
        // }


        // if (
            
        // )


        

        // my algo not working because of this part. the second position still gets outed and return null

        // can i pop all of the original position cases out forever ?

        // at the very end, take out the cases from the visited array. before the function is called again


        
        



        // else if (
        //     (c === a - 1 && d === b + 1) ||
        //     (c === a && d === b + 1) ||
        //     (c === a + 1 && d === b + 1) ||
        //     (c === a + 1 && d === b) ||
        //     (c === a + 1 && d === b - 1) ||
        //     (c === a && d === b - 1) ||
        //     (c === a - 1 && d === b - 1) ||
        //     (c === a - 1 && d === b)
        //     ) {  
        //     return
        // }
        
        
        
        

        // a way so that visited cases don´t get visited again, caus it caus infinite loop
        // an already visited case should return null
        // maybe i´ll need to store all the previous versions of a and b in a array
        
        // console.log(node)

        




        


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


const graph = new Graph([3, 3], [4, 3])





// function levelOrder (node) {
        
//     if(!node) return []
//     const queue = []
//     const this.output = []
//     queue.push(node)
//     while(queue.length) {
//         // Remove all the current nodes in the queue and add each node's children to the queue
//         const len = queue.length
//         const row = []
//         for(let i = 0; i < len; i++) {
//             const cur = queue.shift()
//             if(cur.one) queue.push(cur.one)
//             if(cur.two) queue.push(cur.two)
//             if(cur.tree) queue.push(cur.tree)
//             if(cur.four) queue.push(cur.four)
//             if(cur.five) queue.push(cur.five)
//             if(cur.six) queue.push(cur.six)
//             if(cur.seven) queue.push(cur.seven)
//             if(cur.eight) queue.push(cur.eight)
//             // Push the current node data to the row array
//             row.push(cur.position)
//         }
//         // Push the current row array into the this.output array
        
//         this.output.push(row)
//     }
//     return this.output

// }


console.log(graph.levelOrder(graph.node))


function Get ([a, b]) {

    for (let i = 0; i < graph.visited.length; i++) {
        if (a === graph.visited[i][0] && b === graph.visited[i][1]) {
            return true
        }
        
    }
}

console.log(Get([2, 4]))


function shortestPath ([c, d]) {

    for (let i = 0; i < levelOrder(graph.node).length; i++) {
        for (let e = 0; e < levelOrder(graph.node)[i].length; e++) {
            if (c === levelOrder(graph.node)[i][0] && d === levelOrder(graph.node)[i][1]) {
                return i
            }

            return i
        }  
    }

    

}

console.log(graph.shortestPath([4, 3]))