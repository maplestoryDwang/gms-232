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
            cm.sendNormalTalk("嗯嗯，#h0#，这……虽然对其他反抗者是个秘密，但我找到了通过改装金属机甲，让它变得更加强大的方法。", 0, 2151004, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("那就是…\r\n咦？等等，我的说明书呢？", 0, 2151004, true, true)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline("哎呀，我明明把说明书放在这里了啊…请你稍等片刻好吗？", 0, 2151004)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("哦，在这里。因为我忙于改装金属机甲，桌子有点乱啊。", 0, 2151004, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("经过这次改装，我可以变换金属机甲的颜色了！这样，金属机甲也可以伪装了。", 0, 2151004, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("这还能提高金属机甲的能力值。有了这个就可以更好地对抗黑色之翼了。怎么样，是不是很厉害啊？我为了做这些，都熬了几天几夜呢。", 0, 2151004, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("不过有个问题。因为这次改装比较赶时间，所以并不完整。想要改变伪装色，还需要#b伪装变换芯片#k。这个东西非常珍贵，一个要卖#e#r100万金币#k#n呢。而且有了这个也不能变成自己想要的伪装色，谁也不知道会变成什么颜色。", 0, 2151004, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("但这次我可以用我特别为#h0#准备的伪装色。如果你想更换伪装色，就重新把伪装变换芯片装到金属机甲上面就可以了。", 0, 2151004, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("伪装变换芯片太贵了，我不能免费给你。你给我100万金币，我倒是可以替你弄到。", 0, 2151004, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.askMenu("那说明就到此为止吧，现在开始改装金属机甲吧。你想要什么伪装色？我这里可以提供青绿色、红色、蓝色，如果你坚持，也可以不改颜色。\r\n#L0#青绿色#l\r\n#L1#红色#l\r\n#L2#蓝色#l\r\n#L3#基本颜色#l", 0, 2151004)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("好，这下金属机甲的改造就算完成了，希望我这些天不分昼夜的工作不会白费。", 0, 2151004, false, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.teachSkill(30000227, 0, -1);
                                                        cm.teachSkill(30000227, 1, 1);
                                                        cm.updateInfoQuest(7825, "hue=180");
                                                        cm.spouseMessage(11, "改变了机械师金属机甲的伪装色。");
                                                        cm.teachSkill(30001068, 1, 1);
                                                        cm.spouseMessage(11, "获得[机械冲撞]技能。");
                                                        cm.forceCompleteQuest(23016);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/23016.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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