import { FoodController } from "./controllers/foodControllers.js"
import { Cards } from "./components/cards.js"
import { FoodRoutes } from "./routes/foods.js"


FoodRoutes.get().then((data) => Cards.criarCards(data))

// FoodController.saveProducts()
// FoodController.montarCards()