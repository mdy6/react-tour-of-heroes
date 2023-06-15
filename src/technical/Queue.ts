import { IQueue } from "./IQueue";

export class Queue<T> implements IQueue<T>{
    size(): number {
        return this._queue.length
    }

    private _queue: T[] = []

    enqueue(entity: T): void {
        this._queue.push(entity)
        console.log('enqueue')
    }
    dequeue(): T |undefined{
        console.log('dequeue')
        return this._queue.shift();

    }
}



