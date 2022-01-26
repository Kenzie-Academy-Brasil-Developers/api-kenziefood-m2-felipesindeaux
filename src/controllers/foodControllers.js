import { FoodRoutes } from "../routes/foods.js";
import { db } from "../mock/db.js"
import { Cards } from "../components/cards.js"

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

}

export {FoodController}