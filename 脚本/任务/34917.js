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
            cm.sendNormalTalk_Bottom("#face3#嗯……你有什么话想说吗？啊，或者我做错了什么吗！？", 36, 3001508, 0, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#我也去帮忙。因为现在我的首要任务……也是活下去。和你们一样。", 36, 3001500 + cm.getPlayer().getGender(), 1, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face2#啊，你救了马尔，我们还没能报答你……不过现在我们确实需要人手……", 36, 3001508, 1, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face4#不要有什么负担。和你们一起寻找离开这里的方法……也是为了我自己。", 36, 3001500 + cm.getPlayer().getGender(), 1, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face2#是，是的，我们应该互相帮助……好吧，为了救治伤员，需要大量可以当作绷带使用的东西……", 36, 3001508, 1, 1)
                        } else {
                            if (status === a++) {
                                cm.askAcceptDecline_Bottom("#face2#你去从#r#m402000610##k的#o2400350#身上搜集#b20个#k#i4036344# #b#t4036344##k。", 36, 3001508)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face2#啊，对了，抱歉上次对你太无理了……嗯，嗯……好了，路上小心。", 36, 3001508, 0, 1)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(34917, "");
                                        cm.OnStartNavigation(402000610, 0, "", 34917);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/34917.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.forceCompleteQuest(34917);
            cm.gainExp(480);
            cm.updateInfoQuest(34917, "exp=1");
            cm.sendNormalTalk_Bottom("#face0#……哦，这么快就拿来啦。真是非常感谢，嘿嘿。有了这些，伤员们就能得到治疗了。", 36, 3001508, 0, 1);
            cm.gainItem(4036344, -20)
        } else {
            if (status === a++) {
                cm.openUI(205);
                cm.sendNormalTalk_Bottom("#face0#嗯……如果回避难处太辛苦，也可以通过向导回来。", 36, 3001508, 1, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#……啊，哈哈，你已经知道了吗……那，那以后避难处的事情可能还得常麻烦你。", 36, 3001508, 1, 1)
                } else {
                    if (status === a++) {
                        cm.dispose()
                    }
                }
            }
        }
    }
};