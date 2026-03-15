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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的开始脚本还没有修复哦。它的脚本位于： #b 脚本/任务/35817.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
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
            if (cm.getMapId() < 993072300) {
                cm.spawnMobLimit(8645002, 1, -1680, 32, 100);
                if (cm.getMapId() == 993072000) {
                    cm.addPopupSay(3003759, 2500, "#face0#呃，我什么时候晕过去了？", "", 0)
                } else {
                    if (cm.getMapId() == 993072100) {
                        cm.addPopupSay(3003759, 2500, "#face0#刚才好像暂时晕过去了。不过我还能战斗。", "", 0)
                    } else {
                        if (cm.getMapId() == 993072200) {
                            cm.addPopupSay(3003759, 2500, "#face0#我还能继续战斗！", "", 0)
                        }
                    }
                }
                cm.updateInfoQuest(35817, "Xp1=-1680;Yp1=-30;Xp2=-1300;Yp2=-350;Xp3=-555;Yp3=-527;Xp4=577;Yp4=-300;Xp5=1727;Yp5=-410;NpcSpeech=30039761;76=h0")
            } else {
                cm.updateInfoQuest(35817, "NpcSpeech=30039761;76=h1");
                if (cm.getMapId() == 993072300) {
                    cm.npc_SetSpecialAction("oid=2183147", "special", -1, 1);
                    cm.addPopupSay(3003759, 2500, "#face0#我们……我们还没输。", "", 0)
                } else {
                    if (cm.getMapId() == 993072400) {
                        cm.npc_SetSpecialAction("oid=2183353", "special", -1, 1);
                        cm.addPopupSay(3003759, 2500, "#face0#重新开始炮击！发射！", "", 0)
                    } else {
                        if (cm.getMapId() == 993072500) {
                            cm.npc_SetSpecialAction("oid=2183677", "special", -1, 1);
                            cm.addPopupSay(3003759, 2500, "#face0#真不敢相信。是你救了我吗？", "", 0)
                        }
                    }
                }
            }
            cm.dispose()
        }
    }
}

function stage1(d, c, b) {
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
            if (cm.getMapId() < 993072300) {
                cm.spawnMobLimit(8645002, 1, -1300, -269, 100);
                if (cm.getMapId() == 993072000) {
                    cm.addPopupSay(3003759, 2500, "#face0#伤不重。我只是休息了一会儿。", "", 0)
                } else {
                    if (cm.getMapId() == 993072100) {
                        cm.addPopupSay(3003759, 2500, "#face0#呃呃……", "", 0)
                    } else {
                        if (cm.getMapId() == 993072200) {
                            cm.addPopupSay(3003759, 2500, "#face0#发射！发射！", "", 0)
                        }
                    }
                }
                cm.updateInfoQuest(35817, "Xp1=-1680;Yp1=-30;Xp2=-1300;Yp2=-350;Xp3=-555;Yp3=-527;Xp4=577;Yp4=-300;Xp5=1727;Yp5=-410;NpcSpeech=30039761/30039772;76=h0;77=h0")
            } else {
                cm.updateInfoQuest(35817, "NpcSpeech=30039761/30039772;76=h1;77=h1");
                if (cm.getMapId() == 993072300) {
                    cm.npc_SetSpecialAction("oid=2183148", "special", -1, 1);
                    cm.addPopupSay(3003759, 2500, "#face0#向巨人开炮！！", "", 0)
                } else {
                    if (cm.getMapId() == 993072400) {
                        cm.npc_SetSpecialAction("oid=2183354", "special", -1, 1);
                        cm.addPopupSay(3003759, 2500, "#face0#我要把这些奇奇怪怪的家伙统统干掉！", "", 0)
                    } else {
                        if (cm.getMapId() == 993072500) {
                            cm.npc_SetSpecialAction("oid=2183678", "special", -1, 1);
                            cm.addPopupSay(3003759, 2500, "#face0#继续开炮。直到生命的最后一刻！", "", 0)
                        }
                    }
                }
            }
            cm.dispose()
        }
    }
}

function stage2(d, c, b) {
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
            if (cm.getMapId() < 993072300) {
                cm.spawnMobLimit(8645002, 1, -555, -462, 100);
                if (cm.getMapId() == 993072000) {
                    cm.addPopupSay(3003759, 2500, "#face0#终于得救了。#h0#！我会和你并肩战斗。", "", 0)
                } else {
                    if (cm.getMapId() == 993072100) {
                        cm.addPopupSay(3003759, 2500, "#face0#真是场没有尽头的噩梦……", "", 0)
                    } else {
                        if (cm.getMapId() == 993072200) {
                            cm.addPopupSay(3003759, 2500, "#face0#竟然还活着？没想到我的命还挺长的嘛。", "", 0)
                        }
                    }
                }
                cm.updateInfoQuest(35817, "Xp1=-1680;Yp1=-30;Xp2=-1300;Yp2=-350;Xp3=-555;Yp3=-527;Xp4=577;Yp4=-300;Xp5=1727;Yp5=-410;NpcSpeech=30039761/30039772/30039783;76=h0;77=h0;78=h0")
            } else {
                cm.updateInfoQuest(35817, "NpcSpeech=30039761/30039772/30039783;76=h1;77=h1;78=h1");
                if (cm.getMapId() == 993072300) {
                    cm.npc_SetSpecialAction("oid=2183149", "special", -1, 1);
                    cm.addPopupSay(3003759, 2500, "#face0#我刚才怎么了？嗯，不过两只手还是好的。", "", 0)
                } else {
                    if (cm.getMapId() == 993072400) {
                        cm.npc_SetSpecialAction("oid=2183355", "special", -1, 1);
                        cm.addPopupSay(3003759, 2500, "#face0#我记不起来了。但是开炮的方法还没忘。", "", 0)
                    } else {
                        if (cm.getMapId() == 993072500) {
                            cm.npc_SetSpecialAction("oid=2183679", "special", -1, 1);
                            cm.addPopupSay(3003759, 2500, "#face0#还……还没结束，你们这些怪物！！", "", 0)
                        }
                    }
                }
            }
            cm.onSetMapObjectMove("attack", [1, 255, 0]);
            cm.onSetMapObjectMove("attack", "idle", [2, 0]);
            cm.onSetMapObjectMove("attack", [1, 0, 4300]);
            cm.dispose()
        }
    }
}

