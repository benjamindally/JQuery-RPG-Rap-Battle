$(document).ready(function(){
	// var objects that define players
	var eminem = {
		name: "Eminem",
		alias: ["Marshall Mathers", "Slim Shady", "M&M"],
		hitpoints: 130,
		attack: 11,
		counter: 15,
	}

	var tupac = {
		name: "2pac",
		alias: ["Tupac", "Makaveli", "Lesane"],
		hitpoints: 105,
		attack: 35,
		counter: 5,
	}

	var jayZ = {
		name: "Jay-Z",
		alias: ["Jazzy", "Hova", "Jigga"],
		hitpoints: 150,
		attack: 8,
		counter: 20,
	}

	var lamar = {
		name: "Kendrick Lamar",
		alias: ["K. Dot", "Kendrick Duckworth", "Kung Fu Kenny"],
		hitpoints: 170,
		attack: 7,
		counter: 19,
	}
	//various var needed to hold information
	var playerCharacter = "";//holds the information from the above var once the corresponding hero is selected
	var computerCharacter;//holds the inforation from the above var once the corresponding enemy is selected
	var heroOn = false;//lets the computer know if a hero is already selected or not
	var enemyOn = false;//lets the computer know if an enemy is already selected or not
	var heroLife = 0;//makes it so the hero's life can be given a value
	var enemyLife = 0;//same as above but for enemy
	var enemyAttkPower = 0;//holds enemy attack power
	var enemyCounterPower = 0;// holds enemy counter attack power
	var attkPower = 0;//holds hero attack power
	var counterPower = 0;//holds hero counter attack power (not really needed right now but maybe later)
	var round = ["<h3>Round 1</h3>", "<h3>Round 2</h3>", "<h3>Round 3</h3>", "<h3>Winner!</h3>"];//goes through rounds
	var index = -1;//makes it so that the rounds change according to index change
	var headcount = 0;//tells computer how many enemies have been dispatched
	var themeMusic = document.getElementById('load_sound');//various sounds. First on hero selection, then winning, then losing, then on enemy selection
	var winnerMusic = document.getElementById('winning_sound');
	var loserMusic = document.getElementById('losing_sound');	
	var enemyMusic = document.getElementById('enemy_sound');
	
	$(".hero").click(function(){
		//switches off hero class so player card cannot be selected once hero has been selected
		$(".hero").addClass("enemy");
		$(".enemy").removeClass("hero");
		//if no hero is assigned, this will assign the hero that is clicked on to playerCharacter var and play muisc
		if (!heroOn){
		themeMusic.play();
		playerCharacter = $(this).attr('id');
		//this will hide the player card in the intial selection area, ready the battle arena, and change instructions
		$(".arenaText").hide("slow");
		$("#challenger").css("padding-top", "0px");
		$(".instructions").html('<h3>Select Round 1 Opponent</h3>');
		
			if (playerCharacter === "eminem"){//comments for next lines 66-101 repeated for each character
				$("#eminem").hide("slow");//hides card in initial selection area
				$("#eminem_hero").addClass("player_selected");//displays card in battle arena
				$("#eminem_hero").removeClass("player");//removes the hidden visibility so that it can be displayed
				$("#challenger").css("background", "darkviolet");//changes the background of the battle arena to darkviolet
				playerCharacter = eminem;//this links the playerCharcter var to the stats in the objects above
				heroLife = playerCharacter.hitpoints;//assigns the hitpoints from the var to the global variable
				attkPower = playerCharacter.attack;//assigns the attack power to the global variable
				heroOn = true;//turns herOn to true so that another hero cannot be selected
			} else if (playerCharacter === "tupac"){
				$("#tupac").hide("slow");
				$("#tupac_hero").addClass("player_selected");
				$("#tupac_hero").removeClass("player");
				$("#challenger").css("background", "darkviolet");
				playerCharacter = tupac;
				heroLife = playerCharacter.hitpoints;
				attkPower = playerCharacter.attack;
				heroOn = true;
			} else if (playerCharacter === "jayz"){
				$("#jayz").hide("slow");
				$("#jayz_hero").addClass("player_selected");
				$("#jayz_hero").removeClass("player");
				$("#challenger").css("background", "darkviolet");
				playerCharacter = jayZ;
				heroLife = playerCharacter.hitpoints;
				attkPower = playerCharacter.attack;
				heroOn = true;
			} else if (playerCharacter = "lamar"){
				$("#lamar").hide("slow");
				$("#lamar_hero").addClass("player_selected");
				$("#lamar_hero").removeClass("player");
				$("#challenger").css("background", "darkviolet");
				playerCharacter = lamar;
				heroLife = playerCharacter.hitpoints;
				attkPower = playerCharacter.attack;
				heroOn = true;
			}

		$(".player").css("display", "none");//makes sure no other player cards are displayed 

		function toRed(){//changes the background of the cards in the initial area to red
			$(".enemy").css("background", "red");
		} 
		setTimeout(toRed, 500);//waits to change color until after the player card disappears
		}
	
	
		
		$(".enemy").click(function(){
			if (!enemyOn){//makes sure another enemy is not currently selected
				enemyMusic.play();//plays a little fun music
				computerCharacter = $(this).attr('id');//figures out the id of the enemy selected
				index++;//iterates an index so that the instructions can be changed
				$(".instructions").html(round[index]);//displays the different round informaiton
				$(".button_spot").css("margin", "20px 0px 0px 0px");//when the screen is below a certain width, the button is all off and this fixes that in Chrome
				console.log(computerCharacter);
					$(".defender_text").hide("slow");//hides the text in the defender areana area
					$("#defender").css("padding-top", "0px");//gets rid of the padding. Probably should be a new class but this was easier this time
					$("#defender").css("background", "red");//changes the background color. Also should probably be a new class, but, again, easier this way for now
					//125-166 similar comments for each
					if (computerCharacter === "eminem"){//matches player id to key word to determine selection
						$("#eminem").hide("slow");//hides the picture in the initial area
						$("#eminem_combatant").addClass("combatant_selected");//makes it so the picture is displayed in the defender arean
						$("#eminem_combatant").removeClass("combatant"); //removes the class that will hide the other pictures so that this picture is not hidden
						computerCharacter = eminem; //assigns var stats to be used
						enemyLife = computerCharacter.hitpoints; //assigns the hitpoints from the var to the global variable
						enemyAttkPower = computerCharacter.attack;//assigns the attack power to the global variable. I don't think i need this at this point...
						enemyCounterPower = computerCharacter.counter;//assigns the counter attack power to the global variable to be used in the calculation later
						$(".enemy_hp").text("HP: " + computerCharacter.hitpoints);//updates the enemy's life so that a negative number isn't displayed prior to round 2 battle beginning
						enemyOn = true;//makes it so that another enemy cannot be selected while current enemy is actively battling
					} else if (computerCharacter === "tupac"){
						$("#tupac").hide("slow");
						$("#tupac_combatant").addClass("combatant_selected");
						$("#tupac_combatant").removeClass("combatant");
						computerCharacter = tupac;
						enemyLife = computerCharacter.hitpoints;
						enemyAttkPower = computerCharacter.attack;
						enemyCounterPower = computerCharacter.counter;
						$(".enemy_hp").text("HP: " + computerCharacter.hitpoints);
						enemyOn = true;
					} else if (computerCharacter === "jayz"){
						$("#jayz").hide("slow");
						$("#jayz_combatant").addClass("combatant_selected");
						$("#jayz_combatant").removeClass("combatant");
						computerCharacter = jayZ;
						enemyLife = computerCharacter.hitpoints;
						enemyAttkPower = computerCharacter.attack;
						enemyCounterPower = computerCharacter.counter;
						$(".enemy_hp").text("HP: " + computerCharacter.hitpoints);
						console.log(computerCharacter.hitpoints);
						enemyOn = true;
					} else if (computerCharacter = "lamar"){
						$("#lamar").hide("slow");
						$("#lamar_combatant").addClass("combatant_selected");
						$("#lamar_combatant").removeClass("combatant");
						computerCharacter = lamar;
						enemyLife = computerCharacter.hitpoints;
						enemyAttkPower = computerCharacter.attack;
						enemyCounterPower = computerCharacter.counter;
						$(".enemy_hp").text("HP: " + computerCharacter.hitpoints);
						enemyOn = true;
					}
				}
		})
	})
	//function that will make the players battle
	$(".attacker").click(function(){
		heroLife = (heroLife - enemyCounterPower);//subtracts the hero's life from the coutner attack power of the enemy
		console.log(enemyLife);
		if (heroOn && enemyOn){//this makes the game play out only if a hero and enemy are both active
			if (heroLife < 1){//this is what happens if the hero's life is less than 1 (dead)
				loserMusic.play();//plays music to alert user they have died
				alert("You are not illist.");//alerts user that they are in fact not the illist rapper around and lost
				location.reload();//reloads the page to play again
				return;//ends the function so nothring more can happen. probably not necessary what with the reload and all, but better safe than sorry no?
			}
			$(".enemy_hp").text(computerCharacter.enemyLife);//updates the enemy's life 
					enemyLife = (enemyLife - attkPower);//the enemey lessend by the amount of the hero's attack power
					attkPower = (attkPower + playerCharacter.attack);//the hero's attack power is increased by the initial attack power amount
					$(".hp").text("HP: " + heroLife);//the hero's hp is updated so the user knows where they stand
					$(".enemy_hp").text("HP: " + enemyLife);//the enemey's hp is updated
					$(".attk").text("Attack: " + attkPower);//the new attack power of the hero is updated
					console.log("hero" + heroLife);//logs so that programmer knows they're on the right track
					console.log("enemy life " + enemyLife);
					console.log("attack" + attkPower);
			} 

			if (enemyLife <= 0){//this is what happens when a hero kills a player
				$('.combatant_selected').remove();//the enemy is removed from the arena
				$('.defender_text').html('<h5 style="padding-top: 100px">Battle!</h5>');//text is displayed in the enemies place
				$('.defender_text').show();//text is shown instead of hidden
				enemyOn = false;//makes it so that an enemy can be selected again
				headcount++;//increases the head count so that the user is closer to winning
				}
			if (headcount === 3){//this happens if the user kills all the opponents
				$('.defender_text').html('<h5 style="padding-top: 100px">Dope Rhymes!</h5>');//dislays new text so the user knows they had dope rhymes and won
				winnerMusic.play();//plays some winning music
				alert(playerCharacter.name + " a.k.a. " + playerCharacter.alias[0] + " a.k.a. " + playerCharacter.alias[1] +  " a.k.a. " + playerCharacter.alias[2] + " is the king!");//alerts user that they have won
				location.reload();//reloads the page so they can play again
			}
		})
})