// const show_result_button = document.getElementById('show_result_btn');
// show_result_button.hidden = true;
const revert_selection_button = document.getElementById('revert_selection_btn');
revert_selection_button.hidden = true;
const select_ingredients_button = document.getElementById('select_ingredients_btn');
const selected_recipe_container = document.getElementById('selected_recipe_container');

let filteredRecipes;

function getSelectedIngredients() {
    const selectedCheckboxes = document.querySelectorAll('input[name="ingredient"]:checked');
    const selectedIngredients = Array.from(selectedCheckboxes).map(checkbox => checkbox.value);
    return selectedIngredients;
}

function filterRecipesByIngredients(selectedIngredients) {
    return recipes.filter(recipe =>
        selectedIngredients.every(ingredient => recipe.ingredients.includes(ingredient))
    );
}

if (select_ingredients_button){
select_ingredients_button.addEventListener('click', function () {
    const selectedIngredients = getSelectedIngredients();
    if (selectedIngredients.length > 0) {
        filteredRecipes = filterRecipesByIngredients(selectedIngredients);
        console.log('Filtered Recipes:', filteredRecipes);

        // show_result_button.hidden = false;
        revert_selection_button.hidden = false;
        select_ingredients_button.hidden = true;
        localStorage.setItem('filteredRecipes', JSON.stringify(filteredRecipes));
        window.location.href = 'selected_recipes.html';
    } else {
        alert('Selecciona al menos un ingrediente.');
    }
});
renderIngredients();
}

if (selected_recipe_container){
    const ls_filtered_recipes = JSON.parse(localStorage.getItem('filteredRecipes'));
    console.log(ls_filtered_recipes);
    ls_filtered_recipes.forEach(recipe => {
        const cardRecipe = renderRecipe(recipe);
        console.log(cardRecipe);
        selected_recipe_container.appendChild(cardRecipe);
    });

}



