import { FoodController } from "./controllers/foodControllers.js"
import {Search} from "./components/search.js"
import {Filtros} from "./components/filtros.js"

await FoodController.saveProducts()
await FoodController.montarCards()
Search.searchProduct()
Search.homeLogo()
Filtros.filtroTodos()
Filtros.filtroPanificadora()
Filtros.filtroFrutas()
Filtros.filtroBebidas()
