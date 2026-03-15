importPackage(Packages.client);
var status = -1;

function start(c, b, a) {
    status++;
    if (c != 1) {
        if (b == 1 && c == 0) {
            status -= 2
        } else {
            cm.sendOk("Hmmm... you must be unsure of your combat skills. We'll be here waiting for you, so come see us when you're ready.");
            cm.dispose();
            return
        }
    }
    if (status == 0) {
        cm.askYesNo("We need your help, noble explorer. Our kingdom is currently facing a big threat, and we are in desperate need of a courageous explorer willing to fight for us, and that's how you ended up here. Please understand, though, that since we need place our faith in you, we'll have to test your skills first before we can stand firmly behind you. Will it be okay for you to do this for us?")
    } else {
        if (status == 1) {
            cm.forceStartQuest();
            cm.sendOk("Keep moving forward, and you'll see #bRenegade Spores#k, the Spores that turned their backs on the Kingdom of Mushroom. We'd appreciate it if you can teach them a lesson or two, and bring back #b50 Mutated Spores#k in return.");
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
        cm.sendOk("Did you teach those Renegade Spores a lesson?")
    } else {
        if (status == 1) {
            cm.forceCompleteQuest();
            cm.gainExp(11500);
            cm.gainItem(4000499, -50);
            cm.sendOk("That was amazing. I apologize for doubting your abilities. Please save our Kingdom of Mushroom from this crisis!");
            cm.dispose()
        }
    }
};