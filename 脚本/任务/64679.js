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
            cm.sendNormalTalk("在沙漠中遥望日蚀……我还以为我这辈子再也无法见到日蚀了，真是让人感慨啊……", 4, 9400965, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("这是什么意思？", 2, 9400965, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#b日冕庆典#k，虽然加上了一个非常现代的名字，但其实纪念日全食的神秘力量的庆典是一项历史悠久的传统活动。在我年轻的时候，每年都会举行这样盛大的庆典，但是不知从何时开始，不再出现日蚀了……", 4, 9400965, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("最近冒险岛世界有#b很多变化#k，说不定就是这个的影响。或者是在没有日蚀的时候出现了什么差错，现在也许已经恢复#b正常状态#。", 4, 9400965, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("冒险岛世界久违地又迎来了美丽的日全食，我想说不定今后#b每年#k的这个时候都会再迎来日蚀呢……哈哈……", 4, 9400965, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("话说回来，年轻人虽然都沉醉在美丽的日全食中，展开了各种活动，但似乎大家都不太了解庆典的#r最核心的内容#k啊？", 4, 9400965, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("#r核心的内容#k？", 2, 9400965, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("不论如何！关于太阳的气息和日冕神秘力量，你应该都已经听烦了吧？\r\n更重要的一点是，#b享受庆典#k的行为本身就是#b接受日冕的力量#k，也就意味着#b这个力量在逐渐增强#k！", 4, 9400965, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("#r渐渐变强了……？#k", 2, 9400965, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("你听说过享受庆典的人就能获得#b日冕积分#k的事情吗？", 4, 9400965, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("享受庆典就能接收太阳的力量，也就能让庆典更加热闹。\r\n如果你努力参与了庆典，并且累积了积分，那我就能给你#b更加享受庆典#k的权利！", 4, 9400965, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("强化庆典……？具体应该要怎么做呢？", 2, 9400965, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("啧啧……所以说年轻人……！\r\n怎么什么事情都要从头教起啊？我可不会说好几遍，你给我记住两点！\r\n #b#e日冕等级#k#n和#b#e日冕技能#k#n！", 4, 9400965, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("#b日冕等级#k就是根据你搜集的日冕积分数量而给予你的荣誉！\r\n达到#b越高的等级#k，不仅能获得#b更多种多样的活动效果#k，还能使用仅在这次活动期间才能获得的#b特别福利#k的权利！", 4, 9400965, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("#b日冕技能#k就是在庆典期间内才能使用的#b强力效果#k！\r\n通过#b日冕积分#k能够购买技能点，不仅能够选择技能，获得各种效果，庆典现场的外观还将逐渐变得更加华丽！", 4, 9400965, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk("为了获得更强的力量和特别福利，就需要更高的#b日冕等级#k；为了获得更多种多样的效果和更丰富的庆典，就需要获得更多#b日冕技能#k，那么就必须获得更多的#b日冕积分#k吧？", 4, 9400965, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk("而且，虽然不知道你是不是察觉到了，但#b每天能够获得的日冕积分是100分#k，为了达到更高的等级，在庆典期间可得更加努力才行呢！", 4, 9400965, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.forceCompleteQuest(64679);
                                                                                cm.updateInfoQuest(500834, "grade=1");
                                                                                cm.teachSkill(80011910, 1, 1);
                                                                                cm.teachSkill(80011876, 1, 1);
                                                                                cm.updateInfoQuest(500833, "0=1");
                                                                                cm.sendNormalTalk("来，为了让你查看#b日冕技能#k，我已经给予了你力量，现在就查看下技能栏吧！", 4, 9400965, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk("而且你似乎是第一次参加庆典，就给你#b日冕4级#k吧。\r\n如果你能使用更高的等级，我会告诉你的，你就去尽情享受庆典吧！", 4, 9400965, true, true);
                                                                                    cm.dispose();
                                                                                    cm.coronaSkillMenu(6, 1, 0, 1)
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