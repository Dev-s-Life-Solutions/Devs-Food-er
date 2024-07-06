function Recipe(recipe = '', name = '', servings = '', img = '', ingredients = '', ingredientsDetailed = '', steps = '', difficulty = '', cost = '', preview = '') {
    if (recipe !== '' && name === '') {
        this.name = recipe.name;
        this.servings = recipe.servings;
        this.img = recipe.img;
        this.ingredients = recipe.ingredients;
        this.ingredientsDetailed = recipe.ingredientsDetailed;
        this.steps = recipe.steps;
        this.difficulty = recipe.difficulty;
        this.cost = recipe.cost;
        this.preview = recipe.preview;
        return;
    }
    this.name = name;
    this.servings = servings;
    this.img = img;
    this.ingredients = ingredients;
    this.ingredientsDetailed = ingredientsDetailed;
    this.steps = steps;
    this.difficulty = difficulty;
    this.cost = cost;
    this.preview = preview;
}

Recipe.prototype.missingIngredients = function (selectedIngredients) {
    return this.ingredients.filter(ingredient => !selectedIngredients.includes(ingredient));
}


Recipe.prototype.renderCard = function (selectedIngredients) {
    const card = document.createElement('div');
    const h2 = document.createElement('h2');
    const img = document.createElement("img");
    const prev = document.createElement('p');

    const missing = document.createElement('p');

    h2.textContent = this.name;
    img.src = 'img/' + this.img;
    img.alt = this.name;
    prev.textContent = this.preview;

    missing.textContent = 'Te faltan ' + this.missingIngredients(selectedIngredients).length + ' de ' + this.ingredients.length + ' ingredientes.';

    card.appendChild(h2);
    card.appendChild(img);
    card.appendChild(prev);
    card.appendChild(missing);
    card.addEventListener('click', () => {
        localStorage.setItem('selectedRecipe', JSON.stringify(this));
        window.location.href = 'recipe.html';
    });
    console.log(card);
    return card;
}

Recipe.prototype.renderPage = function (selectedIngredients) {
    console.log(selectedIngredients);
    const recipeContainer = document.createElement('article');
    const recipeName = document.createElement('h2');
    const recipeServings = document.createElement('p');
    const recipeDifficulty = document.createElement('p');
    const recipeImg = document.createElement('img');
    const recipeListIngrt = document.createElement('ul');
    const h3Ingrt = document.createElement('h3');
    const recipeListSteps = document.createElement('ol');
    const h3Steps = document.createElement('h3');
    const recipeCost = document.createElement('p');

    recipeName.textContent = this.name;
    recipeServings.textContent = 'Rinde para ' + this.servings + '.';
    recipeDifficulty.textContent = 'Dificultad : ' + this.difficulty + '.';
    recipeImg.src = 'img/' + this.img;
    recipeImg.alt = this.name;
    h3Ingrt.textContent = 'Ingredientes :';
    recipeCost.textContent = 'Costo : ' + this.cost;
    h3Steps.textContent = 'Pasos a Seguir :';

    recipeContainer.appendChild(recipeName);
    recipeContainer.appendChild(recipeServings);
    recipeContainer.appendChild(recipeDifficulty);
    recipeContainer.appendChild(recipeImg);

    recipeContainer.appendChild(h3Ingrt);
    recipeContainer.appendChild(recipeListIngrt);
    let diff_ingredients = this.missingIngredients(selectedIngredients);
    this.ingredientsDetailed.forEach((ingredientDetailed, index) => {
        let item = document.createElement('li');

        if (diff_ingredients.includes(this.ingredients[index])) {
            item.classList.add('missing');
        }
        item.textContent = ingredientDetailed;
        recipeListIngrt.appendChild(item);
    });

    recipeContainer.appendChild(h3Steps);
    recipeContainer.appendChild(recipeListSteps);
    this.steps.forEach(step => {
        // if (typeof step === 'Array'){
        // }
        let item = document.createElement('li');
        item.textContent = step;
        recipeListSteps.appendChild(item);
    });

    recipeContainer.appendChild(recipeListSteps);
    recipeContainer.appendChild(recipeCost);
    return recipeContainer;
}


