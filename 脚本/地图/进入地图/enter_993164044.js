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
      cm.npc_ChangeController(1040000, "oid=363599", -499, 395, 96, -549, -449, 1, false, 0, false);
      cm.npc_ChangeController(2159322, 'oid=363600', -657, -414, 231, -707, -607, 1, false, 0, false);
      cm.npc_ChangeController(1106009, 'oid=363601', -123, -325, 174, -173, -73, 1, false, 0, false);
      cm.npc_ChangeController(1002105, "oid=363602", -773, -926, 242, -823, -723, 1, false, 0, false);
      cm.npc_ChangeController(1082200, "oid=363603", -354, -625, 185, -379, -304, 1, false, 0, false);
      cm.npc_ChangeController(1520063, "oid=363604", 386, -205, 102, 336, 436, 0, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -345, -670);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1000, 2000, -673, -854);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(3000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#不知怎么的就辗转来到了这样的异世界，这里是冒险岛世界？", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#和传闻相比，这里看起来要更平和……", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
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
                              cm.forceCompleteQuest(39433);
                              cm.dispose();
                              cm.warp(104020000, 4, false);
                              cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                              cm.setInGameDirectionMode(false, true, false);
                              cm.setStandAloneMode(false);
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