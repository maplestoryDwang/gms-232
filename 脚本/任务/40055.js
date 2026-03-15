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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的开始脚本还没有修复哦。它的脚本位于： #b 脚本/任务/40055.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/40055.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, true, true);
            cm.inGameDirectionEvent_AskAnswerTime(500)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("住，住手！你们是谁，为什么欺负这么小的家伙？！你看！都把这#b可爱的宝宝#k给弄哭了！怎么办……该怎么办才好？", 33, 2411010, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("……宝宝？这是宝宝吗？#p2400005#，宝宝本来就是这样的吗？", 41, 2400006, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#face0#怎么可能？！而且也不可爱？！", 41, 2400005, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("额啊啊啊！你们怎么能对感性丰富的幼龙，说出这么残忍的话？你知道我们要哄它有多么辛苦吗……又开始哭了！这孩子一哭就会停止的！宝宝，听话啊，不能哭！不哭不哭！", 33, 2411010, true, true);
                            cm.gainSkillBuff(100001263)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("不行了！你们在眼前，它就会哭个不停！你们还是先出去把！#b等它不哭了再来吧#k！", 33, 2411010, true, true)
                            } else {
                                if (status === a++) {
                                    cm.forceCompleteQuest(40055);
                                    cm.forceCompleteQuest(40902);
                                    cm.inGameDirectionEvent_AskAnswerTime(2100)
                                } else {
                                    if (status === a++) {
                                        cm.setInGameDirectionMode(false, true, false);
                                        cm.gainExp(790800);
                                        cm.playerMessage(5, "被弗里德的魔法赶出了洞穴。");
                                        cm.playerMessage(5, "现在开始可以在冒险岛世界提高专业技术和倾向。");
                                        cm.dispose();
                                        cm.warp(321100000, 7, false)
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