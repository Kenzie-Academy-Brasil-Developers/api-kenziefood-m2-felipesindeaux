import { FoodController } from "./controllers/foodControllers.js"
import {Search} from "./components/search.js"

await FoodController.saveProducts()
await FoodController.montarCards()
Search.searchProduct()