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
      if (!cm.isQuestActive(35616)) {
        cm.dispose();
        return;
      }
      cm.npc_ChangeController(3003632, "oid=275847", -228, -742, 1, -278, -178, 0, false, 0, false);
      cm.npc_ChangeController(3003690, "oid=275848", 114, -923, 16, 69, 164, 1, false, 0, false);
      cm.npc_ChangeController(3003693, 'oid=275849', -342, -657, 20, -392, -292, 0, false, 0, false);
      cm.npc_ChangeController(3003692, "oid=275850", -424, -657, 19, -474, -374, 0, false, 0, false);
      cm.npc_ChangeController(3003691, "oid=275851", -494, -742, 1, -544, -444, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk_Bottom("#face0#来啦，#b#ho##k。听说从现在开始，由你来护送诺特勒斯号。", 37, 3003673, false, true);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.forceCompleteQuest(35616);
            cm.gainExp(85793345);
            cm.updateInfoQuest(35611, "d5=1;d6=1;d30=1;d74=1;medal=1;d1=1;d4=1");
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