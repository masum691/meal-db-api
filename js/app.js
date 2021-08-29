
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
        <div onclick="displayMeal(${meal.idMeal})" class="card">
        <img class="p-2" src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
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
    .then(data => console.log(data.meals[0]))
}