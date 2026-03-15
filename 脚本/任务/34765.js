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
            cm.sendNormalTalk_Bottom("#face0##h0#！谢谢你！多亏有你，村子又恢复了和平！", 36, 3002110, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face5#果然不愧是勇敢的尖耳守备队员！我的眼光果然很不错！", 36, 3002110, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("……", 56, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#为了表示感谢，我为你准备了一份礼物！", 36, 3002110, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(34765, "");
                            cm.gainExp(16918334);
                            cm.forceCompleteQuest(34765);
                            cm.updateInfoQuest(34765, "exp=1");
                            cm.sendNormalTalk_Bottom("#face5#给！怎么样？喜欢吗？希望你能珍藏一辈子！", 36, 3002110, true, true);
                            cm.gainItem(1143089, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face5#如果想见我，只要利用飞到#r万神殿#k去的#b叶片飞机#k就行！下次再会，朋友！", 36, 3002110, true, true)
                            } else {
                                if (status === a++) {
                                    cm.dispose();
                                    cm.warp(940204113, 0)
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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的结束脚本还没有修复哦。它的脚本位于： #b /脚本/任务/#e" + e + "#n.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻完成这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};