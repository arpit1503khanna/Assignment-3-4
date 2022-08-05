function FormatDate() {
    return function (target: any, name: string, descriptor: PropertyDescriptor) {
        const dateTime = document.getElementById("dateTime") as HTMLInputElement;
        dateTime.innerHTML = new Date().toLocaleString();
        setInterval(function () {
            dateTime.innerHTML = new Date().toLocaleString();
        }, 1000);
    }
}

export class Crud<T> {

    items: Array<T>;

    constructor() {
        this.items = [];
    }

    @FormatDate()
    create(e: T): void {
        this.items.push(e)
    }

    update(i: number, e: T) {

        this.items[i] = e;
        console.log(this.items);
        // showTable();
    }
    delete(i: number): void {
        this.items.splice(i, 1);
        console.log(this.items);
        // showTable();
    }
}