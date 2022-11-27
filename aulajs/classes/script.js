class Product {

     constructor(name, price, quantity){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
     }

     total(){
        return this.price * this.quantity;
     }

     add(amount) {
        this.quantity += amount;
     }

     remove(amount){
        if(this.quantity >= amount){
            this.quantity -= amount;
        }
     }

     label(){
        return "Dados: " + this.name + ", " + this.price.toFixed(2) + ", " + this.quantity;
     }
}

const p2 = new Product("Monitor", 800.0, 10);

const p3 = new Product("Mouse", 50.0, 4);