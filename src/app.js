import FoodController from "./controllers/foodControllers.js"

await FoodController.saveProducts()
await FoodController.montarCards()
FoodController.startButtonsEventsListeners()
