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
            cm.askAcceptDecline("你不觉得奇怪吗？最近的鸡怎么和以前不一样了？以前它们会下很多#t4032451#，但现在越来越少了。是不是因为狐狸增多了呢？那样的话，必须赶紧想办法才行。你说对不对？", 0, 1013101)
        } else {
            if (status === a++) {
                cm.forceStartQuest(22008, "");
                cm.sendNormalTalk("好吧，让我们去消灭狐狸吧。你先去#b#m100030103##k消灭#r10只#o9300385##k。我会负责剩下的事情的。好了，你快到#m100030103#去吧～", 1, 1013101, false, true)
            } else {
                if (status === a++) {
                    cm.onScriptMessage_显示教程引导图片(["UI/tutorial/evan/10/0"])
                } else {
                    if (status === a++) {
                        cm.OnStartNavigation(100030102, 0, "east00", 22008);
                        cm.npc_LeaveField("oid=768");
                        cm.npc_LeaveField("oid=770");
                        cm.npc_LeaveField("oid=771");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/22008.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("#o9300385#消灭掉了吗？", 0, 1013101, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b你说要去收拾剩下的狐狸的，怎么回事？", 2, 1013101, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("啊，那个嘛？我后来是去了，但走错了路，怕被#o9300385#抓去做人质，所以就回来了。", 0, 1013101, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#b该不会是害怕狐狸而躲起来了吧？", 2, 1013101, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("你在胡说什么啊？！我为什么会害怕狐狸？！我一点都不害怕狐狸！", 0, 1013101, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#b……啊，有一只#o9300385#！", 2, 1013101, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("啊！快躲起来！", 0, 1013101, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("#b……", 2, 1013101, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("…………", 0, 1013101, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("……你这家伙。别吓哥哥我！哥哥我的心脏不好，不能受惊吓！", 0, 1013101, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("#b(所以叫哥哥才不愿意去，叫我去。)", 2, 1013101, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("哼哼，不管怎样，#o9300385#消灭掉了。辛苦你了，我把一个路过的冒险家送我的东西送给你，作为给你的报酬。来，拿着。\r\n\r\n#fUI/UIWindow2.img/QuestIcon/4/0# \r\n#i1372043# #t1372043#1个\r\n#i2022621# #t2022621#25个\r\n#i2022622# #t2022622#25个\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 910 exp", 0, 1013101, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.forceStartQuest(22008, "010");
                                                            cm.forceCompleteQuest(22008);
                                                            cm.gainExp(910);
                                                            cm.sendNormalTalk("是#b魔法师的攻击武器短杖#k。虽然你也可能没什么用，但拿在手里到处走，还是很帅的，哈哈哈。", 0, 1013101, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.gainItem(1372043, 1);
                                                                cm.gainItem(2022621, 25);
                                                                cm.gainItem(2022622, 25);
                                                                cm.sendNormalTalk("狐狸的数量确实增加了，对吧？奇怪。狐狸的数量为什么会增加呢？看来必须调查一下。", 0, 1013101, true, false);
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
};