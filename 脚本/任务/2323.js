importPackage(Packages.client);
var status = -1;

function start(c, b, a) {
    status++;
    if (c != 1) {
        if (b == 1 && c == 0) {
            status -= 2
        } else {
            cm.sendOk("This will be the only way for you to enter the castle. Please think it through");
            cm.dispose();
            return
        }
    }
    if (status == 0) {
        cm.sendNext("Ah！There might be a way... if you can utilize the spine vine that we have grown for the protection of our castle, then you just might be able to enter the premise!")
    } else {
        if (status == 1) {
            cm.askYesNo("If you can somehow eliminate the spines from the spine vine, then you'll be able to climb over the castle wall using the vine. Of course, that'll also require a Vine Remover...")
        } else {
            if (status == 2) {
                cm.sendOk("The #bSpine Remover#k is created out of extracts from mysterious herbs at the highlands of El Naths. King Pepe used these herbs to intoxicate the pigs and take over the Mushroom Forest. #bIntoxicated Pig Tail#k is where you'll find the extracts of the herb. Please gather up #b100 Intoxicated Pig Tails#k and take them over to #bMinister of Magic.#k")
            } else {
                if (status == 3) {
                    cm.gainExp(11000);
                    cm.sendOk("Good job navigating through the area.");
                    cm.forceCompleteQuest();
                    cm.dispose()
                }
            }
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
        cm.sendOk("Hmmm I see... so they have completely shut off the entrance and everything.")
    } else {
        if (status == 1) {
            cm.gainExp(11000);
            cm.sendOk("Good job navigating through the area.");
            cm.forceCompleteQuest();
            cm.dispose()
        }
    }
};