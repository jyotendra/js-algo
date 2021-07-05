export class Heap {

    heap = [];


    // private getChildIndexes(indx) {
    //     return [(2 * indx + 1), (2 * indx + 2)];
    // }

    private getParentIndex(indx) {
        if (indx % 2 > 0) return (indx - 1) / 2;
        else return (indx - 2) / 2;
    }

    private swapNodes(indx1, indx2) {
        const n1 = this.heap[indx1];
        this.heap[indx1] = this.heap[indx2];
        this.heap[indx2] = n1;
    }

    private trickleUp() {
        let currentIndx = this.heap.length - 1
        let compareNodeIndx = this.getParentIndex(currentIndx);
        while (currentIndx > 0) {
            if (this.heap[currentIndx] > this.heap[compareNodeIndx])
                this.swapNodes(currentIndx, compareNodeIndx);
            currentIndx = compareNodeIndx;
            compareNodeIndx = this.getParentIndex(currentIndx);
        }
    }

    insertNodeInHeap(node) {
        this.heap.push(node);
        this.trickleUp();
    }

    removeNode() {
        this.swapNodes(0, this.heap.length - 1);
        const removedNode = this.heap.pop();
        this.trickleUp();
        return removedNode;
    }

}




