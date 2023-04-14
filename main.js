// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];

// loops using the map method extracting the types into a new array
const tvTypes = inventory.map((item) => {
  return item.name
})

// loops using the filter method looking for soldout items
const soldOut = inventory.filter((item) => {
  // checks if items sold equeals the original stock before returning as soldOut
  if (item.originalStock - item.sold === 0) {
    return item
  }
})

// loops looking for AmbiLight option
const hasAmbiLight = inventory.filter((item) => {
  // only returns if AmbiLight comes back as True
  return item.options.ambiLight
})

// loops through and sorts the inventory based on price
const priceSorted = inventory.sort((a, b) => {
  // compares the price of 2 entries putting 1 ahead of the other based on positive or negative numbers
  return a.price - b.price
})

// logs the outcomes of the previous scripts
console.log('Deel 1')
console.log(tvTypes)
console.log(soldOut)
console.log(hasAmbiLight)
console.log(priceSorted)


// preps the variable for TVs sold
let tvsSold = 0

// loops through the array using the forEach method
inventory.forEach((item) => {
  tvsSold = tvsSold + item.sold
})

// creates a new p element
const soldCounter = document.createElement('p')
// sets the text inside to the number stored in TvsSold
soldCounter.textContent = tvsSold.toString()
// changes the color to green
soldCounter.style.color = 'green'
// gets the location where it needs to be place on the page
soldBox = document.getElementById('tvs-sold')
// places it on the page
soldBox.appendChild(soldCounter)

// preps the variable for bought tvs
let tvsBought = 0

// loops through the array using the forEach method
inventory.forEach((item) => {
  tvsBought = tvsBought + item.originalStock
})

// creates a new p element
const boughtCounter = document.createElement('p')
// sets the text inside to the number stored
boughtCounter.textContent = tvsBought.toString()
// changes the color to blue
boughtCounter.style.color = 'blue'
// gets the location where it needs to be place on the page
boughtBox = document.getElementById('tvs-bought')
// places it on the page
boughtBox.appendChild(boughtCounter)

// subtracts sold TVs from stock
let leftInStock = tvsBought - tvsSold
// creates a new element to store it in
const stockCounter = document.createElement('p')
// stores the number inside the new element
stockCounter.textContent = leftInStock.toString()
// sets the colour of the new element
stockCounter.style.color = 'red'
// preps the location on the page
stockBox = document.getElementById('in-stock')
// places it on the page
stockBox.appendChild(stockCounter)

// logs the outcomes of the previous scripts
console.log('Deel 2')
console.log(tvsSold)
console.log(tvsBought)
console.log(leftInStock)

function  showBrands() {
  // creates a new array with all the brands in the inventory
  const brandList = inventory.map((item) => {
    return item.brand
  })

  // creates an empty array to filter out duplicates
  let shownBrands = []
  // loops through the brand array
  brandList.forEach((brand) => {
    // only continues if not a duplicate
    if (!shownBrands.includes(brand)) {
      let brandListing = document.createElement('li')
      // sets the content to the brand name
      brandListing.textContent = brand
      // preps the location
      let brandLocation = document.getElementById('brand-list')
      // adds the item to the page
      brandLocation.appendChild(brandListing)
      // appends to the array so no duplicates get displayed
      shownBrands.push(brand)

    }
  })
}

// runs the function
showBrands()

// funtion that turns ugly data into a presentable string
function stringifyNames(item) {
  // loops through returning a string from each entry into a new array
    return `${item.brand} ${item.type} - ${item.name}`
}
function stringifyPrice(item) {
  // returns price
    return `€${item.price},-`
}

// small function to save to writing
function convertToCm(inches) {
  return inches * 2.54
}

function stringifySizes(item) {
   // loops through the sizes in the item object
    return item.availableSizes.map((size) => {
      // returns a stringified version for each item, joining the arrays
      return `${size} inch (${convertToCm(size)} cm)`
    }).join(' | ')
}

function findRequest(requestedTv) {
  // finds the requested TV and returns the info
  return inventory.find((item) => {
    return item.type === requestedTv
  })
}

function displayRequest(requestedTV) {
  const requestAnswer = findRequest(requestedTV)

  // creates a div to output in
  const tvTile = document.createElement('div')
  // sets background colour
  tvTile.style.backgroundColor = 'darkOrange'

  const tvInfo1 = document.createElement('p')
  tvInfo1.textContent = stringifyNames(requestAnswer)
  tvInfo1.style.color = 'white'

  const tvInfo2 = document.createElement('p')
  tvInfo2.textContent = stringifyPrice(requestAnswer)
  tvInfo2.style.color = 'white'

  const tvInfo3 = document.createElement('p')
  tvInfo3.textContent = stringifySizes(requestAnswer)
  tvInfo3.style.color = 'white'


  const tvField = document.getElementById('tv-specs')
  tvField.appendChild(tvTile)
  tvTile.appendChild(tvInfo1)
  tvTile.appendChild(tvInfo2)
  tvTile.appendChild(tvInfo3)


}

// runs the function with the requested tv
displayRequest('43PUS6504/12')

// loops through all inventory items placing them all on the page
function displayEntireInventory() {
  inventory.forEach((item) => {
    // makes the request the type of different tv every loop
    displayRequest(item.type)
  })
}

// runs the function
displayEntireInventory()


