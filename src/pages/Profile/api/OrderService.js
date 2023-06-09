import { mainApi } from "../../../config/mainApi";

class OrderService {
    static instance = new OrderService();
    
    #baseUrl = '/order';

    getOrderItems(){
        return mainApi.get(this.#baseUrl)
    };

    orderItem(orderInfo){
        return mainApi.post(this.#baseUrl, orderInfo)
    };
} 

export default OrderService.instance;