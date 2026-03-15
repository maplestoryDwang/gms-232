var status = -1;
var selectionLog = [];
var cost = 0;

function start(mode, type, selection) {
    var reactor = "action" + cm.getNumberFromQuestInfo(100378, "tuto");
    eval(reactor)(mode, type, selection)
}

function action0(d, c, b) {
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
            cm.sendNormalTalk("\r\n你好！\r\n#e满月鬼怪夜市#n的特色！\r\n#e#b<盖比家妖术棒>#n#k到了！", 0, 9062232, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("\r\n只要一挥#b#e盖比家妖术棒#k#n，嗒嗒！\r\n立刻让你#e升级#n，这棒子就是这么厉害！", 0, 9062232, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("\r\n不过，夜市可没有免费的东西！！", 0, 9062232, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("\r\n要想用我的妖术棒，就要给我#r100个鬼怪铜币#k！", 0, 9062232, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("\r\n作为参考，要记住妖术棒只对#r141级~199级#k的角色有效。", 0, 9062232, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("\r\n还有，虽然根据角色等级，一次#b最大可上升10级#k，但是角色等级越高，升级概率会越低！", 0, 9062232, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("\r\n最近我比较忙，所以#r每个世界一天只能使用两次#k妖术棒！", 0, 9062232, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("\r\n还有哦！", 0, 9062232, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("\r\n在#e盖比家妖术棒#n支付鬼怪铜币，可以制造#e#b#i2439660:# #t2439660:##k#n！", 0, 9062232, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("\r\n#b集齐#b2，000个#k后可立刻领取#e#b#t2439660:##k#n。", 0, 9062232, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("\r\n但是，#r每个世界只能领取一次#k台风成长秘药，领取的时候要慎重！", 0, 9062232, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("\r\n那我们在#e#b<满月鬼怪夜市>#k#n见吧！", 0, 9062232, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.updateInfoQuest(100378, "tuto=1");
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

function action1(mode, type, selection) {
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
            cm.askMenu("你好！\r\n这是#b#e盖比家妖术棒#k#n！\r\n\r\n\r\n#L0# #e听说明。#n#l\r\n#L1# 查看#e#b<盖比家妖术棒>#k升级概率。#n#l\r\n#L2# 使用#b#e<盖比家妖术棒>#k。#n#l\r\n#L3# 制作#b#e<台风成长秘药>#k。#n#l", 4, 9062232)
        } else {
            var reactor = "action分支" + selectionLog[1];
            eval(reactor)(mode, type, selection, i)
        }
    }
}

function action分支0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("\r\n只要一挥#b#e盖比家妖术棒#k#n，嗒嗒！\r\n立刻让你#e升级#n，这棒子就是这么厉害！", 0, 9062232, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk("\r\n不过，夜市可没有免费的东西！！", 0, 9062232, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("\r\n要想用我的妖术棒，就要给我#r100个鬼怪铜币#k！", 0, 9062232, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("\r\n作为参考，要记住妖术棒只对#r141级~199级#k的角色有效。", 0, 9062232, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("\r\n还有，虽然根据角色等级，一次#b最大可上升10级#k，但是角色等级越高，升级概率会越低！", 0, 9062232, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("\r\n最近我比较忙，所以#r每个世界一天只能使用两次#k妖术棒！", 0, 9062232, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("\r\n还有哦！", 0, 9062232, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("\r\n在#e盖比家妖术棒#n支付鬼怪铜币，可以制造#e#b#i2439660:# #t2439660:##k#n！", 0, 9062232, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("\r\n#b集齐#b2，000个#k后可立刻领取#e#b#t2439660:##k#n。", 0, 9062232, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("\r\n但是，#r每个世界只能领取一次#k台风成长秘药，领取的时候要慎重！", 0, 9062232, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("\r\n那我们在#e#b<满月鬼怪夜市>#k#n见吧！", 0, 9062232, true, true)
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
    }
}
var rate141 = [5, 5, 5, 5, 5, 5, 10, 20, 20, 20];
var rate199 = [75, 10, 5, 5, 5, 0, 0, 0, 0, 0];

function action分支1(e, c, b, a) {
    if (status <= a++) {
        cm.askNumber("想知道使用等级和升级概率吗？\r\n#r（141级~199级）#k", 0, 141, 199)
    } else {
        if (status === a++) {
            var g = b;
            var d = "#e<#b" + g + "级#k开始使用盖比妖术棒>\r";
            for (var a = 1; a <= 10; a++) {
                var f = Math.round((g - 141) * (rate199[a - 1] - rate141[a - 1]) / (199 - 141) + rate141[a - 1]);
                d += "\r\n - 上升" + a + "级 " + f + "%"
            }
            cm.sendNormalTalk(d, 0, 9062232, false, true)
        } else {
            if (status === a++) {
                cm.dispose()
            }
        }
    }
}

function action分支2(d, c, b, a) {
    if (status <= a++) {
        var e = cm.getPlayer().getLevel();
        if (e < 141 || e > 199) {
            cm.sendNormalTalk("只有#r141~199级#k玩家才能使用#b盖比家妖术棒#k！", 0, 9062232, false, false);
            cm.dispose()
        } else {
            if (!cm.haveItem(4310275, 100)) {
                cm.sendNormalTalk("要使用#b盖比家妖术棒#k，就需要#r100个鬼怪铜币#k！", 0, 9062232, false, false);
                cm.dispose()
            } else {
                cm.askYesNo("是否立刻消耗#r100个鬼怪铜币#k来使用#b盖比家妖术棒#k？", 0, 9062232)
            }
        }
    } else {
        if (status === a++) {
            cm.fieldEffect_LimanB(0);
            cm.warp(993123200, 0, false);
            cm.gainItem(4310275, -100);
            cm.dispose()
        }
    }
}

function action分支3(e, c, b, a) {
    if (status <= a++) {
        var d = cm.getNumberFromQuestInfo(100378, "upgrade");
        if (d >= 2000) {
            cm.sendOk("已经无法再制作#b台风成长秘药#k了！", 9062232)
        } else {
            cm.askNumber("请输入用以制造#e#b#i2439660:# #t2439660:##k#n而累积的#e鬼怪铜币#n数量。\r\n\r\n#r（今天可累积的铜币：200个)#k\r\n\r\n#e※ 当前已累积铜币：" + d + " / 2000个#n", 0, 1, 2000 - d)
        }
    } else {
        if (status === a++) {
            cost = b;
            if (cm.haveItem(4310275, cost)) {
                cm.askYesNo("确定使用" + cost + "个#k#b鬼怪铜币制造台风成长秘药吗？", 0, 9062232)
            } else {
                cm.sendNormalTalk("你只有#r" + cm.itemQuantity(4310275) + "个#k鬼怪铜币吗？", 0, 9062232, false, false);
                cm.dispose()
            }
        } else {
            if (status === a++) {
                cm.gainItem(4310275, cost);
                var d = cm.addNumberForQuestInfo(100378, "upgrade", cost);
                if (d < 2000) {
                    cm.sendNormalTalk("已成功累积用以制造#b台风成长秘药#k的#b鬼怪铜币" + cost + "个#k！\r\n\r\n#e※ 当前累积铜币：" + d + "个#n", 0, 9062232, false, false);
                    cm.dispose()
                } else {
                    cm.sendNext("已成功累积用以制造#b台风成长秘药#k的#b鬼怪铜币" + cost + "个#k！\r\n\r\n#e※ 当前累积铜币：" + d + "个#n", 9062232)
                }
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("太好了，终于攒够了制造#b台风成长秘药#k的#b鬼怪铜币#k！请好好享用吧！", 0, 9062232, false, false);
                    cm.gainItem(2439660, 1);
                    cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/100378.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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