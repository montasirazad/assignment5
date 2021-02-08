const searchForMeal = () => {
    const searchText = document.getElementById("search-box").value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    // load data
    fetch(url)
        .then(res => res.json())
        //.then (data => console.log(data.meals))

        .then(data => displayFood(data.meals))

}

const displayFood = foods => {
    const foodContainer = document.getElementById('food-container');
    foods.forEach(food => {
        const li = document.createElement('li');
        li.innerHTML = food.strMeal;


        foodContainer.appendChild(li);

    })
}

