/*function listofarr (arr) {
    for (var i = 0; i<arr.length; i++){
        console.log(i+1,arr[i]);
    }
}

var color = ["red","black","green","yellow","blue","skyblue","orange","purple"];
listofarr(color);


function listarray (arr){
    for (var i=0; i<arr.length; i++){
        if(arr[i] == "red"){
            console.log(i*100, "tomatto");
        }else{
            console.log(i*100, arr[i]);
        }
    }
}

var color = ["red","brown","yellow", "blue"];
listarray(color);

// letter finder

function letter_counter (word,match){
    for(var i = 0; i<word.length; i++){
        if (word[i] == match){
            console.log("Found",match,"match", "at", i);
        }else{
            console.log("match not found ----");
        }
    }
} 

letter_counter("test","t");


//object in js:

var assisant = {
    work: "3hrs",
    helping: "2 members",
    day:"Thursday"
}

console.log(assisant);
assisant.waterbottle = 10;
console.log(assisant);

//object: dot notation:

var house= {}
house.window = 10;
house.rooms =2;
house.color="brown";

console.log(house);
house.water = 10;
console.log(house);


// array and object:

var arrofkey = ["speed", "altitude", "range"];
var drone = {
    speed:100,
    altitude: 200,
    range: "red",
}

for(var i=0; i<arrofkey.length; i++){
    console.log(drone[arrofkey[i]]);
}


// push and pop

var foods = [];
foods.push("dosa");
foods.push("idly");
console.log(foods);

/*  
math oject in js




var number = Math.ceil(2.16);
console.log(number);

var add = Math.round(4.50);
console.log(add);

var power = Math.pow(2,3);
console.log(power);

var min =  Math.min(15, 13, 44);
console.log("The minimum value is:", min);

var max =  Math.max(15, 13, 44);
console.log("The maximum value is:", max);
*/



/*
document.getElementById("search-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const searchQuery = document.getElementById("search-input").value.toLowerCase();
    const dishes = getDishes(); // Assume this function fetches or generates your dish data
    const results = dishes.filter(dish => dish.name.toLowerCase().includes(searchQuery));

    displayResults(results);
});

document.getElementById("sort-button").addEventListener("click", function () {
    const dishes = getDishes(); // Fetch dishes
    const sortedDishes = dishes.sort((a, b) => a.price - b.price);
    displayResults(sortedDishes);
});

document.getElementById("reset-button").addEventListener("click", function () {
    document.getElementById("search-results").innerHTML = '';
    document.getElementById("order-section").classList.add("hidden");
});

function displayResults(results) {
    const resultsContainer = document.getElementById("search-results");
    resultsContainer.innerHTML = ''; // Clear previous results

    results.forEach(dish => {
        const dishItem = document.createElement("div");
        dishItem.classList.add("search-item");

        dishItem.innerHTML = `
            <img src="${dish.image}" alt="${dish.name}">
            <h3>${dish.name}</h3>
            <p>${dish.description}</p>
            <p>Price: $${dish.price}</p>
            <button onclick="selectDish('${dish.name}')">Order</button>
        `;
        resultsContainer.appendChild(dishItem);
    });
}

function selectDish(dishName) {
    document.getElementById("order-section").classList.remove("hidden");
    const orderForm = document.getElementById("order-form");

    orderForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const quantity = document.getElementById("quantity").value;
        document.getElementById("order-confirmation").classList.remove("hidden");
    });
}