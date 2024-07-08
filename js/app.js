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
        new Ingredient('aji_molido', 'Ají Molido', './img/aji_molido.png'),
        new Ingredient('aji', 'Ají', './img/aji.png'),
        new Ingredient('pollo', 'Pollo', './img/pollo.png'),
        new Ingredient('arveja', 'Arveja', './img/arveja.png'),
        new Ingredient('choclo', 'Choclo', './img/choclo.png'),
        new Ingredient('tomate', 'Tomate', './img/tomate.png'),
        new Ingredient('perejil', 'Perejil', './img/perejil.png'),
        new Ingredient('culantro', 'Culantro', './img/culantro.png'),
        new Ingredient('margarina', 'Margarina', './img/margarina.png'),
        new Ingredient('harina', 'Harina', './img/harina.png'),
        new Ingredient('nuez_moscada', 'Nuez Moscada', './img/nuez_moscada.png'),
        new Ingredient('alcachofa', 'Alcachofa', './img/alcachofa.png'),
        new Ingredient('pulpa_cangrejo', 'Pulpa de Cangrejo', './img/pulpa_cangrejo.png'),
        new Ingredient('mayonesa', 'Mayonesa', './img/mayonesa.png'),
        new Ingredient('concha', 'Concha', './img/concha.png'),
        new Ingredient('limon', 'Limon', './img/limon.png'),



    ];
}
AppState.prototype.instantiateRecipes = function () {
    this.allRecipes = [recipe1, recipe2, recipe3, recipe4, recipe5, recipe6, recipe7, recipe8, recipe9, recipe10, recipe11, recipe12, recipe13,recipe14,recipe15,recipe16,recipe17,recipe18,recipe19,recipe20,recipe21,recipe22,recipe23,recipe24];
}

const app = new AppState();
app.instantiateIngredients();
app.instantiateRecipes();

const select_ingredients_button = document.getElementById('select_ingredients_btn');
const selected_recipe_container = document.getElementById('selected_recipe_container');
const clear_selected_ing = document.getElementById('clear_select_btn');

let filteredRecipes;

function getSelectedIngredients() {
    const selectedCheckboxes = document.querySelectorAll('input[name="ingredient"]:checked');
    const selectedIngredients = Array.from(selectedCheckboxes).map(checkbox => checkbox.value);
    return selectedIngredients;
}

function filterRecipesByIngredients(selectedIngredients) {
    return app.allRecipes.filter(recipe =>
        selectedIngredients.some(ingredient => recipe.ingredients.includes(ingredient))
    );
}

function getAppFromLocalStorage() {
    const ls = localStorage.getItem('app') || null;
    if (!ls) return null;
    return JSON.parse(ls);
}

function addIngredientsToLocalStorage(ingredient) {
    const lsApp = getAppFromLocalStorage();
    if (lsApp) {
        if (lsApp.selectedIngredients && lsApp.selectedIngredients.length) {
            app.selectedIngredients = lsApp.selectedIngredients;
            if (!app.selectedIngredients.find(ing => ing === ingredient)) {
                app.selectedIngredients.push(ingredient);
            }
        } else {
            app.selectedIngredients.push(ingredient);
        }
    }
    localStorage.setItem('app', JSON.stringify(app));
}

function removeIngredientsFromLocalStorage(ingredient) {
    const lsApp = getAppFromLocalStorage();
    if (lsApp) {
        if (lsApp.selectedIngredients && lsApp.selectedIngredients.length) {
            app.selectedIngredients = lsApp.selectedIngredients;
            const index = app.selectedIngredients.indexOf(ingredient);
            if (index > -1) { // only splice array when item is found
                app.selectedIngredients.splice(index, 1); // 2nd parameter means remove one item only
            }
        }
    }
    localStorage.setItem('app', JSON.stringify(app));
}

function missingIngredients() {
    const lsApp = getAppFromLocalStorage();
    if (lsApp && lsApp.selectedIngredients) {
        const missingIngredientsInCard = lsApp.selectedIngredients.length;
        return missingIngredientsInCard;
    } else {
        return 0;
    }
}


if (clear_selected_ing) {
    clear_selected_ing.addEventListener('click', function () {
        const lsApp = getAppFromLocalStorage();
        if (lsApp) {
            app.selectedIngredients = [];
            localStorage.setItem('app', JSON.stringify(app));
            const ingredientElements = document.querySelectorAll('.ingredient');
            ingredientElements.forEach(function (ingredientElement) {
                const checkbox = ingredientElement.querySelector('input[type="checkbox"]');
                checkbox.checked = false;
                ingredientElement.classList.remove('checked');
            });
        }
    });
}



function findIngredientInLocalStorage(ingredient) {
    const lsApp = getAppFromLocalStorage();
    if (lsApp && lsApp.selectedIngredients && lsApp.selectedIngredients.length) {
        app.selectedIngredients = lsApp.selectedIngredients;
        const index = app.selectedIngredients.indexOf(ingredient);
        return (index > -1);
    }
    return false;
}

if (select_ingredients_button) {
    const container = document.getElementById('ingredients_container');
    container.innerHTML = '';
    app.allIngredients.forEach(ingredient => {
        container.appendChild(ingredient.render(findIngredientInLocalStorage, addIngredientsToLocalStorage, removeIngredientsFromLocalStorage));
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
    app.selectedIngredients = lsApp.selectedIngredients;
    app.filteredRecipes = filterRecipesByIngredients(app.selectedIngredients);
    console.log(lsApp);
    console.log('Filtered Recipes:', app.filteredRecipes);

    app.filteredRecipes.forEach(recipe => {
        const cardRecipe = recipe.renderCard(app.selectedIngredients);
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
    const lsApp = JSON.parse(localStorage.getItem('app'));
    app.selectedIngredients = lsApp.selectedIngredients;
    app.filteredRecipes = filterRecipesByIngredients(app.selectedIngredients);
    console.log(lsApp);
    const lsRecipe = JSON.parse(localStorage.getItem('selectedRecipe'));
    if (lsRecipe) {
        const selectedRecipe = new Recipe('', lsRecipe.name, lsRecipe.servings, lsRecipe.img, lsRecipe.ingredients, lsRecipe.ingredientsDetailed, lsRecipe.steps, lsRecipe.difficulty, lsRecipe.cost, lsRecipe.preview);
        full_recipe_container.appendChild(selectedRecipe.renderPage(app.selectedIngredients));
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
        const card = recipe.renderCard(app.selectedIngredients);
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
    });

    Object.keys(recipesByDate).forEach(date => {
        const dateDiv = document.createElement('div');
        dateDiv.classList.add('date_container');

        const dateH3 = document.createElement('h3');
        dateH3.textContent = 'Fecha de cocción : ' + date;
        dateDiv.appendChild(dateH3);

        recipesByDate[date].forEach(recipe => {
            const card = recipe.renderCard(app.selectedIngredients);
            dateDiv.appendChild(card);
        });

        container_history.appendChild(dateDiv);
    });

    console.log(recipesByDate);
}
