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
            cm.sendNormalTalk("绑匪那家伙到底在做些什么？他把能量聚集起来是要做什么……该死的！得赶紧去阻止他！", 32, 2450034, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("等下！我们去阻止他！", 44, 2400005, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("什么？你们？你们知道吗？如果无法阻止他的话，埃德尔斯坦就会陷入困境！", 32, 2450034, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("知道……但是这件事的起因是由于我们……我们来解决！不要担心！我们能阻止这一切！", 44, 2400005, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("……呵。我知道你们这些家伙是不会说谎的。也没别的办法了！我就等你们一会儿！如果#p2450004#说情况紧急的话，我们就立刻赶去！", 32, 2450034, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("别担心。我们一定会阻止他的！", 44, 2400006, true, true)
                            } else {
                                if (status === a++) {
                                    cm.updateInfoQuest(40405, "");
                                    cm.forceStartQuest(40405, "");
                                    cm.dispose();
                                    cm.warp(325090100, 2, false)
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/40405.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, true, true);
            cm.sendNormalTalk("什么啊？你们又来了？我不是说了嘛…… 我要和你们脱离关系。从现在起，我要按照我的心意活着！", 33, 2450000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("现在即将实现！只要利用这电站的能量，我就能变成一个真正的普通人了……", 33, 2450000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#face1#已经超过了这个电站所能承受的能量的限额！弄不好会爆炸的！赶紧停下来！", 41, 2400005, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("爆炸？呵呵呵呵……爆炸也应该很有趣吧。那样就能和你们脱离关系了啊。我不在乎。", 33, 2450000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#face11#……你疯了啊。", 41, 2400005, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#face11#没办法了。我可以亲自断绝我们和你的关系。只要我们放弃你这个女神之泪，你就能获得自由了。", 41, 2400005, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("……#p2400005#？！", 41, 2400006, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("#face1#我们不需要你这种家伙的力量！有你的参与，反而会让我们觉得不爽！与其如此，不如干净利落地结束这一切。", 41, 2400005, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("……因为和#p2450001#约定好了？", 41, 2400006, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("#face11#也有那个原因。#p2450000#！抓住我的手。我会让你获得自由的。", 41, 2400005, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("什么？呵呵呵……你是要放弃我吗？你不会是在说谎吧？", 33, 2450000, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("#face11#我还不至于为了把你这种家伙带走而说谎。沙马尔，拉尔汉，伍龚他们与你不同。把你与他们相提并论，是对他们的侮辱。", 41, 2400005, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("他们是谁。我没听过这些名字。呵呵呵……不管怎么说，你是要帮我恢复自由，对吧？那好。快帮我解脱吧。", 33, 2450000, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                cm.effect_REPEAT("Effect/Direction13.img/effect/zero/base/0", 1, 1, 1, 0, 0)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("呵呵呵……这样我就能恢复自由了。自由……自由啦！", 33, 2450000, false, true);
                                                                    cm.effect_REPEAT("Effect/Direction13.img/effect/zero/arsen/0", 1, 1, 1, 0, 0)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                        cm.effect_REPEAT("Effect/Direction13.img/effect/zero/arsen/0", 1, 0, 0, 0, 0)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk("……额？这是怎么回事……？", 33, 2450000, false, true);
                                                                            cm.effect_REPEAT("Effect/Direction13.img/effect/zero/base/0", 1, 0, 0, 0, 0)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk("#face11#什么？突然间热气……", 41, 2400005, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.dispose();
                                                                                    cm.warp(325090220, 0, false)
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
};