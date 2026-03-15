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
            cm.sendNormalTalk("我终于醒来了！呵～这就是世界上的空气！哦，那个就是太阳！那是树！那是草！那是花！真了不起！比我在蛋里想想的更加漂亮！还有……嗯？你是我的主人吗？怎么好像和我期待的有点不一样？", 0, 1013000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b哇啊啊啊啊啊啊！你会说话？！", 2, 1013000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("……我的主人真是个奇怪的人。不过已经签订了契约，我也不能选择其他主人了。今后还请多多关照。", 0, 1013000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#b嗯？这是什么意思？今后请多多关照……？契约？那是什么？", 2, 1013000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("你在说什么啊……就是你把我从蛋中唤醒的契约啊。你是我的主人，当然应该照顾我，让我变成强大的龙。不是吗？", 0, 1013000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#b嗯？龙？！你是龙吗？你在说什么啊？我完全听不懂！契约到底是什么？主人又是怎么回事？", 2, 1013000, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("嗯？你在说什么啊？你不是和我签订了将龙和人的灵魂合二为一的契约吗？所以你就是我的主人。你连这都不知道，就签了契约？但是现在已经晚了，契约已经无法解开了。", 0, 1013000, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("#b啊？等，等等！虽然我不是很明白，不过听你这么说……我必须得无条件地照顾你吗？", 2, 1013000, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("那当然！……嗯？干嘛？那副委屈的表情？你不想成为我的主人吗？", 0, 1013000, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("#b不，不是不愿意，而是不知道怎么养宠物。", 2, 1013000, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("宠，宠物~？！你，你觉得我是宠物？！你把我当什么了？我可是地表最强生命体，龙！", 0, 1013000, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("#b……#b(再怎么看，也只是条小蜥蜴而已。)#k", 2, 1013000, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.askAcceptDecline("干嘛？那种眼神？你是觉得我像条小蜥蜴吗！哎呀，受不了啦！我来证明我的力量给你看！好了，你做好准备了吗？", 0, 1013000)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.forceStartQuest(22500, "");
                                                                cm.sendNormalTalk("立刻去攻击#r#o1210100##k吧！唤醒你的魔力，同时我也会证明自己作为龙的能力！来，冲吧！", 1, 1013000, false, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("不，不对啊，等一下！在此之前难道不该先分配属性点吗？魔法会受到#b智力#k的影响！所以好好分配属性点，#b穿戴魔法师装备#k后再战吧！", 1, 1013000, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.onScriptMessage_显示教程引导图片(["UI/tutorial/evan/11/0"])
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.OnStartNavigation(100030310, 0, "", 22500);
                                                                            cm.teachSkill(22001011, 10, 0);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/22500.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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