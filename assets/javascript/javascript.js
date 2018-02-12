$(document).ready(function(){
	var eminem = {
		name: "Eminem",
		alias: ["Marshall Mathers", "Slim Shady", "M&M"],
		hitpoints: 120,
		attack: 8,
		counter: 15,
	}

	var tupac = {
		name: "2pac",
		alias: ["Tupac", "Makaveli", "Lesane"],
		hitpoints: 100,
		attack: 14,
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
		hitpoints: 180,
		attack: 7,
		counter: 19,
	}

	var playerCharacter = "";
	var computerCharacter;
	var heroOn = false;
	var enemyOn = false;
	var battle = false;
	var heroLife = 0;
	var enemyLife = 0;
	var enemyAttkPower = 0;
	var enemyCounterPower = 0;
	var attkPower = 0;
	var counterPower = 0;
	var round = ["<h3>Round 1</h3>", "<h3>Round 2</h3>", "<h3>Round 3</h3>", "<h3>Winner!</h3>"];
	var index = -1;
	var headcount = 0;

	$(".hero").click(function(){
		$(".hero").addClass("enemy");
		$(".enemy").removeClass("hero");
		if (!heroOn){
		
		playerCharacter = $(this).attr('id');
		$(".arenaText").hide("slow");
		$("#challenger").css("padding-top", "0px");
		$(".instructions").html('<h3>Select Round 1 Opponent</h3>')
		

			if (playerCharacter === "eminem"){
				$("#eminem").hide("slow");
				$("#eminem_hero").addClass("player_selected");
				$("#eminem_hero").removeClass("player");
				$("#challenger").css("background", "darkviolet");
				playerCharacter = eminem;
				heroLife = playerCharacter.hitpoints;
				attkPower = playerCharacter.attack;
				heroOn = true;
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

		$(".player").css("display", "none");

		function toRed(){
			$(".enemy").css("background", "red");
		} 
		setTimeout(toRed, 500);
		}
	
	
		
	$(".enemy").click(function(){
		if (!enemyOn){
			computerCharacter = $(this).attr('id');
			index++;
			$(".instructions").html(round[index]);
			$(".button_spot").css("margin", "20px 0px 0px 0px");
			console.log(computerCharacter);
				$(".defender_text").hide("slow");
				$("#defender").css("padding-top", "0px");
				$("#defender").css("background", "red");
				if (computerCharacter === "eminem"){
					$("#eminem").hide("slow");
					$("#eminem_combatant").addClass("combatant_selected");
					$("#eminem_combatant").removeClass("combatant");				
					computerCharacter = eminem;
					enemyLife = computerCharacter.hitpoints;
					enemyAttkPower = computerCharacter.attack;
					enemyCounterPower = computerCharacter.counter;
					$(".enemy_hp").text("HP: " + computerCharacter.hitpoints);
					enemyOn = true;
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
		$(".attacker").click(function(){
			heroLife = (heroLife - enemyCounterPower);
			console.log(enemyLife);
			if (heroOn && enemyOn){
				if (heroLife < 1){
					alert("You are not the dopest rapper alive");
					location.reload();
					return;
				}
				$(".enemy_hp").text(computerCharacter.enemyLife);
				if (enemyLife > 0){
						enemyLife = (enemyLife - attkPower);
						attkPower = (attkPower * 2);
						$(".hp").text("HP: " + heroLife);
						$(".enemy_hp").text("HP: " + enemyLife);
						$(".attk").text("Attack: " + attkPower);
						console.log("hero" + heroLife);
						console.log("enemy life " + enemyLife);
						console.log("attack" + attkPower);
				} 

				if (enemyLife <= 0){
					$('.combatant_selected').remove();
					$('.defender_text').html('<h5 style="padding-top: 100px">Battle!</h5>');
					$('.defender_text').show();
					enemyOn = false;
					headcount++;
					}
				if (headcount === 3){
					$('.defender_text').html('<h5 style="padding-top: 100px">Dope Rhymes!</h5>');
					alert(playerCharacter.name + " a.k.a. " + playerCharacter.alias[0] + " a.k.a. " + playerCharacter.alias[1] +  " a.k.a. " + playerCharacter.alias[2] + " is the king!");
					location.reload();
				}
			}
		})
})