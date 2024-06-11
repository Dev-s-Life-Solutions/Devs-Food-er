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
        } else {
            alert('Selecciona al menos un ingrediente.');
        }
    });
}
renderIngredients();
showRecipes ();