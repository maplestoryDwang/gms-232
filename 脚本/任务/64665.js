var status = -1;
var selectionLog = [];

function start(mode, type, selection) {
    var reactor = "start" + cm.getNumberFromQuestInfo(64665, "s");
    eval(reactor)(mode, type, selection)
}

function start0(d, c, b) {
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
            cm.updateInfoQuest(500957, "instantPlayOver=0;instantPlayCount=0");
            cm.askYesNo("你好#b#h0##k！听说有从异世界来的新朋友，有兴趣的话，你要不要去见见他们？", 4, 9010010)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("现在就让你立刻移动~！", 5, 9010010, false, true)
            } else {
                if (status === a++) {
                    cm.updateInfoQuest(64665, "rMap=" + cm.getMapId() + ";qSetDate=20/04/05;s=1");
                    cm.dispose();
                    cm.warp(867131600, 0, false)
                }
            }
        }
    }
}

function start1(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return
    }(mode == 1) ? status++ : status--;
    selectionLog[status] = selection;
    var i = -1;
    if (status <= i++) {
        cm.dispose()
    } else {
        if (status == i++) {
            cm.askMenu("我可以将你移动到新朋友所在的地方。是否现在立刻移动吗？\r\n#b#L1#去帮忙\r\n#b#L2#帮助来自异世界朋友的方法\r\n#b#L3#关于特别任务\r\n#b#L4#关于配对小游戏", 4, 9010010)
        } else {
            var reactor = "action分支" + selectionLog[1];
            eval(reactor)(mode, type, selection, i)
        }
    }
}

function action分支1(d, c, b, a) {
    if (status <= a++) {
        cm.setNumberForQuestInfo(64665, "rMap", cm.getMapId());
        cm.warp(867131600, 0, false);
        cm.dispose()
    }
}

function action分支2(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("首先，通过位于#b射手村#k，#b神木村#k，#b无名村#k的电光板或是星星形状的提示板移动至异世界朋友们所在的#b教室#k。", 4, 9010010, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk("到达以后，每天会有3位需要帮助的朋友。帮忙实现这三位的请求即可。", 4, 9010010, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("听说在帮助完那三个人后，会赠送#b#t2630962##k作为答谢品。当然，我也不知道那里面都有些什么。", 4, 9010010, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("那就拜托你了！新朋友们好不容易来一次，可要好好招待。", 4, 9010010, true, false)
                } else {
                    if (status === a++) {
                        cm.dispose()
                    }
                }
            }
        }
    }
}

function action分支3(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("如果今天帮助了3位异世界的朋友，之后就可以参加特别活动。", 4, 9010010, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk("一天只有一次特别活动。如果想参加活动，可以去#b教室#k找 b#p9100025##k了解具体事项。", 4, 9010010, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("成功完成特别活动时，可以获得有助于成长的经验值。", 4, 9010010, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("对了！如果每次都成功完成特别活动的话，#b#p9100025#每隔一定次数就会发放很不错的奖励。#k。所以啊，有机会的话，就去试试看！让我想想，奖励是什么来着……", 4, 9010010, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("<第5天>\r\n\r\n#i2450134# #t2450134# 1个 (7天)\r\n#i2630962# #t2630962# 1个 (7天)\r\n4个图腾中随机获得1个\r\n#i1202272# #t1202272# (10天)\r\n#i1202273# #t1202273# (10天)\r\n#i1202274# #t1202274# (10天)\r\n#i1202275# #t1202275# (10天)", 4, 9010010, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("<第10天>\r\n\r\n#i3018422# #t3018422# 1个\r\n#i2450134# #t2450134# 1个 (7天)\r\n#i2630962# #t2630962# 1个 (7天)\r\n4个图腾中随机获得1个\r\n#i1202272# #t1202272# (10天)\r\n#i1202273# #t1202273# (10天)\r\n#i1202274# #t1202274# (10天)\r\n#i1202275# #t1202275# (10天)", 4, 9010010, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("<第15天>\r\n\r\n#i2450134# #t2450134# 1个 (7天)\r\n#i2630962# #t2630962# 1个\r\n4个图腾中随机获得1个\r\n#i1202272# #t1202272# (10天)\r\n#i1202273# #t1202273# (10天)\r\n#i1202274# #t1202274# (10天)\r\n#i1202275# #t1202275# (10天)\r\n#i2631020# #t2631020#\r\n#i2631030# #t2631030#", 4, 9010010, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("<第20天>\r\n\r\n#i2450134# #t2450134# 2个 (7天)\r\n#i2630962# #t2630962# 2个 (7天)\r\n#i2631664# #t2631664# 1个 (7天)\r\n#i2543101# #t2543101#", 4, 9010010, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("特别活动的参考日程如下。\r\n\r\n#b<临海学校>\r\n2020/4/1 7:00 - 2020/4/7 11:59 PM UTC\r\n<运动会>\r\n2020/4/8 7:00 - 2020/4/14 11:59 PM UTC\r\n<试胆大会>\r\n2020/4/15 7:00 - 2020/4/28 11:59 PM UTC#b\r\n\r\n#k那就拜托你了！", 4, 9010010, true, false)
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

function action分支4(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("这么说来，和#b教室#k里的#b#p9100025##k对话的话，就可以进行拼图小游戏了。", 4, 9010010, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk("一天中首次登陆后，每隔30分钟可进行一次游戏。即使游戏失败也不妨碍每30分钟进行一次挑战，但是，只能进行3次。3次以后，只能等到第二天才能继续挑战。", 4, 9010010, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("规则很简单。在3次机会内拼出6对画有异世界朋友脸孔的画即可。", 4, 9010010, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("还有，每次完成时，#b#p9100025##k会给你为你准备的#b#t2630963##k。运气好的话，在异世界的朋友们停留的这段时间内说不定还能获得图腾呢？", 4, 9010010, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("还有一点！#b活动期间，前3次的游戏不需要等待30分钟再进行，可立即开始游戏#k，现在就快开始吧！", 4, 9010010, true, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/64665.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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