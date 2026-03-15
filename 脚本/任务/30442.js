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
            cm.sendNormalTalk_Bottom("嗯……让我瞧瞧，\r\n这件怎么样？", 37, 2074116, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#哇~好漂亮，\r\n这件多少钱啊？", 37, 2074100, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("这件要#b20张虎精皮#k，\r\n价格有点……小贵吧？", 37, 2074116, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0##b虎精皮#k吗？", 37, 2074100, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("这里的店主说只收这个……\r\n要是没有虎精皮我也没办法，抱歉。", 37, 2074116, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#嗯……这个嘛，那去找来就好了嘛。\r\n我稍后会再来的！", 37, 2074100, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#去了那#b老虎山坡#k啊，到处都是虎精，去那里找找看吧？", 37, 2074100, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(30442, "");
                                        cm.OnStartNavigation(224000120, 0, "", 0);
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
            cm.sendNormalTalk_Bottom("#face0#来，20张虎精皮没错吧？\r\n刚刚那身衣服……", 37, 2074100, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("……呜呜，那个，真的很抱歉，\r\n那件衣服已经不在了，\r\n都是我的错。", 37, 2074116, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face2#什么？刚刚不是还在的……\r\n发生什么事情了吗？", 37, 2074100, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("其实，客人您刚走，\r\n红豆姑娘就来了，她把所有的衣服都给买走了……\r\n对不起，我也没有办法……", 37, 2074116, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#哈，红豆！所有的衣服吗？\r\n那你这儿连一件衣服都没有咯？\r\n啊啊……怎么办好呢？我已经答应小荳了啊……", 37, 2074100, true, true)
                        } else {
                            if (status === a++) {
                                cm.curNodeEventEnd(true);
                                cm.setInGameDirectionMode(true, false, true);
                                cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
                                cm.updateInfoQuest(30442, "gExpCheck=1");
                                cm.forceCompleteQuest(30442);
                                cm.gainExp(198883);
                                cm.inGameDirectionEvent_AskAnswerTime(400);
                                cm.gainItem(4034653, -20);
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
        }
    }
};