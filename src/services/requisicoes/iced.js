import {icedCoffeeApi}from "../api";

export async function listIcedCoffe() {
    try {
        const resultado  = await icedCoffeeApi.get('https://api.sampleapis.com/coffee/iced');
        return resultado.data;
        }
        catch (error){
            console.log(error)
            return {}
        }
}
