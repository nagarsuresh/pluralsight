function Node(value) {
    this.value = value;
    this.next = null;
}


function LinkedList() {
    var root = null;
    var lastNode = null;

    function addNode(value) {
        if (root == null) {
            root = new Node(value);
            lastNode = root;
            return;
        }

        var newNode = new Node(value);
        lastNode.next = newNode;
        lastNode = newNode;
    }

    function printList() {
        var node = root;

        console.log("\n\nList is ");
        var temp = [];
        while (node != null) {
            temp.push(node.value);
            node = node.next;
        }

        console.log(temp);

    }

    function rotateClockwise(num) {

    }

    function rotateAnticlockwise(num) {
        var node = root;
        var size = 0;

        if (num < 1) {
            return;
        }

        while (node != null) { node = node.next; size++ };

        num = num % size;

        node = root;
        while (num > 1) {
            num--;
            node = node.next;
        }
        var kth = node;
        while (node.next != null) {
            node = node.next;
        }

        //node == lastnode.

        node.next = root;
        root = kth.next;
        kth.next = null;
    }

    function removeNode(value) {
        var node = root;

        if (root.value === value) {
            root = root.next;
            return;
        }

        var prev = null;
        while (node != null && node.value !== value) {
            prev = node;
            node = node.next;
        }
        if (node == null) {
            throw Error("value does not exists");
        }

        prev.next = node.next;

    }

    function reverseList() {

        var current = root;
        var prev = null;
        var next = null;

        while (current != null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        root = prev;

    }


    function kthFromEnd(k) {
        var node = root,
            i = 0,
            kthNode;
        //handle, 0 or negative value of k
        if (k < 0) return;

        while (node) {
            if (i == k) kthNode = root;
            else if (i > k) {
                kthNode = kthNode.next;
            }
            i++;

            node = node.next;
        }

        console.log(kthNode.value);
    }


    var publicAPI = {
        add: addNode,
        print: printList,
        rotateRight: rotateClockwise,
        rotateLeft: rotateAnticlockwise,
        remove: removeNode,
        reverse: reverseList,
        kthFromEnd: kthFromEnd
    }
    return publicAPI

};


var list = new LinkedList();
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach(function (num) { list.add(num) });
// list.print();
// list.rotateLeft(10);
// list.print();
// list.remove(10);
// list.print();
// list.reverse();
list.print();
list.kthFromEnd(0);



