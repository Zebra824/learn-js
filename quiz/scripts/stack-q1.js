class PStack {
  #id;
  constructor() {
    this.#id = 1;
    this.#persons = [];
  }

  showId() {
    return this.#id;
  }

}

class PStackImpl extends PStack {
  constructor() {
    super();
  }

  push(p) {
    return this.#persons.push(p)
  }

  pop() {
    return this.#persons.pop().age
  }

  get persons() {
    return this.#persons;
  }

  set persons(p) {
    this.#persons = p;
  }
}

let pstack = new PStackImpl();
pstack.persons = [{name: 'Jojo', age: 21}, {name: 'Gabi', age: 29}]
pstack.push({name: 'Dein', age: 19});
console.log(pstack.pop());
console.log(pstack.pop());
console.log(pstack.persons);
