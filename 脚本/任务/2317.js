importPackage(Packages.client);
var status = -1;

function start(c, b, a) {
    status++;
    if (c != 1) {
        if (b == 1 && c == 0) {
            status -= 2
        } else {
            cm.sendOk("Breaking through the barrier will require the Poison Mushroom Cap. Talk to me when you change your mind.");
            cm.dispose();
            return
        }
    }
    if (status == 0) {
        cm.askYesNo("Ah！If I am not mistaken, I saw the #bKiller Mushroom Spores#k way back when I was a kid in a book. Now I remember... it's made out of extracts of powerful poisons from Poison Mushrooms, which means you'll need some Poison Mushroom Caps. If you can get me those, I think I'll be able to make it.")
    } else {
        if (status == 1) {
            cm.forceStartQuest();
            cm.sendOk("Please defeat #bPoison Mushrooms#k and bring back #b100 Poison Mushroom Caps#k in return.");
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
        cm.sendOk("Have you gathered up the 100 Poison Mushroom Caps like I asked you to get?")
    } else {
        if (status == 1) {
            cm.gainExp(13500);
            cm.gainItem(4000500, -100);
            cm.sendOk("I am amazed that you were able to gather up these 100 Poison Mushroom Caps, which is considered a difficult feat. I think I'll be able to make #bKiller Mushroom Spores#k our of these.");
            cm.forceCompleteQuest();
            cm.dispose()
        }
    }
};