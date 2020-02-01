const Queue = require('../Queue');

let catList = new Queue();

catList.enqueue({
  id: 1,
  image: 'https://i.redd.it/6vig3zgaff911.jpg',
  name: 'Alfredo',
  Breed: 'Siamese',
  Age: '3 years',
  Sex: 'Male',
  Description:
    "Meet Alfredo, an adventure cat in the making! Are you looking for a cat that you can take on walks? That has the athleticism to leap 5 feet into the air? That doesn't even know the meaning of the phrase couch potato? Then look no further than 3 year old Alfredo! Alfredo is so smart and athletic that we have trained him to not only run on an exercise wheel but also to wear a harness and walk about the shelter.",
  Story:
    'Alfredo was just brought to us from another shelter. Everyone here loves taking him for walks and showing him off to the visitors.'
});
catList.enqueue({
  id: 2,
  image:
    'https://www.petguide.com/wp-content/uploads/2015/10/domestic-shorthair-1.jpg',
  name: 'Jazzy',
  Breed: 'Domestic Shorthair',
  Age: '1 year',
  Sex: 'Female',
  Description:
    "Jazzy, a 1-year-old grey and black tabby girl, is as soft as they come! She's gentle and sweet and will accept any and all scritches and scratches. She's a bit cautious as she first meets new people, but it won't be long before she's your best friend!",
  Story:
    "Jazzy was just brought to our shelter because the owner was moving and jazzy couldn't tag along"
});
catList.enqueue({
  id: 3,
  image:
    'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/43523945/2/?bust=1544647973&width=720',
  name: 'Gizmo',
  Breed: 'Domestic Shorthair',
  Age: '2 years',
  Sex: 'Male',
  Description:
    "Gizmo, a 2-year-old Tabby cat, is looking for love! He's a bit cautious upon meeting new people, but once he warms up (which doesn't take long), he'll show you his belly and how it's waiting for scratches. He kneads his paws all the time and is, in general, just a prince of a guy. You'll fall in love with him at first purr.",
  Story:
    "Gizmo got here about a week ago and we've all fallen in love with him and can't wait for him to be adopted"
});
catList.enqueue({
  id: 4,
  image: 'https://public.sheltermanager.com/animals/sp0795/2693.jpg',
  name: 'Jackson',
  Breed: 'Domestic Shorthair',
  Age: '1 year',
  Sex: 'Male',
  Description:
    'Meet Jackson, a 1-year-old black and white, short-haired boy! Jackson was transferred to Seattle Humane from another shelter. We will give him as long as he needs for us to find him a home of his own. Jackson is a quiet, loving boy who longs for a best friend to open his heart to!',
  Story:
    'Jackson was brought to us by a family that found him wondering their streets so he could find a family.'
});

module.exports = catList;