const recipe1 = new Recipe(
    '',
    'Ají de atún',
    'Seis Porciones',
    'aji_atun.jpg',
    ['atun', 'cebolla', 'pan', 'leche_evaporada', 'agua', 'papa', 'queso_parmesano', 'comino', 'oregano', 'sal', 'pimienta', 'aceituna', 'huevo'],
    ['1 lata de atún', '1 cebolla picada', '2 panes (de preferencia franceces)', '3/4 de leche evaporada', '1/4 de taza de agua', '1 Kg de papa sancochada', 'queso parmesano', 'comino', 'oregano', 'sal', 'pimienta', 'aceitunas', 'huevos duros'],
    ['1. Remojar el pan con la leche y el agua y luego licuar.', '2. Hacer un aderezo con la cebolla bien picadita, los ajos, el ají molido, la pimienta, el comino, el orégano y la sal.', '3. Cuando el aderezo esté bien cocido, agregar el pan licuado.', '4. Cuando empiece a espesar, agregar el atún y el queso parmesano.', '5. Servir con arroz graneado (opcional), papas sancochadas, aceitunas y huevo duro.', 'Sugerencias:', 'Se debe desmenuzar el atún antes de vaciarlo a la olla.', 'Se puede utilizar atún o sardina.', 'Si la salsa se seca mucho agregar un poquito de agua para darle consistencia.', 'Si se emplea pescado, se debe sancochar y luego desmenuzar.'],
    'Fácil',
    'Bajo',
    'Una deliciosa preparación a base de atún, pan y ají.'
)
const recipe2 = new Recipe(
    '',
    'Ají de huevos',
    'Cuatro Porciones',
    'aji_huevos.jpg',
    ['aceite', 'cerdo', 'cebolla', 'pimenton', 'huevo', 'papa', 'sal', 'pimienta', 'aji_molido'],
    ['½ taza de Aceite', '½ Kg de carne de cerdo cocido', '2 cebollas finamente picadas', '1 cdta. de pimentón', '6 huevos', '6 papas sancochadas', 'sal', 'pimienta', 'ají molido al gusto'],
    ['1. Calentar el aceite y freír hasta dorar la carne de cerdo cortada en trozos pequeños y previamente cocida.', '2. Incorporar la cebolla, el pimentón, la sal, la pimienta y el ají.', '3. Cocinar unos minutos y añadir los huevos mezclados.', 'Dejar que cuaje y servir sobre las papas sancochadas.'],
    'Fácil',
    'Medio',
    'Una receta a base de huevos y cerdo, con papitas sancochadas.'
)
const recipe3 = new Recipe(
    '',
    'Ají verde relleno',
    'Seis Porciones',
    'aji_verde.jpg',
    ['aji', 'pollo', 'arvejas', 'queso_parmesano', 'choclo', 'tomate', 'cebolla', 'huevo', 'perejil', 'culantro', 'cubito_pollo', 'margarima', 'leche_evaporada', 'harina', 'agua', 'nuez_moscada', 'sal', 'pimienta'],
    ['12 ajíes frescos', '300 gramos de carne molida de pollo', '100 gramos de arvejas', '200 gramos de queso parmesano', '2 tazas de choclo desgranado', '4 tomates picados', '1 cebolla mediana', '2 huevos', 'perejil', 'culantro', '1 cubito de pollo', '125 gramos de margarina', '1/2 taza de leche evaporada', '1/2 taza de harina', '1 litro de agua', 'nuez moscada', 'sal', 'pimienta'],
    ['1. Cortar el extremo de los ajíes con el tronquito. Limpiar las semillas y las venas con cuidado.', '2. En un recipiente con agua fría remojar los ajíes por 4 horas cambiándoles el agua varias veces.', '3. Poner los ajíes en una olla para que den un hervor de 2 minutos. Botar el agua, enjuagar en agua fría varias veces y poner nuevamente en la olla a dar un hervor de 5 minutos. Luego colar.', '4. Acomodar los choclos desgranados y sancochados en una fuente refractaria enmantequillada. Rellenar los ajíes y colocarlos encima de los choclos.', 'Para el Relleno:', '1. Hacer un picadillo dorando las cebollas picadas y los ajos. Luego agregar sal, pimienta, orégano, perejil picado y tomate picado.', '2. Añadir la carne molida con el cubito disuelto en un poquito de agua tibia y dejar cocinar unos minutos. Luego agregar las pasas, las arvejitas cocidas y los huevos duros picados.', 'Para la Salsa Blanca', '1. Preparar una salsa blanca con la margarina, la harina, la leche, el agua y la nuez moscada. Bañar los ajíes con esta salsa y espolvorear con queso parmesano.', '2. Llevar al horno precalentado a 350° F (180° C) y gratinar por 45 minutos.'],
    'Dificil',
    'Medio',
    'Ajíes rellenos de pollo y gratinado con parmesano.'
)
const recipe4 = new Recipe(
    '',
    'Alcachofas rellenas',
    'Seis Porciones',
    'alcachofa_rellena.jpg',
    ['alcachofa', 'pulpa_cangrejo', 'mayonesa'],
    ['12 fondos de alcachofas sancochadas al dente', '1 kilo de pulpa de cangrejo precocida', '1 taza de mayonesa'],
    ['1. Sancochar los fondos de alcachofa.', '2. Colocarlos en una fuente engrasada, resistente al horno.', '3. Mezclar la pulpa de cangrejo con la mayonesa y salpimentar.', '4. Rellenar los fondos de alcachofa.', '5. Llevar al horno a gratinar por 10 minutos.', 'Sugerencia:', 'Se puede cambiar la pulpa de cangrejo por pollo, atún o jamón.'],
    'Fácil',
    'Bajo',
    'El corazón de las alcachofas sancochadas con cangrejo y mayonesa.'
)
const recipe5 = new Recipe(
    '',
    'Alcachofas rellenas con conchas',
    'Seis Porciones',
    'alcachofa_conchas.jpg',
    ['alcachofa', 'harina', 'queso_parmesano', 'conchas', 'leche_evaporada', 'limon', 'aceite', 'mantequilla', 'sal', 'pimienta'],
    ['6 fondos de alcachofas grandes', '6 cucharadas de harina sin preparar', '1/2 taza de queso parmesano', '6 docenas de conchas chicas', '2 tazas de leche', '2 limones', 'Aceite', 'Mantequilla', 'Sal', 'Pimienta'],
    ['1. Poner en abundante agua un chorrito de limón, un chorrito de aceite y una cucharada de harina diluida en agua. Cuando rompa el hervor colocar los fondos de alcachofa y cocinar hasta que estén suaves.', '2. Limpiar las conchas y dividirlas en dos partes.', '3. A una parte de las conchas retirarles el coral y reservar. Con la parte blanca de las conchas preparar un cebiche con el limón, la sal y la pimienta. Luego colarlo y colocarlo sobre los fondos', '4. Preparar una salsa blanca dura con la harina, la mantequilla, la leche, el queso y sazonar.', '5. Licuar los corales y mezclarlos con la salsa blanca y con las conchas que se dejaron separadas.', '6. Enmantequillar un molde y acomodar los fondos con el cebiche y la mezcla con la salsa blanca.', '7. Gratinar por 10 minutos a horno moderado y servir bien caliente.'],
    'Media',
    'Media',
    'Una deliciosa combinación de conchas marinas y el corazón de las alcachofas.'
)
const recipe6 = new Recipe(
    '',
    'Alitas de pollo en escabeche',
    'Cuatro Porciones',
    'alitas_escabechadas.jpg',
    ['pollo', 'ajo', 'harina', 'laurel', 'aceite', 'cebolla', 'pimenton', 'sal', 'pimienta'],
    ['12 alitas de pollo', '4 dientes de ajo picados', 'Harina en cantidad necesaria', '2 hojas de laurel', '½ taza de aceite', '1 cebolla cortada en aros', '1 cdta. de pimentón', 'sal', 'pimienta'],
    ['1. Salpimentar y enharinar las alitas, freírlas en el aceite caliente, retirarlas sobre papel absorbente y luego ponerlas en un recipiente.', '2. Freír en el mismo aceite ajos, laurel, cebolla y pimentón.', '3. Agregar el tomillo, el vinagre y la miel.', '4. Dejar hervir y volcar esta mezcla sobre las alitas.', '5. Dejar macerar por 6 horas o desde el día anterior.', 'Sugerencia: ', 'Si prefiere, reemplace las alitas de pollo por trocitos de pechuga o pierna de pollo.'],
    'Fácil',
    'Baja',
    'Deliciosas alitas de pollo con la clásica sazón del escabeche'
)
const recipe7 = new Recipe(
    '',
    'Alitas con tausí',
    'Seis Porciones',
    'alitas_tausi.jpg',
    ['aceite', 'pollo', 'ajo', 'tausi', 'sillao', 'sazonador', 'caldo', 'chuño', 'sal'],
    ['8 cucharadas de aceite', '1 kilo de alitas de pollo', '3 dientes de ajos', '30 gramos de tausí o frijolitos de soya', '6 cucharaditas de sillao', '1 cucharadita de sazonador', '1 taza de caldo', '4 cucharaditas de chuño', 'sal'],
    ['1. Cortar las alitas en trozos. Dorarlos en aceite caliente con los ajos y el tausí chancados.', '2. Sazonar con la sal, el sillau, el sazonador y añadir el caldo.', '3. Cocinar unos minutos y espesar con el chuño diluido en un poquito de agua fría. Dejar dar un hervor.', '4. Se puede servir como piqueo o acompañar con arroz.', 'Sugerencia: ', 'Se puede preparar también con trozos de pollo o corazones de pollo. Si desea agregar cebolla china picadita antes de echar el chuño.'],
    'Fácil',
    "Media",
    'Unas alitas con sabor oriental que no te puedes perder'
)
const recipe8 = new Recipe(
    '',
    'Anticuchos de corazón',
    'Cuatro Porciones',
    'anticucho_corazon.jpg',
    ['corazon_vaca', 'ajo', 'vinagre', 'cerveza_negra', 'oregano', 'aji_panca', 'comino', 'sal', 'pimienta', 'aji_verde'],
    ['1 corazón de vaca', '1 cda. de ajos molidos', '½ taza de vinagre', '1 taza de cerveza negra', '2 cdas. de orégano', '4 cdas. de ají panca molido', '½ cdta. de comino', 'sal', 'pimienta', 'Ají verde al gusto'],
    ['1. Cortar el corazón en trozos chicos y enjuagarlos bien.', '2. Condimentar con ajos, sal, pimienta, comino, orégano, vinagre, cerveza, ají verde y ají panca.', '3. Dejar reposar 2 horas por lo menos.', '4. Ensartar en los palitos 3 o 4 trozos y cocinarlos en la parrilla.', '5. Mientras se cocinan, se untan con el aderezo con una brocha hecha de tiras de panca de choclo, cuidando que no se sequen.', '6. Servir con papas y choclos sancochados y ají molido solo o mezclado con cebolla china.', 'Variaciones interesantes:', 'Pulpo anticuchero: cocinar el pulpo y luego armar los anticuchos con los sabores de la preparación de anticuchos de corazón.'],
    'Fácil',
    'Bajo',
    'La clásica receta tradicional de anticuchos, tan deliciosos como los de carretera'
)
const recipe9 = new Recipe(
    '',
    'Anticuchos de pescado',
    'Cuatro Porciones',
    'anticucho_pescado.jpg',
    ['pescado', 'aji_panca', 'vinagre', 'sal', 'pimienta', 'achiote', 'comino'],
    ['1½ kg de pescado', '2 cdas. de ají panca molido', '½ taza de vinagre', 'sal', 'pimienta', 'achiote', 'comino'],
    ['1. Cortar el pescado en cuadrados de 3 cm y ponerlos a macerar 1 hora en la mezcla de vinagre, ajos, ají, achiote, sal, pimienta y comino.', '2. Insertar los pedazos de pescado en cañitas o alambres.', 'Cocinar en el brasero o a la plancha.', 'Servir con la salsa de ají.'],
    'Facil',
    'Bajo',
    'Una versión más moderna de los clásicos anticuchos, pero con pescado'
)
const recipe10 = new Recipe(
    '',
    'Arroz con huevo cremoso',
    'Cuatro Porciones',
    'arroz_huevo_cremoso.jpg',
    ['aceite', 'cebolla_china', 'arroz', 'queso', 'huevo', 'sal', 'leche', 'culantro'],
    ['1 cucharadita de aceite.', '2 tallos de cebolla larga (cebolla china). ', '2 tazas de arroz (de preferencia de del día anterior)', '1/4 de quesito desmenuzado', '1 o 2 huevos completos.', '1/2 cucharadita de sal.', '2 cucharadas de leche.', 'cilantro o culantro al gusto'],
    ['1. De esta forma te rinde más y se distribuye mejor su sabor y nutrientes. Bate los huevos con la sal hasta que queden amarillitos.', '2. Para cocinar correctamente primero pon a calentar la cacerola y luego adiciona el poquito de aceite.', '3. Agrega la cebollita junca (si la tienes) ralladita y sofríela un poco', '4. Agrega el arroz, el quesito y revuélvelo bien', '5. Una vez lo tengas caliente, agrega los huevos batidos, la sal, la leche y continúa mezclando hasta que el arroz quede todo amarillo', '6. El tiempo para cocinarlo dependerá de tu gusto, a mayor tiempo estará más seco, a menor tiempo más cremoso. Sírvelo con cilantro picado.'],
    'Fácil',
    'Bajo',
    'Para los amantes de las torrejitas, ésta es su receta'
)
const recipe11 = new Recipe(
    '',
    'Albóndigas de lentejas, culantro y tomate',
    'Cuatro Porciones',
    'albondigas_lentejas.jpg',
    ['lentejas', 'ajo', 'culantro', 'huevo', 'pan', 'sal', 'comino'],
    ['2 tazas de lentejas remojadas desde el día anterior', ' 2 dientes de ajo rallados', '2 ramas de cilantro o culantro picado', ' 1 huevo batido', ' 3 cucharadas de miga de pan', 'Media cucharadita de sal', 'Media cucharadita de Comino molido'],
    ['1. Remoja las lentejas por una noche, luego de remojadas, escúrrelas y mézclalas con el ajo, el cilantro y la miga de pan.', '2. Después tritura toda la mezcla con ayuda de un cuchillo o mortero, o si prefieres licúalas.', '3. Arma bolitas y refrigéralas por una hora.', '4. Para la salsa, calienta una sartén y mezcla todos los ingredientes, cocínalos a fuego medio-bajo durante 20 minutos.', '5. En otra sartén pon un poco de aceite, sella las albóndigas por todos sus lados, agrega la salsa y déjalas cocinar por 10 minutos más.', '6. Sírvelas con quesito desmenuzado por encima.'],
    'Fácil',
    'Bajo',
    'Deliciosa receta para no botar las lentejitas del dia anterior'
)
const recipe12 = new Recipe(
    '',
    'Brochetas de Lomo Teriyaki',
    'Seis Porciones',
    'brocheta_lomo_teriyaki.jpg',
    ['res', 'limon', 'azucar', 'sillao', 'aceite', 'kion', 'ajo', 'piña', 'pimiento'],
    ['1 kilo de carne de res', '2 cucharadas de jugo de limón', '1/4 de taza de azúcar rubia', '1/4 de taza de sillao', '1 cucharada de aceite', '1 cucharada de kión en polvo', '2 dientes de ajo picados', 'Trozos de piña', '1 pimiento grande cortado en cuadrados de 2 cm.'],
    ['1. Cortar la carne en trozos de 2 cm.', '2. Colocar en un recipiente el azúcar, el jugo de limón, el sillao, el aceite, el kión, los ajos y la carne. Dejar macerar por 3 horas dándole vueltas a la carne.', '3. En una sartén bien caliente freír los trozos de carne.', '4. Luego ensartar los trozos de carne en palitos alternando con la piña y los pimientos.', '5. Poner al horno por 10 minutos para que dore la piña.'],
    'Medio',
    'Medio',
    'Ricas brochetas que fusionan la cocina peruana y la oriental.'
)
const recipe13 = new Recipe(
    '',
    'Brochetas de pollo al kion y salsa agridulce',
    'Cuatro Porciones',
    'brocheta_pollo_kion_agridulce.jpg',
    ['pollo', 'sillao', 'ajo', 'cebolla', 'azucar', 'aceite', 'vino_blanco', 'kion', 'sal'],
    ['500 g de pechugas de pollo', '3 cdas. de sillao', '1 diente de ajo', '3-4 cebollas', '3 cdas. de azúcar', '2 cdas. de aceite', '3 cdas. de vinagre de vino blanco', 'kion fresco rallado o seco en polvo', 'sal al gusto'],
    ['1. En una olla mezclar 1 cda. de maicena con 1 taza de caldo, 3 cdas. de puré de tomate y ¼ de taza de vinagre.', '2. Agregar 5 cdas. de azúcar y una pizca de sal y ají al gusto.', '3. Cocer la salsa a fuego moderado, sin dejar de mezclar, hasta que espese.', '4. Dejar enfriar removiendo de vez en cuando.', 'También quedan muy bien las brochetas de pollo con verduras o las de cerdo con tocino, piña y manzana, acompañadas con una salsa al gusto.', 'Salsa agridulce:', '1. En una olla mezclar 1 cda. de maicena con 1 taza de caldo, 3 cdas. de puré de tomate y ¼ de taza de vinagre.', '2. Agregar 5 cdas. de azúcar y una pizca de sal y ají al gusto.', '3. Cocer la salsa a fuego moderado, sin dejar de mezclar, hasta que espese.', '4. Dejar enfriar removiendo de vez en cuando.', 'También quedan muy bien las brochetas de pollo con verduras o las de cerdo con tocino, piña y manzana, acompañadas con una salsa al gusto.'],
    'Difícil',
    'Medio',
    'De las recetas mas ricas de los restaurantes orientales a tu mesa'
)
const recipe14 = new Recipe(
    '',
    'Carpaccio de lomo',
    'Cuatro Porciones',
    'Carpaccio_de_lomo.jpg',
    ['res','aceite','vinagre','mostaza','limon','alcaparras','parmesano','sal','pimienta'],
    ['200 g de lomo fino congelado','4 cdas. de aceite de oliva','1 cda. de vinagre rojo o balsámico','½ cda. de mostaza (puede ser de Dijón)','4 cdas. de jugo de limón','1½ cdas. de alcaparras escurridas','Láminas de parmesano','Sal','Pimienta al gusto'],
    ['1. Mezclar los ingredientes de la vinagreta. Cortar el lomo en finas láminas y acomodarlas ordenadamente en cada plato. Sazonar con sal y pimienta al gusto (si la pimienta es recién molida, mejor).','2. Bañar con la vinagreta,salpicar con las alcaparras y decorar con las láminas de queso. Servir bien frío.','3. Si envuelve el lomo en papel film bien apretado y lo congela, podrá cortar el lomo en láminas delgadas. Para las láminas de parmesano, córtelas con el pelapapas.','4. Para acriollar el carpaccio, batir aceite de oliva con crema de ají amarillo, mostaza y jugo de limón, hasta formar una crema para verter sobre la carne y la salsa. En lugar de las alcaparras, usar ½ cebolla y ½ ají limo bien picados.'],
    'Difícil',
    'Alto',
    'Un plato elegante para tu paladar'
)
const recipe15 = new Recipe(
    '',
    'Causa Rellena',
    'Cuatro porciones',
    'causa_rellena.jpg',
    ['papa','aceite','aji','limon','sal','pimienta','atun','mayonesa','palta','huevo','cebolla','aceituna','perejil'],
    ['1½ kg de papa amarilla o a elección','Aceite en cantidad necesaria','Ají verde molido','Limón al gusto','Sal y pimienta al gusto','1 lata de atún o 1½ tazas de pollo sancochado y deshilachado','1 taza de mayonesa','1 palta','1 huevo duro','½ taza de cebolla picada','Aceitunas sin pepas cortadas en tiras','Perejil picado']
    ['1. Cocinar las papas en agua con sal y pelarlas en caliente. Pasarlas por el prensapapas y amasar con el aceite, el ají, el jugo de limón, la sal y la pimienta. Dividir en 3 porciones.','2. Con la primera forrar el fondo de un molde desarmable de 24 cm de diámetro, aceitado. Colocar encima el atún mezclado con ½ taza de mayonesa y las aceitunas.','3. Cubrir con otra porción de papa y acomodar el resto de la mayonesa, la palta en tajadas, el huevo en rodajas y la cebolla. Cubrir con el resto de papa.','4. Dejar reposar por ½ hora y decorar con huevos duros, perejil picado, lechuga o tomate.'],
    'Media',
    'Medio',
    'La rica cultura peruana compactada en el relleno de este plato'
)
const recipe16 = new Recipe(
    '',
    'Ceviche de Champiñones',
    'Cuatro porciones',
    'ceviche_de_champiñones.jpg',
    ['champiñones','limon','sal','pimienta','salsa_inglesa','ajo','aceite','aji'],
    ['350 g de champiñones','¼ de taza de jugo de limón','Sal y pimienta al gusto','½ cda. de salsa inglesa','2 dientes de ajo picados','2 cdas. de aceite de oliva','Ají limo al gusto'],
    ['1. Limpiar los champiñones con un paño o papel húmedo. Cortarlos en láminas de ½ cm de espesor.','2. Ponerlos en un recipiente, cubrir totalmente con el jugo de limón y condimentar con sal y pimienta, ajos picados, salsa inglesa, aceite y ají limo.','3. Dejar reposar 5 minutos y servir. Recuerde que los champiñones no deben remojarse en agua, porque son como una esponja y absorben todo.'],
    'Facíl',
    'Bajo',
    'Sabores frescos y cítricos ¡Descubre la magia de los champiñones al limón!'
)
const recipe17 = new Recipe(
    '', 
    'Ceviche de pescado', 
    'Cuatro porciones',
    'ceviche_de_pescado.jpg',
    ['pescado', 'limon', 'pisco', 'ajo', 'aji', 'apio', 'kion', 'cebolla', 'rocoto', 'culantro', 'hielo', 'cancha', 'choclo', 'lechuga', 'camotes'], 
    ['1 kg de pescado del día', '1 taza de jugo de limón con ½ cdta. de pisco (opcional)', '1 diente de ajo picado', '1 ají fresco picado (limo o verde)', '¼ de taza de apio picado (opcional)', '¼ de cdta. de kion rallado (opcional)', '1 cebolla grande cortada a la pluma', '1 rocoto en rodajas', '1 cda. de culantro picado', '2 cubitos de hielo', '1 taza de cancha o choclo sancochado'],
    ['1. Lavar el pescado y cortarlo en cubos. Sazonar con sal y pimienta. Cubrir con el jugo de limón.',
    '2. Agregar el ajo, el ají, el apio, el kion y el hielo. Dejar reposar unos minutos y servir sobre hojas de lechuga y colocar encima la cebolla.',
    '3. Servir con la cancha, el choclo y los camotes sancochados. Adornar con las rodajas de rocoto y espolvorear con el culantro picado.'],
    'facil',
    'bajo', 
    'Frescor y sabor en cada bocado: ¡Disfruta de un clásico cebiche de pescado!'
)

