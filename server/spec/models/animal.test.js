require('../mongodb_helper');
const mongoose = require('mongoose');
const seeding = require('./animals_seeds_test.js')
const Animal = require('../../models/animal');
const User = require('../../models/user');
const seedingUsers = require('./users_seeds_test.js');

describe('animal model', () => {
  beforeAll( async () => {
    seeding(), 
    seedingUsers();
  });

  it('stores animal details', async () => {
    allAnimals = await Animal.find();
    expect(allAnimals.length).toEqual(3);
    expect(allAnimals[0].animal).toEqual('Rats');
    expect(allAnimals[0]).toMatchObject( {
      animal: 'Rats',
      description: 'Rats live in places all over the world. They are nocturnal and live in packs. These medium-sized rodents are omnivores eating insects, seeds, fruits, eggs, and small animals. A female can have a litter of 8 to 12 babies. The lifespan of a rat is 2 to 3 years.',
      order: 'Rodentia',
      careInfo: "Rats need at least an hour of playtime outside their cage every day, but you must first make the room safe and rat-proof. Keep doors and windows closed and block cracks in floorboards, as rats can get through very small gaps. Keep house plants out of the way because some are poisonous to rats. Electric cables should be covered by protective piping so they cannot be chewed. Making enrichment for your pet rats is easy as you can use almost any household object and adapt them, such as cardboard boxes, PVC pipes, plant pots, fruit treat branches and rope.",
      foodURL: "http://www.isamurats.co.uk/vegetables-and-fruits.html",
      nonToxicPlants: ["Parsley", "Basil", "Cilantro", "Fennel", "Mint", "Sage", "Thyme", "Oregano"],
    });
  });

  it('returns an array of animal names in the data', async () => {
    const animalData = await Animal.find();
    const animalArray = await animalData.map(animal => animal.animal);
    console.log(animalArray);
    expect(animalArray.length).toBe(3);
    expect(animalArray).toEqual(['Rats', 'Guinea pigs', 'Tigers']);
  });

  xit('returns an array of animal names in the data', async () => {
    const animalData = await Animal.find();
    const animalArray = await animalData.map(animal => animal.animal);
    console.log(animalArray);
    expect(animalArray.length).toBe(3);
    expect(animalArray).toEqual(['Rats', 'Guinea pigs', 'Tigers']);
  });

})