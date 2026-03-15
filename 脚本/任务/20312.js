var status = -1;

function start(c, b, a) {
    if (c == 0 && status == 1) {
        cm.sendNext("You are not ready yet.");
        cm.dispose();
        return
    } else {
        if (c == 0) {
            status--
        } else {
            status++
        }
    }
    if (status == 0) {
        cm.sendNext("The jewel you brought back from the Transformer is the tear of the Divine Bird. It's the crystal of it's power. If the Black Wizard has his hands on this, then spells doom for all of us.")
    } else {
        if (status == 1) {
            cm.askYesNo("For your effort in preventing a potentially serious disaster, the Godess has bestowed upon a new title for you. Are you ready to accept it?")
        } else {
            if (status == 2) {
                if (cm.getPlayerStat("RSP") > (cm.getPlayerStat("LVL") - 70) * 3) {
                    cm.sendNext("You still have way too much #bSP#k with you. You can't earn a new title like that. I strongly urge you to use more SP on your 1st and second level skills.")
                } else {
                    if (cm.canHold(1142068)) {
                        cm.gainItem(1142068, 1);
                        cm.changeJob(1211);
                        cm.sendOk(", as of this moment, you are now the Knight Sergeant. From this moment on, you shall carry yourself with dignity and respect befitting your new title The Knight Sergeant of Knights of cygnus. May your glory shines as bright as it is right now.")
                    } else {
                        cm.sendOk("Please make space in your inventory.")
                    }
                }
                cm.dispose()
            }
        }
    }
}

function end(c, b, a) {};