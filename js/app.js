'use strict';

function AppState() {
    this.allIngredients = [];
    this.allRecipes = [];
    this.selectedIngredients = [];
    this.filteredRecipes = [];
    this.cookedRecipes = [];
}
AppState.prototype.instantiateIngredients = function () {
    this.allIngredients = [
        new Ingredient('atun', 'Atún', './img/atun.png'),
        new Ingredient('cebolla', 'Cebolla', './img/cebolla.png'),
        new Ingredient('pan', 'Pan', './img/pan.png'),
        new Ingredient('leche', 'Leche', './img/leche.png'),
        new Ingredient('papa', 'Papa', './img/papa.png'),
        new Ingredient('queso_parmesano', 'Queso Parmesano', './img/parmesano.png'),
        new Ingredient('comino', 'Comino', './img/comino.png'),
        new Ingredient('oregano', 'Orégano', './img/oregano.png'),
        new Ingredient('pimienta', 'Pimienta', './img/pimienta.png'),
        new Ingredient('aceituna', 'Aceituna', './img/aceituna.png'),
        new Ingredient('huevo', 'Huevo', './img/huevo.png'),
        new Ingredient('aceite', 'Aceite', './img/aceite.png'),
        new Ingredient('cerdo', 'Cerdo', './img/cerdo.png'),
        new Ingredient('pimenton', 'Pimenton', './img/pimenton.png'),

    ];
}
AppState.prototype.instantiateRecipes = function () {
    this.allRecipes = [recipe1, recipe2, recipe3, recipe4, recipe5, recipe6, recipe7, recipe8, recipe9, recipe10, recipe11];
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

    const items = Array.from(selected_recipe_container.children);
    const itemsPerPage = 3;
    let currentPage = 0;

    function updateVisibility() {
        items.forEach((item, index) => {
            item.classList.remove('visible');
            if (index >= currentPage * itemsPerPage && index < (currentPage + 1) * itemsPerPage) {
                item.classList.add('visible');
            }
        });
    }

    document.getElementById('prev_btn').addEventListener('click', () => {
        if (currentPage > 0) {
            currentPage--;
            updateVisibility();
        }
    });

    document.getElementById('next_btn').addEventListener('click', () => {
        if ((currentPage + 1) * itemsPerPage < items.length) {
            currentPage++;
            updateVisibility();
        }
    });

    updateVisibility();
};



const full_recipe_container = document.getElementById('full_recipe_container');
if (full_recipe_container) {
    const lsRecipe = JSON.parse(localStorage.getItem('selectedRecipe'));
    if (lsRecipe) {
        const selectedRecipe = new Recipe('', lsRecipe.name, lsRecipe.servings, lsRecipe.img, lsRecipe.ingredients, lsRecipe.ingredientsDetailed, lsRecipe.steps, lsRecipe.difficulty, lsRecipe.cost, lsRecipe.preview);
        full_recipe_container.appendChild(selectedRecipe.renderPage());
        document.getElementById('cooked_recipe').addEventListener('click', function () {
            let date = new Date();
            let strdate = date.toLocaleString().split(',')[0];
            const cookedRecipe = new CookedRecipe(selectedRecipe, strdate);
            let recipeHistory = JSON.parse(localStorage.getItem('cookedRecipes')) || [];
            recipeHistory.push(cookedRecipe);
            localStorage.setItem('cookedRecipes', JSON.stringify(recipeHistory));
            alert('¡Felicidades!, haz seleccionado esta receta para cocinar y aparecerá en el historial para futuras consultas');

        })
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

const container_history = document.getElementById('container_history');
if (container_history) {
    const recipeHistory = JSON.parse(localStorage.getItem('cookedRecipes')) || [];
    const recipesByDate = {};

    recipeHistory.forEach(cookedRecipe => {
        const cookedDate = cookedRecipe.date;
        if (!recipesByDate[cookedDate]) {
            recipesByDate[cookedDate] = [];
        }
        recipesByDate[cookedDate].push(new Recipe(cookedRecipe.recipe));

        Object.keys(recipesByDate).forEach(date => {
            const dateDiv = document.createElement('div');
            dateDiv.classList.add('date-container');

            const dateH3 = document.createElement('h3');
            dateH3.textContent = date;
            dateDiv.appendChild(dateH3);

            recipesByDate[date].forEach(recipe => {
                const card = recipe.renderCard();
                dateDiv.appendChild(card);
            });
            container_history.appendChild(dateDiv);
        });
        console.log(recipesByDate);
    });
    }
