// function shopping(budget){
//     if(budget>0)
//     shoe("Nike:AirForce",100);

// }

function shoe(shoe_response,budget){
    //shoe is working 
    var dict_shoe= {"Nike:AirForce": 100, 
    'Sketcher:SketcherPlus': 40, "Converse":60};

//     var lowest_value=dict["Nike:AirForce"];
//     for(var key in dict){

//     new_value = dict[key];
//     if(lowest_value>new_value){
//        lowest_value = new_value;
//     }
// }
    //console.log(lowest_value);

    var shoe_price = dict_shoe[shoe_response];

    var difference = budget - shoe_price;

    if(difference>=0){
        return cart(difference,shoe_response);
    }
}
let response= InputEvent('Which shoe do you want?');
function pants(pants_response){
    var dict_pants= {"Nike": 80, 
    "Vans": 60, "walmart":20};

    var pants_price = dict_pants[pants_response];

    var left_over = budget - shoe_price - pants_price;

    if(left_over >=0){
        return cart(left_over, pants_response);
    }
}
function tshirt(tshirt_response){
    var dict_pants= {"Nike": 70, 
    "Vans": 50, "walmart":10};

    var tshirt_price = dict_tshirt[tshirt_response];

    var final_left_over = budget - shoe_price - pants_price -tshirt_price;

    if(final_left_over >=0){
        return cart(final_left_over, tshirt_response);
    }
}

function cart(difference, response){

    var cart = [];
    cart.push(response);
    var lowest_value = 40;

    if(difference < lowest_value){
        console.log("Your budget has been reached and checkout");
        console.log(`Remaining balance is : ${difference}`);
        return cart;

    } else { 
    pants(pants_choice);
    } 
    var lowest_value2 = 10;

    if(left_over < lowest_value2){
        console.log("Your budget has been reached and checkout");
        console.log(`Remaining balance is : ${left_over}`);
        return cart;
    } else{ 
        tshirt(tshirt_choice);
    }
        //how to call input to ask what shirt they want;
    }



if (require.main === module) {

    console.log(shoe('Sketcher:SketcherPlus',60));

}
    
  
  
    
  
  module.exports = shoe;
