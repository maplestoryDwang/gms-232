importPackage(Packages.client);
var status = -1;

function start(c, b, a) {
    status++;
    if (c != 1) {
        if (b == 1 && c == 0) {
            status -= 2
        } else {
            cm.sendNext("Please do not lose faith in our Kingdom of Mushroom.");
            cm.dispose();
            return
        }
    }
    if (status == 0) {
        cm.askYesNo("In order to rescue the princess, you must first navigate the Mushroom Forest. King Pepe set up a powerful barrier forbidding anyone from entering the castle. Please investigate this matter for us.")
    } else {
        if (status == 1) {
            cm.sendNext("You'll run into the barrier at the Mushroom Forest by heading east of where you are standing right now. Please be careful. I hear that the area is infested with crazy, fear-inducing monsters.")
        } else {
            if (status == 2) {
                cm.gainExp(8300);
                cm.sendOk("I see, so it was indeed not a regular barrier by any means. Great work there. If not for you help, we wouldn't have had a clue as to what that was all about.");
                cm.forceCompleteQuest();
                cm.dispose()
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
        cm.sendOk("I see that you have thoroughly investigated the barrier at the Mushroom Forest. What was it like?")
    } else {
        if (status == 1) {
            cm.gainExp(8300);
            cm.sendOk("I see, so it was indeed not a regular barrier by any means. Great work there. If not for you help, we wouldn't have had a clue as to what that was all about.");
            cm.forceCompleteQuest();
            cm.dispose()
        }
    }
};