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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.inGameDirectionEvent_ForcedFlip(1);
      cm.npc_ChangeController(3001304, 'oid=915704', 0, -50, 1, -50, 50, 1, true, 0, false);
      cm.npc_SetSpecialAction('oid=915704', 'summon', 0, 0);
      cm.npc_ChangeController(3001300, "oid=915705", -200, 60, 3, -250, -150, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=915705", "summon", 0, 0);
      cm.npc_ChangeController(3001310, "oid=915706", -290, 60, 3, -340, -240, 0, true, 0, false);
      cm.npc_SetSpecialAction('oid=915706', "summon", 0, 0);
      cm.npc_ChangeController(3001311, 'oid=915707', 185, 60, 4, 135, 235, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=915707", "summon", 0, 0);
      cm.npc_ChangeController(3001314, "oid=915708", -380, 60, 3, -430, -330, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=915708", 'summon', 0, 0);
      cm.npc_ChangeController(3001315, "oid=915709", -465, 60, 3, -515, -415, 0, true, 0, false);
      cm.npc_SetSpecialAction('oid=915709', "summon", 0, 0);
      cm.npc_ChangeController(3001316, "oid=915710", -570, 60, 5, -620, -520, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=915710", "summon", 0, 0);
      cm.npc_ChangeController(3001317, "oid=915711", 265, 60, 4, 215, 315, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=915711", "summon", 0, 0);
      cm.npc_ChangeController(3001318, "oid=915712", 360, 60, 4, 310, 410, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=915712", "summon", 0, 0);
      cm.npc_ChangeController(3001319, "oid=915713", 445, 60, 4, 395, 495, 1, true, 0, false);
      cm.npc_SetSpecialAction('oid=915713', "summon", 0, 0);
      cm.npc_ChangeController(3001320, "oid=915714", 525, 60, 7, 475, 575, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=915714", 'summon', 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 700, 0, 0, -400);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushScaleInfo(4000, 0, 1000, 4000, 0, -45);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(5000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#你完成的空间还蛮宽敞嘛。", 37, 3001304, false, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face1#哇~~~~~太好了！", 37, 3001310, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#嗯,还不错。", 37, 3001311, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#大家齐心协力打造出这么气派的地方,我为你们感到自豪。", 37, 3001304, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#心里……好满足啊……", 37, 3001351, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#大家都辛苦了！", 37, 3001304, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(300);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                              } else if (status === V++) {
                                cm.npc_LeaveField("oid=915704");
                                cm.npc_LeaveField('oid=915705');
                                cm.npc_LeaveField("oid=915706");
                                cm.npc_LeaveField("oid=915707");
                                cm.npc_LeaveField("oid=915708");
                                cm.npc_LeaveField("oid=915709");
                                cm.npc_LeaveField('oid=915710');
                                cm.npc_LeaveField("oid=915711");
                                cm.npc_LeaveField("oid=915712");
                                cm.npc_LeaveField("oid=915713");
                                cm.npc_LeaveField('oid=915714');
                                cm.dispose();
                                cm.warp(402000530, 0, true);
                                cm.setStandAloneMode(false);
                                cm.updateInfoQuest(34811, "room=1");
                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                cm.setInGameDirectionMode(false, true, false);
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