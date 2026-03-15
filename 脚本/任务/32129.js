var status = -1;

function start(c, b, a) {
    if (c == 1) {
        status++
    } else {
        status--
    }
    if (status == 0) {
        cm.askAcceptDecline("#h #，我真的很佩服你的实力啊。你终于成功救出了我们全部的孩子！现在只要返回艾利涅，并向校长先生做报告就行了。现在我们一起回去吧。\r\n#b（接受后，移动到艾利涅。）")
    } else {
        if (status == 1) {
            cm.sendNext("好吧，孩子们已经全部回来了吧？")
        } else {
            if (status == 2) {
                cm.warp(101072001, 0);
                cm.gainExp(10190);
                cm.forceStartQuest();
                cm.dispose()
            }
        }
    }
}

function end(c, b, a) {
    if (c == -1) {
        cm.dispose()
    } else {
        if (c == 1) {
            status++
        } else {
            status--
        }
        if (status == 0) {
            cm.sendNext("你现在已经成为#b妖精学院艾利涅#k的名誉教授，这里随时欢迎你。祝你的人生幸福美满……呵呵呵。")
        } else {
            cm.gainExp(6814);
            cm.forceCompleteQuest();
            cm.dispose()
        }
    }
};