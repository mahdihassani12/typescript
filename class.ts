// Class is a template for creating object
// In typescript you are allow to create only one constructor
// Classes con contains properties and methods

export {};
class UniversityLibrarian {
  name: string;
  email: string;
  department: string;

  assignCustomer(customerName: string) {
    console.log(this.name + " is assisting " + customerName);
  }
}

class ReferenceItem {

  private _publisher: string;

  constructor(public title: string, private year: string) {
    console.log("Creating a new reference item");
  }

  printItem(): void {
    console.log(`${this.title} was published at ${this.year}.`);
  }

  get publisher(): string {
    return this._publisher.toUpperCase();
  }

  set publisher(newPublisher: string){
    this._publisher = newPublisher;
  }

}

let ref = new ReferenceItem("Introduction to javascript", "2022");
ref.printItem();
ref.publisher = "Mahdi Hassani";
console.log(ref.publisher);
