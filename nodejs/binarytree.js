

var Node = function (value) {
    this.value = value;
    this.left = null;
    this.right = null;
}


var BinaryTree = function () {
    var root = null;


    this.add = function (value) {
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

    this.traverse = function () {
        this.printTree(root);
    }

    this.printTree = function (node) {
        if (node === null) {
            return;
        }

        this.printTree(node.left);
        console.log(node.value);
        this.printTree(node.right);
    }

    this.getHeight = function () {
        if (root == null) {
            return 0;
        }

        var height = this.maxHeight(root);

        return height;
    }

    this.maxHeight = function (node) {
        if (node == null) {
            return 0;
        }

        console.log("At Node " + node.value);
        var leftHeight = this.maxHeight(node.left);
        var rightHeight = this.maxHeight(node.right);
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