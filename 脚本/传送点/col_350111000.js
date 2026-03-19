function enter() {
    if (cm.getNumberFromQuestInfo(33905, "check") == 0) {
        cm.openScriptNpc()
    }
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, c, b) {
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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.npcMove(1540789, 1300, 0, 15000);
            cm.npcMove(1540792, -1300, 0, 12000);
            cm.npcMove(1540790, 2400, 0, 10000);
            cm.npcMove(1540793, -3400, 0, 10000);
            cm.inGameDirectionEvent_PushScaleInfo(4000, 1000, 4000, 900, -30)
        } else {
            if (status === a++) {
                cm.fieldEffect_PlayBGM("Bgm45.img/Army Of Fears Theme", 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(12000)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face2#……吓啊！", 37, 1540805, false, true);
                    cm.effect_Voice("Voice3.img/HofM/ACT1/ARMY/5", 128)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("……我们能到岛后方来真是来对了，主人。", 37, 1540807, true, true);
                        cm.effect_Voice("Voice3.img/HofM/ACT1/ARMY/6", 128)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face3#谁能料想到魔族军团居然已经有如此庞大的规模……\r\n冒险联盟军知道这个事实吗？", 37, 1540805, true, true);
                            cm.effect_Voice("Voice3.img/HofM/ACT1/ARMY/7", 128)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#可要是万一被士兵发现，将我们生擒了可就大事不好了。\r\n到时候说不定真会将我们绑在一起做成烤肉呢。", 37, 1540807, true, true);
                                cm.effect_Voice("Voice3.img/HofM/ACT1/ARMY/8", 128)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("不许说得这么吓人，米乐。\r\n从现在起我们小心点过去。", 37, 1540805, true, true);
                                    cm.effect_Voice("Voice3.img/HofM/ACT1/ARMY/9", 128)
                                } else {
                                    if (status === a++) {
                                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                        cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647)
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                        } else {
                                            if (status === a++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(300)
                                            } else {
                                                if (status === a++) {
                                                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                    cm.setInGameDirectionMode(false, true, false);
                                                    cm.dispose();
                                                    cm.updateInfoQuest(33905, "check3=1;check=1")
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
};