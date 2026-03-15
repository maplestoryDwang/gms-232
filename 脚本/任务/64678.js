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
            cm.sendNormalTalk("所以，让我再打一次招呼吧。欢迎来到充满了火热的沙漠气息和日冕光辉的光荣圣地，#b日冕庆典#k。", 4, 9400960, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("覆盖整个冒险岛世界的美丽力量，而且你有机会获得这伟大的能力……但是，你还没能达到这个境界。\r\n作为追求真理的先驱者，我要先向你道歉，然后告诉你一件事情。", 4, 9400960, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("死板的#p9400960#，有时候你那些高尚的单词对于那些家伙来说实在是太难了。\r\n我已经说过好多次了，这就是你的缺点啊！", 4, 9400961, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("我需要道歉的事情是这样……#b日冕庆典#k的伟大力量#b总共有3种#k。\r\n我们光明和黑暗先驱者各自负责的能够引导日冕气息的主要活动有3种……", 4, 9400961, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("我就开门见山地说了，很抱歉，你#r#e只能选择一个主要活动#k#n。如果你想要得到我们准备的所有福利，那是不行的！", 4, 9400961, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#r#e只有一个活动？#k#n", 2, 9400960, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("没错，我战胜了黑暗，将光辉之力量印刻在灵魂上，准备了能够发挥这个力量的#b[日冕风暴]#k活动！", 4, 9400960, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("我拥有火焰之力，准备可能够体验火热气息的#b[日蚀地带]#k活动！", 4, 9400961, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("………… ", 4, 9400962, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("…………", 2, 9400960, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("……(咯吱咯吱)", 4, 9400962, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("…………", 2, 9400960, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("……\r\n\r\n……啊……到我了？", 4, 9400962, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("……\r\n(这个孩子……这么下去能行吗……)", 2, 9400960, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("……颠倒了白天与黑夜的我，准备了模糊日夜界限的#b[昼夜1+1]#k活动。（毫无感情地念着）", 4, 9400962, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk("我们准备了3种活动，不管你选择什么活动，只能进行#b一种！#k", 4, 9400960, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk("哎~哎~别误会了~呵呵……\r\n虽然只能选择一种，但是#r每周都能变换选择哦！#k", 4, 9400961, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk("节日时间总共是4周！一旦选择了福利，在那一周的周日前将#r无法进行变更#k。\r\n但是！到了下一周的周一，就能在我们准备的3种主要活动中重新选择想要进行的活动了！", 4, 9400961, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk("而且你选择的活动将由#r#e#fs16#世界内所有角色共享#fs12##n#k，一定要记住这一点！一旦选择后，世界内所有角色在一周内都必须参加相同的活动！", 4, 9400961, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk("当然应该选择大家都觉得最强大和帅气的活动才对吧？我说的就是我的b[日蚀地带]#k！", 4, 9400961, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk("真是的……作为同伴，虽然这么说有些不好，但是居然将我准备的强大#b[日冕风暴]#k的光辉和那种微不足道的活动比较，这对日冕也是种失礼吧？呵呵……", 4, 9400960, true, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk("……似乎…… \r\n（咀嚼咀嚼）", 4, 9400962, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk("…………", 2, 9400960, true, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk("……如果你不想要参加华丽复杂的活动，想要合理又充实的福利……\r\n那我准备的#b[昼夜1+1]#k活动会是个不错的选择…… ", 4, 9400962, true, true)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.forceCompleteQuest(64678);
                                                                                                            cm.forceCompleteQuest(500828);
                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/Game.img/QuestClear", 100);
                                                                                                            cm.effect_OnUserEff("Effect/BasicEff.img/QuestClear");
                                                                                                            cm.updateInfoQuest(500828, "today=0");
                                                                                                            cm.updateInfoQuest(500828, "date=20191114;today=0");
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