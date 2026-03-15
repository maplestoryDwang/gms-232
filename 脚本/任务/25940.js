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
            cm.sendOk("好了，#b#e#h0##k#n，你也会经常来找我 #b#e#p9000185##k#n的吧？\n一定要来啊！\n希望你通过冒险岛聊天工具结识更多的朋友，\n#r#e祝你度过美丽的一天#k#n~\n");
            cm.gainItem(3700135, 1)
        } else {
            if (status == a++) {
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};