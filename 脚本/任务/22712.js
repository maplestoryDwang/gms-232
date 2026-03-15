var status = -1;

function start(d, c, b) {
    if (d === 1) {
        status++
    } else {
        if (status === 1) {
            cm.sendOk_Bottom("我准备的可是你之前一直喜欢喝的饮料，这段时间难道你的喜好变了？", 1531001);
            cm.dispose();
            return
        }
        status--
    }
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNext_Bottom("所有一切都好像顺利启动了。")
        } else {
            if (status === a++) {
                cm.askYesNo_Bottom("今天的测试做到这个地步应该可以了，最后我准备了爽口的运动饮料，一边喝一边休息一会吧，我会记录你体内身体疲劳物质正常化的过程的。")
            } else {
                if (status === a++) {
                    cm.sendNext_Bottom("饮料已经放在你的背包里了，就像装备道具一样，喝饮料的时候也是双击就好，等你的身体指数全部正常之后，我们再说吧。")
                } else {
                    if (status === a++) {
                        cm.forceStartQuest();
                        cm.gainItem(2000040, 1);
                        cm.effect_OnUserEff("UI/tutorial.img/kinesis/3");
                        cm.effect_Voice("Voice3.img/Kinesis/guide_07");
                        cm.dispose()
                    } else {
                        cm.dispose()
                    }
                }
            }
        }
    }
}

function end(d, c, b) {
    if (d === 1) {
        status++
    } else {
        status--
    }
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNext_Bottom("好吧，那最后再检查一下身体状态。")
        } else {
            if (cm.getPlayerStat("RAP") > 0) {
                rap(d, c, b)
            } else {
                if (cm.getPlayerStat("RSP") > 50) {
                    rsp(d, c, b)
                } else {
                    cm.gainExp(600);
                    cm.forceCompleteQuest(22712);
                    cm.forceCompleteQuest(22715);
                    cm.sendNext_Bottom("只是休息了片刻，这么快就恢复了，你的体力可真够好的啊。");
                    cm.dispose()
                }
            }
        }
    }
}

function rap(d, c, b) {
    var a = 0;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNext_Bottom("#face3#不过凯内西斯，\r\n你好像还有没提升的能力啊？")
        } else {
            if (status === a++) {
                cm.sendNext_Bottom("#face2#升级后#g基本能力值#k和#g技能等级#k都可以提升，有机会最好就立刻提升。")
            } else {
                if (status === a++) {
                    cm.sendNext_Bottom("#face2#因为你使用念力，所以最好是在#g智力(INT)#k上进行投资，如果你觉得麻烦，也可以使用自动分配。")
                } else {
                    if (status === a++) {
                        cm.sendNext_Bottom("哎，好麻烦，想要变得再聪明也不容易。\r\n\r\n#b(使用所有AP提升能力后再来对话。)#k")
                    } else {
                        if (status === a++) {
                            cm.topMsg("升级后就可以提升能力值和技能等级了。");
                            cm.effect_OnUserEff("UI/tutorial.img/kinesis/5");
                            cm.effect_Voice("Voice3.img/Kinesis/guide_03");
                            cm.dispose()
                        } else {
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
}

function rsp(d, c, b) {
    var a = 0;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNext_Bottom("#face3#话说回来凯内西，你好像忘了件事，这倒不像是你的风格。\r\n你并没有将#b技能等级#k全都提升啊？")
        } else {
            if (status === a++) {
                cm.sendNext_Bottom("#face2#你可以按照自己的喜好将技能添加到快捷栏中，这点你也知道的吧？")
            } else {
                if (status === a++) {
                    cm.sendNext_Bottom("#face2#是，那就按你说的办。\r\n\r\n#b(使用所有SP提升技能等级后再来对话。)#k")
                } else {
                    if (status === a++) {
                        cm.openUIWithOption(3, 142001001);
                        cm.topMsg("升级后就可以提升能力值和技能等级了。");
                        cm.effect_OnUserEff("UI/tutorial.img/kinesis/5");
                        cm.effect_Voice("Voice3.img/Kinesis/guide_03");
                        cm.dispose()
                    } else {
                        cm.dispose()
                    }
                }
            }
        }
    }
};