function Ingredient(id, name, img) {
    this.id = id;
    this.name = name;
    this.img = img;
}

const ingredients = [
    new Ingredient('atun', 'Atún', '..\img\atun.jpg'),
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

]

function renderIngredients() {
    const show_result_button = document.getElementById('show_result_btn');
    show_result_button.hidden = true;
    const container = document.getElementById('ingredients_container');
    container.innerHTML = '';
    ingredients.forEach(ingredient => {
        const ingredientElement = document.createElement('div');
        ingredientElement.classList.add('ingredient');
        ingredientElement.innerHTML = `
        <input type="checkbox" id="${ingredient.id}" name="ingredient" value="${ingredient.id}">
        <label for="${ingredient.id}">
            <img src="${ingredient.img}" alt="${ingredient.name}">
            <span>${ingredient.name}</span>
        </label>
    `;
        container.appendChild(ingredientElement);
    });
}


// atun cebolla pan leche papa queso_parmesano comino oregano pimienta aceituna huevo aceite cerdo pimenton aji_molido aji pollo arveja choclo tomate perejil culantro margarina harina nuez_moscada alcachofa pulpa_cangrejo mayonesa concha limon 