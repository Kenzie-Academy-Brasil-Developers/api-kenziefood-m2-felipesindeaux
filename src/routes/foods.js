class FoodRoutes {

    static ulrAPI = 'https://kenzie-food-api.herokuapp.com'

    static async get() {
        let response = await fetch(`${this.ulrAPI}/product`)
        let data     = await response.json()
        return data
    }

    static async getItemById(id){
        let response = await fetch(`${this.ulrAPI}/product/${id}`)
        let data     = await response.json()
        return data
    }

}

export { FoodRoutes }