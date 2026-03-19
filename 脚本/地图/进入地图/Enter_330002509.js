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
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(1530080, "oid=38909486", 397, 179, 5, 347, 447, 0, true, false);
      cm.npc_SetSpecialAction("oid=38909486", "summon", 0, 0);
      cm.npc_ChangeController(1530090, "oid=38909487", 497, 179, 5, 447, 547, 1, true, false);
      cm.npc_SetSpecialAction("oid=38909487", "summon", 0, 0);
      cm.npc_ChangeController(1530100, "oid=38909488", 597, 179, 6, 547, 647, 1, true, false);
      cm.npc_SetSpecialAction("oid=38909488", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushMoveInfo(0, 150, 497, 179);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(3835);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("阿白实习老师终于离开了。", 37, 1530080, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("唉咿，觉得好痛快啊！……但是我为什么有种空虚的感觉呢？不仅是阿白实习老师……好像还有个人一起消失了。那个人究竟是谁呢？！", 37, 1530100, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("这个么……好像是那样……这或许是心情的缘故吧。", 37, 1530090, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushMoveInfo(0, 120, 497, -421);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else if (status === V++) {
                        cm.dispose();
                        cm.warp(330002510, 0);
                        cm.inGameDirectionEvent_SetHideEffect(0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;