function stage3(d, c, b) {
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
            if (cm.getMapId() < 993072300) {
                cm.spawnMobLimit(8645002, 1, 577, -254, 100);
                if (cm.getMapId() == 993072000) {
                    cm.addPopupSay(3003759, 2500, "#face0#我已经记不起来了。但是开炮的方法还没忘。", "", 0)
                } else {
                    if (cm.getMapId() == 993072100) {
                        cm.addPopupSay(3003759, 2500, "#face0#还……还没结束，你们这些怪物！！", "", 0)
                    } else {
                        if (cm.getMapId() == 993072200) {
                            cm.addPopupSay(3003759, 2500, "#face0#我刚才怎么了？", "", 0)
                        }
                    }
                }
                cm.updateInfoQuest(35817, "Xp1=-1680;Yp1=-30;Xp2=-1300;Yp2=-350;Xp3=-555;Yp3=-527;Xp4=577;Yp4=-300;Xp5=1727;Yp5=-410;NpcSpeech=30039761/30039772/30039783/30039794;76=h0;77=h0;78=h0;79=h0")
            } else {
                cm.updateInfoQuest(35817, "NpcSpeech=30039761/30039772/30039783/30039794;76=h1;77=h1;78=h1;79=h1");
                if (cm.getMapId() == 993072300) {
                    cm.npc_SetSpecialAction("oid=2183150", "special", -1, 1);
                    cm.addPopupSay(3003759, 2500, "#face0#向巨人开炮！", "", 0)
                } else {
                    if (cm.getMapId() == 993072400) {
                        cm.npc_SetSpecialAction("oid=2183356", "special", -1, 1);
                        cm.addPopupSay(3003759, 2500, "#face0#刚才好像暂时晕过去了。", "", 0)
                    } else {
                        if (cm.getMapId() == 993072500) {
                            cm.npc_SetSpecialAction("oid=2183680", "special", -1, 1);
                            cm.addPopupSay(3003759, 2500, "#face0#只要我还活着，这个炮就不会停！开炮！开炮！！！", "", 0)
                        }
                    }
                }
            }
            cm.dispose()
        }
    }
}

function stage4(d, c, b) {
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
            if (cm.getMapId() < 993072300) {
                cm.spawnMobLimit(8645002, 1, 1727, -342, 100);
                if (cm.getMapId() == 993072000) {
                    cm.addPopupSay(3003759, 2500, "#face0#我一定会活下去。我一定要重新回家。", "", 0)
                } else {
                    if (cm.getMapId() == 993072100) {
                        cm.addPopupSay(3003759, 2500, "#face0#真是场没有尽头的噩梦……", "", 0)
                    } else {
                        if (cm.getMapId() == 993072200) {
                            cm.addPopupSay(3003759, 2500, "#face0#我要把这些奇奇怪怪的家伙统统干掉！", "", 0)
                        }
                    }
                }
                cm.updateInfoQuest(35817, "Xp1=-1680;Yp1=-30;Xp2=-1300;Yp2=-350;Xp3=-555;Yp3=-527;Xp4=577;Yp4=-300;Xp5=1727;Yp5=-410;80=h0;NpcSpeech=30039761/30039772/30039783/30039794/30039805;76=h0;77=h0;78=h0;79=h0")
            } else {
                cm.updateInfoQuest(35817, "80=h1;NpcSpeech=30039761/30039772/30039783/30039794/30039805;76=h1;77=h1;78=h1;79=h1");
                if (cm.getMapId() == 993072300) {
                    cm.npc_SetSpecialAction("oid=2183151", "special", -1, 1);
                    cm.addPopupSay(3003759, 2500, "#face0#都还在。我，还有舰炮。", "", 0)
                } else {
                    if (cm.getMapId() == 993072400) {
                        cm.npc_SetSpecialAction("oid=2183357", "special", -1, 1);
                        cm.addPopupSay(3003759, 2500, "#face0#只要打倒那个巨人，我们就能回去了吧？", "", 0)
                    } else {
                        if (cm.getMapId() == 993072500) {
                            cm.npc_SetSpecialAction("oid=2183681", "special", -1, 1);
                            cm.addPopupSay(3003759, 2500, "#face0#只要有你在，我们就不会输，对吧？", "", 0)
                        }
                    }
                }
            }
            cm.forceCompleteQuest(35817);
            cm.onSetMapObjectMove("attack", [1, 255, 0]);
            cm.onSetMapObjectMove("attack", "idle", [2, 0]);
            cm.onSetMapObjectMove("attack", [1, 0, 4300]);
            cm.dispose()
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