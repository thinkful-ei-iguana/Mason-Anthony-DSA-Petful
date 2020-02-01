const Queue = require('../Queue');

let dogList = new Queue();

dogList.enqueue({
  id: 1,
  image: 'https://images.dog.ceo/breeds/hound-blood/n02088466_11623.jpg',
  name: 'Bo',
  Breed: 'Blood Hound',
  Age: '5 years',
  Sex: 'Male',
  Description:
    'Meet Bo, an adorable 5 year old Blood Hound! He is a happy and energetic boy who loves to sit for his treats, give you kisses and is raring to go with you on your next adventure!',
  Story:
    'Bo came to us a few months ago when his owner could no longer care for him. Everyone around here has taken good care for him while he awaits for his new family.'
});
dogList.enqueue({
  id: 2,
  image:
    'https://i.pinimg.com/originals/8a/75/4d/8a754dcd7bc842c023d2963dc5265cc5.jpg',
  name: 'Indy',
  Breed: 'Pit Bull',
  Age: '2 years',
  Sex: 'Male',
  Description:
    "Meet Indy, a 2-year-old American Pit Bull Terrier! Much like his idol, Indiana Jones, Indy is an explorer, and he's looking for a family to take him on adventures. Hiking, exploring archaeological digs, or just basking in the sun, Indy is ready for it all. He really enjoys puzzle toys to keep his mind sharp, but most of all he wants your cuddles.",
  Story:
    'Indy has been with us for a few months now and boy does the staff love him.'
});
dogList.enqueue({
  id: 3,
  image:
    'https://www.petguide.com/wp-content/uploads/2014/10/black-mouth-cur-1.jpg',
  name: 'Latke',
  Breed: 'Cur',
  Age: '1 year',
  Sex: 'Female',
  Description:
    'Meet Latke, a 1 year old Mountain Cur with an abundance of energy. This little gal would likely do best with an active family who has a secure yard for her to burn off some of her excess energy. While she has a limited history of doing well with other dogs at her previous shelter, we would still recommend a slow introductory process to new dogs as Latke may come on a little strong with some canine friends.',
  Story:
    "Latke was just brought to us from another shelter where she spent most of her youth. She doesn't have any known health issues just waiting on her right family."
});
dogList.enqueue({
  id: 4,
  image:
    'https://i.pinimg.com/originals/35/16/16/351616fbe0f94ab4cecb7ef46acf8e70.jpg',
  name: 'Grizz',
  Breed: 'Husky',
  Age: '5 months',
  Sex: 'Male',
  Description:
    'Meet Grizz, a 5 month old Siberian Husky! This large pup is looking for an adopter with all kinds of time patience to raise a silly energetic pup.',
  Story:
    "Grizz was brought to us by a family because their family dog had puppies and they didn't know what to do with the puppies."
});

module.exports = dogList;
