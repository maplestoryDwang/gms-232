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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, true, true);
            cm.sendNormalTalk("组合技能？", 41, 2400005, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("是的！将一个技能反复使用的话，就会发动与前一个不同的技能。", 33, 2400024, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("而且这个技能比之前使用的技能更加强烈，效果也更加华丽。", 33, 2400024, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("……嗯哼。", 41, 2400005, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#face1#哈哈……看来你早就知道了。很抱歉，我多说了一句……", 33, 2400024, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("…………", 41, 2400006, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("#face1#不过，顺便也试一下#b组合技能#k吧。不是因为我带了太多的稻草人才这样的！练习一点不是更好吗？", 33, 2400024, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("提高了#b月袭斩#k的组合技能#b穿透之波#k和#b暗影突击#k技能等级。", 33, 2400024, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("那么来使用一次！请记住，这次召回的稻草人只会受到#b穿透之波#k和#b暗影突击#k技能造成的伤害。", 33, 2400024, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.openUIWithOption(162, 101000200);
                                                cm.playerMessage(-1, "连续使用[月袭斩]技能。");
                                                cm.playerMessage(5, "连续使用[月袭斩]技能。");
                                                cm.spawnMobLimit(9300800, 1, 670, -6, 100);
                                                cm.updateInfoQuest(41926, "");
                                                cm.forceStartQuest(41926, "");
                                                cm.setInGameDirectionMode(false, true, false);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/41926.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("怎么样？越到后边技能也越强越华丽吧？……不，不是吗？对不起。", 33, 2400024, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("对了，还有一件事。", 33, 2400024, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("？", 41, 2400005, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("……。", 41, 2400006, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("升级之后#b获得的技能点数，可以提高技能的等级#k，别忘了使用技能点！！哈哈……", 33, 2400024, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("……。", 41, 2400006, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("……嗯，时间之力啊……看来要改变作战了。你说要使用大剑，我特意拿了一把……但是你真的会用吗？", 41, 2400005, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("当然。", 41, 2400006, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("#face11#现在#m321000100#的戒备是最松懈的时候，估计不会发生太多战斗……不过可能避免不了和警卫兵的战斗。", 41, 2400005, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("我想自己一个人战斗，不过到时候有可能会把时间之力给用完了。你知道我说的意思了吧？", 41, 2400005, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("没有时间之力……就无法继续战斗？", 41, 2400006, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("影子骑士团的家伙们也不是等闲之辈，如果时间之力没有了，那时候就使用#b切换#k。", 41, 2400005, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("……？", 41, 2400006, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("#face0#别摆出一副呆呆的表情……别用我的脸摆那副呆呆的表情！不知道什么是切换吗？", 41, 2400005, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("#b(点头)#k", 41, 2400006, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk("我战斗的时候你休息，这样就可以恢复时间之力了，对吧？如果我的时间之力没有了，我就会使用切换，那么这时候我们就会更换战斗的人。", 41, 2400005, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk("使用切换，你战斗的时候我恢复时间之力，等你的时间之力用完了，再切换到我。", 41, 2400005, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk("#face2#说简单一点就是我们俩#b轮流战斗#k，理解了吗？", 41, 2400005, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk("#b(点头)#k", 41, 2400006, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk("我们来练习一下吧？", 41, 2400005, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk("嗯。", 41, 2400006, true, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk("两位还这么友好地商议战术……我感到非常自豪。", 33, 2400024, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk("我得回到神殿去了，不能在外边太久。", 33, 2400024, true, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk("两位也快点处理，回到神殿来~", 33, 2400024, true, true)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.updateInfoQuest(41926, "");
                                                                                                            cm.forceStartQuest(41926, "001");
                                                                                                            cm.forceCompleteQuest(41926);
                                                                                                            cm.dispose();
                                                                                                            cm.gainExp(500100);
                                                                                                            cm.warp(321190150, 0, false);
                                                                                                            cm.setInGameDirectionMode(false, true, false)
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
                }
            }
        }
    }
};