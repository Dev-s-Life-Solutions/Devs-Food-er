function Recipe(name, servings, img, ingredients, ingredients_detailed, steps, difficulty, cost) {
    this.name = name;
    this.servings = servings;
    this.img = img;
    this.ingredients = ingredients;
    this.ingredients_detailed = ingredients_detailed;
    this.steps = steps;
    this.difficulty = difficulty;
    this.cost = cost;
}

const recipe1 = new Recipe(
    'Ají de atún',
    'Seis Porciones',
    'aji_atun',
    ['atun', 'cebolla', 'pan', 'leche_evaporada', 'agua', 'papa', 'queso_parmesano', 'comino', 'oregano', 'sal', 'pimienta', 'aceituna', 'huevo'],
    ['1 lata de atún', '1 cebolla picada', '2 panes (de preferencia franceces)', '3/4 de leche evaporada', '1/4 de taza de agua', '1 Kg de papa sancochada', 'queso parmesano', 'comino', 'oregano', 'sal', 'pimienta', 'aceitunas', 'huevos duros'],
    ['1. Remojar el pan con la leche y el agua y luego licuar.', '2. Hacer un aderezo con la cebolla bien picadita, los ajos, el ají molido, la pimienta, el comino, el orégano y la sal.', '3. Cuando el aderezo esté bien cocido, agregar el pan licuado.', '4. Cuando empiece a espesar, agregar el atún y el queso parmesano.', '5. Servir con arroz graneado (opcional), papas sancochadas, aceitunas y huevo duro.', 'Sugerencias:', 'Se debe desmenuzar el atún antes de vaciarlo a la olla.', 'Se puede utilizar atún o sardina.', 'Si la salsa se seca mucho agregar un poquito de agua para darle consistencia.', 'Si se emplea pescado, se debe sancochar y luego desmenuzar.'],
    'Fácil',
    'Bajo'
);
const recipe2 = new Recipe(
    'Ají de huevos',
    'Cuatro Porciones',
    'aji_huevos',
    ['aceite', 'cerdo', 'cebolla', 'pimenton', 'huevo', 'papa', 'sal', 'pimienta', 'aji_molido'],
    ['½ taza de Aceite', '½ Kg de carne de cerdo cocido', '2 cebollas finamente picadas', '1 cdta. de pimentón', '6 huevos', '6 papas sancochadas', 'sal', 'pimienta', 'ají molido al gusto']
    ['1. Calentar el aceite y freír hasta dorar la carne de cerdo cortada en trozos pequeños y previamente cocida.', '2. Incorporar la cebolla, el pimentón, la sal, la pimienta y el ají.', '3. Cocinar unos minutos y añadir los huevos mezclados.', 'Dejar que cuaje y servir sobre las papas sancochadas.'],
    'Fácil',
    'Medio'
)
const recipe3 = new Recipe(
    'Ají verde relleno',
    'Seis Porciones',
    'aji_verde',
    ['aji', 'pollo', 'arvejas', 'queso_parmesano', 'choclo', 'tomate', 'cebolla', 'huevo', 'perejil', 'culantro', 'cubito_pollo', 'margarima', 'leche_evaporada', 'harina', 'agua', 'nuez_moscada', 'sal', 'pimienta'],
    ['12 ajíes frescos', '300 gramos de carne molida de pollo', '100 gramos de arvejas', '200 gramos de queso parmesano', '2 tazas de choclo desgranado', '4 tomates picados', '1 cebolla mediana', '2 huevos', 'perejil', 'culantro', '1 cubito de pollo', '125 gramos de margarina', '1/2 taza de leche evaporada', '1/2 taza de harina', '1 litro de agua', 'nuez moscada', 'sal', 'pimienta'],
    ['1. Cortar el extremo de los ajíes con el tronquito. Limpiar las semillas y las venas con cuidado.', '2. En un recipiente con agua fría remojar los ajíes por 4 horas cambiándoles el agua varias veces.', '3. Poner los ajíes en una olla para que den un hervor de 2 minutos. Botar el agua, enjuagar en agua fría varias veces y poner nuevamente en la olla a dar un hervor de 5 minutos. Luego colar.', '4. Acomodar los choclos desgranados y sancochados en una fuente refractaria enmantequillada. Rellenar los ajíes y colocarlos encima de los choclos.', 'Para el Relleno:', '1. Hacer un picadillo dorando las cebollas picadas y los ajos. Luego agregar sal, pimienta, orégano, perejil picado y tomate picado.', '2. Añadir la carne molida con el cubito disuelto en un poquito de agua tibia y dejar cocinar unos minutos. Luego agregar las pasas, las arvejitas cocidas y los huevos duros picados.', 'Para la Salsa Blanca', '1. Preparar una salsa blanca con la margarina, la harina, la leche, el agua y la nuez moscada. Bañar los ajíes con esta salsa y espolvorear con queso parmesano.', '2. Llevar al horno precalentado a 350° F (180° C) y gratinar por 45 minutos.'],
    'Dificil',
    'Medio'
)
const recipe4 = new Recipe(
    'Alcachofas rellenas',
    'Seis Porciones',
    'alcachofa_rellena',
    ['alcachofa', 'pulpa_cangrejo', 'mayonesa'],
    ['12 fondos de alcachofas sancochadas al dente', '1 kilo de pulpa de cangrejo precocida', '1 taza de mayonesa'],
    ['1. Sancochar los fondos de alcachofa.', '2. Colocarlos en una fuente engrasada, resistente al horno.', '3. Mezclar la pulpa de cangrejo con la mayonesa y salpimentar.', '4. Rellenar los fondos de alcachofa.', '5. Llevar al horno a gratinar por 10 minutos.', 'Sugerencia:', 'Se puede cambiar la pulpa de cangrejo por pollo, atún o jamón.'],
    'Fácil',
    'Bajo'
)
const recipe5 = new Recipe(
    'Alcachofas rellenas con conchas',
    'Seis Porciones',
    'alcachofa_conchas',
    ['alcachofa', 'harina', 'queso_parmesano', 'conchas', 'leche_evaporada', 'limon', 'aceite', 'mantequilla', 'sal', 'pimienta'],
    ['6 fondos de alcachofas grandes', '6 cucharadas de harina sin preparar', '1/2 taza de queso parmesano', '6 docenas de conchas chicas', '2 tazas de leche', '2 limones', 'Aceite', 'Mantequilla', 'Sal', 'Pimienta'],
    ['1. Poner en abundante agua un chorrito de limón, un chorrito de aceite y una cucharada de harina diluida en agua. Cuando rompa el hervor colocar los fondos de alcachofa y cocinar hasta que estén suaves.', '2. Limpiar las conchas y dividirlas en dos partes.', '3. A una parte de las conchas retirarles el coral y reservar. Con la parte blanca de las conchas preparar un cebiche con el limón, la sal y la pimienta. Luego colarlo y colocarlo sobre los fondos', '4. Preparar una salsa blanca dura con la harina, la mantequilla, la leche, el queso y sazonar.', '5. Licuar los corales y mezclarlos con la salsa blanca y con las conchas que se dejaron separadas.', '6. Enmantequillar un molde y acomodar los fondos con el cebiche y la mezcla con la salsa blanca.', '7. Gratinar por 10 minutos a horno moderado y servir bien caliente.'],
    'Media',
    'Media'
)
const recipes = [recipe1,recipe2,recipe3,recipe4,recipe5];




