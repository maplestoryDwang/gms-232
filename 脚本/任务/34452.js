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
            cm.forceStartQuest(34452);
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
            cm.forceCompleteQuest(34452);
            cm.setInGameDirectionMode(true, false, true);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
            cm.inGameDirectionEvent_AskAnswerTime(500)
        } else {
            if (status === a++) {
                cm.fieldEffect_ProcessOnOffLayer("00", "Effect/Direction19.img/effect/arcana_play/0", 0, 1000, 0, -80, 12, 4, 1);
                cm.inGameDirectionEvent_AskAnswerTime(1000)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face7#那边，遥遥可见的那棵树会与和谐的森林之歌产生共鸣，并会一直绽放出美丽的花朵。我们总是会在那棵精灵之树下嬉戏游玩，幸福不已。", 37, 3003301, false, true)
                } else {
                    if (status === a++) {
                        cm.fieldEffect_ProcessOnOffLayer("01", "Effect/Direction19.img/effect/arcana_play/4", 0, 1000, 0, -80, 12, 4, 1);
                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                    } else {
                        if (status === a++) {
                            cm.fieldEffect_ProcessOnOffLayer("02", "Effect/Direction19.img/effect/arcana_play/2", 0, 1000, 0, -80, 12, 4, 1);
                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face7#精灵之树用它那宽广的胸怀照拂了所有人，让大家免受危险的困扰，花瓣所及之处也总是生机勃勃。", 37, 3003301, false, true)
                            } else {
                                if (status === a++) {
                                    cm.fieldEffect_ProcessOnOffLayer("03", "Effect/Direction19.img/effect/arcana_play/3", 0, 1000, 0, -80, 12, 4, 1);
                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                } else {
                                    if (status === a++) {
                                        cm.fieldEffect_ProcessOnOffLayer("04", "Effect/Direction19.img/effect/arcana_play/1", 0, 1000, 0, -80, 12, 4, 1);
                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face4#……可是森林之歌消失了，悲剧也随之开始了。", 37, 3003301, false, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face4#失控的精灵接二连三地出现，森林也渐渐失去了生命力。", 37, 3003301, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.fieldEffect_ProcessOnOffLayer("01", "", 2, 1000, 0, 0, 0, 0, 0);
                                                    cm.fieldEffect_ProcessOnOffLayer("02", "", 2, 1000, 0, 0, 0, 0, 0);
                                                    cm.fieldEffect_ProcessOnOffLayer("03", "", 2, 1000, 0, 0, 0, 0, 0);
                                                    cm.fieldEffect_ProcessOnOffLayer("04", "", 2, 1000, 0, 0, 0, 0, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face5#而就在这时，曾经与森林之歌产生共鸣的精灵之树也开始逐渐失去了力量。", 37, 3003301, false, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face4#逐渐衰弱的精灵之树最终彻底干枯，并被邪恶的气息所吞噬。", 37, 3003301, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face4#而光之漩涡正是在那之后出现的，这和精灵之树的恶化一定有着某种关联。", 37, 3003301, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.fieldEffect_ProcessOnOffLayer("00", "", 2, 300, 0, 0, 0, 0, 0);
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
        }
    }
};