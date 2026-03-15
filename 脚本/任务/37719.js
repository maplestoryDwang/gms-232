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
            cm.sendNormalTalk_Bottom("#face0#汪汪！汪汪汪！", 36, 3004733, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("右边？但是那边好像什么都没有啊？", 56, 0, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("往左边走吧。", 56, 0, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#汪……", 36, 3004733, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("也许会对卡斯特构成威胁，去的路上顺便消灭掉一些失去意识的兽人。", 56, 0, true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(37719, "");
                                cm.updateInfoQuest(37700, "00=h0;10=h0;01=h0;11=h0;02=h0;12=h0;03=h0;13=h0;04=h1;14=h1;05=h0;15=h0;06=h0;07=h0;08=h0;26=h0;09=h0;81=h0;36=h0;37=h0");
                                cm.updateInfoQuest(37700, "00=h0;10=h0;01=h0;11=h0;02=h0;12=h0;03=h0;13=h0;04=h1;14=h1;05=h0;15=h0;06=h0;07=h0;08=h0;26=h0;09=h0;81=h0;36=h0;82=h1;37=h0");
                                cm.setPartner(true, 3004731, 80002908, 0);
                                cm.OnStartNavigation(450015210, 0, "east00", 37719);
                                cm.dispose()
                            }
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/37719.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("卡斯特该不会往相反方向去了吧……", 56, 0, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("嗯……还没走到头，再往前走走看。", 56, 0, true, true, 1)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(37719);
                    cm.gainExp(22529116);
                    cm.updateInfoQuest(37700, "00=h0;10=h0;01=h0;11=h0;02=h0;12=h0;03=h0;13=h0;04=h1;14=h1;05=h0;15=h0;06=h0;16=h1;07=h0;08=h0;26=h0;09=h0;81=h0;36=h0;82=h1;37=h0");
                    cm.updateInfoQuest(37700, "00=h0;10=h0;01=h0;11=h0;02=h0;12=h0;03=h0;13=h0;04=h1;14=h1;05=h0;15=h0;06=h0;16=h1;07=h0;17=h1;08=h0;26=h0;09=h0;81=h0;36=h0;82=h1;37=h0");
                    cm.updateInfoQuest(37720, "flower=0");
                    cm.OnStartNavigation(450015220, 0, "west00", 0);
                    cm.addPopupSay(0, 2500, "#face0#到左边尽头去看看吧。", "", 0);
                    cm.dispose()
                }
            }
        }
    }
};