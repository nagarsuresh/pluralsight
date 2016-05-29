
var Node = function (value) {
    this.value = value;
    this.left = null;
    this.right = null;
}


var BinaryTree = function () {
    var root = null;
    var TEN = 10;


    var add = function (value) {
        if (root == null) {
            root = new Node(value);
        } else {

            var node = root;
            var prev = null;
            var direction = null;
            while (node != null) {
                prev = node;
                if (node.value > value) {
                    direction = "left";
                    node = node.left;
                } else {
                    direction = "right";
                    node = node.right;
                }
            }


            if (direction == "left") {
                prev.left = new Node(value);
            } else {
                prev.right = new Node(value);
            }

        }
    };

    var printTree = function (node) {
        if (node === null) {
            return;
        }

        printTree(node.left);
        console.log(node.value);
        printTree(node.right);
    };

    var traverse = function () {
        printTree(root);
    };

    var maxHeight = function (node) {
        if (node == null) {
            return 0;
        }

        // console.log("At Node " + node.value);
        var leftHeight = maxHeight(node.left);
        var rightHeight = maxHeight(node.right);
        // console.log("Left " + leftHeight + " Right " + rightHeight);


        var height = 0;
        if (leftHeight > rightHeight) {
            height = leftHeight + 1;
        } else {
            height = rightHeight + 1;
        }

        // console.log("Height at " + node.value + " is " + height);
        return height;
    };

    var getHeight = function () {
        if (root == null) {
            return 0;
        }

        var height = maxHeight(root);

        return height;
    };

    var findParallelNode = function (root2, value) {
        var result = {
            found: false,
            path: []
        };

        result = findParallelNodeInternal(root, value, result);
        console.log(result.path);
        if (result.found === true) {
            return getFromTree(root2, result.path);
        }
        return null;
    };

    function findParallelNodeInternal(r1, value, result) {
        if (r1 == null) {
            return result;
        }
        if (r1.value === value) {
            result.found = true;
            return result;
        } else {
            result.path.push('left');
            result = findParallelNodeInternal(r1.left, value, result);
            if (result.found === true) {
                return result;
            }
            result.path.pop();
            result.path.push('right');
            result = findParallelNodeInternal(r1.right, value, result);
            if (result.found === true) {
                return result;
            }
            result.path.pop();
            // console.log(result.path);
            return result;
        }
    }

    function getFromTree(root, path) {
        var i = 0;
        if (!Array.isArray(path)) {
            return null;
        }
        if (path.length === 0) {
            return root.value;
        }

        var node = root;
        for (i = 0; i < path.length; i++) {
            if (path[i] === 'left') {
                node = node.left;
            } else {
                node = node.right;
            }
        }

        return node.value;
    }


    var getRoot = function () {
        return root;
    }


    return {
        add: add,
        getHeight: getHeight,
        traverse: traverse,
        findParallelNode: findParallelNode,
        getRoot: getRoot
    }
}



var tree1 = new BinaryTree();
var tree2 = new BinaryTree();


var i = 0;
var lastValue = null;
for (i = 0; i < 100; i++) {
    var random = Math.round(Math.random() * 1000);
    tree1.add(random);
    tree2.add(random * 2);
    lastValue = random;
}

tree1.traverse();
console.log("Height of tree is " + tree1.getHeight());
tree2.traverse();

var toFind = lastValue;
console.log("Finding value " + toFind);
var value = tree1.findParallelNode(tree2.getRoot(), toFind);
console.log("Parallel Node for " + toFind + " is " + value);





