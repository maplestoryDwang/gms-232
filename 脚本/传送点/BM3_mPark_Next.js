function enter() {
    if (cm.getMapId() >= 993072000 && !cm.isQuestFinished(35817)) {
        cm.playerMessage(-1, "还有士兵没有营救到。");
        cm.playerMessage(5, "还有士兵没有营救到。")
    } else {
        if (eim.getNumberProperty("clear") == 1) {
            switch (cm.getMapId()) {
                case 993071300:
                    cm.updateInfoQuest(35834, "m4_1=1");
                    cm.warp(993071400, 0, false);
                    break;
                case 993071400:
                    cm.updateInfoQuest(35834, "m4_2=1");
                    cm.warp(993071500, 0, false);
                    break;
                case 993071500:
                    cm.updateInfoQuest(35834, "m4_3=1");
                    cm.forceCompleteQuest(35805);
                    cm.gainExp(721799016);
                    cm.warp(450012200, 3, false);
                    break;
                case 993072000:
                    cm.updateInfoQuest(35834, "m7_1=1");
                    cm.warp(993072100, 0, false);
                    break;
                case 993072100:
                    cm.updateInfoQuest(35834, "m7_2=1");
                    cm.warp(993072200, 0, false);
                    break;
                case 993072200:
                    cm.updateInfoQuest(35834, "m7_3=1;q35809=1");
                    cm.warp(450012410, 3, false);
                    break;
                case 993072300:
                    cm.warp(993072400, 0, false);
                    break;
                case 993072400:
                    cm.warp(993072500, 0, false);
                    break;
                case 993072500:
                    cm.updateInfoQuest(35834, "q35810=1;m8_3=1");
                    cm.warp(450012410, 3, false);
                    break;
                default:
                    cm.openScriptNpc();
                    break
            }
        } else {
            cm.playerMessage(-1, "怪物还没有清理干净。");
            cm.playerMessage(5, "怪物还没有清理干净。")
        }
    }
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(mode, type, selection) {
    var reactor = "action" + cm.getMapId();
    eval(reactor)(mode, type, selection)
}

function action993070100(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.updateInfoQuest(35834, "m1_1=1");
            cm.sendNormalTalk_Bottom("对了，奥尔卡怎么样了？找回的力量到底是什么，为什么能毁掉迷宫之核呢？", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#不是毁掉，而是飞到了异界。", 37, 3003903, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("飞到了？", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#就是集中重力，撕开空间，打开通往虚空的缝隙。", 37, 3003903, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("那真的可能吗？\r\n奥尔卡不是没有斯乌，就无法发挥出力量吗？", 57, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#没错。所以他付出了残酷的代价。", 37, 3003903, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("代价……？", 57, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#那就是寿命。", 37, 3003903, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("……", 57, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.dispose();
                                                cm.warp(993070200, 0, false)
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

function action993070200(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.updateInfoQuest(35834, "m1_2=1");
            cm.sendNormalTalk_Bottom("那样的话，就算不是对抗者，也能打败黑魔法师吗？就像奥尔卡把迷宫之核打飞一样。", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#那是不可能的。虽然她不相信……\r\n但真的动手的话，她会明白的。", 37, 3003903, true, true)
            } else {
                if (status === a++) {
                    cm.dispose();
                    cm.warp(993070300, 0, false)
                }
            }
        }
    }
}

function action993070300(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.updateInfoQuest(35834, "m1_3=1");
            cm.sendNormalTalk_Bottom("到底会发生什么事呢？", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#黑魔法师会孵化出#r创世之卵#k。", 37, 3003903, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("创世之卵？", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#那是生长出新的世界的某种种子。\r\n清除现在的世界，在那个位置诞生出新的世界来。", 37, 3003903, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#毁掉创世之卵。否则创世仪式就不会停止。", 37, 3003903, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("嗯……", 57, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#现在面具的力量也快用光了。对话好像只能到此为止了。", 37, 3003903, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#记住，对抗者。只有你可以摆脱既定之路。", 37, 3003903, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("摆脱既定之路？", 57, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.forceCompleteQuest(35802);
                                                cm.gainExp(721799016);
                                                cm.updateInfoQuest(35831, "52=h1;53=h1;55=h0");
                                                cm.dispose();
                                                cm.warp(450012100, 1, false)
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

function action993070700(c, b, a) {
    cm.forceCompleteQuest(35803);
    cm.gainExp(721799016);
    cm.updateInfoQuest(35831, "52=h1;53=h1;55=h1;56=h0");
    cm.npc_LeaveField("oid=2178566");
    cm.npc_LeaveField("oid=2178566");
    cm.dispose();
    cm.warp(450012110, 1, false)
}

function action993071000(c, b, a) {
    cm.dispose();
    cm.warp(993070073, 0, false)
};