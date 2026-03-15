var status = -1;

function start(c, b, a) {
    if (cm.getPlayer().getJunior1() > 0) {
        cm.forceCompleteQuest();
        cm.gainExp(3000);
        cm.sendNext("Good job!")
    } else {
        cm.sendNext("嗯？？我看你还没有成功登录一个同学呢。。")
    }
    cm.dispose()
}

function end(c, b, a) {
    if (cm.getPlayer().getJunior1() > 0) {
        cm.forceCompleteQuest();
        cm.gainExp(3000);
        cm.sendNext("Good job!")
    } else {
        cm.sendNext("嗯？？我看你还没有成功登录一个同学呢。。")
    }
    cm.dispose()
};