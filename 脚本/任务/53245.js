var status = 0;

function complete(c, b, a) {
    status++;
    switch (status) {
        case 1:
            cm.forceCompleteQuest();
            cm.setInGameDirectionMode(true);
            cm.sendNextS("The ship should be beyond the portal. That's our ticket out of here... if we can get in.");
            break;
        case 2:
            cm.sendNextPrevS("The lockdown protocols are going to be impossible to get by without the #rMaster Key#k...");
            break;
        case 3:
            cm.sendNextPrevS("Master Key?!");
            break;
        case 4:
            cm.sendNextPrevS("The #bKey Keeper#k should have it. Hurry and get the #rMaster Key#k before the guards come!");
            break;
        case 5:
            cm.topMsg("Follow the arrows to the Key Keeper's Room.");
            cm.setInGameDirectionMode(false);
            cm.dispose();
            break
    }
};