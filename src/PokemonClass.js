class Pokemon {
    getTypeString(typesArray) {
        var tempTypes = [];
        typesArray.forEach(t =>  tempTypes.push(t.type.name));
        return tempTypes.join();
    }
    
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.image = data.sprites.front_default;
        this.types = this.getTypeString(data.types);
    }
}

export default Pokemon;