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
            cm.sendNormalTalk("#face2#很抱歉……没能抓到#p2400008#。", 32, 2400007, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("他去了哪里……？你确认过了吗？", 44, 2400005, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#face2#……他正往影子村方向移动。", 32, 2400007, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#face11#…………", 44, 2400005, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#face0#……已经证实他是叛徒了。唉，虽然他自己说自己是叛徒……", 36, 2400000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#face2#我不明白！那家伙为什么……#p2400008#是真心尊敬、喜爱两位的。如果两位去了村庄，他是最担心的人……为了帮助两位，他付出了最多的努力……但那家伙为什么会？到底是为什么…？", 32, 2400007, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("#face11#……想知道理由是什么，直接问他就可以了。", 44, 2400006, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("……你说得对。他到底为什么要背叛我们，直接问他就可以知道了。你说影子村方向？去看看就行了。", 44, 2400005, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("#face2#但是，去那里不是会很危险吗……？与之前不同，影子骑士团也做了很多整顿……说不定军团长也在那里呢！我……不希望两位去。", 32, 2400007, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("#face11#不能连理由都不知道就这么算了。如果叛徒是别人还无所谓。但是这个神殿的人全部都是我的同伴、我的家人。", 44, 2400005, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("#face11#背叛不能被原谅……但是，他为什么会做出那样的选择……我很想知道理由……", 44, 2400006, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("#face2##p2400005#……#p2400006#……但是……但是……！", 32, 2400007, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("#face0#……既然两位的意志这么坚定，那也没办法。#p2400007# 神官。我们是追随两位，侍奉两位的人……我们不能阻碍两位的成长。请两位务必要平安归来。", 36, 400000, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.updateInfoQuest(40505, "");
                                                                cm.forceStartQuest(40505, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/40505.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.inGameDirectionEvent_AskAnswerTime(500)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("……话说回来……我还是第一次亲眼看到两位战斗呢。两位齐心协力战斗的样子……真是令人印象深刻。", 41, 2400008, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("……怎么样？现在你能相信我们了吧？我们……会战胜黑魔法师的！", 41, 2400005, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("如果是两位……说不定能做到呢。如果我能亲眼看到就好了……", 41, 2460017, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#p2400008#？你说的是什么意思……？你渐渐……变得透明了？", 33, 2400006, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("我的时间似乎已经用尽了。很抱歉。我只会妨碍两位的事情……", 41, 2460017, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("#face1#现在立刻回到神殿的话……！", 33, 2400005, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("我不是那么厚颜无耻的人。请不要宽恕我。", 41, 2460017, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.npc_SetSpecialAction("oid=2929984", "remove", 0, 1);
                                            cm.forceCompleteQuest(40505);
                                            cm.forceCompleteQuest(40953);
                                            cm.forceStartQuest(40516, "1");
                                            cm.inGameDirectionEvent_AskAnswerTime(1500)
                                        } else {
                                            if (status === a++) {
                                                cm.npc_LeaveField("oid=2929984");
                                                cm.inGameDirectionEvent_AskAnswerTime(1500)
                                            } else {
                                                if (status === a++) {
                                                    cm.gainExp(53908000);
                                                    cm.dispose();
                                                    cm.warp(320000000, 0, false);
                                                    cm.setInGameDirectionMode(false, true, false)
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