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
            cm.sendNormalTalk("天啊……我没看错吧？#p9400215#真的走到城墙外面了吗？", 4, 9400216, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b没错！因为我把城墙外的#o9402046#全消灭了，所以很安全。\r\n#p9400216#，城墙外面的景色真的很美，吃的东西也很多！", 2, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#b#p9400216#你也走出城墙外去看看怎么样？", 2, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("可是我现在没力气动弹……想出去也出不去啊。", 4, 9400216, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#b我来扶你！", 2, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("你来扶我的话，我的金银财宝谁搬呢？", 4, 9400216, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("#b那么，我先把#p9400216#你扶到外面，然后再回来搬运金银财宝。这样行了吧？", 2, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("你的意思是……让#p9400217#和我的金银财宝待在一起？", 4, 9400216, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("#b那我先把金银财宝搬到城墙外面……", 2, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("就算你消灭了很多#o9402046#，总有那么几个藏在暗处的家伙。你怎么能把我的金银财宝孤零零地放在城外呢？", 4, 9400216, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.askMenu("#b#L0#先搬运金银财宝#l\r\n#L1#先把#p9400216#送出外面\r\n#L2#先把#p9400217#送出外面#l", 16, 0)
                                                } else {
                                                    if (status === a++) {
                                                        if (b == 2) {
                                                            cm.sendNormalTalk("#b有了，干脆先把#p9400217#送出去。那么一来……OK！", 2, 0, false, true)
                                                        } else {
                                                            cm.sendNormalTalk("不行……这样我还是感觉不放心。", 4, 9400216, true, true);
                                                            cm.dispose()
                                                        }
                                                    } else {
                                                        if (status === a++) {
                                                            cm.forceStartQuest(63069, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/63069.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("我把#b#p9400217#送出去了。现在城墙里只剩下#p9400216#。", 2, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("现在只要我出去就行了吗……", 4, 9400216, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(63069);
                    cm.gainExp(952800);
                    cm.updateInfoQuest(63069, "exp=1");
                    cm.dispose()
                }
            }
        }
    }
};