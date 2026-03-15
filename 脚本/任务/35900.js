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
            cm.askAcceptDecline_Bottom("#face0#好的，要到祭坛钥匙指向的地方去看看吗？\r\n刚好就在这附近。快去看看吧。", 36, 1013358, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#与钥匙产生共鸣的地方……在那边。", 36, 1013358, false, true, 1)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(35900, "");
                    cm.Hidden_background("guide", 1, 1, 0, 0);
                    cm.OnStartNavigation(910090302, 1, "1013305", 35900);
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/35900.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.forceCompleteQuest(35900);
            cm.updateInfoQuest(25980, "normal=#");
            cm.updateInfoQuest(25980, "normal=#;hard=#");
            cm.gainExp(15);
            cm.openUIWithOption(0, 2);
            cm.sendNormalTalk_Bottom("#face3#这不是箭和……药水吗？\r\n虽然看上去很古老，但好像不是什么了不起的东西。", 36, 1013358, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face6#嗯……感觉跟现在的东西没什么区别。\r\n只是普通的东西。难道白忙活了一场？", 36, 1013358, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#但是，啊哈……这个箱子的表面写着什么东西。\r\n让我来看看。", 36, 1013358, true, true, 1);
                    cm.dispose()
                }
            }
        }
    }
};