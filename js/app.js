'use strict';

function AppState() {
    this.allIngredients = [];
    this.allRecipes = [];
    this.selectedIngredients = [];
    this.filteredRecipes = [];
}
AppState.prototype.instantiateIngredients = function () {
    this.allIngredients = [
        new Ingredient('atun', 'Atún', '/img/atun.jpg'),
        new Ingredient('cebolla', 'Cebolla', '..\img\cebolla.jpg'),
        new Ingredient('pan', 'Pan', '..\img\pan.jpg'),
        new Ingredient('leche', 'Leche', '..\img\leche.jpg'),
        new Ingredient('papa', 'Papa', '..\img\papa.jpg'),
        new Ingredient('queso_parmesano', 'Queso Parmesano', '..\img\queso_parmesano.jpg'),
        new Ingredient('comino', 'Comino', '..\img\comino.jpg'),
        new Ingredient('oregano', 'Orégano', '..\img\oregano.jpg'),
        new Ingredient('pimienta', 'Pimienta', '..\img\pimienta.jpg'),
        new Ingredient('aceituna', 'Aceituna', '..\img\aceituna.jpg'),
        new Ingredient('huevo', 'Huevo', '..\img\huevo.jpg'),
        new Ingredient('aceite', 'Aceite', '..\img\aceite.jpg'),
        new Ingredient('cerdo', 'Cerdo', '..\img\cerdo.jpg'),
        new Ingredient('pimenton', 'Pimenton', '..\img\pimenton.jpg'),

    ];
}
AppState.prototype.instantiateRecipes= function(){
    this.allRecipes = [recipe1,recipe2,recipe3,recipe4,recipe5];
}

const app = new AppState();
app.instantiateIngredients();
app.instantiateRecipes();
console.log(app.allIngredients);
console.log(app.allRecipes);

const select_ingredients_button = document.getElementById('select_ingredients_btn');
const selected_recipe_container = document.getElementById('selected_recipe_container');

let filteredRecipes;

function getSelectedIngredients() {
    const selectedCheckboxes = document.querySelectorAll('input[name="ingredient"]:checked');
    const selectedIngredients = Array.from(selectedCheckboxes).map(checkbox => checkbox.value);
    return selectedIngredients;
}

function filterRecipesByIngredients(selectedIngredients) {
    return app.allRecipes.filter(recipe =>
        selectedIngredients.every(ingredient => recipe.ingredients.includes(ingredient))
    );
}

if (select_ingredients_button) {
    const container = document.getElementById('ingredients_container');
    container.innerHTML = '';
    app.allIngredients.forEach(ingredient => {
        container.appendChild(ingredient.render());
    });
    select_ingredients_button.addEventListener('click', function () {
        app.selectedIngredients = getSelectedIngredients();
        if (app.selectedIngredients.length > 0) {
            localStorage.setItem('app', JSON.stringify(app));
            window.location.href = 'selected_recipes.html';
        } else {
            alert('Selecciona al menos un ingrediente.');
        }
    });
}

if (selected_recipe_container) {
    const lsApp = JSON.parse(localStorage.getItem('app'));
    app.filteredRecipes = filterRecipesByIngredients(lsApp.selectedIngredients);
    console.log('Filtered Recipes:', app.filteredRecipes);

    app.filteredRecipes.forEach(recipe => {
        const cardRecipe = recipe.renderCard();
        console.log(cardRecipe);
        selected_recipe_container.appendChild(cardRecipe);
    });
}

const full_recipe_container = document.getElementById('full_recipe_container');
if (full_recipe_container) {
    const lsRecipe = JSON.parse(localStorage.getItem('selectedRecipe'));
    if (lsRecipe) {
       const selectedRecipe = new Recipe(lsRecipe.name, lsRecipe.servings, lsRecipe.img, lsRecipe.ingredients, lsRecipe.ingredientsDetailed, lsRecipe.steps, lsRecipe.difficulty, lsRecipe.cost, lsRecipe.preview);
       full_recipe_container.appendChild(selectedRecipe.renderPage());
    } else 
        container.textContent = 'No se encontró la receta seleccionada.';
    }


const container_all_recipes = document.getElementById('container_all_recipes');
if (container_all_recipes) {

    app.allRecipes.forEach(recipe => {
        const card = recipe.renderCard();
        container_all_recipes.appendChild(card);
    });
}





