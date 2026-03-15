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
            cm.sendNormalTalk("即使知道了我是谁好像也不能改变各位的处境啊。", 0, 9390249, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("虽然是那样，但也得搞清楚是谁帮助了我们呀，不是吗。", 2, 9390249, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("那就这样吧。如果你告诉我你是谁，我给你双倍的谢礼。", 4, 9390202, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("吼哦……那可真是很有吸引力哦。可是你现在有能力支付那笔金额吗？", 0, 9390249, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("呃……其实现在眼前是有点困难……好像只能给你一半的金额。", 4, 9390202, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("好吧。其实我是……", 0, 9390249, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askYesNo("等会！！我感到这附近有很重的杀气！是狼群！快做好准备！！", 2, 9390249)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(17656, "");
                                        cm.sendNormalTalk("这里有狼群？？先赶紧消灭掉吧！得把女性的安全放在第一位！", 4, 9390202, false, true)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/17656.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("所幸好像已经全部击退了……", 2, 9390249, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("你没事吧？没受伤吧？", 4, 9390202, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("啊……哦……我没事。受伤了……哎呀，手受伤了。", 0, 9390249, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("没关系。没什么大不了的。刚才被咬了一下。哈哈……", 4, 9390202, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("你还说没关系。即使是小伤口放任不管的话也会变严重的。", 0, 9390249, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("你们……干嘛呢。", 2, 9390249, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("哦？喔呵呵。所以呢，最终你的身份是……", 4, 9390202, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceCompleteQuest(17656);
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