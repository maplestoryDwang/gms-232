importPackage(Packages.client);
var status = -1;

function start(c, b, a) {
    status++;
    if (c != 1) {
        if (b == 1 && c == 0) {
            status -= 2
        } else {
            cm.sendOk("Why did you even ask if you were going to say no to this?#");
            cm.dispose();
            return
        }
    }
    if (status == 0) {
        cm.askYesNo("I think i've heard of a potion that breaks these kinds of barriers. I think it's called #bKiller Mushroom Spores#k? Hmmm... outside, you'll find the Mushroom Scholar #bScarrs#k waiting outside. #bScarrs#k is an expert on mushrooms, so go talk to him.")
    } else {
        if (status == 1) {
            cm.forceStartQuest();
            cm.sendOk("I am confident #kScarrs#k will do everything to help you.");
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
        cm.sendOk("Ah, so you're the explorer people were talking about. I'm #bScarrs, the Royal Mushroom Scholar#k representing the Kingdom of Mushroom. So you need some #kKiller Mushroom Spores#k?")
    } else {
        if (status == 1) {
            cm.gainExp(4200);
            cm.sendOk("#kKiller Mushroom Spores#k... I think i've heard of them before...");
            cm.forceCompleteQuest();
            cm.dispose()
        }
    }
};