const Animal = require('../../models/animal');
const mongoose = require('mongoose');
require('dotenv').config({ path: './config.env' });

// const Db = process.env.ATLAS_URI || 'mongodb://0.0.0.0/ratify';
// const Db = process.env.ATLAS_URI;
const Db = 'mongodb://0.0.0.0/ratify_test';

const seeding = () => { 
  mongoose
  .connect(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('connection established!');
  })
  .then(() => 
    seedDB()
  )
  .catch((err) => {
    console.log(err);
  });
}

const animalSeeds = [
    {
        animal: 'Rats',
        description: 'Rats live in places all over the world. They are nocturnal and live in packs. These medium-sized rodents are omnivores eating insects, seeds, fruits, eggs, and small animals. A female can have a litter of 8 to 12 babies. The lifespan of a rat is 2 to 3 years.',
        order: 'Rodentia',
        careInfo: "Rats need at least an hour of playtime outside their cage every day, but you must first make the room safe and rat-proof. Keep doors and windows closed and block cracks in floorboards, as rats can get through very small gaps. Keep house plants out of the way because some are poisonous to rats. Electric cables should be covered by protective piping so they cannot be chewed. Making enrichment for your pet rats is easy as you can use almost any household object and adapt them, such as cardboard boxes, PVC pipes, plant pots, fruit treat branches and rope.",
        foodURL: "http://www.isamurats.co.uk/vegetables-and-fruits.html",
        nonToxicPlants: ["Parsley", "Basil", "Cilantro", "Fennel", "Mint", "Sage", "Thyme", "Oregano"],
    },
    {
        animal: 'Guinea pigs',
        description: "Guinea pigs, also known as 'cavies', are social animals with a compact, rounded body shape, short legs and no tail. They originate from the grasslands and lower slopes of the Andes Mountains in South America. There are different breeds and varieties of guinea pig, with a wide range of colour and coat lengths.",
        order: 'Rodentia',
        careInfo: "Guinea pigs need constant access to safe hiding places, such as pipes and shelters, where they can go when they want to be alone, hide or escape if they feel afraid. Guinea pigs are a prey species and must be able to hide in a secure place away from things that scare them. There should be enough places for all your guinea pigs to hide at the same time, and they must be away from the sight and smell of predators such as foxes, cats, dogs, ferrets and birds of prey.",
        foodURL: "https://www.rspca.org.uk/adviceandwelfare/pets/rodents/guineapigs/diet",
        nonToxicPlants: ["nasturtiums", "marigolds", "pansies", "roses", "oregano", "basil", "thyme", "sage"], 
    },
    {
        animal: 'Tigers',
        description: "Tigers are animals that live in both warm and cold areas of Asia. They are carnivores that hunt for prey at night. These big cats are solitary and have their own territory, and are one of the world’s apex predators. A Siberian tiger can weigh up to 660 pounds. Males are bigger than females.",
        order: 'Panthera',
        careInfo: "Pet enthusiasts cannot give a tiger the life it needs because it has adapted over eons to inhabit spacious wildlands in specific geographic regions. Keeping a tiger in a small space such as a house or yard can place the tiger's life, and its keepers' lives, in danger. It is a better idea to visit tigers in a zoo where you can observe and enjoy their presence in a safer and more natural setting.",
    }
];

const seedDB = async () => {
  const res = await Animal.deleteMany({});
  const res2 = await Animal.insertMany(animalSeeds);
  // const allAnimals = await Animal.Animal.find({ 'animal': { $exists : true } })
  // console.log(allAnimals)
};

module.exports = animalSeeds;
module.exports = seeding;