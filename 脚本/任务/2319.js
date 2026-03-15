importPackage(Packages.client);
var status = -1;

function start(c, b, a) {
    status++;
    if (c != 1) {
        if (b == 1 && c == 0) {
            status -= 2
        } else {
            cm.sendOk("I know it's not a tough task, so come back to me if you're ready.");
            cm.dispose();
            return
        }
    }
    if (status == 0) {
        cm.askYesNo("Oh, I almost forgot！What was I thinking? I need you to hand this #bSample of Killer Mushroom Spores#k to #bMinister of Magic#k and report the results.")
    } else {
        if (status == 1) {
            cm.forceStartQuest();
            cm.gainItem(4032389, 1);
            cm.sendOk("The #bMinister of Magic#k told me once the #bKiller Mushroom Spores#k is complete, that he'll want a sample of it as well. I'll give you the sample; now go please hand it in to our #bMinister of Magic.#k");
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
        cm.sendOk("Are the #bKiller Mushroom Spores#k finally completed?")
    } else {
        if (status == 1) {
            cm.gainExp(4200);
            cm.gainItem(4032389, -1);
            cm.sendOk("Okay, so this is the #bKiller Mushroom Spores.#k Thank you, thank you, and please tell #bScarrs#k the same.");
            cm.forceCompleteQuest();
            cm.dispose()
        }
    }
};