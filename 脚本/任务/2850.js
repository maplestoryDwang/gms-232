var status = -1;

function start(c, b, a) {
    if (c == 1) {
        status++
    } else {
        status--
    }
    if (status == 0) {
        cm.askYesNo("If you want to survive in Kerning City, you need to get stronger. Perhaps If you can complete my training, you'll stand a chance...")
    } else {
        if (status == 1) {
            cm.askYesNo("The training is simple enough. #bJust eliminate the Octopuses in the Thieves' Hideout. Shall we begin#k?")
        } else {
            if (status == 2) {
                cm.warp(910310100, 0);
                cm.forceStartQuest();
                cm.dispose()
            }
        }
    }
}

function end(c, b, a) {
    if (c == 0 && b == 0) {
        status--
    } else {
        if (c == -1) {
            cm.dispose();
            return
        } else {
            status++
        }
    }
    if (status == 0) {
        cm.sendNext("Eliminate all the Octopuses here. Even you should be able to handle this...")
    } else {
        if (status == 1) {
            cm.sendOk("Nevermind, I killed them for ye.")
        } else {
            if (status == 2) {
                cm.warp(103000003);
                cm.gainExp(1242);
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};