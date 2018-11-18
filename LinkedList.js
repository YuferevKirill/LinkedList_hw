class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {

    constructor() {
        this.args = arguments;
        this.head = null;
        this.length = 0;

        for (let i = 0; i < this.args.length; i++) {
            this.Push(this.args[i]);
        }
    }

    Push(value) {
        let node = new Node(value),
            CurrentNode = this.head;

        if (!CurrentNode) {
            this.head = node;
            this.length++;

            return node;
        }
        else {
            while (CurrentNode.next) {
                CurrentNode = CurrentNode.next;
            }
            CurrentNode.next = node;
            this.length++;
            return node;
        }
    }

    Pop() {
        let CurrentNode = this.head,
            BeforeNodeToDelete = null,
            NodeToDelete = null,
            DeletedNode = null,
            count = 0;

        if (this.length == 0) {
            console.log("Список пуст!");
            return;
        }

        if (CurrentNode.next == null) {
            this.head = null;
            DeletedNode = this.head;
            this.length--;

            return DeletedNode;
        }

        while (count < this.length - 1) {
            BeforeNodeToDelete = CurrentNode;
            NodeToDelete = CurrentNode.next;
            CurrentNode = NodeToDelete;
            count++;
        }

        BeforeNodeToDelete.next = NodeToDelete.next;
        DeletedNode = NodeToDelete;
        NodeToDelete = null;
        this.length--;

        return DeletedNode;
    }

    Shift() {
        let FirstNode = this.head,
            SecondNode = null,
            ShiftedNode = null;

        if (this.length == 0) {
            console.log("Список пуст!");
            return;
        }

        if (FirstNode.next == null) {
            this.head = null;
            ShiftedNode = this.head;
            this.length--;

            return ShiftedNode;
        }
        SecondNode = FirstNode.next
        this.head = SecondNode;
        this.length--;
        ShiftedNode = FirstNode;

        return ShiftedNode;
    }

    Unshift(value) {

        let node = new Node(value),
            NewSecondNode = this.head,
            NewFirstNode = null;

        if (!NewSecondNode) {
            this.head = node;
            this.length++;
            NewFirstNode = node;

            return NewFirstNode;
        }

        node.next = NewSecondNode;
        this.head = node;
        this.length++;
        NewFirstNode = node;

        return NewFirstNode;
    }

    Remove(position) {
        let CurrentNode = this.head,
            BeforeNodeToDelete = null,
            NodeToDelete = null,
            DeletedNode = null,
            count = 0;

        if (this.length == 0) {
            console.log("Список пуст!");
            return;
        }
        if (!isFinite(position) || position < 0 || position > this.length - 1) {
            console.log("Некорректный индекс!");
            return;
        }

        if (position === 0) {
            this.head = CurrentNode.next;
            DeletedNode = CurrentNode;
            CurrentNode = null;
            this.length--;

            return DeletedNode;
        }
        else {
            while (count < position) {
                BeforeNodeToDelete = CurrentNode;
                NodeToDelete = CurrentNode.next;
                CurrentNode = NodeToDelete;
                count++;
            }

            BeforeNodeToDelete.next = NodeToDelete.next;
            DeletedNode = NodeToDelete;
            NodeToDelete = null;
            this.length--;

            return DeletedNode;
        }
    }

    Insert(position, value) {
        let CurrentNode = this.head,
            count = 0,
            PrevNode = null,
            MiddleNode = null,
            node = new Node(value);

        if (this.length == 0) {
            console.log("Список пуст!");
            return;
        }
        if (!isFinite(position) || position < 0 || position > this.length - 1) {
            console.log("Некорректный индекс!");
            return;
        }

        if (position === 0) {
            CurrentNode = this.head;
            node.next = CurrentNode;
            this.head = node;
            this.length++;

            return node;
        }
        else {
            while (count < position) {
                PrevNode = CurrentNode;
                MiddleNode = CurrentNode.next;
                CurrentNode = MiddleNode;
                count++;
            }

            PrevNode.next = node;
            node.next = CurrentNode;
            this.length++;

            return node;
        }
    }

    Each(position) {
        let CurrentNode = this.head,
            count = 0;

        if (this.length == 0) {
            console.log("Список пуст!");
            return;
        }

        if (!isFinite(position) || position < 0 || position > this.length)
            console.log("неверный индекс");
        else {
            while (count < position) {
                CurrentNode = CurrentNode.next;
                count++;
            }
            return CurrentNode;
        }
    }

    contains(value) {
        let PresenceOfElement = false;

        if (this.length == 0) {
            console.log("Список пуст!");
            return;
        }

        for (let i = 0; i < this.length; i++) {
            if (this.Each(i).value == value) {
                PresenceOfElement = true;
            }
        }
        return (PresenceOfElement);
    }

    ShowLinkedList() {

        if (this.length == 0) {
            console.log("Список пуст!");
            return;
        }
        console.log(this.head);
    }

    Foreach() {
        let count = 0;

        if (this.length == 0) {
            console.log("Список пуст!");
            return;
        }

        while (count < this.length) {
            console.log(this.Each(count).value)
            count++;
        }
    }

    Reverse() {
        let CurrentNode = this.head,
            PrevNode = null,
            NextNode = null;

        if (this.length == 0) {
            console.log("Список пуст!");
            return;
        }

        if (CurrentNode.next == null)
            return;

        while (CurrentNode != null) {
            NextNode = CurrentNode.next;
            CurrentNode.next = PrevNode;
            PrevNode = CurrentNode;
            CurrentNode = NextNode;
        }
        this.head = PrevNode;
    }
}

let list = new LinkedList(1, 2, 3, 4);
list.Push("test");
list.Push("test2");
list.Pop();
list.Shift();
list.Shift();
list.Unshift(2);
list.Unshift(1);
list.Insert(3, "InsertTest");
list.Remove(2);
list.Each(4);
list.ShowLinkedList();
console.log("Обычный список:")
list.Foreach();
list.Reverse();
console.log("Обратный список:");
list.Foreach();