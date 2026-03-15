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
            cm.sendNormalTalk_Bottom("天啊？！超级人造人怎么会在这？", 56, 0, false, true)
        } else {
            if (status === a++) {
                cm.gainSkillBuff(80000514);
                cm.sendNormalTalk_Bottom("#face0#这里的艾尔达能#b通过对方的记忆模仿行动#k。\r\n算是一种高等生存技术。也就是模仿敌人的敌人。", 36, 3003409, true, true)
            } else {
                if (status === a++) {
                    cm.gainSkillBuff(80000514);
                    cm.sendNormalTalk_Bottom("#face0#换句话说，他们就存在于我们记忆的某个角落。", 36, 3003409, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("模仿……那你？", 56, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#我是在啾啾岛变成这样的。\r\n上天入海，这身体棒极了。还很漂亮。", 36, 3003409, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#啾啾岛这地方，在我这个艾尔达代表的眼里都很神奇。\r\n鱼竟然长着翅膀……这是继大猩猩之后的又一怪事。", 36, 3003409, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("飞鱼原来在冒险岛也存在啊？", 56, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#看来最好大规模减少怪物的数量。\r\n否则被他们追上就麻烦了。", 36, 3003409, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("(你别转移话题……)", 56, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.askYesNo_Bottom("#face0#200只应该足够了吧？", 36, 3003409)
                                            } else {
                                                if (status === a++) {
                                                    cm.forceStartQuest(34250, "");
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
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.sendNormalTalk_Bottom("呼，简直比超级人造人强大多了。", 56, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#因为那些是艾尔达啊。", 36, 3003409, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("(感觉好像很神奇……)", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(34250);
                        cm.dispose()
                    }
                }
            }
        }
    }
};