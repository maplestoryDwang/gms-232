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
            cm.askMenu("\r\n有什么想知道的，随便问！\r\n\r\n#L0# 请介绍一下#b<新复古荣誉勇士>的相关内容。#k#l\r\n#L1# #b请给我介绍一下<新复古荣誉勇士>升级的相关内容。#k#l\r\n#L2# 请介绍一下#b<新复古荣誉勇士>福利。#k#l\r\n", 4, 9062172)
        } else {
            var reactor = "action分支" + selectionLog[1];
            eval(reactor)(mode, type, selection, i)
        }
    }
}

function action分支0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom("\r\n你想了解#b#e<新复古荣誉勇士>#k#n吗？", 36, 9062172, false, true, 3)
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("\r\n#e<新复古荣誉勇士>#n是新复古王国给为王国做出特别贡献的勇士们授予的一种爵位。", 36, 9062172, true, true, 3)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("\r\n尽管不是王国的正式骑士，但新复古荣誉勇士们可以按其星级享受各种各样的福利待遇。", 36, 9062172, true, true, 3)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("\r\n相信你也知道，眼下新复古王国最迫切的任务，就是找回#e被封印的新复古装备#n，消灭#e魔王皮洛克#n。", 36, 9062172, true, true, 3)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("\r\n每次你使用#b#e<新复古能量>#k#n解除一个新复古装备的封印时，我就为你把新复古荣誉勇士星级提高一个阶段。", 36, 9062172, true, true, 3)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("\r\n那你赶快行动起来，成为拯救我们#b#e新复古王国#k#n的英雄吧！\r\n#b#h0##k!", 36, 9062172, true, false, 3)
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

function action分支1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom("\r\n#r<新复古荣誉勇士>升级所需纪念币#k\r\n\r\n- 2星勇士：#b200#k个新复古币\r\n- 3星勇士：#b300#k个新复古币\r\n- 4星勇士：#b500#k个新复古币\r\n- 5星勇士：#b800#k个新复古币", 132, 9062172, true, true, 3)
    } else {
        if (status === a++) {
            cm.dispose()
        }
    }
}

function action分支2(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom("\r\n#r发放<荣誉勇士礼物>#k\r\n\r\n#b晋升2星勇士时#k\r\n\r\n#i2630506:# #t2630506:#\r\n#i2630508:# #t2630508:#", 132, 9062172, false, true, 3)
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("\r\n#r发放<荣誉勇士礼物>#k\r\n\r\n#b晋升3星勇士时#k\r\n\r\n#i2630507:# #t2630507:#\r\n#i2630509:# #t2630509:#", 132, 9062172, true, true, 3)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("\r\n#r发放<荣誉勇士礼物>#k\r\n\r\n#b晋升4星勇士时#k\r\n\r\n#i2630530:# #t2630530:#\r\n#i2630510:# #t2630510:#", 132, 9062172, true, true, 3)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("\r\n#r发放<荣誉勇士礼物>#k\r\n\r\n#b晋升5星勇士时#k\r\n\r\n#i2630531:# #t2630531:#\r\n#i2630532:# #t2630532:#\r\n#i2630533:# #t2630533:#\r\n#i2630534:# #t2630534:#\r\n#i2630511:# #t2630511:#", 132, 9062172, true, true, 3)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("\r\n#r<新复古能量>每日上限量升级#k\r\n\r\n- 1星勇士：#b10,000#k点新复古能量\r\n- 2星勇士：#b20,000#k点新复古能量\r\n- 3星勇士：#b30,000#k点新复古能量\r\n- 4星勇士：#b40,000#k点新复古能量\r\n- 5星勇士：#b50,000#k点新复古能量", 132, 9062172, true, true, 3)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("\r\n#r<新复古币商店>升级#k\r\n\r\n- 1星勇士：可使用#b1星纪念币商店#k\r\n- 2星勇士：可使用#b2星纪念币商店#k\r\n- 3星勇士：可使用#b3星纪念币商店#k\r\n- 4星勇士：可使用#b4星纪念币商店#k\r\n- 5星勇士：可使用#b5星纪念币商店#k", 132, 9062172, true, true, 3)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("\r\n#r<荣誉勇士之力>升级#n#k\r\n\r\n- 2星勇士：<荣誉勇士之力>#b技能等级1#k\r\n- 3星勇士：<荣誉勇士之力>#b技能等级2#k\r\n- 4星勇士：<荣誉勇士之力>#b技能等级3#k\r\n- 5星勇士：<荣誉勇士之力>#b技能等级4#k\r\n\r\n#r※ 详细效果可到0转技能窗口中查看#k", 132, 9062172, true, false, 3)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/500728.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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