var status = -1;
var selectionLog = [];

function start(mode, type, selection) {
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
            cm.askMenu("你好！关于#b#e<回归的骨碌骨碌屋>#k#n，你有什么想知道的吗？\r\n\r\n#L0# 告诉关于#b骨碌骨碌屋#k的内容。#l\r\n#L1# 好奇获得#b#t2631384##k的方法。#l\r\n#L2# 告知#b已经获得的#t2631384##k数量。#l\r\n#L3# 可以在哪儿得到#b材料#k呢？#l\r\n#L4# 告诉关于#b等级达成奖励#k的内容。#l\r\n#L5# 想了解#b活动时间#k。#l\r\n#L6# 没有想知道的了。#l\r\n", 4, 9062276)
        } else {
            var reactor = "action分支" + selectionLog[1];
            eval(reactor)(mode, type, selection, i)
        }
    }
}

function action分支0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("骨碌骨碌屋听到#i2631384:##e#t2631384:##n的话会快快长大的。", 4, 9062276, 0, 1)
    } else {
        if (status === a++) {
            cm.sendNormalTalk("蹭蹭地长得越快，就可以变更更多位置的外形！", 4, 9062276, 1, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("你可以将嗖嗖长大的#i3018467:# #e#t3018467:##n\r\n装扮得气派一些！\r\n不过，需要装扮的#e#b材料#n#k！", 4, 9062276, 1, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("\r\n#i2631286:# #i2631287:# #i2631288:# #i2631289:# #i2631290:# #i2631291:# #i2631292:# #i2631293:# \r\n增加到#i2631294:# #i2631295:#为止！\r\n\r\n在冒险岛世界藏着非常多不同的#e#b材料#n#k！", 4, 9062276, 1, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("使用#e#b材料#n#k时可登记新#e#b外形#n#k。\r\n你不知道会在何时何地得到材料，所以一定要时刻让#e#b消耗栏#n#k保持充足的栏数！", 4, 9062276, 1, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("可随时在#e#b[骨碌骨碌]布置骨碌骨碌屋！#n#k中变更\r\n已登记过的#e#b外形#n#k。", 4, 9062276, 1, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("嘿嘿！那么快来培养\r\n#i3018467:# #e#t3018467:##n吧！", 4, 9062276, 1, 1);
                                status = -1
                            }
                        }
                    }
                }
            }
        }
    }
}

function action分支1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("狩猎#r#e等级范围怪物#k#就能获得 \r\n#i2631384:# #e#t2631384:##n！嘿嘿！\r\n\r\n #fc0xFFAAAAAA#- 等级范围怪物：以角色的等级为准 -20等级到+20等级范围内的相应怪物#k", 4, 9062276, 0, 1)
    } else {
        if (status === a++) {
            cm.sendNormalTalk("使用#i2631384:# #e#t2631384:##n的话，骨碌骨碌屋就可以听到歌曲！", 4, 9062276, 1, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("努力收集#i2631384:# #e#t2631384:##n，播放歌曲的话，#i3018467:# #e#t3018467:##n就会快快成长吧~？", 4, 9062276, 1, 1);
                status = -1
            }
        }
    }
}

function action分支2(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("现在已经获得了 #r#e0个#n#k旋律！", 4, 9062276, 0, 1);
        status = -1
    }
}

function action分支3(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("布置骨碌骨碌屋需要#e#b材料#n#k！", 4, 9062276, 0, 1)
    } else {
        if (status === a++) {
            cm.sendNormalTalk("\r\n#i2631286:# #i2631287:# #i2631288:# #i2631289:# #i2631290:# #i2631291:# #i2631292:# #i2631293:# \r\n增加到#i2631294:# #i2631295:#为止！\r\n\r\n在冒险岛世界藏着非常多不同的#e#b材料#n#k！", 4, 9062276, 1, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("\r\n狩猎#r#e等级范围怪物#n#k\r\n就能获得#i2631286:# #i2631287:# #i2631288:# #i2631292:# ！", 4, 9062276, 1, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("\r\n狩猎#r#e精英怪物#n#k，\r\n就可以获得#i2631291:# #i2631295:#！", 4, 9062276, 1, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("最后…… \r\n狩猎#r#eBOSS怪物#n#k，\r\n就可以获得#i2631289:# #i2631290:# #i2631293:# #i2631294:#！", 4, 9062276, 1, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("那么来好好装扮骨碌骨碌屋吧！", 4, 9062276, 1, 1);
                            status = -1
                        }
                    }
                }
            }
        }
    }
}

function action分支4(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("如果#i3018467:# #e#t3018467:##n长势喜人的话，我会送你特别礼物的！", 4, 9062276, 0, 1)
    } else {
        if (status === a++) {
            cm.sendNormalTalk("特别礼物就是！\r\n\r\n#e#b<骨碌骨碌屋 2级达成奖励>#n#k\r\n  #i2450167:# #t2450167:# 4个\r\n\r\n\r\n#e#b<骨碌骨碌屋 4级达成奖励>#n#k\r\n  #i2437089:# #t2437089:# 1个", 4, 9062276, 1, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("特别礼物就是！\r\n\r\n#e#b<骨碌骨碌屋 6级达成奖励>#n#k\r\n  #i2631414:# #t2631414:# 1个\r\n  #i2631415:# #t2631415:# 1个\r\n\r\n\r\n#e#b<骨碌骨碌屋 8级达成奖励>#n#k\r\n  #i2530008:# #t2530008:# 1个", 4, 9062276, 1, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("特别礼物就是！\r\n\r\n#e#b<骨碌骨碌屋 10级达成奖励>#n#k\r\n  #i2433604:# #t2433604:# 1个\r\n\r\n\r\n#e#b<骨碌骨碌屋 12级达成奖励>#n#k\r\n  #i2631413:# #t2631413:# 1个", 4, 9062276, 1, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("嘿嘿！那么快来培养\r\n#i3018467:# #e#t3018467:##n吧！", 4, 9062276, 1, 1);
                        status = -1
                    }
                }
            }
        }
    }
}

function action分支5(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("你想了解活动时间？\r\n\r\n\r\n#b#e[活动时间]\r\n#n#k2020年05月27日~2020年06月10日晚上11时59分#n#k", 4, 9062276, 0, 1)
    } else {
        if (status === a++) {
            cm.sendNormalTalk("对了！即使活动结束，也可以\r\n继续装扮骨碌骨碌屋！\r\n\r\n\r\n#b#e[装扮时间]#n#k\r\n2020年05月27日~2020年06月17日晚上11时59分#n#k", 4, 9062276, 1, 1);
            status = -1
        }
    }
}

function action分支6(d, c, b, a) {
    cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/100487.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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