var status = -1;
var selectionLog = [];

function start() {
    if(cm.getQuestStatus(23270) == 2){
        cm.dispose();
        return;
    }
    action(1, 0, 0)
}

function action(d, c, b) {
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
        if (status === a++) {
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, true, false);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_MoveAction(1);
            cm.inGameDirectionEvent_AskAnswerTime(30)
        } else {
            if (status === a++) {
                cm.curNodeEventEnd(true);
                cm.inGameDirectionEvent_MoveAction(0);
                cm.npc_ChangeController(2159320, "oid=998790", 430, -10, 23, 380, 480, 1, false, 0, false);
                cm.npc_SetSpecialAction("oid=998790", "summon", 0, 0);
                cm.npc_ChangeController(2159324, "oid=998791", -180, -10, 22, -230, -130, 0, true, 0, false);
                cm.npc_SetSpecialAction("oid=998791", "summon", 0, 0);
                cm.setSessionValue("mad", "998790");
                cm.sendNormalTalk("呃……好强……", 1, 2159324, false, true)
            } else {
                if (status === a++) {
                    cm.npc_SetForceMove("oid=998791", -1, 50, 100);
                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                } else {
                    if (status === a++) {
                        cm.npc_LeaveField("oid=998791");
                        cm.sendNormalTalk("#b(逃走了。受了伤，应该逃不了很远。先去把炼金书找回来。)#k", 3, 2159324, false, true)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_MoveAction(2);
                            cm.sendNormalTalk("炼金书……给你。炼金书……炼金书……", 1, 2159320, false, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#b秃头！给我醒醒！#k", 3, 2159320, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("秃头！！你说的对，确实是这样。但是其他的我不管……", 1, 2159320, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("我最讨厌别人说我秃头了！！", 1, 2159320, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg0/10"], [2000, 0, -100, 0, 0, 0, 0, 0, 0]);
                                            cm.inGameDirectionEvent_AskAnswerTime(2000)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("#b秃头！快醒醒！炼金书怎么样了？？#k", 3, 2159320, false, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.npc_ChangeController(2159319, "oid=998811", -270, -10, 22, -320, -220, 0, false, 0, false);
                                                    cm.npc_SetSpecialAction("oid=998811", "summon", 0, 0);
                                                    cm.sendNormalTalk("#p2159321#！给我醒醒！！", 1, 2159319, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.npc_LeaveField("oid=998790");
                                                        cm.npc_ChangeController(2159321, "oid=998815", 430, -10, 23, 380, 480, 1, false, 0, false);
                                                        cm.npc_SetSpecialAction("oid=998815", "summon", 0, 0);
                                                        cm.sendNormalTalk("啊！这是怎么回事？", 1, 2159321, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("#p2159321#！不好了。你的禁忌炼金书呢？", 1, 2159319, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("炼金书！！我被催眠了，把炼金书交给了那个人……我知道不能给他，但是身体不听使唤。对不起，#p2159319#。", 1, 2159321, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("我也没什么好说的……我的半本也被人偷走了。所以我才急着过来找你……", 1, 2159319, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk("#b禁忌炼金术到底是什么东西？我可以帮你们。#k", 3, 2159319, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk("糟了。这下那个魔法师拥有了整部炼金书。啊……", 1, 2159321, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk("好吧……现在已经被抢走了，就算被别人拿走也，情况也不可能更坏了。虽然不知道这个人是谁，不过应该比那个把东西抢走的人好一点。我来把炼金书的事情告诉你。", 1, 2159321, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk("#p2159321#！！", 1, 2159319, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk("你太固执了。以我们的能力不可能从那帮小偷手中把炼金书找回来，就相信这个人一次吧。", 1, 2159321, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk("呼……好吧，那本炼金书是建造了玛加提亚的祖先们写的书，让我们绝对不能交给别人。为了以防万一，就分成了两部分，分别保管。", 1, 2159321, true, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk("那种禁忌炼金术可以制造和销毁凝聚着魔力的物质。也就是说，可以制造强力的魔法炸弹，或者让世界的魔法力量颠倒过来。", 1, 2159321, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk("拜托你了。一定要帮我们找回那本炼金书。为了让你能追踪那个魔法师，我去帮你把#t04032974#找出来。", 1, 2159321, true, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.setStandAloneMode(false);
                                                                                                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                                                        cm.forceStartQuest(23270, "");
                                                                                                        cm.forceCompleteQuest(23270);
                                                                                                        cm.gainExp(112999);
                                                                                                        cm.npc_LeaveField("oid=998811");
                                                                                                        cm.npc_LeaveField("oid=998815");
                                                                                                        cm.dispose();
                                                                                                        cm.warp(926150020, 0, false)
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
                }
            }
        }
    }
};