// const recipe6 = new Recipe(
//     'Alitas de pollo escabechadas',
//     'Cuatro Porciones',
//     'alitas_escabechadas',
//     ['12 alitas de pollo', '4 dientes de ajo picados', 'Harina en cantidad necesaria', '2 hojas de laurel', '½ taza de aceite', '1 cebolla cortada en aros', '1 cdta. de pimentón', 'sal', 'pimienta'],
//     ['1. Salpimentar y enharinar las alitas, freírlas en el aceite caliente, retirarlas sobre papel absorbente y luego ponerlas en un recipiente.', '2. Freír en el mismo aceite ajos, laurel, cebolla y pimentón.', '3. Agregar el tomillo, el vinagre y la miel.', '4. Dejar hervir y volcar esta mezcla sobre las alitas.', '5. Dejar macerar por 6 horas o desde el día anterior.', 'Sugerencia: ', 'Si prefiere, reemplace las alitas de pollo por trocitos de pechuga o pierna de pollo.'],
//     'Fácil',
//     'Baja'
// )
// const recipe7 = new Recipe(
//     'Alitas con tausí',
//     'Seis Porciones',
//     'alitas_tausi',
//     ['8 cucharadas de aceite', '1 kilo de alitas de pollo', '3 dientes de ajos', '30 gramos de tausí o frijolitos de soya', '6 cucharaditas de sillao', '1 cucharadita de sazonador', '1 taza de caldo', '4 cucharaditas de chuño', 'sal'],
//     ['1. Cortar las alitas en trozos. Dorarlos en aceite caliente con los ajos y el tausí chancados.', '2. Sazonar con la sal, el sillau, el sazonador y añadir el caldo.', '3. Cocinar unos minutos y espesar con el chuño diluido en un poquito de agua fría. Dejar dar un hervor.', '4. Se puede servir como piqueo o acompañar con arroz.', 'Sugerencia: ', 'Se puede preparar también con trozos de pollo o corazones de pollo. Si desea agregar cebolla china picadita antes de echar el chuño.'],
//     'Fácil',
//     "Media"
// )
// const recipe8 = new Recipe(
//     'Anticuchos de corazón',
//     'Cuatro Porciones',
//     'anticucho_corazon',
//     ['1 corazón de vaca', '1 cda. de ajos molidos', '½ taza de vinagre', '1 taza de cerveza negra', '2 cdas. de orégano', '4 cdas. de ají panca molido', '½ cdta. de comino', 'sal', 'pimienta', 'Ají verde al gusto'],
//     ['1. Cortar el corazón en trozos chicos y enjuagarlos bien.', '2. Condimentar con ajos, sal, pimienta, comino, orégano, vinagre, cerveza, ají verde y ají panca.', '3. Dejar reposar 2 horas por lo menos.', '4. Ensartar en los palitos 3 o 4 trozos y cocinarlos en la parrilla.', '5. Mientras se cocinan, se untan con el aderezo con una brocha hecha de tiras de panca de choclo, cuidando que no se sequen.', '6. Servir con papas y choclos sancochados y ají molido solo o mezclado con cebolla china.', 'Variaciones interesantes:', 'Pulpo anticuchero: cocinar el pulpo y luego armar los anticuchos con los sabores de la preparación de anticuchos de corazón.'],
//     'Fácil',
//     'Bajo'
// )
// const recipe9 = new Recipe(
//     'Anticuchos de pescado',
//     'Cuatro Porciones',
//     'anticucho_pescado',
//     ['1½ kg de pescado', '2 cdas. de ají panca molido', '½ taza de vinagre', 'sal', 'pimienta', 'achiote', 'comino'],
//     ['1. Cortar el pescado en cuadrados de 3 cm y ponerlos a macerar 1 hora en la mezcla de vinagre, ajos, ají, achiote, sal, pimienta y comino.', '2. Insertar los pedazos de pescado en cañitas o alambres.', 'Cocinar en el brasero o a la plancha.', 'Servir con la salsa de ají.'],
//     'Facil',
//     'Bajo'
// )
// const recipe10 = new Recipe(
//     'Arroz con huevo cremoso',
//     'Cuatro Porciones',
//     'arroz_huevo_cremoso',
//     ['1 cucharadita de aceite.', '2 tallos de cebolla larga (cebolla china). ', '2 tazas de arroz (de preferencia de del día anterior)', '1/4 de quesito desmenuzado', '1 o 2 huevos completos.', '1/2 cucharadita de sal.', '2 cucharadas de leche.', 'cilantro o culantro al gusto'],
//     ['1. De esta forma te rinde más y se distribuye mejor su sabor y nutrientes. Bate los huevos con la sal hasta que queden amarillitos.', '2. Para cocinar correctamente primero pon a calentar la cacerola y luego adiciona el poquito de aceite.', '3. Agrega la cebollita junca (si la tienes) ralladita y sofríela un poco', '4. Agrega el arroz, el quesito y revuélvelo bien', '5. Una vez lo tengas caliente, agrega los huevos batidos, la sal, la leche y continúa mezclando hasta que el arroz quede todo amarillo', '6. El tiempo para cocinarlo dependerá de tu gusto, a mayor tiempo estará más seco, a menor tiempo más cremoso. Sírvelo con cilantro picado.'],
//     'Fácil',
//     'Bajo'
// )
// const recipe11 = new Recipe(
//     'Albóndigas de lentejas y culantro en salsa de tomate',
//     'Cuatro Porciones',
//     'albondigas_lentejas',
//     ['2 tazas de lentejas remojadas desde el día anterior', ' 2 dientes de ajo rallados', '2 ramas de cilantro picado', ' 1 huevo batido', ' 3 cucharadas de miga de pan', 'Media cucharadita de sal', 'Media cucharadita de Comino molido'],
//     ['1. Remoja las lentejas por una noche, luego de remojadas, escúrrelas y mézclalas con el ajo, el cilantro y la miga de pan.', '2. Después tritura toda la mezcla con ayuda de un cuchillo o mortero, o si prefieres licúalas.', '3. Arma bolitas y refrigéralas por una hora.', '4. Para la salsa, calienta una sartén y mezcla todos los ingredientes, cocínalos a fuego medio-bajo durante 20 minutos.', '5. En otra sartén pon un poco de aceite, sella las albóndigas por todos sus lados, agrega la salsa y déjalas cocinar por 10 minutos más.', '6. Sírvelas con quesito desmenuzado por encima.'],
//     'Fácil',
//     'Bajo'
// )
// const recipe12 = new Recipe(

