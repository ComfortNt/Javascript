

const text = document.querySelector(".change");

const names = ["andy" , "bandy" , "candy" , "dandy"];
let counter = 0;

const ChangeText =()=>{

        if(counter >= names.length){

        counter = 0;
        text.innerText = names[counter];
        }else{

         text.innerText = names[counter]; 
        }
        counter++;     
};



        console.log("A" - 1);
        console.log( 2 + "2");
        console.log(2 + "2" - "2" );
        
        const y = 0;
        const z = false;

        console.log(y == z);
        console.log(y === z);
        
        const list = [4,3,2,1];
