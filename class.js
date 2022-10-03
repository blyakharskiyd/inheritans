class Animal {
  constructor() {
    this.baseType = 'animal';
  }
}

class Dog extends Animal {
  constructor(name, color, baseType) {
    super(baseType);
    this.name = name;
    this.color = color;
    this.pawsCount = 4;
    this.moveBy = 'Earth';
    this.speak = () => {
      alert('Gav');
    };
    this.type = 'dog';
  }
}

class Bird extends Animal {
  constructor(name, color, baseType) {
    super(baseType);
    this.name = name;
    this.color = color;
    this.pawsCount = 2;
    this.moveBy = 'Sky';
    this.speak = () => {
      alert('Chirik');
    };
    this.type = 'bird';
  }
}

class Fish extends Animal {
  constructor(name, color, baseType) {
    super(baseType);
    this.name = name;
    this.color = color;
    this.pawsCount = 0;
    this.moveBy = 'Water';
    this.speak = () => {
      alert('No voice');
    };
    this.type = 'fish';
  }
}

const classAnimalTypeMap = {
  dog: Dog,
  bird: Bird,
  fish: Fish
};

const createClassAnimal = () => {
  const classByType = classAnimalTypeMap[formData.type];
  const newClassAnimal = new classByType(formData.name, formData.color);
  renderAnimal(newClassAnimal);
};

const classBtn = document.getElementById('addClassBtn');

classBtn.addEventListener('click', () => {
  createClassAnimal();
});
