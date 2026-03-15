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
            cm.sendNormalTalk_Bottom("在我离开之前，我想向#p9310547#告白……你能帮我一个忙吗？", 37, 9310538, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("黑市商人每晚8点到10点将出现在豫园。", 37, 9310538, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("他们会出售平时无法买到的珍贵物品！问题是，他们每天出售的物品都不一样。我为了买#i4034655:##t4034655#送给#p9310547#，去了好几次，至今还没买到。", 37, 9310538, true, true)
                } else {
                    if (status === a++) {
                        cm.askYesNo_Bottom("#h0#能不能代替我买来#t4034655#呢？", 37, 9310538)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("哇！谢谢。黑市商人#b#e晚上8点到10点#k#n将出现在豫园！我会给你5个#i4310177:##t4310177#，请你一定要买到啊！", 37, 9310538, false, true)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(62103, "");
                                cm.updateInfoQuest(62103, "chk=1");
                                cm.sendNormalTalk_Bottom("我一边给#p9310547#写信，一边在这里等你。", 37, 9310538, true, false);
                                cm.gainItem(4310177, 5)
                            } else {
                                if (status === a++) {
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
            cm.sendNormalTalk_Bottom("啊！你来了？！你买到#t4034655#了吗？", 37, 9310538, false, true);
            cm.gainItem(4034655, -1)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(62103);
                cm.sendNormalTalk_Bottom("呜哇！太谢谢你了！我现在只要把礼物送给#p9310547#就行了……我要把承载着我心意的信和这个一起送给#p9310547#，你在这里等我回来！", 37, 9310538, true, false)
            } else {
                if (status === a++) {
                    cm.dispose()
                }
            }
        }
    }
};