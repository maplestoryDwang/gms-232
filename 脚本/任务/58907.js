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
            cm.sendNormalTalk_Illus_II("唤醒武将的药做好了。你代我转交给#p9130008:# 吧。", 9130102, 4, false, true, 9130102)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Illus_II("其实我要走了……。", 9130102, 4, true, true, 9130102)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Illus_II("……没什么。反正现在也走不了，你帮我转交一下这个吧。然后告诉他新来的武将是怎么来到这里的。", 9130102, 4, true, true, 9130102)
                } else {
                    if (status === a++) {
                        cm.askYesNo_Illus_II("请你把#i4034129:##t4034129:#交给#m783000000:#的#p9130008:#吧。", 9130102, 0, 9130102)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(58907, "");
                            cm.gainItem(4034129, 1);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
}

function stage0(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/58907.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
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
            cm.sendNormalTalk_Illus_II("嗯？信玄公没来，派你来了？……我还以为信玄公会亲自来呢……", 9130008, 4, false, true, 9130008)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Illus_II("好吧……首先，为了治疗#i4034129:##t4034129:#新来的武将，把这个药交给你。", 9130008, 4, true, true, 9130008)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Illus_II("他应该马上就会醒来的。武将在堂主的房间里，你去看看吧。", 9130008, 4, true, true, 9130008)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Illus_II("堂主的房间在这个地图的左边尽头。", 9130008, 4, true, true, 9130008)
                    } else {
                        if (status === a++) {
                            cm.forceCompleteQuest(58907);
                            cm.forceStartQuest(58949, "1st");
                            cm.gainItem(4034129, -1);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};