
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

if (select_ingredients_button) {
    select_ingredients_button.addEventListener('click', function () {
        const selectedIngredients = getSelectedIngredients();
        if (selectedIngredients.length > 0) {
            filteredRecipes = filterRecipesByIngredients(selectedIngredients);
            console.log('Filtered Recipes:', filteredRecipes);


            select_ingredients_button.hidden = true;
            localStorage.setItem('filteredRecipes', JSON.stringify(filteredRecipes));
            window.location.href = 'selected_recipes.html';
        } else {
            alert('Selecciona al menos un ingrediente.');
        }
    });
    renderIngredients();
}

if (selected_recipe_container) {
    const ls_filtered_recipes = JSON.parse(localStorage.getItem('filteredRecipes'));
    console.log(ls_filtered_recipes);
    ls_filtered_recipes.forEach(recipe => {
        const cardRecipe = renderRecipe(recipe);
        console.log(cardRecipe);
        selected_recipe_container.appendChild(cardRecipe);
    });
}

const full_recipe_container = document.getElementById('full_recipe_container');
if (full_recipe_container) {
    const recipe = JSON.parse(localStorage.getItem('selectedRecipe'));
    if (recipe) {
        const recipeName = document.createElement('h2');
        const recipeServings = document.createElement('p');
        const recipeDifficulty = document.createElement('p');
        const recipeImg = document.createElement('img');
        const recipeListIngrt = document.createElement('ul');
        const recipeListSteps = document.createElement('ol');
        const recipeCost = document.createElement('p');

        recipeName.textContent = recipe.name;
        recipeServings.textContent = recipe.servings;
        recipeDifficulty.textContent = recipe.difficulty;
        recipeImg.src = recipe.img;
        recipeImg.alt = recipe.name;
        recipeListIngrt.textContent = 'Ingredientes :';
        recipeCost.textContent = recipe.cost;
        recipeListSteps.textContent = 'Pasos a Seguir :';

        full_recipe_container.appendChild(recipeName);
        full_recipe_container.appendChild(recipeServings);
        full_recipe_container.appendChild(recipeDifficulty);
        full_recipe_container.appendChild(recipeImg);
        full_recipe_container.appendChild(recipeListIngrt);
        recipe.ingredientsDetailed.forEach(ingredientsDetailed => {
            let item = document.createElement('li');
            item.textContent = ingredientsDetailed;
            full_recipe_container.appendChild(item);
        });
        full_recipe_container.appendChild(recipeListSteps);

        recipe.steps.forEach(steps => {
            let item = document.createElement('li');
            item.textContent = steps;
            full_recipe_container.appendChild(item);
        });

        recipeListSteps.appendChild(recipeSteps);
        full_recipe_container.appendChild(recipeCost);
    } else {
        container.textContent = 'No se encontró la receta seleccionada.';
    }
}

const container_all_recipes = document.getElementById('container_all_recipes');
if (container_all_recipes) {

        recipes.forEach(recipe => {
            const card = renderRecipe(recipe);
            container_all_recipes.appendChild(card);
        });
}





