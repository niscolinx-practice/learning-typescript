
export class Attributes<T> {
    constructor(private data: T) {}

    get(propName: string):  {
        return this.data[propName as keyof T]
    }

    set(updateUserProp: T): void {
        Object.assign(this.data, updateUserProp)
    }
}
