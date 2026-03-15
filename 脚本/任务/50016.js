var status = -1;

function start(c, b, a) {
    if (c == -1) {
        cm.dispose()
    } else {
        if (c == 1) {
            status++
        }
        if (status == 0) {
            cm.sendNext("Okay, so you are going to the battle as well. Thanks... Just letting you know, the enemy is probably more powerful than anything you've ever faced, Are you ready?")
        } else {
            if (status == 1) {
                cm.warp(802000800, 0);
                cm.forceStartQuest();
                cm.dispose()
            }
        }
    }
}

function end(c, b, a) {};