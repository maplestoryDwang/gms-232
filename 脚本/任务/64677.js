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
            cm.sendNormalTalk("赞美太阳！伟大的力量！不灭的光明！还有那无法隐藏的美丽光辉！", 4, 9400960, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("没什么可惊讶的。你是被允许享受这伟大瞬间的人，而我是能够引导像你这样被选择的灵魂获得伟大力量的使徒。", 4, 9400960, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("………… ？？？", 2, 9400960, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("呵呵……我能理解你的心情。看来你还没能达到我们的境界呢。", 4, 9400961, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("简单来说，现在冒险岛世界中有一股#b特别的力量#k，我们先驱者就是为了将这股力量赋予你们而降临的……就是这个意思！呵呵…… ", 4, 9400961, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("……#b(奇怪的家伙又增加了呢……)#k", 2, 9400960, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("………… ", 4, 9400962, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("……。？？？？？", 2, 9400960, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("……这个……设定……", 4, 9400962, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("#b#fs25#(是设定吗！)#fs12##k", 2, 9400960, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("真是的……没想到在我们中间还有没觉醒的人啊……作为同伴，真是有些失望呢。", 4, 9400960, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("切……#p9400962#这家伙，还没有觉醒吗……！是不是比以前要迟缓了很多啊，#p9400960#？再这么下去，说不定就赶不上#b伟大的时刻#k了！", 4, 9400961, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("伟大的力量必将在伟大的时刻觉醒……着急是没有用的，在我们睡觉的时候，你就静静等待吧。呵呵……", 4, 9400960, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("……那个……我现在能走了吗……？", 2, 9400960, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("愚蠢的家伙！你怎么能错过#b这一年只有一次的伟大时机#k呢！\r\n再继续犹豫，#r日蚀就要结束了哦！？#k", 4, 9400961, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk("#r(……日蚀？)#k", 2, 9400960, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk("请冷静，#p9400961#。这位也需要时间来理解……", 4, 9400960, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.askYesNo("原来如此，这么说明也没什么用，要不要先来我们准备的伟大圣地亲自看看呢？\r\n如果你亲自来，那我就给你说明一下你肯定会感兴趣的#b惊人力量与智慧#k吧。", 4, 9400960)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.forceCompleteQuest(64677);
                                                                                    cm.sendNormalTalk("明智的选择！那我们现在就让你来到我们所在的地方吧！", 4, 9400961, false, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.updateInfoQuest(64689, "rMap=" + cm.getMapId() + ";event=0;week=2");
                                                                                        cm.updateInfoQuest(500831, "rState=0;roulette=0;rResetDate=19/11/14;event=0;week=2;dr=1");
                                                                                        cm.dispose();
                                                                                        cm.warp(867139500, 0);
                                                                                        cm.updateInfoQuest(867139000, "" + cm.getMapId())
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