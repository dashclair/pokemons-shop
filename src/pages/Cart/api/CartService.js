import { mainApi } from "../../../config/mainApi";

class CartService {
    static instance = new CartService();

    #baseUrl = '/cart';

    getItems(){
        return mainApi.get(this.#baseUrl)
    };

    addItem(item){
        return mainApi.post(`${this.#baseUrl}/item`, item)
    };

    updateItem({id, quantity}){
        return mainApi.patch(`${this.#baseUrl}/item`, {id, quantity})
    };

    deleteItem(id){
        return mainApi.delete(`${this.#baseUrl}/item/${id}`)
    };
};

export default CartService.instance