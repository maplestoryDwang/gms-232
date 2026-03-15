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
            cm.sendNormalTalk("没错！#b五洞村！#k\r\n我……原是那个#b村庄的看门人#k！\r\n曾英勇地同#b攻击村庄的怪物#k作战！但不知何时，就来到这个宅子了。什么鬼！你！！没看到这附近#b成群的怪物#k吗！！！", 4, 9062246, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("我没听说过那种村庄，你说的应该不是这附近吧。\r\n这周围看起来很平静。", 2, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("怎么可能！！！我都说了有很多的怪物嘛！！\r\n#b如此轰动的事件#k，你居然不知道？太不像话了！", 4, 9062246, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("嗯……如果真像你说的，有那~么多怪物袭击村庄的话，那#b新闻报纸#k应该早就大肆报道了。", 2, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("说得没错！你快去找找！多亏你这个家伙，害我多了件#b烦心事#k，都没法好好享受派对了……当然要由你来解决这个问题了！", 4, 9062246, true, true)
                        } else {
                            if (status === a++) {
                                cm.askYesNo("还不快去查查#b五洞村#k的消息！这样我才好毫无顾虑地参加派对！\r\n#i4036616# #b#t4036616##k", 4, 9062246)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("虽然……我也只是被邀请来的客人，但还是先帮你这个忙吧。", 2, 0, false, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("要不先去收藏书籍和档案的#b书房#k看看吧？", 2, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.forceStartQuest(100437, "");
                                            cm.OnStartNavigation(993175410, 0, "pt_go993175400", 100437);
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/100437.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.forceCompleteQuest(100437);
            cm.sendNormalTalk("啊，这里有关于#b五洞村#k的报道。", 2, 0, false, true)
        } else {
            if (status === a++) {
                cm.gainItem(4036616, -1);
                cm.sendNormalTalk("怎么回事。发行日有些奇怪……？\r\n这报道不都有#b10多年#k了吗？", 2, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#fs17##fn宫书#大批怪物入侵了#b五洞村#k。\r\n\r\n多亏村庄的#b小鬼罗宾#k及时将情况告诉了全村人，村民才得以#b全部幸免于难#k。", 2, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("太好了。看来村庄没有受到太大损失。", 2, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("嗯？可是这后面还有几句。", 2, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#fs17##fn宫书#但是，守卫村庄正门的#b看门人#k在独自对战怪物的过程中身负#b重伤#k，#r最终战死#k…….", 2, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("....#b可怕的假面#k明明说自己是村庄的#b看门人#k来着……这里又说他#r战死#k了？", 2, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("看来要去中央走廊找女仆，问问这到底是怎么一回事。", 2, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.OnStartNavigation(993175400, 1, "9062244", 0);
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
};