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
            cm.sendNormalTalk_Bottom("我需要谢谢你肯听我说吗？你们还记得我是救过你们的恩人吗？", 32, 9390205, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("关于那点是要谢谢你。但是知道你是班·特来敏的女儿之后不得不与你划清界线也是事实。", 56, 9390205, true, true)
            } else {
                if (status === a++) {
                    cm.askYesNo_Bottom("也对。那也不是不能理解的。那我就说明一下吧。现在要听吗？", 32, 9390205)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(17658, "");
                        cm.sendNormalTalk_Bottom("刚才也说了我是班·特来敏的独生女。母亲呢在生我的时候就去世了。所以父亲非常宝贝地养育了我。", 32, 9390205, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("你生得金贵，为什么这么遮头盖脸地过日子？", 56, 9390205, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("嗯…… 该从哪说起呢……", 32, 9390205, true, true)
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/17658.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("父亲是为了我的幸福什么都肯去做的人。但是那份心意有些过头了。父亲想把我嫁到海本王族去。", 32, 9390205, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("嫁过去！！？？", 36, 9390202, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("是的，所以父亲把我送到了海本王族人们接受教育的地方去留学。可是我讨厌那样。也讨厌没有爱情的婚姻，连海本王国的思想都让我讨厌。还有……", 32, 9390205, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("还有？", 56, 9390205, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("还有？其实我想系统地学习魔法！", 32, 9390205, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("学魔法？", 56, 9390205, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("是的，成为冒险岛世界最出色的魔法师是我的梦想。所以我一个人偷偷地自学了。", 32, 9390205, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("啊哈，所以你才会用那么多魔法啊。", 56, 9390205, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("是的，可是自学总会到达极限的。所以我决心瞒着父亲到魔法王国去留学。但是我这个年纪的女孩一个人想挣到那么大笔的留学费用有点难以实现。所以……那个……", 32, 9390205, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("啊，好了，你不说我也明白了。我明白你的意思了。", 56, 9390205, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("好的，谢谢你。会实现的。", 32, 9390205, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("可是克莱尔小姐的父亲为什么咬定我是杀人犯呢？", 56, 9390205, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("是啊。这我也不是很清楚，我想或许跟海本王国有所关联。父亲最近好像给海本王族寄去了很多礼物和书信。", 32, 9390205, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.forceCompleteQuest(17658);
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
};