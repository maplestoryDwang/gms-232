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
            cm.sendNormalTalk("呜哇，#p2400006#！只有#p2400006#被送进了圣物的内心世界，我吓了一跳。#p2400005#也吓了一跳，虽然假装……", 32, 2400007, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#face0#别说没用的话！怎么回事？拿到圣物了吗？", 44, 2400005, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("嗯，但只有一半。", 44, 2400006, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("一半？", 44, 2400005, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("它说圣物有两个……", 44, 2400006, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("因为#p2400005#和#p2400006#是两位，好像圣物也被分成两个了。我说呢，总能感觉到两个圣物的内心世界……", 32, 2400007, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("#face11#等下……你一开始就知道？那你为什么不早说？", 44, 2400005, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("那，那是……以为两位当中已经有人拿到圣物了。还真没想到两位都没有！哈哈哈哈！", 32, 2400007, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("#face11#住嘴！", 44, 2400005, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.askAcceptDecline("是。那么这次就把#p2400005#送过去就好吧？点击接受就可以移动！", 32, 2400007)
                                            } else {
                                                if (status === a++) {
                                                    cm.updateInfoQuest(40063, "");
                                                    cm.forceStartQuest(40063, "");
                                                    cm.dispose();
                                                    cm.getPlayer().setGender(0);
                                                    cm.onZeroInfo(199);
                                                    cm.warp(321190520, 3, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/40063.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("切！你……比想象的还要厉害嘛！竟然会打赢我。", 32, 2400010, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#face1#好，好吧……虽然我也不是很甘心，但是我把你当成我的主人。你该感谢我才对！", 32, 2400010, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#face1#你喜欢用太刀是吧？那我就变成太刀！但是不能随便乱用！", 32, 2400010, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#b(……说话尖酸苛刻，但行动却这么和蔼亲切，难道就是这种性格？……反正都要用的，那就亲切地对待吧。)", 44, 2400005, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#face5#你一定要小心保管，因为以后我们要时刻在一起了。那么就拜托你了。", 44, 2400005, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#face1#别，别说这种奇怪的话！快把我送回去！", 32, 2400010, true, true)
                            } else {
                                if (status === a++) {
                                    cm.gainExp(1706000);
                                    cm.forceCompleteQuest(40063);
                                    cm.forceCompleteQuest(40905);
                                    cm.dispose();
                                    cm.warp(320000000, 0, false)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};