// Exportamos por defecto la clase Pokemon
export default class Champ {
    // Constructor que recibe como parámetro data que contiene los datos de los Pokemon que obtenemos desde la API
    constructor(data) {
        this.name = data.name; 
        this.id = data.id;
        this.skin = "";
        this.barra = data.partype;    // Pokemon de frente
        this.title = data.title;      // Pokemon de espaldas
        this.img = data.image.full;   // Tipo del pokemon (Devuelve un array)
    }
    setSkin(img){
        this.skin = img
    }
    setImg(img) {
        this.img = img;
    }
}