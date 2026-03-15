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
            cm.sendNormalTalk_Bottom("#face0#旁边有个各种花茂盛生长的地方。", 36, 3004732, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#我一个人担心会出事，所以没敢去调查。#h0#，有你在就不一样了。", 36, 3004732, true, true, 1)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline_Bottom("#face0#先过去看看吧！", 36, 3004732, 1)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(37713, "");
                        cm.updateInfoQuest(37700, "00=h0;01=h0;02=h0;03=h0;04=h1;05=h0;06=h0;07=h0;08=h0;26=h0;09=h1;81=h0;36=h0;37=h0");
                        cm.updateInfoQuest(37700, "00=h0;01=h0;02=h0;03=h0;04=h1;05=h0;06=h0;07=h0;08=h0;26=h0;09=h0;81=h0;36=h0;37=h0");
                        cm.updateInfoQuest(37700, "00=h0;10=h1;01=h0;02=h0;03=h0;04=h1;05=h0;06=h0;07=h0;08=h0;26=h0;09=h0;81=h0;36=h0;37=h0");
                        cm.updateInfoQuest(37700, "00=h0;10=h1;01=h0;11=h1;02=h0;03=h0;04=h1;05=h0;06=h0;07=h0;08=h0;26=h0;09=h0;81=h0;36=h0;37=h0");
                        cm.setPartner(true, 3004730, 80002907, 0);
                        cm.setPartner(true, 3004731, 80002908, 0);
                        cm.OnStartNavigation(450015140, 1, "3004710", 37713);
                        cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/37713.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#就是这里。花比其他地方多吧？", 36, 3004732, false, true, 1)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(37713);
                cm.gainExp(11264558);
                cm.dispose()
            }
        }
    }
};