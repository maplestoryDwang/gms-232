var status = -1;
var selectionLog = [];

function start(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("唉，真是可怕。无论去哪里，都有那种可怕的姐姐。话说，#h0#，你来这里是为何事？", 37, 1530053, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("你来看看屋顶的情况？所幸屋顶没有尘土地带。不过，你刚刚目睹的场面一天要发生好几次呢。那个叫做艾菲尼娅的学生就是爱白会的会长。", 37, 1530053, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("实际上，这种心理战十分常见。这只是矛盾的前哨战而已。以后应该还会发生更可怕的事情吧？", 37, 1530053, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#b（第一周就这么艰辛……剩下的2周该怎么坚持下去呢？）#k", 56, 1530053, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("呼……在爱情面前，女生会变得非常非常可怕。你应该体会到了吧？", 37, 1530053, true, true)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(33017, "");
                                cm.dispose();
                                cm.warp(330002506, 0)
                            }
                        }
                    }
                }
            }
        }
    }
}

function end(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("怪物全部消灭了吗？", 37, 1530030, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("很好，那我现在应该能封印尘土地带了。", 37, 1530030, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(33014);
                    cm.dispose()
                }
            }
        }
    }
};