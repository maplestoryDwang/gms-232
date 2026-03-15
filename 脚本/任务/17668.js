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
            cm.sendNormalTalk("现在就去，去了就行了吧。", 0, 9390238, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("好吧，现在就去吧。", 2, 9390238, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("等会，特来敏小姐去哪了？", 4, 9390202, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("啊，刚刚战斗前我怕克莱尔小姐被卷进来，把她送到外面去了。", 0, 9390238, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("大概……在#b#m865030300##k了吧。", 0, 9390238, true, true)
                        } else {
                            if (status === a++) {
                                cm.askYesNo("原来是那样。那么我们也赶紧出去吧。", 2, 9390238)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("好吧，赶紧带到吉尔伯特首领那儿去吧。", 57, 9390238, false, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("那样可不行。", 37, 9390218, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.npc_ChangeController(9390218, "oid=2387633", -485, 70, 14, -535, -435, 1, true, 0, false);
                                            cm.npc_SetSpecialAction("oid=2387633", "summon", 0, 0);
                                            cm.sendNormalTalk_Bottom("呃啊！", 32, 9390238, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.forceStartQuest(17668, "");
                                                cm.npc_LeaveField("oid=2387633");
                                                cm.sendNormalTalk_Bottom("糟糕，西温呢！重要的证人消失了！", 57, 9390238, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("这下麻烦了，现在要如何才能洗脱罪名呢？", 37, 9390202, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("稍微放松一下竟然就发生这样的事情！将来的事情也让人担心呐……", 57, 9390238, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom(" 嗯……啊！如此特来敏小姐也叫人担心呢！得赶紧出去看看！", 37, 9390202, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("刚刚西温说克莱尔在哪里？", 57, 9390238, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("说大概会在#b#m865030300##k。赶紧走吧。", 37, 9390202, true, true)
                                                                } else {
                                                                    if (status === a++) {
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/17668.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("特来敏小姐你原来在这里啊。你没事吗？没有受伤吗？", 4, 9390202, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("是的，我没事。你们好像也没事呢。", 0, 9390237, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("是的，托你的福我们也没事。", 4, 9390202, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("西温的部下们怎么样了？", 0, 9390237, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("他们你就不用担心了。只是…… 可惜最后西温还是被杀了。", 2, 9390237, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("怎么会这样……", 0, 9390237, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("不管怎样大家都没事真是万幸。", 4, 9390202, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceCompleteQuest(17668);
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
};