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
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            if (cm.haveItem(4030035)) {
                cm.sendNext("塞希莉亚真是个心地善良的孩子。她现在还记得呢……管理花草的方法是我亲自教她的呢。宫中的人都很惊慌, 说王妃的手怎么能沾染泥土, 但我还是喜欢亲手去触摸泥土和花。\r\n")
            } else {
                cm.sendOk("你找我有事吗……? \r\n\r\n(需要玫瑰花束。如果把花束弄丢了的话, 可以向塞希莉亚重新领取。)");
                cm.dispose()
            }
        } else {
            if (status == a++) {
                cm.sendOk("怎么样, 塞希莉亚制作的花束很美吧？")
            } else {
                if (status == a++) {
                    cm.forceCompleteQuest();
                    cm.removeAll(4030035);
                    cm.dispose()
                }
            }
        }
    }
};