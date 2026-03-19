function enter() {
    if (cm.getMap().getNumMonsters() == 0) {
        var a = Math.floor((cm.getMapId() - 867200200) / 20) + 1;
        if (cm.getNumberFromQuestInfo(64014, "scene" + a) == 1) {
            cm.openScriptNpc()
        } else {
            cm.warp(cm.getMapId() + 20, 0)
        }
    } else {
        cm.onTeleport(0, 3, cm.getPlayer().getId(), -120, -900);
        cm.addPopupSay(9400588, 0, "勇士！这里还有怪物！", "", 0);
        cm.playerMessage(5, "消灭区域里的所有怪物再下去。")
    }
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.setStandAloneMode(true);
            cm.npc_LeaveField("oid=2277700");
            cm.npc_ChangeController(9400588, "oid=2277869", 45, -650, 17, -5, 95, 1, true, false);
            cm.npc_SetSpecialAction("oid=2277869", "summon", 0, 0);
            cm.sendNewEffects(17, [1000, 1000, 2000, -40, -620]);
            cm.onTeleport(0, 3, cm.getPlayer().getId(), -120, -680)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_ForcedFlip(1);
                cm.sendNormalTalk_Bottom("#b出什么事了？！", 57, 0, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("呜呜……村……村里！", 37, 9400588, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("暴……暴走的怪物成群结队地杀进了村里，爸爸和乡亲们还在里面……！", 37, 9400588, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#b暴走？", 57, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("呜呜，对！！它们的块头变得更大了，身上的皮肤到处开裂，毛发脱落……眼神也变得好奇怪！", 37, 9400588, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("它们原先从不会靠近村子……这……这回一下来大群……！", 37, 9400588, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("求求你！帮帮我们好吗！", 37, 9400588, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNewEffects(19, [0])
                                        } else {
                                            if (status === a++) {
                                                cm.warp(867200260, 0);
                                                cm.setStandAloneMode(false);
                                                cm.setInGameDirectionMode(false, true, false);
                                                cm.npc_LeaveField("oid=2277869");
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
};