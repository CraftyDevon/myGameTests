var harryPotter = new Wizard();

var ginnyWand = new Wand();

var hungarianHorntail = new Dragon();


         




function Wizard(wandType, speciality, alliegance, wizLife){
  this.wandType = wandType || "elm";
  this.speciality = speciality || "transfiguration";
  this.alliegance = alliegance || "Hogwarts";
  this.wizLife = wizLife || 100;

    this.addDamage = function(dragon) {
      if (this.wizLife <= 0) {
        console.log("im in add damage if less eq to this.life");
        this.ability = "none";
        alert("You're dead");
      }
      this.wizLife = this.wizLife - dragon.damage;

    };

      this.heal = function(target){
    $( ".healcasttext" ).append( "<h4>You've healed yourself!</h4>" );
    this.wizLife = 100;
      


}

}// end wizard function

function Wand(woodType, coreMaterial, spell, damage){
    this.woodType = woodType || "elm";
    this.coreMaterial = coreMaterial || "Phoenix Feather";
    this.spell = spell || "DeathStrike";
    this.damage = damage || 50;
  
      this.wizCast = function(target) {
       $( ".spellcasttext" ).append( "<h4>You attack the Hungarian Horntail!!</h4>" );

      var chance = Math.floor(Math.random() * 10);
      console.log(chance);
      if (chance < 3) {
        target.addWizDamage(this);
      }
    };

}//end wands function




function Dragon(name, weakness, ability, life, damage){
  this.name = name || "Norbert";
  this.weakness = weakness || "groin shot";
  this.ability = ability || "claw";
  this.life = life || 100;
  this.damage = damage || 30;

this.maul = function(target) {
        $( ".dragonmaul" ).append( "<h4>The Hungarian Horntail mauls you!</h4>" );
      var chance = Math.floor(Math.random() * 10);
      console.log(chance);
      if (chance < 3) {
        target.addDamage(this);
      }
    };

      this.addWizDamage = function(wiz) {
      if (this.life <= 0) {
        console.log("im in add damage if less eq to this.life");
        this.ability = "none";
        alert("You killed the Hungarian Horntail!");
      }
      this.life = this.life - wiz.damage;

    };

}//end MagicalBeast function



