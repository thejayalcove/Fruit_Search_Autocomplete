//Getting elements from the DOM
const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

//Array of fruits
const fruit = [
  'Apple 🍎',
  'Apricot',
  'Avocado 🥑',
  'Banana 🍌',
  'Bilberry',
  'Blackberry',
  'Blackcurrant',
  'Blueberry 🫐',
  'Boysenberry',
  'Currant',
  'Cherry 🍒',
  'Coconut 🥥',
  'Cranberry',
  'Cucumber 🥒',
  'Custard apple',
  'Damson',
  'Date',
  'Dragonfruit',
  'Durian',
  'Elderberry',
  'Feijoa',
  'Fig',
  'Gooseberry',
  'Grape 🍇',
  'Raisin',
  'Grapefruit',
  'Guava',
  'Honeyberry',
  'Huckleberry',
  'Jabuticaba',
  'Jackfruit',
  'Jambul',
  'Juniper berry',
  'Kiwifruit 🥝',
  'Kumquat',
  'Lemon 🍋',
  'Lime',
  'Loquat',
  'Longan',
  'Lychee',
  'Mango 🥭',
  'Mangosteen',
  'Marionberry',
  'Melon 🍈',
  'Cantaloupe',
  'Honeydew',
  'Watermelon 🍉',
  'Miracle fruit',
  'Mulberry',
  'Nectarine',
  'Nance',
  'Olive 🫒',
  'Orange 🍊',
  'Clementine',
  'Mandarine',
  'Tangerine',
  'Papaya',
  'Passionfruit',
  'Peach 🍑',
  'Pear 🍐',
  'Persimmon',
  'Plantain',
  'Plum',
  'Pineapple 🍍',
  'Pomegranate',
  'Pomelo',
  'Quince',
  'Raspberry',
  'Salmonberry',
  'Rambutan',
  'Redcurrant',
  'Salak',
  'Satsuma',
  'Soursop',
  'Star fruit',
  'Strawberry 🍓',
  'Tamarillo',
  'Tamarind',
  'Yuzu',
];

//filtering the array of fruits based on the input value
function search(str) {
  let results = [];
  if (str.length > 0) {
    fruit.forEach((fruit) => {
      if (fruit.toLowerCase().includes(str.toLowerCase())) {
        results.push(fruit);
      }
    });
  }
  showSuggestions(results);
}

//filter searchHandler function
const searchHandler = (e) => {
  const searchValue = e.target.value;
  search(searchValue);
};

//function to display the filtered array of fruits (suggestions)
function showSuggestions(results) {
  suggestions.innerHTML = ''; //I put this to ensure any previous suggestions are cleared before displaying new ones
  if (results.length > 0) {
    results.forEach((result) => {
      const li = document.createElement('li');
      li.textContent = result;
      suggestions.appendChild(li);
    });
  }
}

//function to use suggestion to fill the input field
const useSuggestion = (e) => {
  const selectedSuggestion = e.target.textContent;
  input.value = selectedSuggestion;
  suggestions.innerHTML = '';
};

//event listeners for input and click events
input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
