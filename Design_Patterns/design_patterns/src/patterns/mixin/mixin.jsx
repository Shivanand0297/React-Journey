// we have a common functionality of animals

const animalFunctionality = {
  sleep: () => "Sleeping",
  walking: () => "walking",
  eating: () => "eating",
};

const bark = {
  bark: () => "barking",
};

//  by mixin design pattern we use this animalFunctionality object to add functionality to different class or objects

class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Lion {
  constructor(name) {
    this.name = name;
  }
}
// here by default tuffy will get name property so to add more functionality to Animal class,
// we add functionties in the prototype of the animal class

Object.assign(bark, animalFunctionality);
Object.assign(Animal.prototype, bark);
const tuffy = new Animal("tuffy");

Object.assign(Lion.prototype, animalFunctionality);
const lion = new Lion("simba");

console.log(lion.bark) // barnk will only present on the Animal class not the Lion class

const Mixin = () => {
  return (
    <>
      <div>
        Animal:
        <p>Name: {tuffy.name}</p>
        <p>sleep: {tuffy.sleep()}</p>
        <p>walk: {tuffy.walking()}</p>
        <p>eat: {tuffy.eating()}</p>
        <p>bark: {tuffy.bark()}</p>
      </div>
      <div>
        Lion:
        <p>Name: {lion.name}</p>
        <p>sleep: {lion.sleep()}</p>
        <p>walk: {lion.walking()}</p>
        <p>eat: {lion.eating()}</p>
      </div>
    </>
  );
};
export default Mixin;
