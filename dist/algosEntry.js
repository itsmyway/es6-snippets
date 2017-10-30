/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ 9:
/***/ (function(module, exports) {

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


/***/ })

/******/ });
//# sourceMappingURL=algosEntry.js.map