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
            cm.sendNormalTalk_Bottom("#face0#现在……", 36, 3004732, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#……", 36, 3004732, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("卡斯特？", 56, 0, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#……", 36, 3004732, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/yumyum/mang2", 100);
                            cm.sendNormalTalk_Bottom("#face0#汪汪！汪汪汪！！！", 36, 3004733, true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("卡斯特！！！", 56, 0, true, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#哦……啊，嗯，刚才说到哪里了？", 36, 3004732, true, true, 1)
                                } else {
                                    if (status === a++) {
                                        cm.askAcceptDecline_Bottom("#face0#这次你去消灭石木妖，然后调查花朵。", 36, 3004732, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#即将开放的花朵周围会闪闪发光。这你已经知道了吧？", 37, 3004732, false, true, 1)
                                        } else {
                                            if (status === a++) {
                                                cm.updateInfoQuest(37712, "f3=3;f4=3;f5=3;b1=1;b2=1;b3=1;b4=1;f1=1;b5=1;f2=3");
                                                cm.updateInfoQuest(37712, "f3=3;f4=3;f5=3;b1=1;b2=1;b3=1;b4=1;f1=1;b5=1;f2=1");
                                                cm.updateInfoQuest(37712, "f3=1;f4=3;f5=3;b1=1;b2=1;b3=1;b4=1;f1=1;b5=1;f2=1");
                                                cm.updateInfoQuest(37712, "f3=1;f4=1;f5=3;b1=1;b2=1;b3=1;b4=1;f1=1;b5=1;f2=1");
                                                cm.updateInfoQuest(37712, "f3=1;f4=1;f5=1;b1=1;b2=1;b3=1;b4=1;f1=1;b5=1;f2=1");
                                                cm.forceStartQuest(37712, "");
                                                cm.closeUI(1128);
                                                cm.gainExp(1423935);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/37712.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#这里也没有吗……那么……", 36, 3004732, false, true, 1)
        } else {
            if (status === a++) {
                cm.gainExp(22529116);
                cm.sendNormalTalk_Bottom("#face0#旁边有个各种花茂盛生长的地方。", 36, 3004732, false, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#我一个人担心会出事，所以没敢去调查。#h0#，有你在就不一样了。", 36, 3004732, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.askAcceptDecline_Bottom("#face0#先过去看看吧！", 36, 3004732, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#需要休息一下吗？皮亚蜂很烦人吧？", 36, 3004732, false, true, 1);
                            cm.forceCompleteQuest(37712);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};