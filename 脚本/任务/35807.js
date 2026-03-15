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
            cm.askAcceptDecline_Bottom("#face0#怪物们正在飞向甲板。请马上前去支援。", 37, 3003751)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#走右边吧。我来指挥战斗。", 37, 3003751, false, true)
            } else {
                if (status === a++) {
                    cm.updateInfoQuest(35831, "52=h1;53=h1;55=h1;65=h1;56=h1;57=h1;58=h1");
                    cm.forceStartQuest(35807, "");
                    cm.OnStartNavigation(450012330, 0, "", 0);
                    cm.dispose()
                }
            }
        }
    }
}

function stage0(d, c, b) {
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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/35807.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#多亏了你，敌人的攻势好像逐渐减弱了。", 36, 3003758, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("南哈特在哪儿？", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#谋士应该在#b世界尽头1-1#k。", 36, 3003758, true, true)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(35807);
                        cm.gainExp(721799016);
                        cm.updateInfoQuest(35831, "60=h0;52=h1;53=h1;55=h1;65=h1;56=h1;57=h1;58=h1");
                        cm.OnStartNavigation(450012310, 0, "west00", 0);
                        cm.dispose()
                    }
                }
            }
        }
    }
};