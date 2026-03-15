var status = -1;

function start(c, b, a) {
    if (c == 1) {
        status++
    } else {
        cm.dispose();
        return
    }
    if (status == 0) {
        cm.sendNext("Hello, Chief Knight. Currently, Maple World is in great danger. We need a bigger army to protect this place from the Black Mage. And to build a stronger army, I decided to ally with the Explorer Chiefs. We created the Ultimate Explorer with our combined powers.")
    } else {
        if (status == 1) {
            cm.askYesNo("The Ultimate Explorer starts at Lv. 50 and is born with very special skills. Would you like to be reborn as an Ultimate Explorer?")
        } else {
            if (status == 2) {
                if (!cm.getClient().canMakeCharacter(cm.getPlayer().getWorld())) {
                    cm.sendOk("You cannot make a character without a character slot.")
                } else {
                    cm.sendUltimateExplorer()
                }
                cm.dispose()
            }
        }
    }
}

function end(c, b, a) {};