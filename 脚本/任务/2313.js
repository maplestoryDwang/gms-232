importPackage(Packages.client);
var status = -1;

function start(c, b, a) {
    status++;
    if (c != 1) {
        if (b == 1 && c == 0) {
            status -= 2
        } else {
            cm.sendOk("There's not much time. Please hurry.");
            cm.dispose();
            return
        }
    }
    if (status == 0) {
        cm.askYesNo("I have told our #bMinister of Home Affairs#k of your abilities. Please go pay a visit to him immediately.")
    } else {
        if (status == 1) {
            cm.forceStartQuest();
            cm.sendOk("Save our kingdom！We believe in you!");
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
        cm.forceCompleteQuest();
        cm.gainExp(4000);
        cm.dispose()
    }
};