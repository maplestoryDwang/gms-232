var status = -1;
var selectionLog = [];
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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9400589, "oid=3698738", 272, 430, 29, 222, 322, 0, true, false);
      cm.npc_SetSpecialAction("oid=3698738", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=3698738", 'saveme', -1, 0);
      cm.npc_ChangeController(9400596, "oid=3698739", 440, 380, 34, 390, 490, 1, true, false);
      cm.npc_SetSpecialAction("oid=3698739", "summon", 0, 0);
      cm.npc_ChangeController(9400591, "oid=3698740", 100, 380, 18, 50, 150, 0, true, false);
      cm.npc_SetSpecialAction("oid=3698740", 'summon', 0, 0);
      cm.forceStartQuest(64160, "down");
      cm.npc_ChangeController(9400592, "oid=3698741", 1245, 380, 4, 1195, 1295, 1, true, false);
      cm.npc_SetSpecialAction("oid=3698741", "summon", 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.npc_ChangeController(9400620, "oid=3698742", 1400, 380, 5, 1350, 1450, 1, true, false);
      cm.npc_SetSpecialAction("oid=3698742", 'summon', 0, 0);
      cm.npc_ChangeController(9400621, "oid=3698743", 1450, 380, 3, 1400, 1500, 1, true, false);
      cm.npc_SetSpecialAction("oid=3698743", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(300);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNewEffects(17, [2000, 1000, 2000, 270, 450]);
      } else {
        if (status === V++) {
          cm.npc_SetForceMove("oid=3698741", -1, 590, 150);
          cm.inGameDirectionEvent_AskAnswerTime(300);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_同时移动镜头和人(1, 700);
            cm.inGameDirectionEvent_AskAnswerTime(300);
          } else {
            if (status === V++) {
              cm.npc_SetForceMove("oid=3698742", -1, 700, 150);
              cm.inGameDirectionEvent_AskAnswerTime(300);
            } else {
              if (status === V++) {
                cm.npc_SetForceMove("oid=3698743", -1, 700, 150);
                cm.inGameDirectionEvent_AskAnswerTime(3000);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                  cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/exclamation");
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_同时移动镜头和人(1, 200);
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.npc_LeaveField("oid=3698738");
                        cm.npc_LeaveField("oid=3698738");
                        cm.npc_LeaveField("oid=3698739");
                        cm.npc_LeaveField("oid=3698739");
                        cm.npc_ChangeController(9400589, "oid=3698806", 430, 380, 34, 380, 480, 0, true, false);
                        cm.npc_SetSpecialAction("oid=3698806", 'summon', 0, 0);
                        cm.npc_ChangeController(9400596, "oid=3698807", 490, 380, 14, 440, 540, 1, true, false);
                        cm.npc_SetSpecialAction("oid=3698807", 'summon', 0, 0);
                        cm.forceForfeitQuest(64160);
                        cm.onTeleport(0, 3, cm.getPlayer().getId(), 540, 380);
                        cm.inGameDirectionEvent_ForcedFlip(-1);
                        cm.sendNewEffects(12, [0, 600, 450, 0, 0]);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1400);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face1#呼，呼，呼！", 37, 9400589, false, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("都……都怪我！你还好吗？！佩图尔！", 37, 9400596, true, true);
                              } else if (status === V++) {
                                cm.setNumberForQuestInfo(64006, 'Ec', 16);
                                cm.warp(867200550, 15);
                                cm.setInGameDirectionMode(false, true, false);
                                cm.npc_LeaveField("oid=3698740");
                                cm.npc_LeaveField("oid=3698740");
                                cm.npc_LeaveField("oid=3698741");
                                cm.npc_LeaveField("oid=3698741");
                                cm.npc_LeaveField("oid=3698742");
                                cm.npc_LeaveField("oid=3698742");
                                cm.npc_LeaveField("oid=3698743");
                                cm.npc_LeaveField("oid=3698743");
                                cm.npc_LeaveField("oid=3698806");
                                cm.npc_LeaveField("oid=3698806");
                                cm.npc_LeaveField("oid=3698807");
                                cm.npc_LeaveField("oid=3698807");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;