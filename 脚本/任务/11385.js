var status = -1;

function start(d, c, b) {
    (d == 1) ? status++ : status--;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNext("你好，#b#h0##k。\r\n各种活动可以让你在#r冒险岛#k度过快乐的每一天。你在积极参加各种活动吗？有没有因为活动内容太丰富而错过活动的经历呢？为了让大家不错过每一个活动，我想告诉你一个好消息。", 9010000)
        } else {
            if (status === a++) {
                cm.sendNextPrev("如果点击画面上端的#r[活动]#k按钮，即可查看名为#b[活动列表]#k的菜单。只要点击该菜单，就可以查看所有正在进行的活动了。\r\n你可以看到正在进行什么活动，活动的开始和结束时间，可以获得什么道具等有用的信息。\r\n#i3800221#", 9010000)
            } else {
                if (status === a++) {
                    cm.sendNextPrev("也可以通过快捷键#b[V]#k查看。想要了解活动的时候，你随时可以使用～\r\n#i3800222#", 9010000)
                } else {
                    if (status == a++) {
                        cm.forceStartQuest();
                        cm.forceCompleteQuest();
                        cm.dispose()
                    }
                }
            }
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
            cm.dispose()
        }
    }
};