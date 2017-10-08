const binarySearch = (array, value) => {
  let guess
    , min = 0
    , max = array.length -1

  while(min <= max){
    guess = Math.floor((min+max)/2)
    if(value === array[guess]){
      return guess
    } else if( value < array[guess]){
      max = guess - 1
    } else {
      min = guess + 1
    }
  }
  return -1
}

console.log('Value found at Index: ', binarySearch([2,4,6,8,10], 8))
//-------------------------------------------------------------------------------------
//Median of 2 sorted arrays
//http://www.geeksforgeeks.org/median-of-two-sorted-arrays/

//-------------------------------------------------------------------------------------

function Node(data){
  this.data = data
  this.left = null
  this.right = null
}

class BinarySearchTree{
  constructor(){
    this._root = null
  }
  add(data){
    const node = new Node(data)
    if(!this.root){
      this.root = node
    } else {
      let current = this.root
      while(current){
        if(node.data < current.data){
          if(!current.left){
            current.left = node
            break
          }
          current = current.left
        } else if (node.data > current.data ){
          if(!current.right){
            current.right = node
            break
          }
          current = current.right
        } else {
          break;
        }
      }
    }
  }
  contains(data){
    let current = this.root
    while(current){
      if(current.data === data){
        return true
      } else if(data < current.data){
        current = current.left
      } else {
        current = current.right
      }
    }
    return false
  }
  print(){
    if(!this.root){
      throw new Error('Binary Tree is Empty')
    }
    const newline = new Node('|')
    const queue = [this.root, newline]
    let result = ''
    while(queue.length){
      const node = queue.shift()
      result += `${node.data.toString()}`
      if(node === newline && queue.length){
        queue.push(newline)
      }
      if(node.left){
        queue.push(node.left)
      }
      if(node.right){
        queue.push(node.right)
      }
    }
    return result.slice(0,-1)
  }
  /*
   * Breadth First search
   */
  traverseBFS(fn){
    this.queue = []
    this.queue.push(this.root)
    while(this.queue.length){
      const node = this.queue.shift()
      if(fn){
        fn(node)
      }
      if(node.left){
        this.queue.push(node.left)
      }
      if(node.right){
        this.queue.push(node.right)
      }
    }
  }
  traverseDFS(fn, method){
    const current = this.root
    if(method){
      this[`_${method}`](current, fn)
    } else {
      this._preOrder(current, fn)
    }
  }
  /*
   * Pre order
   */
  _preOrder(node, fn){
    if(node){
      if(fn){
        fn(node)
      }
      this._preOrder(node.left, fn)
      this._preOrder(node.right, fn)
    }
  }
  _postOrder(node, fn){
    if(node){
      this._postOrder(node.left, fn)
      this._postOrder(node.right, fn)
      if(fn){
        fn(node)
      }
    }
  }
  _inOrder(node, fn){
    if(node){
      this._inOrder(node.left, fn)
      if(fn){
        fn(node)
      }
      this._inOrder(node.right, fn)
    }
  }
  getMin(node){
    if(!node){
      node = this.root
    }
    while(node.left){
      node = node.left
    }
    return node.data
  }
  getMax(node){
    if(!node){
      node = this.root
    }
    while(node.right){
      node = node.right
    }
    return node.data
  }
  remove(data){
    const that = this
    const removeNode = (node, data) => {
      if(!node){
        return null
      }
      if(data === node.data){
        if(!node.left && !node.right){
          return null
        }
        if(!node.left){
          return node.right
        }
        if(!node.right){
          return node.left
        }
        //has both left and right children
        const temp = this.getMin(node.right)
        node.data = temp
        node.right = removeNode(node.right, temp)
        return node
      } else if( data < node.data ){
        node.left = removeNode(node.left, data)
        return node
      } else {
        node.right = removeNode(node.right, data)
        return node
      }
    }
    this.root = removeNode(this.root, data)
  }
}
const binarySearchTree = new BinarySearchTree();
binarySearchTree.add(5);
binarySearchTree.add(3);
binarySearchTree.add(7);
binarySearchTree.add(2);
binarySearchTree.add(4);
binarySearchTree.add(6);
binarySearchTree.add(8);
console.log(binarySearchTree.print())
// binarySearchTree.traverseBFS(node => { console.log(node.data); })
// binarySearchTree.traverseDFS(node => { console.log(node.data)})
binarySearchTree.traverseDFS(node => { console.log(node.data)}, 'inOrder')
