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
            cm.sendNormalTalk_Bottom("#face1#我还没来得及自我介绍呢，我是这个村子的建筑家，我叫凯尼斯，很高兴见到你！", 37, 9400922, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#b我也很高兴见到你，请多多指教！", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#没想到居然会有这么有名的勇士来到我们村子，真让人感到神奇又安心。", 37, 9400922, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#我在定居这里之前，也是冒险岛世界的冒险家。虽然已经是很久之前的事情了……", 37, 9400922, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#以前的事情之后再说，你怎么会搬到这里来？这个房屋已经空了很久了，没想到会有人搬来呢。", 37, 9400922, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face3#哈哈，我们村子还是挺有名的吧？是吧？哈哈哈", 37, 9400920, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#b是啊，是的……", 57, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#这个房屋看起来有点窄啊，你住得还习惯吗？", 37, 9400922, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face1#如果需要我的帮助，你可以随时来找我。别看我这样，这村子里的房屋大部分都是我建的呢！", 37, 9400922, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#b真的吗？", 57, 0, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face1#当然是真的了，呵呵", 37, 9400922, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#b谢谢！", 57, 0, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#那就下次再见吧。", 37, 9400922, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.npc_LeaveField("oid=11112419");
                                                                cm.sendNormalTalk_Bottom("#b埃尔宾！艾米！你们听到凯尼斯的话了吗？", 57, 0, false, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#b难道……他能帮我建个更大的房屋吗？", 57, 0, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face3##h0#……你的眼睛怎么突然开始放光了……？", 37, 9400920, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face1#虽然我没听到详细的内容，不过如果你想要更大的房屋，那在这个村子里能够帮你的人就只有凯尼斯了。", 37, 9400921, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#face1#凯尼斯的家一直对居民们敞开，你要是好奇，就去找他吧？", 37, 9400920, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("#b你能和我一起去吗？", 57, 0, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("#face2#当然了！", 37, 9400921, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("#face2#当然了~只要你给我小费，呵呵", 37, 9400920, true, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("#face1#我开玩笑的，#h0#，快走吧？", 37, 9400921, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.forceStartQuest(64605, "");
                                                                                                    cm.OnStartNavigation(871200197, 0, "out00", 0);
                                                                                                    cm.dispose();
                                                                                                    cm.forceCompleteQuest(64604)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/64604.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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