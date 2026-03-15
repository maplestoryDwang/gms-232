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
            cm.sendNormalTalk_Bottom("#b#h0##k，你加入荣耀特攻队后，我们就又可以一起行动了。", 36, 1540451, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("说是荣耀特攻队#b第一项任务#k……可能有点过了。\r\n我有件小事要拜托你。", 36, 1540451, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("荣耀特攻队任务……？", 56, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("联盟应该时刻准备着，应对随时可能到来的#b危险#k。", 36, 1540451, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("但是……现在联盟的财政状况相当危险。", 36, 1540451, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("现在别说预防危险了，之前的烂摊子还没收拾完呢。", 36, 1540451, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("战争消耗了大量补给品和物资。", 36, 1540451, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("现在联盟资金极度紧缺，每一个#b丢掉的补给品#k都要尽量找回来。", 36, 1540451, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("因为没钱雇佣士兵……\r\n不不，是因为大家都有工作在忙，所以这次我打算亲自出战。", 36, 1540451, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.askYesNo_Bottom("你要和我一起寻找#r丢失的补给品#k吗？", 36, 1540451)
                                            } else {
                                                if (status === a++) {
                                                    cm.forceCompleteQuest(100298);
                                                    cm.updateInfoQuest(100301, "lv=1");
                                                    cm.updateInfoQuest(100301, "count=0;lv=1");
                                                    cm.sendNormalTalk_Bottom("这是#b通信魔法球#k。有了它，你就能和我保持联络了。\r\n", 36, 1540451, false, true);
                                                    cm.gainItem(2630687, 1)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("在#r#e等级范围怪物#n#k所在的狩猎场中使用#b通信魔法球#k，我就会驾驶运输补给品的运输船去找你。\r\n", 36, 1540451, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("只要你认真完成荣耀特攻队任务，我就会送你#r#i4310272:##t4310272##k，以表谢意。", 36, 1540451, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("荣耀币可以用来在#b联盟补给站#k内购买物品，或提高#b荣耀特攻队阶位#k。", 36, 1540451, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("荣耀特攻队的#b第一项任务#k，就拜托你了。\r\n", 36, 1540451, true, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/100298.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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