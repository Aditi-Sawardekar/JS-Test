console.log ("JavaScript Test");

const dishes = ['Spaghetti', 'Lasagne', 'Beans on toast', 'Porridge', 'Tomato soup', 'Salmon']

for (let i=0; i< dishes.length; i++){
    console.log (dishes[i]);
}

const randomRecipeIndex = [Math.floor(Math.random()*dishes.length)];
console.log(randomRecipeIndex)

const randomRecipe = dishes[randomRecipeIndex];
console.log(randomRecipe)

//----------------------------------------------//

// Select the div
const body = document.querySelector("body")

// Create a button
const button = document.createElement("Button")

//Test displayed on button
const text = document.createTextNode("Button");

// appending text to button
button.appendChild(text);

// appending button to div
body.appendChild(button); 

// Access the button
const myButton = document.querySelector("button");

myButton.addEventListener("click", domManipulation);

function domManipulation(){
    console.log ("done")
    // Create h1 tag
    const h1 = document.createElement("h1");

    //Add text to h1
    const h1text = document.createTextNode("JavaScript Test");

    // Append text to h1
    h1.appendChild(h1text)

    // Append h1 to body
    body.appendChild(h1);

    // Change background color
    body.style.backgroundColor ="red";
}

//------------------------------------------------//
const BASE_URL = "https://reqres.in/api/users"
//Fetch Data from API
const fetchAPI = async () => {
    try {
        const response = await fetch(`${BASE_URL}`)
        console.log(response.status);  //200 (Should be between 200 and 299)

        const data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        console.log(error)
    }

};

fetchAPI()  