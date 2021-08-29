
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
        // console.log(meal);
    }
}