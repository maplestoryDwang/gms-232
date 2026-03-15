importPackage(Packages.client);
var status = -1;

function start(c, b, a) {
    status++;
    if (c != 1) {
        if (b == 1 && c == 0) {
            status -= 2
        } else {
            cm.sendOk("You don't seem to follow instructions well. Come see me when you are ready.");
            cm.dispose();
            return
        }
    }
    if (status == 0) {
        cm.askYesNo("Now you'll be able to penetrate the spiny vine barrier of Mushroom Forest, but before that, #bMinister of Home Affairs#k wants to have a word with you. Please go see him immediately.")
    } else {
        if (status == 1) {
            cm.forceStartQuest();
            cm.sendOk("Good luck.");
            cm.dispose()
        }
    }
}

function end(c, b, a) {
    status++;
    if (c != 1) {
        if (b == 1 && c == 0) {
            status -= 2
        } else {
            cm.dispose();
            return
        }
    }
    if (status == 0) {
        cm.sendOk("I have been keeping up on your fabulour work. I am aware that you have successfully created the #bKiller Mushroom Spores#k, which penetrates through the unpenetrable barrier of the forest. Congratulations!")
    } else {
        if (status == 1) {
            cm.gainExp(2500);
            cm.sendOk("The problem now is to figure out how to enter the castle.");
            cm.forceCompleteQuest();
            cm.dispose()
        }
    }
};