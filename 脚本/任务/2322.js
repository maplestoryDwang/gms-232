importPackage(Packages.client);
var status = -1;

function start(c, b, a) {
    status++;
    if (c != 1) {
        if (b == 1 && c == 0) {
            status -= 2
        } else {
            cm.sendNext("我们需要你的帮助。");
            cm.dispose();
            return
        }
    }
    if (status == 0) {
        cm.askYesNo("就像我刚才告诉你的一样，刚刚打破的障碍不值得庆祝，这是因为企鹅王国禁止让所有人进入城堡，嗯。。得找出另外一种潜入方式。")
    } else {
        if (status == 1) {
            cm.sendNext("路过蘑菇森林，当你到屏障的时候，就可以走进城墙了，祝你好运。")
        } else {
            if (status == 2) {
                cm.forceStartQuest();
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
        cm.sendOk("嗯。。可能他们已经关闭大门。")
    } else {
        if (status == 1) {
            cm.gainExp(11000);
            cm.sendOk("干得好，太谢谢你了。");
            cm.forceCompleteQuest();
            cm.dispose()
        }
    }
};