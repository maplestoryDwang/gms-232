importPackage(Packages.client);
var status = -1;

function start(c, b, a) {
    status++;
    if (c != 1) {
        if (b == 1 && c == 0) {
            status -= 2
        } else {
            cm.sendOk("I understand it's not an easy task, but I can't make #bKiller Mushroom Spores#k without them. Please reconsider.");
            cm.dispose();
            return
        }
    }
    if (status == 0) {
        cm.askYesNo("Hmmm... I looked into the making of the Spores while you were gathering up the Poison Mushroom Caps, and realised that we'll need more materials for it. I want you to gather up one more set of items. Can you do it?")
    } else {
        if (status == 1) {
            cm.forceStartQuest();
            cm.sendOk("Okay, I want you to defeat the Regenade Spores and bring back #b50 Mutated Spores#k in return.");
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
        cm.sendOk("Did you gather up all the necessary ingredients for it?")
    } else {
        if (status == 1) {
            cm.gainExp(11500);
            cm.gainItem(4000499, -50);
            cm.sendNext("Okay, these should be enough for me to make the #bKiller Mushroom Spores.#k Please hold on for a bit.");
            cm.forceCompleteQuest();
            cm.gainItem(2430014, 1)
        } else {
            if (status == 2) {
                cm.sendPrev("Okay, here are the Killer Mushroom Spores. Hopefully this will be enough for you to save our princess and help regain our kingdom. Good luck!");
                cm.dispose()
            }
        }
    }
};