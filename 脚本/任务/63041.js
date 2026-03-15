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
            cm.updateInfoQuest(63042, "start=1;dayNR=0");
            cm.sendNormalTalk("我也肚子饿……", 4, 9400217, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b嗯？", 2, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("我说我也肚子饿。\r\n我全看到了。你给#p9400215#找吃的，然后#p9400215#给你#t2436086:#。", 4, 9400217, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#b你也想让我给你找食物吗？", 2, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("不。把你手上的#t2436086:#给我。我只有吃黄金才不会饿。", 4, 9400217, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#你要黄金……吃黄金肚子不会饱吧？", 2, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askYesNo("我不管。给我黄金。不给的话我就不跟你说话。", 4, 9400217)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(63041, "");
                                        cm.sendNormalTalk("#b(没办法。给他黄金吧。)", 2, 0, false, true)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/63041.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("才……一个……\r\n不过既然说好的……", 5, 9400217, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(63041);
                cm.gainExp(254080);
                cm.updateInfoQuest(63041, "exp=1");
                cm.sendNormalTalk("我不知道冒险岛世界是什么，也不知道钥匙在哪里。", 5, 9400217, true, true);
                cm.gainItem(2436086, -1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("但我记得之前有人像你一样到处打听过同样的信息。", 5, 9400217, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#b和我打听同样的信息？你知道那个人在哪里吗？", 3, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("不知道。他跟你一样，也是忽然出现的，很快就消失了。你看上去也不像会在这地方长待的人。", 5, 9400217, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#b很快就消失了……", 3, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("#b阿依赖，那个人会不会也……？", 3, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("#fc0xff996699#我不知道！", 5, 9400205, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("#b那个人也像我一样四处搜寻钥匙吗？", 3, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("#fc0xff996699#嗯~~~~~ ", 5, 9400205, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("#b你跟我说实话！", 3, 0, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("#fc0xff996699#嗯~~~没错，之前是有个人像你一样闹着要回冒险岛世界，不过他现在已经在异逝界的某个地方定居下来过着快乐的生活了吧？", 5, 9400205, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("#fc0xff996699#至于他定居在哪里我记不得了~", 5, 9400205, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("#b你送我去其他世界好吗？\r\n我现在想把异逝界上的所有世界全部转一遍。要是能在这过程中找到那个人就最好啦！", 3, 0, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("#fc0xffcc6666#好吧……我成全你", 5, 9400205, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.dispose();
                                                                        cm.warp(867113400, 0, false)
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
};