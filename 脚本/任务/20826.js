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
            cm.sendNormalTalk("首先，我来介绍一下圣地。圣地是女皇统治的蕴含着魔法力量的岛，一直漂浮在空中。根据需要，我们现在暂时停留在这里。本来应该在冒险岛世界来回巡视，就像船一样。", 1, 1102103, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("现在的情况不是很好。我们现在停留在这里，注视着黑魔法师的一举一动，并积极培养与之对抗的力量。", 1, 1102103, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("嗯，此外……冒险骑士团分为五个组织，分别可以使用光、火、风、闪电、黑暗精灵的力量。由五位骑士团长率领着冒险骑士团……？\r\n嗯？胡克，你干嘛又到我的课堂上来？", 1, 1102103, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("我是想看看新骑士团员的教育进行得怎么样。说不定新加入的人，是我闪电骑士团长胡克的崇拜者呢。", 4, 1102112, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("胡克，这个样子让我感觉很为难。", 1, 1102103, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("奇努，你好像应该先把我介绍给新骑士团员吧？先打个招呼吧？", 5, 1102112, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("胡克，打完招呼你就得走哦。#h0#，这位是闪电骑士团长胡克。虽然我觉得没必要非得认识他，不过你还是先跟他打个招呼吧。", 1, 1102103, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(20826, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/20826.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("我是闪电骑士团长，我叫胡克。听说过我的名字吗？我的名气很大，当然应该知道吧？", 1, 1102112, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("嗯？我好像没……", 3, 1102112, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("别害羞。见到平时崇拜的人，紧张也是难免的。你对闪电骑士——奇袭者感兴趣吗？对了，你叫什么来着？", 1, 1102112, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("胡克，这位新骑士团候补生的名字叫#h0#。现在招呼打完了，请你快走吧。", 5, 1102103, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("我还有很多话要说呢。我的传奇经历……！", 1, 1102112, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("好了，我要继续往下讲了。再见。", 5, 1102103, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("刚才说到哪儿了？新骑士团员训练结束后，就能被任命为修炼骑士，决定自己的道路。光之骑士、火之骑士、风之骑士、黑暗骑士、闪电骑士……必须选择属于自己的道路。", 5, 1102103, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("骑士团的任务是保护女皇，击败黑魔法师，保护冒险岛世界的和平。此外，我们还需要对付黑魔法师的追随者黑色之翼，执行搜集情报的任务等。", 5, 1102103, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("今天的课程就到这里。下一项训练……请你去问问奇姆。", 5, 1102103, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.forceCompleteQuest(20826);
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
};