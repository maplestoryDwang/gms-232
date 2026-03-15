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
            cm.sendNormalTalk_Bottom("在鼓鼓的肚子上敲打", 36, 9400593, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("真是开心，我很幸福", 36, 9400593, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#b哈瓦尔，你唱歌真好听啊。", 56, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("嘿嘿，谢谢。我是跟妈妈学的。妈妈说哈瓦尔唱歌能让她充满力量！", 36, 9400593, true, true)
                    } else {
                        if (status === a++) {
                            cm.askMenu_Bottom("要唱歌给你听吗，勇士？#b\r\n#L0# 谁生活在沉睡森林里呢#l\r\n#L1# 好吃的肉#l\r\n#L2# 雪原阿布鲁#l\r\n#L3# 吹着小风#l\r\n#L20# 现在不用了，以后再说吧。#l", 36, 9400593)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(64063, "");
                                if (b == 0) {
                                    song1()
                                } else {
                                    if (b == 1) {
                                        song2()
                                    } else {
                                        if (b == 2) {
                                            song3()
                                        } else {
                                            if (b == 3) {
                                                song4()
                                            } else {
                                                cm.dispose()
                                            }
                                        }
                                    }
                                }
                            } else {
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
}

function song1() {
    cm.addNumberForQuestInfo(64063, "chk1", 1);
    cm.setNumberForQuestInfo(64063, "chk2", 1);
    cm.addPopupSay(9400593, 3000, "悄悄地走进森林里", "", 0);
    cm.addPopupSay(9400593, 3000, "不要吵醒别人，小心又小心", "", 0);
    cm.addPopupSay(9400593, 3000, "谁生活在沉睡森林里呢", "", 0);
    cm.addPopupSay(9400593, 3000, "当然是大大的花花象", "", 0);
    cm.addPopupSay(9400593, 3000, "谁生活在沉睡森林里呢", "", 0);
    cm.addPopupSay(9400593, 3000, "当然是偷走我项链的独眼触须怪", "", 0);
    cm.addPopupSay(9400593, 3000, "悄悄地走进森林里", "", 0);
    cm.addPopupSay(9400593, 3000, "走向吹着温暖的风的森林", "", 0);
    cm.addPopupSay(9400593, 3000, "谁生活在沉睡森林里呢", "", 0);
    cm.addPopupSay(9400593, 3000, "当然是呼出温暖气息的祖先", "", 0);
    cm.addPopupSay(9400593, 3000, "谁生活在沉睡森林里呢", "", 0);
    cm.effect_PlayMusic("BgmPL2.img/SongOfHawar");
    cm.dispose()
}

function song2() {
    cm.addNumberForQuestInfo(64063, "chk1", 1);
    cm.setNumberForQuestInfo(64063, "chk3", 1);
    cm.addPopupSay(9400593, 3000, "我最喜欢好吃的肉", "", 0);
    cm.addPopupSay(9400593, 3000, "一口两口还要吃", "", 0);
    cm.addPopupSay(9400593, 3000, "在鼓鼓的肚子上敲打", "", 0);
    cm.addPopupSay(9400593, 3000, "真是开心，我很幸福", "", 0);
    cm.effect_PlayMusic("BgmPL2.img/SongOfHawar");
    cm.dispose()
}

function song3() {
    cm.addNumberForQuestInfo(64063, "chk1", 1);
    cm.setNumberForQuestInfo(64063, "chk4", 1);
    cm.addPopupSay(9400593, 3000, "下雪了下雪了", "", 0);
    cm.addPopupSay(9400593, 3000, "在晚上下雪了", "", 0);
    cm.addPopupSay(9400593, 3000, "悄悄的小雪", "", 0);
    cm.addPopupSay(9400593, 3000, "软软的大雪", "", 0);
    cm.addPopupSay(9400593, 3000, "强力的暴雪", "", 0);
    cm.addPopupSay(9400593, 3000, "树上的冰花", "", 0);
    cm.addPopupSay(9400593, 3000, "阿布鲁是雪之国", "", 0);
    cm.effect_PlayMusic("BgmPL2.img/SongOfHawar");
    cm.dispose()
}

function song4() {
    cm.addNumberForQuestInfo(64063, "chk1", 1);
    cm.setNumberForQuestInfo(64063, "chk5", 1);
    cm.addPopupSay(9400593, 3000, "今天从哪里吹来了风", "", 0);
    cm.addPopupSay(9400593, 3000, "从干燥的南方吹来了风", "", 0);
    cm.addPopupSay(9400593, 3000, "从萧索的西方吹来了风", "", 0);
    cm.addPopupSay(9400593, 3000, "在温暖的森林中呼吸", "", 0);
    cm.addPopupSay(9400593, 3000, "今天从哪里吹来了风", "", 0);
    cm.addPopupSay(9400593, 3000, "吹来的是花花象的呼吸", "", 0);
    cm.addPopupSay(9400593, 3000, "吹来了狂暴的疾风", "", 0);
    cm.addPopupSay(9400593, 3000, "在温暖的森林中呼吸", "", 0);
    cm.effect_PlayMusic("BgmPL2.img/SongOfHawar");
    cm.dispose()
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
            cm.npc_LeaveField("oid=9400591");
            cm.npc_LeaveField("oid=9400591");
            cm.npc_ChangeController(9400591, "oid=9400591", -134, -132, 5, -184, -84, 1, true, false);
            cm.npc_SetSpecialAction("oid=9400591", "summon", 0, 0);
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.sendNewEffects(17, [1000, 1000, 2000, -234, -2])
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_AskAnswerTime(300)
            } else {
                if (status === a++) {
                    cm.npc_SetForceMove("oid=9400591", -1, 40, 50);
                    cm.sendNormalTalk_Bottom("哈瓦尔！", 37, 9400591, false, true)
                } else {
                    if (status === a++) {
                        cm.npc_setForceFlip("oid=9400593", 1);
                        cm.sendNormalTalk_Bottom("#h0#……哈瓦尔要是打扰了你们……", 37, 9400591, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#b哪里，反而哈瓦尔给我唱了歌，让我加油呢。", 57, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/flower", "oid=9400593"], [2000, 0, 0, 1, 0, 1, 0, 0]);
                                cm.sendNormalTalk_Bottom("没错，妈妈！我给唱了歌哦！", 37, 9400593, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("谢谢……哈瓦尔看起来很开心……谢谢，#h0#。", 37, 9400591, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNewEffects(14, [0, 2000, 1000, 0, 0])
                                    } else {
                                        if (status === a++) {
                                            cm.sendNewEffects(19, [0])
                                        } else {
                                            if (status === a++) {
                                                cm.setInGameDirectionMode(false, true, false);
                                                cm.forceCompleteQuest(64063);
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
};