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
      cm.npc_ChangeController(1500016, "oid=375598", 442, 128, 21, 392, 492, 1, false, 0, false);
      cm.npc_ChangeController(1500018, "oid=375599", 568, 118, 21, 518, 618, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(3001651, "oid=3069767", -128, 220, 4, -178, -78, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3069767", 'summon', 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -458, 220);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -38, 250);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.setNpcSpecialActionReset("oid=3069767");
          cm.npc_SetSpecialAction("oid=3069767", "special3", 1800, 0);
          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/D_get", 100);
          cm.inGameDirectionEvent_AskAnswerTime(1800);
        } else {
          if (status === V++) {
            cm.setNpcSpecialActionReset("oid=3069767");
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1000, 1000, 168, 160);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_同时移动镜头和人(2, 200);
                cm.inGameDirectionEvent_AskAnswerTime(1500);
              } else {
                if (status === V++) {
                  cm.fieldEffect_ProcessOnOffLayer('09', "Effect/Direction9.img/HoyoungEffect/6", 0, 500, 430, 120, 1, 4, 0, -1, 0, 0, 0);
                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/complete", 100);
                  cm.userSetFieldFloating(993160169, 10, 10, 10);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.userSetFieldFloating(993160169, 0, 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_ProcessOnOffLayer('09', '', 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                      cm.npc_LeaveField("oid=3069767");
                      cm.npc_LeaveField("oid=3069767");
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
                            cm.setStandAloneMode(false);
                            cm.eventSKill(0);
                            cm.setInGameDirectionMode(false, true, false);
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