import { Heap } from "./heap";

describe('test heap', () => {
    it("should insert properly", () => {
        const myHeap = new Heap();
        myHeap.insertNodeInHeap(1);
        myHeap.insertNodeInHeap(2);
        myHeap.insertNodeInHeap(3);
        myHeap.insertNodeInHeap(4);
        myHeap.insertNodeInHeap(5);
        myHeap.insertNodeInHeap(6);
        myHeap.insertNodeInHeap(7);


        expect(myHeap.heap[0]).toBe(7);
        // t.is(false, false);

    })

    it("should show highest node on top after removal", () => {
        const myHeap = new Heap();
        myHeap.insertNodeInHeap(1);
        myHeap.insertNodeInHeap(2);
        myHeap.insertNodeInHeap(3);
        myHeap.insertNodeInHeap(4);
        myHeap.insertNodeInHeap(5);
        myHeap.insertNodeInHeap(6);
        myHeap.insertNodeInHeap(7);

        myHeap.removeNode();
        expect(myHeap.heap[0]).toBe(6);
        // t.is(false, false);

    })
});
