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
            cm.sendNormalTalk_Bottom("我说，#h0#！你在干什么呢？我不是告诉你不能在那个世界随便使用力量的吗？你要是随便使用技能的话是会出事的！", 37, 1530020, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#b（向埃尔文说明了事情的来龙去脉。）#k\r\n\r\n你说出现怪物了？真的？这么说老师说的没错了。", 37, 1530020, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("你想到什么了吗？", 56, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("……嗯，事实上这里出现了比怪物更可怕的老师。等你回到这里之后就可以从汉斯老师那里听听事情的前因后果了。", 37, 1530020, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("你赶快回来吧，我有话对你说。\r\n\r\n#b（返回原来的世界里衣柜掉落的房子，和汉斯对话吧。）#k", 37, 1530020, true, true)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(32717, "");
                                cm.dispose();
                                cm.warp(100000004, 0)
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
            cm.sendNormalTalk_Bottom("你回来啦……我还不愿意相信，没想到我的弟子真就做出这么荒谬的事情来。竟然打开了通往平行世界的门！", 37, 1530390, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("这件事必须由我们处理才行。在那之前，你先把你在那个世界所经历的事一五一十地跟我说说吧。", 37, 1530390, true, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(32717, "");
                    cm.gainExp(Math.pow(cm.getLevel(), 3));
                    cm.forceCompleteQuest(32717);
                    cm.dispose()
                }
            }
        }
    }
};