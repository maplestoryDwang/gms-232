function enter() {
    cm.openScriptNpc()
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(mode, type, selection) {
    var reactor = "action" + cm.getNumberFromQuestInfo(100266, "extreme");
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
        if (status === a++) {
            cm.sendNormalTalk_Bottom("\r\n你好YO！YO！\r\n我是来帮助各位新复古王国勇士进行#b#e勇士修行#n#k的骑士甘迪YO！", 36, 9062175, false, true, 3)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("\r\n在这里，将怪物搭成金字塔的形状，然后爬上去，就能进行勇士修行YO！", 36, 9062175, true, true, 3)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("\r\n#b#e怪物金字塔#n#k是能够培养耐心、韧劲和战略的#b#e勇士修行的最佳游戏！#n#k", 36, 9062175, true, true, 3)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("\r\n你有把硬币#b#e一层层……叠得高高#n#k的经历吗YO！？", 36, 9062175, true, true, 3)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("\r\n不论如何，集中精力进行堆叠肯定需要有#e#b耐心#n#kYO～!", 36, 9062175, true, true, 3)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("\r\n这就是将#b#e怪物#n#k一层层……#b叠成金字塔，然后用叠上的怪物来一决胜负#n#k的勇士修行YO！", 36, 9062175, true, true, 3)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("\r\n怪物有#b#e5种普通怪物各7只#n#k和#r#e1种特殊怪物1只！#n#k\r\n共有#e#b36只#n#kYO～！", 36, 9062175, true, true, 3)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("\r\n#b#e3名勇士#n#k各自拥有#b#e12只#n#k怪物YO！\r\n在轮到自己的时候，选择1只来搭金字塔就行了YO！", 36, 9062175, true, true, 3)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("\r\n在这里需要注意！\r\n需要至少有一个怪物和#b#e下层怪物中种类相同#n#k才能叠上去YO！", 36, 9062175, true, true, 3)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("\r\n大家都很固执，所以如果不是朋友的话，是不会帮忙的YO！", 36, 9062175, true, true, 3)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("\r\nYO，虽然理所当然，但是#b#e搭1层的时候是可以不论种类#n#k的YO！\r\n你应该不会不知道吧YO~？", 36, 9062175, true, true, 3)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("\r\nOH！我差点忘记了YO！\r\n#r#e特殊怪物能够#n#k无视下层#b#e进行搭建哦！#n#k", 36, 9062175, true, true, 3)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("\r\n而且特殊怪物 #b#e上面不能堆叠任何怪物YO～！#n#k\r\n大家都害怕在它们上面呢YO！", 36, 9062175, true, true, 3)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("\r\n每次搭怪物的时候都能#e#b获得分数#n#k，所以要努力获得比其他勇士更多的分数哦YO～!", 36, 9062175, true, true, 3)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("\r\n#r#e这里需要注意一点YO！#n#k\r\n\r\n如果超过限制时间，我就会自动随机叠上任意怪物哦YO～！", 36, 9062175, true, true, 3)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("\r\n如果我能叠上3次怪物YO～？\r\n那你就要被从游戏中#r强制离开#k了YO！", 36, 9062175, true, true, 3)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("\r\n老实说，三次超过规定时间的话，也太过分了吧？", 36, 9062175, true, true, 3)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("\r\n现在你弄懂规则了吗YO～？\r\n那么，千万不要疏于#b#e勇士修行#n#k哦YO！", 36, 9062175, true, true, 3);
                                                                                cm.setNumberForQuestInfo(100266, "pyramid", 1);
                                                                                status = -1
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

function action1(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.askMenu_Bottom("\r\n你想培养#b#e耐心和韧劲#n#k吗YO？\r\n那就一个个……慢慢叠上去吧YO！\r\n\r\n现在就来参加#b#e怪物金字塔#n#k吧，NOW~？\r\n\r\n#L0#我想参加怪物金字塔。#l", 132, 9062181, 3)
        } else {
            if (status === a++) {
                if (b == 0) {
                    cm.warp(993107100)
                }
                cm.dispose()
            }
        }
    }
};