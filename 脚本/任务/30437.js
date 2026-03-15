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
            cm.dispose();
            cm.warp(224000044, 15, true)
        }
    }
}

function stage0(d, c, b) {
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
            cm.sendNormalTalk_Bottom("哞哞哞哞，小荳？\r\n我现在也算是放弃她了。\r\n她原本可不是这样的孩子……", 37, 2074144, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("呱呱呱呱，没错。\r\n虽然有时候也会犯懒，可还不至于到这个地步！呱呱！", 37, 2074145, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#原本很诚实本分，\r\n难道没什么办法让她活得更认真点的吗？", 37, 2074100, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("哞哞~……不太清楚，这个嘛，也许郡守那家伙说两句他会听~哞", 37, 2074144, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#郡守？你是说这个村子的郡守吗？", 37, 2074100, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("哞哞~那家伙可是小荳的发小。\r\n小荳从小就很听郡守的话~哞", 37, 2074144, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("不啦，现在她连郡守的话都不听了，呱呱。\r\n\r\n眼下是真的没有办法了！", 37, 2074145, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#嗯……和郡守是发小啊……这中间好像能有点什么嘛？\r\n只要善加利用，也许就能有方法让小荳重新变得勤劳了。", 37, 2074100, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.updateInfoQuest(30437, "NpcSpeech=20740281");
                                            cm.dispose();
                                            cm.warp(224000045, 16)
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

function stage1(d, c, b) {
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
            cm.sendNormalTalk_Bottom("哇哇，呜呜，呜呜。", 37, 2074143, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face2#小荳怎么在哭呢？", 37, 2074100, true, true)
            } else {
                if (status === a++) {
                    cm.curNodeEventEnd(true);
                    cm.setInGameDirectionMode(true, false, true);
                    cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
                    cm.updateInfoQuest(30437, "NpcSpeech=20740281/20740062");
                    cm.updateInfoQuest(30437, "gExpCheck=1;NpcSpeech=20740281/20740062");
                    cm.gainExp(198883);
                    cm.forceCompleteQuest(30437);
                    cm.inGameDirectionEvent_AskAnswerTime(400);
                    cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100)
                } else {
                    if (status === a++) {
                        cm.setInGameDirectionMode(false, true, false);
                        cm.dispose()
                    }
                }
            }
        }
    }
}

function stage2(d, c, b) {
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
            cm.forceCompleteQuest(30437);
            cm.dispose()
        }
    }
};