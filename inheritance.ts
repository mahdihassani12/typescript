export {}

// Super class
class ReferenceItem {
  private _publisher: string;

  constructor(public title: string, protected year: number) {
    console.log("Creating a new reference item");
  }

  printItem(): void {
    console.log(`${this.title} was published at ${this.year}.`);
  }

  get publisher(): string {
    return this._publisher.toUpperCase();
  }

  set publisher(newPublisher: string) {
    this._publisher = newPublisher;
  }
}

// Child class
class Journal extends ReferenceItem {
    constructor(newTitle: string, newYear: number, public edition: number){
        super(newTitle, newYear);
    }

    printItem(): void {
        super.printItem();
        console.log(`Edition: ${this.edition} and year ${this.year}`)
    }
}

let ref = new Journal("Introduction to typescript", 2022, 10);
ref.printItem();