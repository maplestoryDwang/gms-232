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
      cm.npc_ChangeController(3003608, "oid=275662", -2486, 88, 25, -2536, -2436, 1, false, 0, false);
      cm.updateInfoQuest(35157, "save=993060014;return=450006130");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.setAmbience("Ambience.img/night", 200, 60);
      cm.npc_ChangeController(3003651, "oid=2200347", -1978, 70, 1, -2028, -1928, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2200347", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -2020, 0);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.npc_SetForceMove("oid=2200347", 1, 150, 120);
        cm.inGameDirectionEvent_AskAnswerTime(300);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_同时移动镜头和人(2, 150);
          cm.inGameDirectionEvent_PushScaleInfo(1500, 0, 1500, 1500, -1944, 150);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#哈……终于冲出来了。好了，我们继续前进吧。", 37, 3003651, false, true);
            } else {
              if (status === V++) {
                cm.forceStartQuest(35606, '');
                cm.forceCompleteQuest(35606);
                cm.gainExp(171586691);
                cm.updateInfoQuest(35606, "enter=1");
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
                      cm.setInGameDirectionMode(false, true, false);
                      cm.npc_LeaveField("oid=2200347");
                      cm.npc_LeaveField("oid=2200347");
                      cm.setPartner(1, 3003651, 80002541, 0);
                      cm.dispose();
                      cm.warp(993060015, 0, false);
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