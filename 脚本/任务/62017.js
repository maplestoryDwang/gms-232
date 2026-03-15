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
            cm.sendNormalTalk_Bottom("你……真是个值得信赖的#r人类#k啊。我挺喜欢你的！", 37, 9310579, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("对了，#b#p9310579##k你叫什么#r名字#k？", 57, 9310579, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#r名字#k？那是什么东东？", 37, 9310579, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("嗯……就是别人在称呼你时使用的独一无二的词。我的名字叫#r#h0##k。名字就是用来区分自己和别人的一种称呼。", 57, 9310579, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("如果你不介意的话，我来帮你起#r名字#k吧！", 57, 9310579, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("嗯……好吧……起得好听点就行！", 37, 9310579, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askMenu_Bottom("那么~该起个什么名字呢？适合你的名字……\r\n#L0#白狐#l\r\n#L1#卡珊德拉#l\r\n#L2#美狐#l", 56, 0)
                                } else {
                                    if (status === a++) {
                                        if (b == 2) {
                                            cm.sendNormalTalk_Bottom("嗯……美狐……？我喜欢这个#r名字#k。", 37, 9310579, false, true)
                                        } else {
                                            cm.sendNormalTalk_Bottom("我怎么感觉不太对劲……帮我起个别的#r名字#k吧。", 37, 9310579, false, true);
                                            cm.dispose()
                                        }
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("那从现在开始，你的名字就叫做#r美狐#k咯？", 57, 9310579, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("谢谢你，我的名字叫#r美狐#k。我有名字了，好开心呀。", 37, 9310579, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 6);
                                                    cm.gainExp(Math.pow(cm.getLevel(), 3) / 6);
                                                    cm.forceCompleteQuest(62017);
                                                    cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
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