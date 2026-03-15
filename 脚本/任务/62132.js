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
            cm.sendNormalTalk_Bottom("你在这里做什么？", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("啊……别提了！我想拍一张#o9600314#的照片，就前往#m701103010#了，没想到却遭到#o9600312#追赶……呼", 37, 9310564, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("你又救了我一次，真的非常非常感谢你！你是我的救命恩人啊！", 37, 9310564, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("啊！我忘了做自我介绍了。我是上海日报的记者，#p9310535#。我正在对上海发生的一系列事件进行集中取材。", 37, 9310564, true, true)
                    } else {
                        if (status === a++) {
                            cm.askMenu_Bottom("如果你有#t2030056:#的话，能不能给我一个呢？我明明带在身上的，估计是在刚刚逃跑时弄丢了……\r\n\r\n#b#L0#我身上没有，我去帮你买吧。#l \r\n#L1#我有，给你吧。#l \r\n#L2#我没有。#l", 37, 9310564)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("啊！真的吗？那我就在这里等你吧！", 37, 9310564, false, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("在豫园村子的#p9310545#那里可以买到#i2030056:##t2030056#！", 37, 9310564, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(62132, "");
                                        cm.dispose()
                                    }
                                }
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
            cm.sendNormalTalk_Bottom("现在终于可以返回豫园了……嘿嘿……", 37, 9310564, false, true);
            cm.gainItem(2030056, -1)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(62132);
                cm.forceStartQuest(62133, "");
                cm.updateInfoQuest(62132, "chk=1");
                cm.addNumberForQuestInfo(62109, "yuyuanPoint", 3);
                cm.askYesNo_Bottom("你要和我一起回去吗？我要给你一份小小的谢礼，还有要紧事要告诉你……", 37, 9310564)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("那我现在立刻使用豫园回城卷轴！\r\n#b(点击确定后，可以移动至豫园。)#k", 37, 9310564, false, true)
                } else {
                    if (status === a++) {
                        cm.dispose();
                        cm.warp(701100000, 0)
                    }
                }
            }
        }
    }
};