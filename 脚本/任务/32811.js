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
            cm.sendNormalTalk_Bottom("不过，你们竟然打算在黑板上乱写，听上去就蛮有趣的。打算乱写些什么内容呢？", 37, 1530030, false, true)
        } else {
            if (status === a++) {
                cm.fieldEffect_ScreenMsg("Map/Effect2.img/spinOff1/blackboard");
                cm.sendNormalTalk_Bottom("……姓名测试？那是什么？是这个世界的咒术吗？又有点像魔法阵……", 37, 1530030, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("我也不太清楚。这个世界的孩子们好像都挺喜欢这种东西的。", 57, 1530034, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("不管了，虽然不太理解……不过既然要做就该做到位嘛！那就把#b1楼、2楼、3楼教室#k的黑板全部写满吧，怎么样？", 37, 1530030, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(32811, "");
                            cm.updateInfoQuest(32720, "sms=111");
                            cm.fieldEffect_ScreenMsg("Map/Effect2.img/spinOff1/blackboard");
                            cm.dispose()
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
            cm.sendNormalTalk_Bottom("那就是这个世界的粉笔？真神奇！拿给我看看，给我！", 37, 1530030, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("……什么嘛？跟我们世界的没什么两样嘛？真让人失望。", 37, 1530030, true, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(32810, "");
                    cm.forceCompleteQuest(32810);
                    cm.gainItem(4034151, -25);
                    cm.dispose()
                }
            }
        }
    }
};