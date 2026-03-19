function enter() {
    if (cm.getNumberFromQuestInfo(33990, "check5") > 0) {
        cm.warp(350130300, 2, true)
    } else {
        cm.openScriptNpc()
    }
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(g, f, e) {
    if (status == 0 && g == 0) {
        cm.dispose();
        return
    }(g == 1) ? status++ : status--;
    selectionLog[status] = e;
    var c = -1;
    if (status <= c++) {
        cm.dispose()
    } else {
        if (status === c++) {
            cm.sendNormalTalk_Bottom("#face13#幻影，情报已经收集得够多了吗？", 37, 1540805, false, true)
        } else {
            if (status === c++) {
                var d = cm.getNumberFromQuestInfo(33990, "check1") > 0;
                var b = cm.getNumberFromQuestInfo(33990, "check2") > 0;
                var a = cm.getNumberFromQuestInfo(33990, "check3") > 0;
                if (d && b && a) {
                    cm.askMenu_Bottom("好吧，我所听到的单词之中最让我感兴趣的是……\r\n#b#L0#博物馆#l\r\n#L1#派对#l\r\n#L2#陷坑#l\r\n#L3#林博士#l\r\n#L4#神秘事件#l\r\n#L5#超能力者#l", 37, 1540879)
                } else {
                    cm.sendNormalTalk_Bottom("还没。我再逛一逛。", 37, 1540879, false, true);
                    cm.dispose()
                }
            } else {
                if (status === c++) {
                    if (e == 0) {
                        cm.sendNormalTalk_Bottom("#face11#博物馆吗？博物馆怎么了……", 37, 1540805, false, true);
                        cm.dispose()
                    } else {
                        if (e == 1) {
                            cm.sendNormalTalk_Bottom("#face11#派对吗？真的？派对……派对……", 37, 1540805, false, true);
                            cm.dispose()
                        } else {
                            if (e == 2) {
                                cm.sendNormalTalk_Bottom("#face11##陷坑吗？#陷坑……#陷坑……", 37, 1540805, false, true);
                                cm.dispose()
                            } else {
                                if (e == 3) {
                                    cm.sendNormalTalk_Bottom("有个叫#b林博士#k的人，\r\n那个人似乎知道有关这里所有神秘物质的情报。", 37, 1540879, false, true)
                                } else {
                                    if (e == 4) {
                                        cm.sendNormalTalk_Bottom("#face11#神秘事件吗？神秘事件……神秘事件……", 37, 1540805, false, true);
                                        cm.dispose()
                                    } else {
                                        cm.sendNormalTalk_Bottom("#face11#超能力者吗？真的？超能力者……超能力者……", 37, 1540805, false, true);
                                        cm.dispose()
                                    }
                                }
                            }
                        }
                    }
                } else {
                    if (status === c++) {
                        cm.sendNormalTalk_Bottom("#face13#那从现在开始，我们只要找到这个人就可以了。", 37, 1540805, true, true)
                    } else {
                        if (status === c++) {
                            cm.updateInfoQuest(33990, "check1=1;check2=1;check3=1;check5=1;check=1");
                            cm.curNodeEventEnd(true);
                            cm.setInGameDirectionMode(true, false, true);
                            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(500)
                        } else {
                            if (status === c++) {
                                cm.inGameDirectionEvent_AskAnswerTime(500)
                            } else {
                                if (status === c++) {
                                    cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) * 2);
                                    cm.forceCompleteQuest(34001);
                                    cm.gainExp(Math.pow(cm.getLevel(), 3) * 2);
                                    cm.updateInfoQuest(33963, "34001=1");
                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                    cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100)
                                } else {
                                    if (status === c++) {
                                        cm.dispose();
                                        cm.warp(350130300, 2, true)
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};