function Ingredient(id, name, img) {
    this.id = id;
    this.name = name;
    this.img = img;
}

Ingredient.prototype.render = function (findInLS, addToLS, removeFromLS) {
    const ingredientElement = document.createElement('div');
    ingredientElement.classList.add('ingredient');
    const ingredientId = this.id;

    

    ingredientElement.innerHTML = `
        <input type="checkbox" id="${this.id}" name="ingredient" value="${this.id}" hidden="true">
        <label for="${this.id}">
            <img src="${this.img}" alt="${this.name}">
            <span>${this.name}</span>
        </label>
    `;

    const checkbox = ingredientElement.querySelector('input');

    if (findInLS(ingredientId)) {
        console.log(ingredientId);
        ingredientElement.classList.add('checked');
        checkbox.checked = true;
    }

    ingredientElement.addEventListener('click', function () {
        
        if (checkbox.checked) {
            checkbox.checked = false;
            ingredientElement.classList.remove('checked');
            removeFromLS(ingredientId);
        } else {
            checkbox.checked = true;
            ingredientElement.classList.add('checked');
            addToLS(ingredientId);
        }
        
    });
    
    return ingredientElement;
}



