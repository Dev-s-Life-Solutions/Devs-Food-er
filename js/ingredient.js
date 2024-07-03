function Ingredient(id, name, img) {
    this.id = id;
    this.name = name;
    this.img = img;
}

Ingredient.prototype.render = function () {
    const ingredientElement = document.createElement('div');
    ingredientElement.classList.add('ingredient');
    ingredientElement.innerHTML = `
        <input type="checkbox" id="${this.id}" name="ingredient" value="${this.id}">
        <label for="${this.id}">
            <img src="${this.img}" alt="${this.name}">
            <span>${this.name}</span>
        </label>
    `;
    return ingredientElement;
}



