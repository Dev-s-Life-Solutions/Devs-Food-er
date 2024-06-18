# Devs-Food-er

Food for Devs for a better life.

Web orientada a desarrolladores en la que podrán encontrar recetas fáciles y nutritivas dependiendo de lo que tengan en su nevera, para así poder mantener una dieta saludable y a la vez estar totalmente concentrado en el trabajo.

Integrantes:

Anthony Hernadez
Angel Paz

## Acuerdo de Equipo: [Leer](./TeamAgreement.md)

## Requisitos del Software: [Leer](./requirements.md)

## Historia de Usuario

### 1. Como Usuario de Dev's-food-er, quiero que la aplicación tenga una sección donde yo pueda elegir los ingredientes que poseo

**Tareas de Funcionalidad:**

* Desarrollar una cuadricula con una gran variedad de ingredientes donde los usuarios puedan seleccionar los suyos.
* Implementar la funcionalidad para seleccionar cada ingrediente.
* Integrar la capacidad de seleccionar más de un ingrediente.
* Asegurarse de que cada ingrediente se guarde

**Pruebas de Aceptación:**

* Verificar que se haya seleccionado cada ingrediente diferenciandolo con los otros ingredientes no seleccionados.
* Confirmar que los ingredientes resaltados se guarden.
* Probar que los ingredientes seleccionados sean los suficientes para darte una receta.

### 2. Como Usuario de Dev's-food-er, quiero que luego de seleccionar los ingredientes, esta me de como opciones las recetas que puedo hacer en base a ellos

**Tareas de Funcionalidad:**

* Desarrollar diferentes opciones de recetas para los ingredientes que se eligieron.
* Mostrar una reseña de cada receta para saber lo minimo del plato que se presenta.
* Mostrar una imagen para previsualisar las recetas
* Poder deslizar la receta para ver más opciones

**Pruebas de Aceptación:**

* Verificar que la receta tenga los ingredientes seleccionados.
* Confirmar que la receta sea la misma que indica la imagen y la reseña.
* Probar si se puede deslizar la receta para ver las opciones

### 3. Como Usuario de Dev's-food-er, quiero que luego de elegir la receta esta me de los pasos e instrucciones para hacer la receta

**Tareas de Funcionalidad:**

* Desarrollar la opcion de seleccionar la receta preferida con solo seleccionarla.
* Enviar al usuario a una sección donde tenga la información de la receta
* Mostrar la imagen de referencia de la receta
* Mostrar los ingredientes y los pasos para hacer la receta

**Pruebas de Aceptación:**

* Verificar que sea seleccionable la receta.
* Confirmar que dirija a la pagina de recetas.
* Verificar que los ingredientes, los pasos y la imagen sea la deseada con la receta.

### 4. Como Usuario de Dev's-food-er, me gustaría saber cuales son las recetas que he seleccionado anteriormente

**Tareas de Funcionalidad:**

* Crear un Historial de las recetas.
* Guardar las recetas seleccionadas con la fecha.
* Mostrar en una pagina adicional un preview de todas las recetas seleccionadas anteriormente.
* Poder seleccionar la receta nuevamente para que muestre los pasos para hacer la receta

**Pruebas de Aceptación:**

* Verificar que se haya creado un historial 
* Confirmar que se haya guardado las recetas seleccionadas
* Verificar que sea la receta correcta por la fecha seleccionada.

### 5. Como Usuario, quisiera que la aplicación me muestre todas las recetas que tiene sin que yo seleccione los ingredientes

**Tareas de Funcionalidad:**

* Diseñar una interfaz de usuario donde pueda acceder a todas las recetas en lista.
* Enlistar todas las recetas con su reseña e imagen de referencia.
* Poder seleccionar una receta para llevarte a la pagina donde puedas ver las instrucciones.

**Pruebas de Aceptación:**
* Verificar que los accionistas puedan seleccionar una receta de la lista disponible de manera fácil y rápida.
* Confirmar que el algoritmo de sugerencias de recetas adicionales funcione correctamente y proporcione opciones relevantes.
* Probar la funcionalidad de visualización de las sugerencias de recetas adicionales en la interfaz de usuario.
* Verificar que las sugerencias de recetas adicionales estén basadas en las preferencias del accionista y los ingredientes disponibles en la receta seleccionada.
* Asegurarse de que la experiencia del usuario en la sección de selección de recetas y sugerencias de recetas adicionales sea satisfactoria y fácil de usar.

## Modelo de Dominio

1. Ingredient:

* id
* name
* img

2. Recipe

* name
* servings
* img
* ingredients
* ingredientsDetailed
* steps
* difficulty
* cost
* preview
