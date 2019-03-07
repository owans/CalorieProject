//implement CRUD functionality with local storage
const storageBox = (function(){

    return{
        storeCalorie: function(food){
            let foods;
            localStorage.setItem('food', JSON.stringify(food));
                if(localStorage.getItem('foods') === null){
                    foods = [];
                    foods.push(food);
                }else{
                    foods = JSON.parse(localStorage.getItem('foods'));

                    foods.push(foods);

                    localStorage.setItem('food', JSON.stringify(food));
                }
        },
        getCalorie: function(food){
            let foods;
            if(localStorage.getItem('foods') === null){
                foods = [];
                foods.push(food);
            }else{
                foods = JSON.parse(localStorage.getItem('foods'));
            }
            return foods;
        },
        updateCalorie: function(updatedCalorie){
            let foods = JSON.parse(localStorage.getItem('foods'));

            foods.map(function(food, index){
                if(updatedCalorie.id === food.id){
                    foods.splice(index, 1, updatedCalorie);
                }
                return food.id;
            })
            localStorage.setItem('food', JSON.stringify(food));
        },
        deleteCalorie: function(id){
            let foods = JSON.parse(localStorage.getItem('foods'));

            foods.map(function(food, index){
                if(id === food.id){
                    foods.splice(index, 1);
                }
            });
            localStorage.setItem('food', JSON.stringify(food));
        },
        clearCalorie: function(){
            localStorage.removeItem('foods');
        }
    }
})();

function show_change(){
    document.getElementById('update').style.display = "block";
    document.getElementById('delete').style.display = "block";
    document.getElementById('back').style.display ="block";
}