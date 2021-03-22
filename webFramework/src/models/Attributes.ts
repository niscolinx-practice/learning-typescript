
export class Attributes<T> {
    constructor(private data: T) {}

    get<K extends keyof T>(propName: string): T[K] {
        return this.data[propName]
    }

    set(updateUserProp: T): void {
        Object.assign(this.data, updateUserProp)
    }
}
