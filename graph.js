class Graph{
  constructor(){
    this.adjacencyList = {};
  }

  addVertex(vertex){
    // prevent duplicates
    // Basically vertex is a key
    if(!this.adjacencyList[vertex]){
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2){
    // add an edge between vertices
    // this is for undirected
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);

    // if we wanted to do a directed graph, basically would only have it point 1 way
  }

  removeEdge(vertex1, vertex2){
    this.adjacencyList[vertex1] = this.adjacencyList[vertex2].filter(v => v != vertex1);
    this.adjacencyList[vertex2] = this.adjacencyList[vertex1].filter(v => v != vertex2);
  }

  removeVertex(vertex){
    // Mombasa
    while(this.adjacencyList[vertex].length){
      // pop off items
      this.adjacencyList[vertex].pop();
    }
    delete this.adjacencyList[vertex];
  }

  dfsRecursive(start){
    const results = [];
    const visited = {}; // A, B, D, E
    const adjacencyList = this.adjacencyList;

    const dfs = (vertex) => {
      if(!vertex) return null;
      visited[vertex] = true;
      results.push(vertex);
      adjacencyList[vertex].forEach(neighbor => {
        if(!visited[neighbor]){
          return dfs(neighbor); 
        } 
      });
    }

    dfs(start);

    return results
  }

  dfsIterative(start){
    const stack = [start];
    const result = [];
    const visited = {};
    visited[start] = true;
    let currentVertex;

    while(stack.length){
      currentVertex = stack.pop() // B
      result.push(currentVertex); // B

      this.adjacencyList[currentVertex].forEach(connection => {
        if(!visited[connection]){
          visited[connection] = true;
          stack.push(connection)
        }
      })
    }
    return result;
  }

  bfs(start){
    const queue = [start];
    const visited = {};
    const result = [];
    visited[start] = true;
    let currentVertex;

    while(queue.length){
      let currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(connection => {
        if(!visited[connection]){
          visited[connection] = true;
          queue.push(connection);
        }
      })
    }
    return result;
  }

  printGraph(){
    console.log(this.adjacencyList);
  }
}


let g = new Graph();
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A","B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")
g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E", "F")


console.log(g.dfsIterative("A"))


// let g = new Graph;
// g.addVertex('Mombasa')
// g.addVertex('Tokyo')
// g.addVertex('London')
// g.addVertex('New York')
// g.addVertex('Milan')
// g.addVertex('Berlin')
// g.addVertex('Doha')
// g.addVertex('Baku')
// g.addVertex('Hong Kong')


// g.addEdge('Mombasa', 'Tokyo')
// g.addEdge('Mombasa', 'Hong Kong')
// g.addEdge('Mombasa', 'London')
// g.addEdge('Mombasa', 'New York')
// g.addEdge('Mombasa', 'Milan')
// g.addEdge('Mombasa', 'Berlin')
// g.addEdge('Berlin', 'London')
// g.addEdge('Mombasa', 'Doha')
// g.addEdge('Mombasa', 'Baku')



// // g.printGraph();

// g.removeVertex('Mombasa')
// g.removeVertex('Tokyo')
// g.removeVertex('London')
// g.removeVertex('New York')
// g.removeVertex('Milan')
// g.removeVertex('Berlin')
// g.removeVertex('Doha')
// g.removeVertex('Baku')
// g.removeVertex('Hong Kong')

// g.printGraph();