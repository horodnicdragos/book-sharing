if (Books.find().count() === 0) {
  Books.insert({
    name: '1984',
    author: 'George Orwell',
    isbn: '1234567891011',
    category: [
      'fiction'
    ],
    description: 'description 1',
    owner: 'FywEngWyk7MuiC84g',
    currentUser: ''
  });
  Books.insert({
    name: 'Animal Farm',
    author: 'George Orwell',
    year: '1949',
    isbn: '1234567891031',
    category: [
      'fiction'
    ],
    description: 'description 2',
    owner: 'FywEngWyk7MuiC84g',
    currentUser: ''
  });
  Books.insert({
    name: 'Steve Jobs Biography',
    author: 'autor',
    isbn: '1234567891021',
    category: [
      'fiction'
    ],
    description: 'description 3',
    owner: 'FywEngWyk7MuiC84g',
    currentUser: ''
  });
}
