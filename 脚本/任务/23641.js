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
            cm.sendNormalTalk("#b#h0##k，#b#h0##k！你没事吗？\r\n", 0, 2159405, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b我没事，你怎么会来这里？#k", 16, 2159405, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("我感受到了#p2159391#的脉冲，心生疑惑就过来看看。\r\n那个家伙……看来之前和你战斗留下的伤痕应该是还没有痊愈，所以才会选择乖乖撤离的吧。不过既然已经被那家伙发现，也许格里梅尔很快就会带着黑色之翼追上来。", 0, 2159405, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#b我没想到居然这么快就找到我了，不仅是你，还有#p2159391#说的那个脉冲到底是什么啊？#k", 16, 2159405, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("那算是一种#b波动#k吧，就像人类的心脏在跳动时会发出扑通扑通的声音一样，像你我这样的超级人造人，活动时也会发出一种频率独特的信号。之前你不过是没有当回事，才没有听到而已，集中注意力，你也能听到的哦？", 0, 2159405, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#b……是真的，不仅是你，我身上也是如此，都发出了一种与人类稍有不同的信号，难道就不能让这种信号不发出来吗？#k", 16, 2159405, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("怎么做？脉冲可是表示你正在活动的一种证据，从人类的角度而言，它就相当于是人类的呼吸。只要你不停止活动，脉冲就会一直发出来。", 0, 2159405, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("#b那也就是说，不论我身在何处，#p2159391#都能知道我的位置咯？#k", 16, 2159405, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("确实如此，不过侦测范围大概也就只有一个村子那么大。\r\n所幸我们也能感测到那个家伙的脉冲，所以只要集中注意力，我们就能提前知晓那个家伙什么时候在靠近了。", 0, 2159405, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("#b…….#k", 16, 2159405, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("所幸现在那个家伙的伤还没有痊愈，就连实力平平的你也能将其击败，不过我们可没时间这么傻愣着，趁着那个家伙还没有带其他救兵过来，赶紧逃吧。", 0, 2159405, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("#b…….#k", 16, 2159405, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("你怎么了？", 0, 2159405, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("#b我得向所有反抗者解释这件事，不过如果我以现在的状态回去#m310010000#那里……#k", 16, 2159405, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("现在就回去#m310010000#那里，还有暴露#m310010000#位置的危险，不过眼下也没法和村里的反抗者们提起这些，毕竟村庄各处都有黑色之翼在监视。", 0, 2159405, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk("#b那该怎么做才好呢？总不能什么都不说，就这么悄无声息的离开吧。#k", 16, 2159405, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk("嗯……看来只能将此事告诉一个尽可能看上去和反抗者无关的人，让他代为转告了。", 0, 2159405, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk("#b看起来无关的人？#k", 16, 2159405, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.askAcceptDecline("村里有个叫#b#p2152009##k的小女孩，她是#p2159390#的妹妹，我想对于一个这样的小孩子，黑色之翼应该不会那么防备，就将消息留给这个孩子吧。", 0, 2159405)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.forceStartQuest(23641, "");
                                                                                        cm.sendNormalTalk("#b#p2152009##k就在埃德尔斯坦村，她是个站在台阶中间的小女孩，赶紧过去吧。", 0, 2159405, false, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/23641.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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