const recipe18 = new Recipe(
    '', 
    'Chicharrones de pollo', 
    'Seis porciones',
    'chicharrones_de_pollo.jpg', 
    ['carne_de_cerdo', 'sal', 'agua', 'hierbabuena', 'pechugas_de_pollo', 'azucar', 'sillao', 'aceite'], 
    ['1 kg de carne de cerdo', 'Sal y agua', '1 ramita de hierbabuena', '3 pechugas de pollo', '3 cdtas. de sal', '1 cdta. de azúcar', '1 cda. de sillao', 'Aceite para freír'], 
    ['1. Cortar la carne en trozos medianos, cubrirlos con agua y agregar la hierbabuena y sal al gusto. Hervir hasta que el agua se consuma y, con la grasa que suelta, se vaya friendo.',
    '2. Si el recipiente no tuviera suficiente grasa al consumirse el agua, añadir 2 cdas. de manteca de cerdo o vegetal y esperar que la carne se dore.',
    '3. Servir acompañado de salsa criolla y camote o de pan francés.',
    '4. Cortar las pechugas de pollo en cubos de 3 cm. Incorporar la sal, el azúcar y el sillao. Mezclar bien y dejar macerar durante 30 minutos.',
    '5. Freír en abundante aceite caliente y retirar sobre papel absorbente.',
    '6. Servir con jugo de limón. Son agradables también como piqueo.'],
    'facil',
    'bajo',
    'Crujientes y deliciosos: ¡Disfruta de los irresistibles chicharrones de pollo!'
)

