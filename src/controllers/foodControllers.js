import { FoodRoutes } from "../routes/foods.js";
import { db } from "../mock/db.js"
import { Cards } from "../components/cards.js"

class FoodController {
    
    static saveProducts(){
        
        FoodRoutes.get().then((response) => JSON.parse(response)).then((data) => {
            console.log(data)
            data.forEach(produto => {
                db.foods.push(produto)
            })
        })
        console.log(db.foods)
    }

    static montarCards(){

            Cards.criarCards(db)
            
    }

    

}

export {FoodController}