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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, -734, -36);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.onTeleport(0, 3, cm.getPlayer().getId(), -727, -90);
        cm.npc_ChangeController(2074154, "oid=1942916", -990, -137, 11, -1040, -940, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=1942916", "summon", 0, 0);
        cm.npc_ChangeController(2074100, "oid=1942917", -795, -68, 7, -845, -745, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=1942917", "summon", 0, 0);
        cm.npc_ChangeController(2074105, "oid=1942918", -657, -64, 5, -707, -607, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=1942918", "summon", 0, 0);
        cm.npc_ChangeController(2074136, "oid=1942919", -600, -33, 5, -650, -550, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=1942919", "summon", 0, 0);
        cm.npc_ChangeController(2074107, "oid=1942920", -547, -19, 4, -597, -497, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=1942920", "summon", 0, 0);
        cm.npc_ChangeController(2074150, "oid=1942921", -499, -19, 4, -549, -449, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=1942921", "summon", 0, 0);
        cm.npc_SetSpecialAction("oid=1942917", "pain3", -1, 1);
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.inGameDirectionEvent_PushScaleInfo(2500, 1200, 0, -734, -36);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#b(四方被火所环绕……)", 57, 0, false, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom('这怎么可能……', 37, 2074136, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("……我好不容易才熄灭了火……\r\n现在已经没力气了……", 37, 2074136, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("火比刚刚还要大啊。\r\n我们……完蛋了。", 37, 2074107, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("啊……现在难道没办法了吗，啊啊。", 37, 2074105, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face3#啊啊！头！我的头！", 37, 2074100, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("啊，小可爱，小可爱啊！", 37, 2074105, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face3#啊啊啊啊啊啊！", 37, 2074100, true, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_PushScaleInfo(500, 3000, 0, -734, -36);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(250);
                              } else if (status === V++) {
                                cm.dispose();
                                cm.warp(224000069, 0);
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