// )
// const recipe13 = new Recipe(

// )
// const recipe14 = new Recipe(

// )
// const recipe15 = new Recipe(

// )
// const recipe16 = new Recipe(

// )
// const recipe17 = new Recipe(

// )
// const recipe18 = new Recipe(

// )
// const recipe19 = new Recipe(

// )
// const recipe20 = new Recipe(

// )
// const recipe21 = new Recipe(

// )
// const recipe22 = new Recipe(

// )
// const recipe23 = new Recipe(

// )
// const recipe24 = new Recipe(

// )
// const recipe25 = new Recipe(

// )
// const recipe26 = new Recipe(

// )
// const recipe27 = new Recipe(

// )
// const recipe28 = new Recipe(

// )
// const recipe29 = new Recipe(

// )
// const recipe30 = new Recipe(

// )
// const recipe31 = new Recipe(

// )
// const recipe32 = new Recipe(

// )
// const recipe33 = new Recipe(

// )
// const recipe34 = new Recipe(

// )
// const recipe35 = new Recipe(

// )
// const recipe36 = new Recipe(

// )
// const recipe37 = new Recipe(

// )
// const recipe38 = new Recipe(

// )
// const recipe39 = new Recipe(

// )
// const recipe40 = new Recipe(

// )
// const recipe41 = new Recipe(

// )
// const recipe42 = new Recipe(

// )
// const recipe43 = new Recipe(

// )
// const recipe44 = new Recipe(

// )
// const recipe45 = new Recipe(

// )
// const recipe46 = new Recipe(

// )
// const recipe47 = new Recipe(

// )
// const recipe48 = new Recipe(

// )
// const recipe49 = new Recipe(

// )
// const recipe50 = new Recipe(

// )