const animal = { baseType: 'animal' };

const dog = Object.create(animal);
dog.type = 'dog';
dog.pawsCount = 4;
dog.moveBy = 'Earth';
dog.speak = () => {
  alert('Gav');
};

const bird = Object.create(animal);
bird.type = 'bird';
bird.speak = () => {
  alert('Chirik');
};
bird.pawsCount = 2;
bird.moveBy = 'Sky';

const fish = Object.create(animal);
fish.type = 'fish';
fish.speak = () => {
  alert('not speak');
};
fish.pawsCount = 0;
fish.moveBy = 'Water';

const animalTypeMap = {
  dog: dog,
  bird: bird,
  fish: fish
};

const createAnimal = () => {
  const newAnimal = new Object(animalTypeMap[formData.type]);
  newAnimal.name = formData.name;
  newAnimal.color = formData.color;
  renderAnimal(newAnimal);
};

const objectBtn = document.getElementById('addObjectBtn');

objectBtn.addEventListener('click', () => {
  createAnimal();
});
