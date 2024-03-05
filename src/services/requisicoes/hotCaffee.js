import api from "../api";

export async function listHotCoffe() {
    try {
        const resultado  = await api.get('https://api.sampleapis.com/coffee/hot');
        return resultado.data;
        }
        catch (error){
            console.log(error)
            return {}
        }
}