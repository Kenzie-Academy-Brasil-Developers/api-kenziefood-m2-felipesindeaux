import { FoodController } from "./controllers/foodControllers.js"
import { Cards } from "./components/cards.js"
import { FoodRoutes } from "./routes/foods.js"
import {AddCart} from "./components/addCart.js"

FoodRoutes.get().then((data) => Cards.criarCards(data))
AddCart.cart()

// FoodController.saveProducts()
// FoodController.montarCards()