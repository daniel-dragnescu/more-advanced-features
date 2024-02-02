let animal = 'Dinosaur';

switch (animal) {
  case 'Cow':
  case 'Giraffe':
  case 'Dog':
  case 'Pig':
    console.log('This animal will stick here.');
    break;
  case 'Spoon':
    console.log('A spoon is not an animal');
    break;
  case 'Dinosaur':
  default:
    console.log('This animal will not stick here.');
}