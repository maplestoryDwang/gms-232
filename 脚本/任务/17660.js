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
            cm.sendNormalTalk("出什么事了？克莱尔去哪儿了？", 2, 9390236, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("你去抓狼的时候有些奇怪的家伙们来过。不分青红皂白地扑过来，我就一味地抵挡，然后就发现特来敏小姐不见了！", 0, 9390236, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("是逃去哪儿了吗？还是被抓走了呢？我真是个笨蛋！！怎么都没想到保护特来敏小姐！！", 0, 9390236, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("别自责了，莱文。她不会有事的。", 2, 9390236, true, true)
                    } else {
                        if (status === a++) {
                            cm.askYesNo("赶紧去找找她吧！", 0, 9390236)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(17660, "");
                                cm.npc_ChangeController(9390227, "oid=2384363", 180, 73, 85, 130, 230, 1, false, 0, false);
                                cm.npc_SetSpecialAction("oid=2384363", "summon", 0, 0);
                                cm.npc_ChangeController(9390228, "oid=2384364", -270, 73, 77, -320, -220, 1, false, 0, false);
                                cm.npc_SetSpecialAction("oid=2384364", "summon", 0, 0);
                                cm.sendNormalTalk("现在担心你们自己的小命才是更明智的。", 5, 9390227, false, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("谁呀！", 1, 9390236, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("那个你们没必要知道。反正你们马上就要从这世界上消失了。", 5, 9390227, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("你们这些家伙是暗杀海本王国使节团的家伙们啊！！", 3, 9390236, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("呼，醒悟吧！", 5, 9390227, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.spawnMobLimit(9390833, 1, -360, 40, 20);
                                                    cm.spawnMobLimit(9390833, 1, -360, 40, 20);
                                                    cm.spawnMobLimit(9390833, 1, -360, 40, 20);
                                                    cm.spawnMobLimit(9390834, 1, -420, 40, 20);
                                                    cm.spawnMobLimit(9390834, 1, -420, 40, 20);
                                                    cm.spawnMobLimit(9390834, 1, -420, 40, 20);
                                                    cm.spawnMobLimit(9390833, 1, 360, 40, 20);
                                                    cm.spawnMobLimit(9390833, 1, 360, 40, 20);
                                                    cm.spawnMobLimit(9390833, 1, 360, 40, 20);
                                                    cm.spawnMobLimit(9390834, 1, 420, 40, 20);
                                                    cm.spawnMobLimit(9390834, 1, 420, 40, 20);
                                                    cm.spawnMobLimit(9390834, 1, 420, 40, 20);
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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/17660.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("呜。不是省油的灯啊。撤退！", 4, 9390227, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("等着瞧！", 0, 9390236, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("莱文别追了！又想上那些家伙们的当吗？", 2, 9390236, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("咳呃……", 0, 9390236, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceCompleteQuest(17660);
                            cm.forceCompleteQuest(17741);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};