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
            cm.forceStartQuest(34470);
            cm.dispose()
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
            cm.forceCompleteQuest(34470);
            cm.setInGameDirectionMode(true, false, true);
            cm.sendNormalTalk_Bottom("#b(询问让人心情不爽的异邦人。)#k", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#让你很在意吗？嗯，那我就告诉你好了，虽说再次回想起那段记忆确实很痛苦……", 37, 3003310, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#那一天，就连风都是静悄悄的。", 37, 3003310, true, true)
                } else {
                    if (status === a++) {
                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(500)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#我们树精灵和往常一样，一直在照顾着每棵树。", 37, 3003310, false, true)
                        } else {
                            if (status === a++) {
                                cm.fieldEffect_ProcessOnOffLayer("00", "Effect/Direction19.img/effect/arcana/3", 0, 1000, 0, -80, 12, 4, 1);
                                cm.sendNormalTalk_Bottom("#face0#可是就在这时，我感觉到了一股不知从何处而来的阴森气息，一股很冷静却强烈的……", 37, 3003310, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#我们全都出于本能地藏了起来，然后屏息凝视着，那个景象。", 37, 3003310, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.fieldEffect_ProcessOnOffLayer("00", "", 2, 1000, 0, 0, 0, 0, 0);
                                        cm.fieldEffect_ProcessOnOffLayer("01", "Effect/Direction19.img/effect/arcana_disappear/0", 0, 1000, 0, -80, 12, 4, 1);
                                        cm.fieldEffect_ProcessOnOffLayer("02", "Effect/Direction19.img/effect/arcana_disappear/1", 0, 1000, 0, -80, 12, 4, 1);
                                        cm.fieldEffect_ProcessOnOffLayer("03", "Effect/Direction19.img/effect/arcana_disappear/2", 0, 1000, 0, -80, 12, 4, 1);
                                        cm.fieldEffect_ProcessOnOffLayer("04", "Effect/Direction19.img/effect/arcana_disappear/3", 0, 1000, 0, -80, 12, 4, 1);
                                        cm.fieldEffect_ProcessOnOffLayer("05", "Effect/Direction19.img/effect/arcana_disappear/4", 0, 1000, 0, -80, 12, 4, 1);
                                        cm.fieldEffect_ProcessOnOffLayer("06", "Effect/Direction19.img/effect/arcana_disappear/5", 0, 1000, 0, -80, 12, 4, 1);
                                        cm.fieldEffect_ProcessOnOffLayer("07", "Effect/Direction19.img/effect/arcana_disappear/6", 0, 1000, 0, -80, 12, 4, 1);
                                        cm.sendNormalTalk_Bottom("#face0#森林里的树木、花朵、青草、岩石……全都消失不见了，却又再次诞生出了其他什么东西。", 37, 3003310, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#……只是触碰了一下那个异邦人的气息而已。", 37, 3003310, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#他只是走过而已，一切都只在一瞬间，仅此而已整个森林就……", 37, 3003310, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#我们跟随其后，发现他好像还有一个同伴，可却记不太清了。", 37, 3003310, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#总之我们看到的就是这些……哎，说了说那天的事情，还真让我有点头疼呢。", 37, 3003310, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.fieldEffect_ProcessOnOffLayer("01", "", 2, 300, 0, 0, 0, 0, 0);
                                                            cm.fieldEffect_ProcessOnOffLayer("02", "", 2, 300, 0, 0, 0, 0, 0);
                                                            cm.fieldEffect_ProcessOnOffLayer("03", "", 2, 300, 0, 0, 0, 0, 0);
                                                            cm.fieldEffect_ProcessOnOffLayer("04", "", 2, 300, 0, 0, 0, 0, 0);
                                                            cm.fieldEffect_ProcessOnOffLayer("05", "", 2, 300, 0, 0, 0, 0, 0);
                                                            cm.fieldEffect_ProcessOnOffLayer("06", "", 2, 300, 0, 0, 0, 0, 0);
                                                            cm.fieldEffect_ProcessOnOffLayer("07", "", 2, 300, 0, 0, 0, 0, 0);
                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1200)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1400)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
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