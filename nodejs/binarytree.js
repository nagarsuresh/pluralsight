

var Node = function (value) {
    this.value = value;
    this.left = null;
    this.right = null;
}


var BinaryTree = function () {
    var root = null;


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

        };
    }

    var printTree = function (node) {
        if (node === null) {
            return;
        }

        printTree(node.left);
        console.log(node.value);
        printTree(node.right);
    }

    var traverse = function () {
        printTree(root);
    }

    var maxHeight = function (node) {
        if (node == null) {
            return 0;
        }

        console.log("At Node " + node.value);
        var leftHeight = maxHeight(node.left);
        var rightHeight = maxHeight(node.right);
        console.log("Left " + leftHeight + " Right " + rightHeight);


        var height = 0;
        if (leftHeight > rightHeight) {
            height = leftHeight + 1;
        } else {
            height = rightHeight + 1;
        }

        console.log("Height at " + node.value + " is " + height);
        return height;
    }

    var getHeight = function () {
        if (root == null) {
            return 0;
        }

        var height = maxHeight(root);

        return height;
    }


    return {
        add: add,
        getHeight: getHeight,
        traverse: traverse
    }
}



var tree = new BinaryTree();
tree.add(10);
tree.add(2);
tree.add(12);
tree.add(8);
tree.add(6);
tree.add(20);

tree.traverse();


console.log("Height of tree is " + tree.getHeight());