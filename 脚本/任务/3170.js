var status = -1;

function start(d, c, b) {
    (d == 1) ? status++ : status--;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.forceStartQuest();
            cm.dispose()
        }
    }
}

function end(d, c, b) {
    (d == 1) ? status++ : status--;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNext("骑士卷轴可以用了。#b双击使用就能到接见室门口去了。#k但请不要急着用这个，也许现在冒险家不能一个人去对付国王。请先去寻找伙伴并提高自己的实力。")
        } else {
            if (status == a++) {
                cm.sendNext("对了，如果还没见过，可以先去见一下#r伊帕娅#k吗？她是国王的夫人，曾经是个非常美丽的人。她现在也变成了幽灵，被困在这个城堡里。我因为不能离开这里，所以也无法去帮助伊帕娅……想传一句话都办不到。哦，我又在啰嗦了。她现在应该就在#r第五座塔#k附近。")
            } else {
                if (status == a++) {
                    cm.dispose();
                    cm.OnStartNavigation(211061001, 1, "2161001", 0);
                    cm.forceCompleteQuest()
                }
            }
        }
    }
};