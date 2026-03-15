importPackage(Packages.client);
var status = -1;

function start(c, b, a) {
    status++;
    if (c != 1) {
        if (b == 1 && c == 0) {
            status -= 2
        } else {
            cm.sendOk("I wanted you to personally give this piece of good news to #bBruce#k, but I understand if you're busy.");
            cm.dispose();
            return
        }
    }
    if (status == 0) {
        cm.askYesNo("I have just one more request for you. Would you like to take a listen?")
    } else {
        if (status == 1) {
            cm.forceStartQuest();
            cm.gainItem(4032389, 1);
            cm.sendOk("To be honest, these #bKiller Mushroom Spores#k are not completely out of my own work. Do you remember #bBruce#k from #bHenesys#k? I have been friends with him since childhood, and #bKiller Mushroom Spores#k was completed after he shared the results of his studies with me. This was all thanks to him, so I'd like for you to give this to him for me.");
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
        cm.sendOk("Oh！You're here on behalf of #bScarrs#k? \r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#fUI/UIWindow.img/QuestIcon/8/0# 8800 exp")
    } else {
        if (status == 1) {
            cm.gainExp(8800);
            cm.gainItem(4032389, -1);
            cm.sendOk("Ahh, so this is the #bKiller Mushroom Spores#k that I was working on in the past. I had a tough time gathering up the ingredients, so I left it in theory only, but he was able to complete it, with a sample to show for as well. Please tell him I appreciate his good work.");
            cm.forceCompleteQuest();
            cm.dispose()
        }
    }
};