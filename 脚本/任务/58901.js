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
            cm.sendNormalTalk("好久不见了啊，#h0#！近来过得如何呢？", 0, 9130102, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("之所以会特意来联系你，是为了介绍新来到#m783000000:#的武将给你认识。", 0, 9130102, true, true)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline("他应该和我们来自同样的地方，但现在遇到了一点小问题。我们现在需要你的力量，你能不能来助我们一臂之力呢？\r\n#r(接受任务时，立即移动到该地图)#k ", 0, 9130102)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(56897, cm.getMapId());
                        cm.forceStartQuest(58901, "");
                        cm.updateInfoQuest(783000000, cm.getMapId());
                        cm.dispose();
                        cm.warp(811000001, 1)
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
            cm.sendNormalTalk_Illus_II("你好，远道而来，真是辛苦你了。", 9130102, 4, false, true, 9130102)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Illus_II("你在来的路上是不是很辛苦？我说的那个小问题……", 9130102, 4, true, true, 9130102)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Illus_II("嗯，现在那个武将受了伤，陷入了昏睡。我这儿还有#m783000000:#寄来的信……(翻找)", 9130102, 4, true, true, 9130102)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(58901);
                        cm.forceStartQuest(58949, "start");
                        cm.dispose()
                    }
                }
            }
        }
    }
};