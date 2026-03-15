var status = -1;

function end(c, b, a) {
    start(c, b, a)
}

function end(c, b, a) {
    if (c == 0) {
        if (status == 0) {
            cm.sendNext("This is an important decision to make.");
            cm.dispose();
            return
        }
        status--
    } else {
        status++
    }
    if (status == 0) {
        cm.askYesNo("Have you made your decision? The decision will be final, so think carefully before deciding what to do. Are you sure you want to become a Demon Slayer?")
    } else {
        if (status == 1) {
            cm.sendNext("I have just molded your body to make it perfect for a Demon Slayer. If you wish to become more powerful, use Stat Window (S) to raise the appropriate stats. If you arn't sure what to raise, just click on #bAuto#k.");
            if (cm.getJob() == 3110) {
                cm.teachSkill(31110010, 1, 1);
                cm.changeJob(3111);
                cm.teachSkill(30011109, 1, 1)
            }
            cm.forceCompleteQuest()
        } else {
            if (status == 2) {
                cm.sendNextPrev("I have also expanded your inventory slot counts for your equipment and etc. inventory. Use those slots wisely and fill them up with items required for Resistance to carry.")
            } else {
                if (status == 3) {
                    cm.sendNextPrev("Now... I want you to go out there and show the world how the Resistance operate.");
                    cm.dispose()
                }
            }
        }
    }
};