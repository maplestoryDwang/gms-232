var status = -1;

function start() {
    action(1, 0, 0)
}

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("没有修复脚本位于： #b 脚本/任务/34240.js#k\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
            }
        }
    }
}

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("#face0##i4036338:#  #r#t4036338:##k都搜集到了吗？", 36, 3003480, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(34240);
                cm.updateInfoQuest(34244, "move=fin");
                cm.updateInfoQuest(34241, "first=1");
                cm.updateInfoQuest(34245, "71=h0;75=h0;69=h1");
                cm.updateInfoQuest(34245, "71=h0;73=h2;75=h0;69=h1");
                cm.sendNormalTalk_Bottom("#face0#全都搜集到啦。让我们来确认一下留在这里的记忆吧？", 37, 3003480, true, true)
            } else {
                if (status === a++) {
                    cm.gainItem(4036338, -30);
                    cm.sendNormalTalk_Bottom("#face13#……", 37, 3003480, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face11#好的！知道她往哪里去了！快出发吧！", 37, 3003480, true, true)
                    } else {
                        if (status === a++) {
                            cm.dispose();
                            cm.warp(940204308, 0)
                        }
                    }
                }
            }
        }
    }
};