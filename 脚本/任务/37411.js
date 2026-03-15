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
            cm.sendNormalTalk_Bottom("#face0#听说你们在寻找圣剑的主人。", 36, 3004434, false, true);
            cm.effect_Voice("Voice5.img/CH2/Arran/10", 128)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#为了守护圣地，卡莱尔希望重新找回圣剑之光。\r\n却不知你们二位为何愿意从旁协助？", 36, 3004434, true, true);
                cm.effect_Voice("Voice5.img/CH2/Arran/11", 128)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("我想要确认一下#r古代神#k的力量。\r\n看看能否在即将来临的战争中起到作用。", 56, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#你说的战争是指……", 36, 3004434, true, true);
                        cm.effect_Voice("Voice5.img/CH2/Arran/12", 128)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#原来这几天城里各种消息甚嚣尘上，说的就是你啊。\r\n#r对抗者 #h0#。", 36, 3004434, true, true);
                            cm.effect_Voice("Voice5.img/CH2/Arran/13", 128)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("没错。", 56, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askYesNo_Bottom("#face0#你明知道与#r吉伦·达勒摩尔#k对立会造成多大的牺牲，\r\n也还是决心要与他一战？", 36, 3004434);
                                    cm.effect_Voice("Voice5.img/CH2/Arran/14", 128)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#……看来你是不会改变主意了。\r\n毕竟已经亲手葬送过一位堕落的超越者……", 36, 3004434, false, true);
                                        cm.effect_Voice("Voice5.img/CH2/Arran/15", 128)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#二位最好还是先去阅读以下记载有关圣剑内容的古代文献吧。", 36, 3004434, true, true);
                                            cm.effect_Voice("Voice5.img/CH2/Arran/17", 128)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#文献都保管在这个图书馆里是吗？", 36, 3004431, true, true);
                                                cm.effect_Voice("Voice5.img/CH2/Idea/56", 128)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#没错。但是……古代文献保管在图书馆第3区域。\r\n而且，一路上都有#r古代灵魂#k在看守。", 36, 3004434, true, true);
                                                    cm.effect_Voice("Voice5.img/CH2/Arran/18", 128)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face4#什么？那你是怎么工作的？", 36, 3004431, true, true);
                                                        cm.effect_Voice("Voice5.img/CH2/Idea/57", 128)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#先前被它们附身，吃了不少苦头。", 36, 3004434, true, true);
                                                            cm.effect_Voice("Voice5.img/CH2/Arran/19", 128)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face0#连续几个月，那些灵魂一直从我的鼻子和嘴巴里往外跑，都吓得大家不敢来借书了。", 36, 3004434, true, true);
                                                                cm.effect_Voice("Voice5.img/CH2/Arran/20", 128)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#啊……好吧……", 36, 3004431, true, true);
                                                                    cm.effect_Voice("Voice5.img/CH2/Idea/58", 128)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.forceStartQuest(37411, "");
                                                                        cm.OnStartNavigation(993140050, 0, "east00", 37411);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/37411.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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