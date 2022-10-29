class Product{
    constructor(code, name, amount, cost){
        this.code = code;
        this.name = name;
        this.amount = amount;
        this.cost = cost;
  
    }
  
    info(){
        return `Código: ${this.code()}  Nombre: ${this.name()}  Cantidad: ${this.amount()}  Costo: ${this.cost()}`
    }


    getCode(){
        return `${this.code()}`
    }


  
  
  }


  class Inventory{
    constructor(){
        this.productos = []
    }


  

    add(product){
        this.inventory.push(product)
    }    

        

    list(){
        let list = "";
         for(let i = 0; i = this.inventory.length; i++){
        list += this.inventory[i].info();
   }
    return list;

    }
    
    

   

    reverseList(){
        let list = ""
        for(let i = 0; i = this.inventory.length -1; i--)
        list *= this.inventory[i],info();
    }



    removeData(code){
        for(let i = 0; i < this.inventario.length; i++){
            if(code === this.inventario[i].getCode()){
            
                for(let k = i; k < this.inventario.length; k++)
                {
                    Product[k] = Product[k+1];
                }
                this.inventario.pop()

                } else{
                 return null;
            
                }
    
           }

    }



    search(code){
            let left = productos[productos.length - 1]
            let right = productos[0]
            let middle = Math.floor((left + right) / 2)
            if(productos[middle] === code){
                return middle;
            }
            if(productos[middle] < code){
                return search(productos, middle + 1, right, code)
            }else{
                return search(productos, left, middle - 1, code)
            }
    }


}
    









let inventory2 = new Inventory();

const agregar = document.getElementById("addBtn");
agregar.addEventListener('click', function(){
    let name=document.getElementById("name").value;
    let code = document.getElementById("code").value;
    let cantidad = document.getElementById("amount").value;
    let cost = document.getElementById("price").value;

    let pNuevo = new Product(name, code, cantidad, cost);
     inventory2.add(pNuevo);
     document.getElementById("listOfProducts").innerHTML = "<p>Se agrego el producto correctamente</p>"
})

const remove =document.getElementById("deleteBtn");
remove.addEventListener('click', function(){
    const Delete = inventory2.removeData(document.getElementById("productDel").value)
    document.getElementById("remove").value = ``
    if(Delete == true){
        document.getElementById("list").innerHTML = "<h4> El prodcuto se ha eliminado </h4>"
        }else{
            document.getElementById("list").innerHTML = "<h4> El producto no existe </h4>"
        }
})



// const listIndex = document.getElementById("insertAt");
// insertAt.addEventListener('click', function(){

    

// })

const search=document.getElementById("search");
search.addEventListener('click', function(){
    const code = inventory2.search(document.getElementById("searchCode").value)
    document.getElementById("searchCode").value = ``
    if(code != null){
        return `${code.info}`
    }else{
        document.getElementById("list").innerHTML = `<h4>El producto no existe</h4>`

    }


    
})

const List=document.getElementById("listBtn"); 
List.addEventListener('click', function(){
    if(inventory2.list()){
        document.getElementById("listOfProducts").innerHTML = `${inventory2.list()}`

    }else{
        document.getElementById("listOfProducts").innerHTML = "<h4> No hay productos en nuestra bodega </h4>"
    }
})

const reverseList=document.getElementById("reverseList");
reverseList.addEventListener('click', function(){
    if(inventory2.list()){
        document.getElementById("listOfProducts").innerHTML = `${inventory2.reverseList()}`

    }else{
        document.getElementById("listOfProducts").innerHTML = "<h4> No hay productos en nuestra bodega </h4>"
    }
    
    
})