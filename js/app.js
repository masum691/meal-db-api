
const searchMeal = () => {
    const searchInput = document.getElementById('search-input');
    const searchInputText = searchInput.value;
    // console.log(searchInputText);
    searchInput.value = '';
    const url = `
    https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInputText}
    `
    fetch(url)
    .then(res => res.json())
    .then(data => updateSearchMeal(data.meals))
}

const updateSearchMeal = meals => {
    for(const meal of meals){
        console.log(meal);
        const mealResult = document.getElementById('meal-result');
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="displayMeal(${meal.idMeal})" class="card  border-0 shadow-lg">
        <img class="p-3" src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
          <a href="${meal.strYoutube}" class="btn btn-primary" target="_blank">Watch</a>
        </div>
        
      </div>
        `
        mealResult.appendChild(div);
    }
}

const displayMeal = mealId => {
    // console.log('clicked')
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
    .then(res => res.json())
    .then(data => displaySingleMeal(data.meals[0]))
}

const displaySingleMeal = (meal) => {
    const displayMeal = document.getElementById('display-meal');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img class="p-3" src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">${meal.strInstructions}</p>
      <a href="${meal.strYoutube}" class="btn btn-primary" target="_blank">Watch This Meal</a>
    </div>
    `
    displayMeal.appendChild(div);
}