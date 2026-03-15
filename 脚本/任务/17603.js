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
            cm.sendNormalTalk_Bottom("请问你是探险家帕尔巴特吗？", 56, 9390200, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("你看见了我还不知道吗？冒险岛世界最伟大的探险家帕尔巴特在你面前你都认不出来，最近的年轻人真是……哎……！", 36, 9390200, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("(……似乎是个性格很让人棘手的人啊。)", 56, 9390200, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("你是要去凯梅尔兹吧？", 36, 9390200, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("是的……没错……", 56, 9390200, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("你打算怎么去呢？", 36, 9390200, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("啊……？那个……探险家您不是准备了船只……", 56, 9390200, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("当然，我，伟大的帕尔巴特准备了船只。所以说，你打算怎么办呢？", 36, 9390200, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("难道不是您……带我去吗……？", 56, 9390200, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("你这笨蛋，到底有没有耳朵啊！！！我的意思是，我把你带到凯梅尔兹，你会给我什么回报！\r\n因为那个老学究的委托，我准备了去凯梅尔兹的船，#e但是，你不应该详细地说一下你要做什么来作为代价吗？！#n", 36, 9390200, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("(……老学究说的是南哈特吗……如果我回到圣地，我一定要让女皇教训一下南哈特！！)", 56, 9390200, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("这个嘛……抱歉啊，我现在没准备什么东西，但是我以后一定会好好地报答你的。赌上女皇的名誉。", 56, 9390200, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.askYesNo_Bottom("啧啧……所以说最近的年轻人都一样……你也和那个只是嘴上厉害的老学究没什么不一样！算了，你先坐上去吧。我会遵守约定，把你送到凯梅尔兹，你以后可别忘了回报哦！你得知道，我帕尔巴特亲自来给你驾船，一定会把你平安送到，这可是你的荣幸！\r\n#b(接受时立刻前往凯梅尔兹。)", 36, 9390200)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.forceCompleteQuest(17603);
                                                                cm.dispose();
                                                                cm.warp(865090003, 0)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/17603.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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