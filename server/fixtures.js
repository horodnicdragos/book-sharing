if (Books.find().count() === 0) {
  Books.insert({
    title: '1984',
    author: 'George Orwell',
    year: '1949',
    isbn: '1234567891011',
    category: [
      'fiction'
    ],
    rating: 4.0,
    thumbnail: 'http://placekitten.com/g/128/205',
    owner: 'Andrei C',
    avalability: true,
    currentBarrower: {
      name: 'Dragos',
      location: {
        city: 'Bucharest',
        country: 'Romania'
      }
    },
    pastbarrowers: [],
    currentQueue: []
  });
  Books.insert({
    title: 'Animal Farm',
    author: 'George Orwell',
    year: '1949',
    isbn: '1234567891011',
    category: [
    'fiction'
    ],
    rating: 3.0,
    thumbnail: 'http://placekitten.com/g/128/205',
    owner: 'Andrei C',
    avalability: true,
    currentBarrower: {
      name: 'Dragos',
      location: {
        city: 'Bucharest',
        country: 'Romania'
      }
    },
    pastbarrowers: [],
    currentQueue: []
  });
  Books.insert({
    title: 'Steve Jobs Biography',
    author: 'autor',
    year: '2012',
    isbn: '1234567891011',
    category: [
    'fiction'
    ],
    rating: 4.0,
    thumbnail: 'http://placekitten.com/g/128/205',
    owner: 'Andrei C',
    avalability: true,
    currentBarrower: {
      name: 'Dragos',
      location: {
        city: 'Bucharest',
        country: 'Romania'
      }
    },
    pastbarrowers: [],
    currentQueue: []
  });
}
