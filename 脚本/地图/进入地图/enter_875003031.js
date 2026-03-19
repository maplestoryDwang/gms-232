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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 0, 90);
      cm.npc_ChangeController(9401377, "oid=2154797", -200, 90, 20, -250, -150, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2154797", 'summon', 0, 0);
      cm.npc_ChangeController(9401377, "oid=2154798", -280, 90, 20, -330, -230, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2154798", "summon", 0, 0);
      cm.npc_ChangeController(9401377, "oid=2154799", -360, 90, 20, -410, -310, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2154799", "summon", 0, 0);
      cm.npc_ChangeController(9401377, "oid=2154800", -440, 90, 21, -490, -390, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2154800", "summon", 0, 0);
      cm.npc_ChangeController(9401377, "oid=2154801", 200, 90, 11, 150, 250, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2154801", 'summon', 0, 0);
      cm.npc_ChangeController(9401377, "oid=2154802", 280, 90, 11, 230, 330, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2154802", "summon", 0, 0);
      cm.npc_ChangeController(9401377, "oid=2154803", 360, 90, 11, 310, 410, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2154803", "summon", 0, 0);
      cm.npc_ChangeController(9401377, "oid=2154804", 440, 90, 19, 390, 490, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2154804", 'summon', 0, 0);
      cm.OverlapScreenDetail19(0, 1000, 3000, 1);
      cm.sendNewEffects(17, [0, 1000, 1500, 0, 150]);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(300);
      } else {
        if (status === V++) {
          cm.fieldEffect_RemoveOverlapScreenDetail(1000);
          cm.npc_SetForceMove("oid=2154797", 1, 100, 100);
          cm.npc_SetForceMove("oid=2154798", 1, 100, 100);
          cm.npc_SetForceMove("oid=2154799", 1, 100, 100);
          cm.npc_SetForceMove("oid=2154800", 1, 100, 100);
          cm.npc_SetForceMove("oid=2154801", -1, 100, 100);
          cm.npc_SetForceMove("oid=2154802", -1, 100, 100);
          cm.npc_SetForceMove("oid=2154803", -1, 100, 100);
          cm.npc_SetForceMove("oid=2154804", -1, 100, 100);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_ForcedFlip(-1);
            cm.inGameDirectionEvent_AskAnswerTime(300);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_ForcedFlip(1);
              cm.inGameDirectionEvent_AskAnswerTime(600);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_OneTimeAction(2156, 0);
                cm.fieldEffect_PlayFieldSound("Sound/Skill.img/175121005/Use", 100);
                cm.inGameDirectionEvent_头顶图片(["Skill/17512.img/skill/175121005/effect"], [0, 0, 0, 1, -20, 0, 0, 0, 0]);
                cm.inGameDirectionEvent_头顶图片(["Skill/17512.img/skill/175121005/effect0"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                cm.inGameDirectionEvent_AskAnswerTime(600);
              } else {
                if (status === V++) {
                  cm.fieldEffect_PlayFieldSound("Sound/Skill.img/175121005/Hit", 100);
                  cm.inGameDirectionEvent_头顶图片(["Skill/17512.img/skill/175121005/hit", "oid=2154797"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                  cm.inGameDirectionEvent_AskAnswerTime(600);
                } else {
                  if (status === V++) {
                    cm.npc_SetSpecialAction("oid=2154797", "die", 0, 0);
                    cm.npc_SetSpecialAction("oid=2154798", "die", 0, 0);
                    cm.npc_SetSpecialAction("oid=2154799", "die", 0, 0);
                    cm.npc_SetSpecialAction("oid=2154800", "die", 0, 0);
                    cm.npc_SetSpecialAction("oid=2154801", "die", 0, 0);
                    cm.npc_SetSpecialAction("oid=2154802", "die", 0, 0);
                    cm.npc_SetSpecialAction("oid=2154803", "die", 0, 0);
                    cm.npc_SetSpecialAction("oid=2154804", "die", 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(600);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_ForcedFlip(1);
                      cm.inGameDirectionEvent_AskAnswerTime(300);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_同时移动镜头和人(2, 300);
                        cm.inGameDirectionEvent_AskAnswerTime(600);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 600, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(900);
                        } else {
                          if (status === V++) {
                            cm.sendNewEffects(14, [0, 2000, 1000]);
                          } else {
                            if (status === V++) {
                              cm.sendNewEffects(19, [0]);
                            } else if (status === V++) {
                              cm.npc_LeaveField("oid=2154797");
                              cm.npc_LeaveField("oid=2154798");
                              cm.npc_LeaveField("oid=2154799");
                              cm.npc_LeaveField("oid=2154800");
                              cm.npc_LeaveField("oid=2154801");
                              cm.npc_LeaveField("oid=2154802");
                              cm.npc_LeaveField("oid=2154803");
                              cm.npc_LeaveField("oid=2154804");
                              cm.dispose();
                              cm.warp(875003049, 0, false);
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