const recipe19 = new Recipe(
    '',
    'Choros a la chalaca', 
    'Cuatro porciones',
    'choros_a_la_chalaca.jpg', 
    ['choros', 'cebollas', 'rocoto', 'perejil', 'tomate', 'choclo'], 
    ['2 docenas de choros', '2 cebollas picadas en cuadraditos', '2 cdas. de rocoto picado en cuadraditos', '2 cdas. de perejil picado', '1 tomate pelado y picado', '1 taza de choclo cocido'], 
    ['1. Limpiar bien los choros, retirándoles las barbas, bajo el chorro de agua y con ayuda de un cuchillo, desechando los que estén abiertos.','2. Sancochar los choros en abundante agua, dar un hervor e ir retirando los que se abren, para que no se recocinen. Eliminar los que no se hayan abierto.','3. En un tazón, mezclar cebolla, rocoto, perejil, tomate, ají, jugo de los limones, sal, pimienta y aceite.','4. Dejar reposar por unos 5 minutos y colocar 1 cda. de esta mezcla sobre cada choro. Servir inmediatamente.','5. Se pueden servir tibios y rociados con unas gotas de aceite de oliva.'],
    'facil', 
    'Medio',
    'Sabor fresco del mar con un toque picante: ¡Disfruta de los choros a la chalaca!'
)
const recipe20 = new Recipe(
    '',
    'Coctel de Langostinos o Camarones', 
    'Cuatro porciones', 
    'coctel_de_langostinos_o_camarones.jpg', 
    ['colas_de_langostinos', 'camarones', 'sal', 'pimienta', 'palta', 'jugo_de_limon', 'salsa_golf'],
    ['½ kg de colas de langostinos o camarones', 'Sal y pimienta', '1 palta', 'Jugo de limón', '1 taza de salsa golf', '4-6 copas'], 
    ['1. Pelar, limpiar y cocinar las colas de langostinos o camarones en agua hirviendo con sal y pimienta durante 3 minutos. Apenas cambien de color, colar, escurrir y enfriar.','2. Cortar la palta en tajadas del tamaño de un bocado y rociarlas con jugo de limón, para que no se oscurezcan.','3. Poner en cada copa 1 cda. de salsa golf. Acomodar las colas de langostinos y, entre ellas, las tajadas de palta. Adornar las copas con colas. Poner salsa golf en una salsera adicional.','4. Para limpiar las colas de los langostinos, retirar la cáscara y quitarles el tubo digestivo cortando ligeramente el lomo (o con ayuda de una pinza).'], 
    'Medio', 
    'Medio', 
    'Elegancia en cada bocado: ¡Disfruta del clásico cóctel de langostinos o camarones!'
)
// const recipe21 = new Recipe(
//     '',
//     '',
//     '',
//     '.jpg',
//     [],
//     [],
//     [],
//     '',
//     '',
//     ''
// )
// const recipe22 = new Recipe(
//     '',
//     '',
//     '',
//     '.jpg',
//     [],
//     [],
//     [],
//     '',
//     '',
//     ''
// )
// const recipe23 = new Recipe(
//     '',
//     '',
//     '',
//     '.jpg',
//     [],
//     [],
//     [],
//     '',
//     '',
//     ''
// )
// const recipe24 = new Recipe(
//     '',
//     '',
//     '',
//     '.jpg',
//     [],
//     [],
//     [],
//     '',
//     '',
//     ''
// )
// const recipe25 = new Recipe(
//     '',
//     '',
//     '',
//     '.jpg',
//     [],
//     [],
//     [],
//     '',
//     '',
//     ''
// )
// const recipe26 = new Recipe(
//     '',
//     '',
//     '',
//     '.jpg',
//     [],
//     [],
//     [],
//     '',
//     '',
//     ''
// )
// const recipe27 = new Recipe(
//     '',
//     '',
//     '',
//     '.jpg',
//     [],
//     [],
//     [],
//     '',
//     '',
//     ''
// )
// const recipe28 = new Recipe(
//     '',
//     '',
//     '',
//     '.jpg',
//     [],
//     [],
//     [],
//     '',
//     '',
//     ''
// )
// const recipe29 = new Recipe(
//     '',
//     '',
//     '',
//     '.jpg',
//     [],
//     [],
//     [],
//     '',
//     '',
//     ''
// )
// const recipe30 = new Recipe(
//     '',
//     '',
//     '',
//     '.jpg',
//     [],
//     [],
//     [],
//     '',
//     '',
//     ''
// )
// const recipe31 = new Recipe(
//     '',
//     '',
//     '',
//     '.jpg',
//     [],
//     [],
//     [],
//     '',
//     '',
//     ''
// )
// const recipe32 = new Recipe(
//     '',
//     '',
//     '',
//     '.jpg',
//     [],
//     [],
//     [],
//     '',
//     '',
//     ''
// )
// const recipe33 = new Recipe(
//     '',
//     '',
//     '',
//     '.jpg',
//     [],
//     [],
//     [],
//     '',
//     '',
//     ''
// )
// const recipe34 = new Recipe(
//     '',
//     '',
//     '',
//     '.jpg',
//     [],
//     [],
//     [],
//     '',
//     '',
//     ''
// )
// const recipe35 = new Recipe(
//     '',
//     '',
//     '',
//     '.jpg',
//     [],
//     [],
//     [],
//     '',
//     '',
//     ''
// )
// const recipe36 = new Recipe(
//     '',
//     '',
//     '',
//     '.jpg',
//     [],
//     [],
//     [],
//     '',
//     '',
//     ''
// )
// const recipe37 = new Recipe(
//     '',
//     '',
//     '',
//     '.jpg',
//     [],
//     [],
//     [],
//     '',
//     '',
//     ''
// )
// const recipe38 = new Recipe(
//     '',
//     '',
//     '',
//     '.jpg',
//     [],
//     [],
//     [],
//     '',
//     '',
//     ''
// )
// const recipe39 = new Recipe(
//     '',
//     '',
//     '',
//     '.jpg',
//     [],
//     [],
//     [],
//     '',
//     '',
//     ''
// )
// const recipe40 = new Recipe(
//     '',
//     '',
//     '',
//     '.jpg',
//     [],
//     [],
//     [],
//     '',
//     '',
//     ''
// )
// const recipe41 = new Recipe(
//     '',
//     '',
//     '',
//     '.jpg',
//     [],
//     [],
//     [],
//     '',
//     '',
//     ''
// )
// const recipe42 = new Recipe(
//     '',
//     '',
//     '',
//     '.jpg',
//     [],
//     [],
//     [],
//     '',
//     '',
//     ''
// )
// const recipe43 = new Recipe(
//     '',
//     '',
//     '',
//     '.jpg',
//     [],
//     [],
//     [],
//     '',
//     '',
//     ''
// )
// const recipe44 = new Recipe(
//     '',
//     '',
//     '',
//     '.jpg',
//     [],
//     [],
//     [],
//     '',
//     '',
//     ''
// )
// const recipe45 = new Recipe(
//     '',
//     '',
//     '',
//     '.jpg',
//     [],
//     [],
//     [],
//     '',
//     '',
//     ''
// )
// const recipe46 = new Recipe(
//     '',
//     '',
//     '',
//     '.jpg',
//     [],
//     [],
//     [],
//     '',
//     '',
//     ''
// )
// const recipe47 = new Recipe(
//     '',
//     '',
//     '',
//     '.jpg',
//     [],
//     [],
//     [],
//     '',
//     '',
//     ''
// )
// const recipe48 = new Recipe(
//     '',
//     '',
//     '',
//     '.jpg',
//     [],
//     [],
//     [],
//     '',
//     '',
//     ''
// )
// const recipe49 = new Recipe(
//     '',
//     '',
//     '',
//     '.jpg',
//     [],
//     [],
//     [],
//     '',
//     '',
//     ''
// )
// const recipe50 = new Recipe(
//     '',
//     '',
//     '',
//     '.jpg',
//     [],
//     [],
//     [],
//     '',
//     '',
//     ''
// )