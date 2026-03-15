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
            cm.sendNormalTalk("你的伤口没事吧？\r\n你那坚持奋战到底不放弃的身影，令人钦佩！", 4, 9400210, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b谢谢。哈哈，我还以为你受伤了，看样子你还好好的！", 2, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("这不是当然的嘛？当太阳落下夜幕降临，我们全都会恢复健康！你的身体应该也痊愈了。", 4, 9400210, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#b(血量和魔量真的全部复原了。而且浑身仿佛充满了力量……)", 2, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("呵呵，这就是夜晚的力量！\r\n太阳升起时，奋勇战斗，太阳落下时，就吃吃喝喝开心地玩耍！这么幸福的事情哪里找？", 4, 9400210, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("对了，你今天看见我的出色表现了吗？我一刀就干掉了两只蝙蝠怪！哈哈", 4, 9400210, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("#b虽然没亲眼见到那场景，光听你说说也觉得很酷啊！", 2, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("#b请问这里是什么地方？我想回冒险岛世界，你知道如何回去吗？", 2, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.askYesNo("嗯？这里是勇士之地。冒险岛世界……？嗯……我好像听说过，但不记得是在哪里听说的了。\r\n这种事情#p9400211#比我更了解！你去问他吧。", 4, 9400210)
                                        } else {
                                            if (status === a++) {
                                                cm.forceStartQuest(63030, "");
                                                cm.sendNormalTalk("祝你度过一个愉快的夜晚！", 4, 9400210, false, false)
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
            cm.askMenu("冒险岛世界？这是好久远的记忆了。回去的方法嘛……谁都不知道吧？\r\n#b#L0#（果然是这样……要不问问关于钥匙的事吧？)#l", 4, 9400211)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b那么，你知道关于钥匙的事吗？", 2, 0, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("钥匙……不好意思，我不知道你说的是什么钥匙。你还是去问问其他人吧。去找#p9400212#打听一下怎么样？", 4, 9400211, true, true)
                } else {
                    if (status === a++) {
                        cm.updateInfoQuest(63030, "NpcSpeech=94002111");
                        cm.dispose()
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
            cm.sendNormalTalk("我不知道返回冒险岛世界的方法，不过#p9400214#不久前好像讲过关于钥匙的事。你去找#p9400214#问问吧。", 4, 9400212, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(63030);
                cm.gainExp(254080);
                cm.updateInfoQuest(63030, "NpcSpeech=94002111;exp=1");
                cm.dispose()
            }
        }
    }
};