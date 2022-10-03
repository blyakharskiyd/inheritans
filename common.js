const formData = { name: '', type: 'dog', color: '' };

const objectWrapper = document.getElementById('objectWrapper');
const element = document.getElementById('form');

element.addEventListener('input', e => {
  formData[e.target.name] = e.target.value;
});

const renderAnimal = animal => {
  const createdAnimal = document.createElement('div');
  const voiceRenderButton = document.createElement('button');
  voiceRenderButton.id = 'voiceBtn';
  voiceRenderButton.class = 'btn';
  voiceRenderButton.innerText = 'Voice';
  voiceRenderButton.addEventListener('click', () => animal.speak());
  objectWrapper.appendChild(createdAnimal);
  objectWrapper.appendChild(voiceRenderButton);
  createdAnimal.insertAdjacentHTML('afterbegin', renderData(animal));
};

const renderData = data => {
  return `<div class="object"><div>Base type:${
    data.baseType || ''
  }</div><div>Type: ${data.type || ''}</div>
  <div>Name:${data.name || 'Child name'}</div>Paws count:${
    data.pawsCount || ''
  }<div>Color:${data.color || 'Black'}</div><div>Move by:${
    data.moveBy || ''
  }</div></div>`;
};
