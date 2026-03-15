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
            cm.sendNormalTalk("你好，#b#h0##k。可以的话，你能到埃德尔斯坦来一趟吗？", 0, 2151003, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("埃德尔斯坦发生什么事了吗？", 16, 2151003, true, true)
            } else {
                if (status === a++) {
                    cm.askYesNo("不，没发生什么事……但是有件事希望你能来一趟。你能现在过来吗？", 0, 2151003)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(23620, "");
                        cm.sendNormalTalk("好的，请重新和我说话。", 0, 2151003, false, false);
                        cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/23620.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("吉格蒙特，有什么事吗？", 16, 2151003, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("刚才我也说过了，不是什么急事，请不要担心。其实……", 4, 2151003, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#h0#之前你刚到埃德尔斯坦的时候，大家都手忙脚乱的。我怕你会觉得不舒服，这次叫你来，是想正式向你表示欢迎。", 4, 2151002, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("虽说是欢迎，但没什么特别的东西。", 4, 2151001, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("真的只是想和你打个招呼，最好不要抱什么特别的期待。", 4, 2151000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("这种事情不太合我的口味，我就不用参加了吧……", 4, 2151004, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("切奇！你在说什么啊！大家在一起才开心嘛！", 4, 2151002, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("嗯……但我又不是这里的新人……", 4, 2151004, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("只是想让大家一起欢迎#h0#，只要高兴就行。", 4, 2151001, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("哈哈……原来如此……", 16, 2151003, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("(嗯，奇怪？)", 16, 2151003, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("(感觉#r过去好像也发生过这样的事情#k……）", 16, 2151003, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("#h0#？有什么问题吗？干嘛在那里发愣？", 4, 2151003, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("不，没什么。", 16, 2151003, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("是吗？那我把礼物送给你。我们为你准备了礼物，还有新技能。希望能成为你新的力量。\r\n\r\n#fUI/UIWindow2.img/QuestIcon/4/0#\r\n#s30021005# #q30021005#\r\n#v1142579# #t1142579#", 4, 2151003, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.teachSkill(30021005, 1, 1);
                                                                        cm.forceCompleteQuest(23620);
                                                                        cm.sendNormalTalk("你安全回到了埃德尔斯坦。我对你的归来表示衷心的欢迎。", 4, 2151003, true, false)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.gainItem(1142579, 1);
                                                                            cm.forceStartQuest(32009, "");
                                                                            cm.forceCompleteQuest(32009);
                                                                            cm.warp(310000000, 0, false);
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
};