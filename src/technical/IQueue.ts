export interface IQueue<T> {
    enqueue(entity: T): void;
    dequeue(): T|undefined;
    size(): number;
}
