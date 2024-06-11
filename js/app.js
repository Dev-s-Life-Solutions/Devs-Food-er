const show_result_button = document.getElementById('show_result_btn');
show_result_button.hidden = true;
const revert_selection_button = document.getElementById('revert_selection_btn');
revert_selection_button.hidden = true;
const select_ingredients_button = document.getElementById('select_ingredients_btn');

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

function showRecipes(){
    select_ingredients_button.addEventListener('click', function () {
        const selectedIngredients = getSelectedIngredients();
        if (selectedIngredients.length > 0) {
            filteredRecipes = filterRecipesByIngredients(selectedIngredients);
            console.log('Filtered Recipes:', filteredRecipes);
            show_result_button.hidden = false;
            revert_selection_button.hidden = false;
            select_ingredients_button.hidden = true;
            carrusel(filteredRecipes);
        } else {
            alert('Selecciona al menos un ingrediente.');
        }
    });
}
function carrusel(){

}

renderIngredients();
showRecipes ();
console();