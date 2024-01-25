class Hero{
    constructor (name, age, type){
        this.name = name;
        this.age = age;
        this.type = type;
    }
    attack(){
        let attackname 
        if (this.type === "mago" ) {
            attackname = "magia"
        } else if (this.type === "guerreiro"){
            attackname = "espadada"
        } else if (this.type === "monge"){
            attackname = "Chutes"
        } else if(this.type === "ninja"){
            attackname = "Shurikens de Fogo"
        }
        console.log (`O ${this.type}, ${this.name}, atacou usando ${attackname}.`)
    }
}

let mago = new Hero("Gandalf, o Cinzento", 657, "mago")
mago.attack()