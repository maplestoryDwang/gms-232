var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.forceStartQuest(58705, "appear");
      cm.setPartner(1, 9111007, 80011320, 0);
      cm.setPartner(1, 9111002, 80011300, 0);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9111004, "oid=3849675", -150, -215, 29, -200, -100, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3849675", 'summon', 0, 0);
      cm.npc_ChangeController(9111005, "oid=3849676", 200, -215, 32, 150, 250, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=3849676", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_同时移动镜头和人(2, 300);
          cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#b#p9111005##k！", 57, 0, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face2#……别跟我说话！", 37, 9111005, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("你不走吗？", 57, 0, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face2#你不记得我说过再见面时就是你的死期？", 37, 9111005, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_ForcedFlip(-1);
                    cm.sendNormalTalk_Bottom("#face0#…………", 37, 9111004, true, true);
                  } else {
                    if (status === V++) {
                      cm.npc_setForceFlip("oid=3849675", -1);
                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=3849675"], [0, 0, 0, 1, 0, 1, 0, 0]);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/angry", "oid=3849676"], [0, 0, 0, 1, 0, 1, 0, 0]);
                        cm.sendNormalTalk_Bottom("#face2#……哼！", 37, 9111005, false, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.npc_LeaveField("oid=3849675");
                              cm.npc_LeaveField("oid=3849675");
                              cm.npc_LeaveField("oid=3849676");
                              cm.npc_LeaveField("oid=3849676");
                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(1400);
                              } else if (status === V++) {
                                cm.eventSKill(0);
                                cm.setInGameDirectionMode(false, true, false);
                                cm.setPartner(1, 9111004, 80011319, 0);
                                cm.setPartner(1, 9111005, 80011318, 0);
                                cm.spawnMobLimit(9400069, 1, 1470, -55, 100);
                                cm.spawnMobLimit(9400068, 1, 1100, 95, 100);
                                cm.spawnMobLimit(9400069, 1, 680, 95, 100);
                                cm.spawnMobLimit(9400068, 1, 230, -355, 100);
                                cm.spawnMobLimit(9400069, 1, 475, -355, 100);
                                cm.spawnMobLimit(9400068, 1, 870, -355, 100);
                                cm.spawnMobLimit(9400069, 1, 1360, -355, 100);
                                cm.spawnMobLimit(9400068, 1, 1080, -355, 100);
                                cm.spawnMobLimit(9400069, 1, 610, -715, 100);
                                cm.spawnMobLimit(9400068, 1, 760, -715, 100);
                                cm.spawnMobLimit(9400069, 1, 900, -715, 100);
                                cm.spawnMobLimit(9400068, 1, 1015, -715, 100);
                                cm.spawnMobLimit(9400068, 1, 1323, 65, 100);
                                cm.spawnMobLimit(9400069, 1, 1828, -415, 100);
                                cm.spawnMobLimit(9400068, 1, 1702, -415, 100);
                                cm.spawnMobLimit(9400069, 1, 1736, -235, 100);
                                cm.spawnMobLimit(9400068, 1, 1432, 95, 100);
                                cm.spawnMobLimit(9400069, 1, 1610, 35, 100);
                                cm.spawnMobLimit(9400068, 1, 443, -355, 100);
                                cm.spawnMobLimit(9400069, 1, 266, -355, 100);
                                cm.spawnMobLimit(9400068, 1, 139, -355, 100);
                                cm.spawnMobLimit(9400069, 1, 197, -355, 100);
                                cm.dispose();
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