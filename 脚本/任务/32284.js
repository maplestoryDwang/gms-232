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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, false);
            cm.sendNormalTalk("请等一下，黑色之翼大哥！", 17, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("叫我吗？", 1, 1520014, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("我也想加入黑色之翼。听说要加入黑色之翼的话，必须有那个帽子才行。你能把那个帽子给我吗？", 17, 1520014, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("这个帽子啊，给你也不是那么难的事情。…………不过，我觉得得有条件才行，比如消灭一百只怪物啦，或者收集一百个道具之类的……", 1, 1520014, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("确切地讲，最近比较流行那种东西。这种委托虽然听上去很简单，但如果不是被选中的人，是无法完成的。我想看看你否真的具备那种资格?!", 1, 1520013, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("原来如此。……给你吧。", 1, 1520014, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("我做到啦！这比想象中的简单嘛！", 17, 1520014, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(32368, "");
                                        cm.sendNormalTalk("太好了！", 1, 1520013, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("……….", 1, 1520014, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("虽然我不知道你要去矿山的真正理由是什么，不过我觉得，就算你进去了也得不到你想要的情报。", 1, 1520014, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("那是为什么？", 17, 1520014, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("黑色之翼的干部们好像因为某件事情而被分散到了冒险岛世界的各处。现在只有一个叫乐迪安的秘书还在。不过，我相信她不会像我一样，被你们的谎话所蒙骗。", 1, 1520014, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("(被谎话“蒙骗”？)", 17, 1520014, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("那可如何是好？我们需要有关黑色之翼干部们的情报。而且是有关“变身术士”的情报。", 1, 1520013, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("那样的话，请在这里稍等片刻？说不定我可以帮到你们。", 1, 1520014, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.forceStartQuest(32361, "");
                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/story/BalloonMsg1/1"], [900, 0, -120, 0, 0, 0, 0, 0, 0]);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1140)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk("?! 消失了？", 17, 1520014, false, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk("……总感觉有些不对劲啊。黑色之翼说的话能这么轻易相信吗？那家伙会不会是把其他黑色之翼的人都叫过来呢？", 1, 1520013, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/BalloonMsg0/1", "oid=0"], [1500, 343, -60, 1, 0, 1, 1, 0, 0]);
                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/BalloonMsg0/1"], [1500, 0, -120, 0, 0, 0, 0, 0, 0]);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(4000)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.forceCompleteQuest(32361);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk("我回来了。给，我觉得你们需要这个，就带来了。", 1, 1520014, false, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.gainExp(50000);
                                                                                                cm.forceCompleteQuest(32284);
                                                                                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                cm.setInGameDirectionMode(false, true, false);
                                                                                                cm.gainItem(4033889, 1);
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

function stage0(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/32284.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的结束脚本还没有修复哦。它的脚本位于： #b /脚本/任务/#e" + e + "#n.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻完成这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};