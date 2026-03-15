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
            cm.sendNormalTalk_Bottom("#face0#先调查一下这里的花吧。", 36, 3004732, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#为了避免在调查时受到妨碍，你去清理掉一些雷顿。", 36, 3004732, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#雷顿会躲藏在石头和树之间，突然发动攻击，所以一定要注意。", 36, 3004732, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#对了……在调查花的时候，皮亚蜂可能会突然成群结队地飞过来。到时候不要被吓到，把它们全部消灭掉。", 36, 3004732, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.askAcceptDecline_Bottom("#face0#好，那就开始调查吧？", 36, 3004732, 1)
                        } else {
                            if (status === a++) {
                                cm.spawnMobLimit(8642052, 1, 954, -338, 100);
                                cm.sendNormalTalk_Bottom("#face0#即将开放的花朵周围会闪闪发光，所以很容易找到。", 37, 3004732, false, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.spawnMobLimit(8642052, 1, 996, -338, 100);
                                    cm.updateInfoQuest(37711, "b1=1;b2=1;b3=1;b4=1;f1=1;b5=1");
                                    cm.updateInfoQuest(37711, "b1=1;b2=1;b3=1;b4=1;f1=1;b5=1;f2=1");
                                    cm.updateInfoQuest(37711, "f3=1;b1=1;b2=1;b3=1;b4=1;f1=1;b5=1;f2=1");
                                    cm.updateInfoQuest(37711, "f3=1;f4=1;b1=1;b2=1;b3=1;b4=1;f1=1;b5=1;f2=1");
                                    cm.updateInfoQuest(37711, "f3=1;f4=1;f5=1;b1=1;b2=1;b3=1;b4=1;f1=1;b5=1;f2=1");
                                    cm.forceStartQuest(37711, "");
                                    cm.closeUI(1128);
                                    cm.gainExp(1380725);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/37711.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#嗯……这里没有吗……", 36, 3004732, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#到别的地方看看吧。", 36, 3004732, true, true, 1);
                cm.closeUI(1128);
                cm.gainExp(1380725);
                cm.updateInfoQuest(37700, "00=h0;01=h0;02=h0;03=h0;04=h1;05=h0;06=h0;07=h1;26=h0;81=h0;36=h0;37=h0");
                cm.updateInfoQuest(37700, "00=h0;01=h0;02=h0;03=h0;04=h1;05=h0;06=h0;07=h0;26=h0;81=h0;36=h0;37=h0");
                cm.updateInfoQuest(37700, "00=h0;01=h0;02=h0;03=h0;04=h1;05=h0;06=h0;07=h0;08=h1;26=h0;81=h0;36=h0;37=h0");
                cm.updateInfoQuest(37700, "00=h0;01=h0;02=h0;03=h0;04=h1;05=h0;06=h0;07=h0;08=h1;26=h0;09=h1;81=h0;36=h0;37=h0");
                cm.updateInfoQuest(37712, "b1=1");
                cm.updateInfoQuest(37712, "b1=1;b2=1");
                cm.updateInfoQuest(37712, "b1=1;b2=1;b3=1");
                cm.updateInfoQuest(37712, "b1=1;b2=1;b3=1;b4=1");
                cm.updateInfoQuest(37712, "b1=1;b2=1;b3=1;b4=1;b5=1");
                cm.updateInfoQuest(37712, "b1=1;b2=1;b3=1;b4=1;f1=3;b5=1");
                cm.updateInfoQuest(37712, "b1=1;b2=1;b3=1;b4=1;f1=3;b5=1;f2=3");
                cm.updateInfoQuest(37712, "f3=3;b1=1;b2=1;b3=1;b4=1;f1=3;b5=1;f2=3");
                cm.updateInfoQuest(37712, "f3=3;f4=3;b1=1;b2=1;b3=1;b4=1;f1=3;b5=1;f2=3");
                cm.updateInfoQuest(37712, "f3=3;f4=3;f5=3;b1=1;b2=1;b3=1;b4=1;f1=3;b5=1;f2=3");
                cm.setPartner(true, 3004730, 80002907, 0);
                cm.setPartner(true, 3004731, 80002908, 0);
                cm.forceCompleteQuest(37711);
                cm.dispose()
            }
        }
    }
};