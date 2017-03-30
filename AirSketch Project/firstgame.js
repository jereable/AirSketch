var user = prompt("You run into a town guard on your way home, he suspects that you stole something from the bank nearby. You are about to get arrested, what will you do? (RUN, FIGHT, or FEINT)").toUpperCase();

switch(user) {
    case 'RUN':
        var run = prompt("Are you a fast runner? (YES or NO)").toUpperCase();
        if(run === 'YES') {
            console.log("You start running and outrun the guard! I guess he should limit those donuts...");
        }
            else {
            console.log("You start running but the guard catches you! You smash your head on the ground, and the guard cuffs you! Poor guy...");
            }
        break;
    case 'FIGHT':
        var fight = prompt("Are you a good fighter? (YES or NO)").toUpperCase();
        var strong = prompt("Are you strong? (YES or NO").toUpperCase();
        if(fight === 'YES' || strong === 'YES') {
            console.log("You beat the shit out of the guard, and walk away like a boss! I guess you should hurry before backup arrives...");
        }
        else {
        console.log("The guard makes a ninja move on you, and cuffs you! Some muay thai, or gym would make good for you...");
        }
        break;
    case 'FEINT':
        var trick = prompt("Are you good at tricking people? (YES or NO)").toUpperCase();
        var smart = prompt("Are you smart? (YES or NO)").toUpperCase();
        if(trick === 'YES' && smart === 'YES') {
            console.log("You trick the guard by throwing a cookie on the ground! The guard drools as he walks to pick it up... You flee from the place, and watch the guard eat the venomous cookie you threw on the ground... I guess he won't be feeling well soon.");
        }
        else {
        console.log("The guard stares at you like you were a stupid donkey, he takes his handcuffs and cuffs you! Next time don't get mindfucked.");
        }
        break;
    default:
        console.log("I didn't understand your choice. Hit Run and try again, this time picking RUN, FIGHT, or FEINT!");
}
