//global variables

var characters = {



    carrie:        {health: 120, 
                    attack: 8,  
                    counterAttack: 15},

    cujo:         {health: 150, 
                   attack: 8, 
                   counterAttack: 20},

    jack:          {health: 180, 
                    attack: 7,  
                    counterAttack: 20},

    penny:         {health: 100, 
                    attack: 14,
                    counterAttack: 5}
}



var isCharacterPicked = false;
var isEnemyPicked = false;



$(document).ready(function(){





//picking first character, move that character to "your characters"
$("#characters").on('click', function(event) {
    $("#yourCharacter").append(event.target);
    $("#aEnemies").append($("#characters img")) 
    player = characters[event.target.id]
   
 })


//picking the monster, move monster to defender
$("#aEnemies").on('click', function(event) {
    $("#aEnemies").append($(".card"));
    $("#defender").append(event.target);
    monster = characters[event.target.id]
    
 })



//  change health and attack
 $(".btn").on('click', function() {
    player.health = player.health - monster.counterAttack;
    monster.health = monster.health - player.attack;
   
 })

// if there are no more monsters, you done. if there are, pick the next one.

if (monster.health <= 0) {
    $("#defender img").remove();
    if ($('#aEnemies img').length == 0){
            $("#messages").text("Live To See Another Day");
        }
        else if (player.health <= 0) {
        $("#messages").text("time to float");
    }
         else  $("#messages").text("pick your next nightmare");
    }

})







