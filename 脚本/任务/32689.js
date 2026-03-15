var status = -1;

function start() {
    action(1, 0, 0)
}

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("你昨天彻夜战斗，应该很累吧，怎么这么早就起来了？", 36, 2550007, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("我没事，战况如何？", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("关卡西边涌来了大批敌人，\r\n再这样下去恐怕难以坚持了。", 36, 2550007, true, true)
                } else {
                    if (status === a++) {
                        cm.askYesNo_Bottom("你能支援一下关门西侧吗？", 36, 2550007)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("我带人去支援。\r\n#fc0xFFAAAAAA#(当然没有什么援军，只能我亲自上了。)", 56, 0, false, true)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(32689, "");
                                cm.OnStartNavigation(306030100, 0, "", 0);
                                cm.sendNormalTalk_Bottom("谢谢。只要消灭#b200只#k左右越过关卡怪物，\r\n就能大大打击敌人的气势了。", 36, 2550007, true, false);
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
}

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("幸好，敌人的气势低落了不少。", 36, 2550007, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("好，休息一下恢复体力吧。怪物马上就又会扑上来了。", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(32689);
                    cm.gainExp(186336);
                    cm.dispose()
                }
            }
        }
    }
};