class Dog {
  constructor(name) {
    this._name = name;
  }

  introduceDog() {
    console.log('This is baby dog ' + this._name + '!');
  }

  static bark() {
    console.log('Woof! ...Woof!!' + " He barks 3 times  at a cat.");
  }
}

const myDog = new Dog('Lesly');
//introduce a Dog
myDog.introduceDog();

// Calling the dog:
Dog.bark();
