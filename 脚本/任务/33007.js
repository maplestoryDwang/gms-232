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
            cm.sendNormalTalk_Bottom("首先，长成这副模样不是我们能决定的！我们要求对以貌待人的女学生进行惩罚！进行惩罚！进行惩罚！", 37, 1530261, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("其次，我们要求迷惑女学生的阿白实习老师立刻离职！立刻离职！立刻离职！", 37, 1530261, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("再者，很多女生被阿白实习老师的外貌迷惑，甩掉了自己的男朋友，我们要求他们复合！复合！复合！", 37, 1530261, true, true)
                } else {
                    if (status === a++) {
                        cm.askMenu_Bottom("好了，#b#h0#！#k如果你同意我们的主张，就在这里签名吧！\r\n#b#L0# 签名。#l  \r\n#b#L1# 不签。 #l", 37, 1530261)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(33007, "");
                            cm.sendNormalTalk_Bottom("在我们所有的要求被接受之前，我们乌人协是不会停止斗争的！斗争！！", 37, 1530261, false, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#b（听听反方女学生的观点吧。）#k", 56, 1530261, true, false)
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
            cm.sendNormalTalk_Bottom("请不要谴责我们！我们聚集在一起，只因对阿白实习老师纯粹的爱！", 37, 1530251, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("我们是爱白会，是喜欢阿白实习老师的集会！", 37, 1530251, true, true)
            } else {
                if (status === a++) {
                    cm.gainExp(Math.pow(cm.getLevel(), 3));
                    cm.forceCompleteQuest(33007);
                    cm.dispose()
                }
            }
        }
    }
};