const show_result_button = document.getElementById('show_result_btn');
show_result_button.hidden = true;

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
    document.getElementById('select_ingredients_btn').addEventListener('click', function () {
        const selectedIngredients = getSelectedIngredients();
        if (selectedIngredients.length > 0) {
            const filteredRecipes = filterRecipesByIngredients(selectedIngredients);
            console.log('Filtered Recipes:', filteredRecipes);
            show_result_button.hidden = false;
        } else {
            alert('Selecciona al menos un ingrediente.');
        }
    });
}
renderIngredients();
showRecipes ();