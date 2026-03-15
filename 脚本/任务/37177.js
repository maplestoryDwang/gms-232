var status = -1;

function start(d, c, b) {
    (d == 1) ? status++ : status--;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            if (!cm.isQuestActive(37169)) {
                cm.removeAll(4036503);
                cm.removeAll(4220196)
            }
            if (!cm.isQuestActive(37173)) {
                cm.removeAll(4036505);
                cm.removeAll(4220197)
            }
            if (!cm.isQuestActive(37174)) {
                cm.removeAll(4036504)
            }
            if (!cm.isQuestActive(37176)) {
                cm.removeAll(4036506);
                cm.removeAll(4036507);
                cm.removeAll(4220198);
                cm.removeAll(2630243)
            }
            cm.updateInfoQuest(37150, "00=h0;01=h1;02=h0;03=h0;04=h2;07=h1;08=h1");
            cm.sendNext("嗯，我觉得清凉的水更好喝，甜甜的花更好吃。")
        } else {
            if (status === a++) {
                cm.sendNext("进展顺利吗？", 1501008)
            } else {
                if (status === a++) {
                    cm.sendNext("鲁安！！！")
                } else {
                    if (status === a++) {
                        cm.sendNext("你好，鲁安。谢谢你把我的孩子照顾得这么好。", 1501015)
                    } else {
                        if (status === a++) {
                            cm.sendNext("嗯？那只……鸟是……你的孩子……?不会吧……", 1501008)
                        } else {
                            if (status === a++) {
                                cm.sendNext("你好，鲁安。谢谢你把我的孩子照顾得这么好。", 1501015)
                            } else {
                                if (status === a++) {
                                    cm.sendNext("我还担心他会不会受伤，有没有吃饱肚子，没想到你一直在照顾他。\r\n他能长得像现在这样健壮，离不开你的帮助。", 1501015)
                                } else {
                                    if (status === a++) {
                                        cm.sendNext("嗯嗯！鲁安很照顾我，给了我很多好吃的！")
                                    } else {
                                        if (status === a++) {
                                            cm.sendNext("哎呀……真是没想到……你们俩的关系……", 1501008)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNext("看上去长得很不一样吧？但是这孩子只要努力吃饭，快快长大，就也会拥有这样的羽毛。", 1501015)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNext("嘿嘿，我想快点长大。")
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNext("再次向你表示感谢，鲁安。要不是你……", 1501015)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNext("不，身为森林的一员，这是我应该做的。", 1501008)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNext("对了对了！我又想唱歌了。你来听听看好不好听！")
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNext("好的，让我听听到底有多好听。", 1501008)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNextS("哈……哈……哈……")
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.curNodeEventEnd(true);
                                                                            cm.setInGameDirectionMode(true, true);
                                                                            cm.setStandAloneMode(true);
                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1000, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(3000)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Elodin/song_close");
                                                                                cm.fieldEffect_ProcessOnOffLayer("b0", "Effect/Direction21.img/Elodin/sing/0", 0, 2000, 0, 0, 0, 4, 1);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(3000)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNextNoESC("完全……没有……改善……", 1501008)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNextNoESC("我还以为终于可以睡个好觉了呢……", 1501008)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNextSNoESC("不过现在好歹能跟上一点节奏了，不是吗？")
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNextNoESC("……", 1501008)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.fieldEffect_ProcessOnOffLayer("b0", "Effect/Direction21.img/Elodin/sing/0", 2, 1000, 0, 0, 0, 4, 1);
                                                                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.curNodeEventEnd(true);
                                                                                                            cm.setInGameDirectionMode(false, true);
                                                                                                            cm.setStandAloneMode(false);
                                                                                                            cm.forceStartQuest();
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
                            }
                        }
                    }
                }
            }
        }
    }
}

function end(d, c, b) {
    (d == 1) ? status++ : status--;
    var a = -1;
    cm.forceCompleteQuest();
    cm.gainExp(10320);
    cm.dispose()
};