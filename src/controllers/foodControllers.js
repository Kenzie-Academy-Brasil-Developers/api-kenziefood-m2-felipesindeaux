import FoodRoutes from "../routes/foods.js";
import db from "../mock/db.js"
import Cards from "../components/cards.js"
import Filtros from "../components/filtros.js"
import Search from "../components/search.js"

class FoodController {
    
    static async saveProducts(){
        
        await FoodRoutes.get().then((data) => {
            data.forEach(produto => {
                db.foods.push(produto)
            })
        })
    }

    static async montarCards(){

            await Cards.criarCards(db.foods)
            
    }

    static startButtonsEventsListeners(){

        Search.searchProduct()
        // Search.filtrarAutomaticamente()
        Search.homeLogo()
        Filtros.filtroTodos()
        Filtros.filtroPanificadora()
        Filtros.filtroFrutas()
        Filtros.filtroBebidas()


    }

}

export default FoodController 