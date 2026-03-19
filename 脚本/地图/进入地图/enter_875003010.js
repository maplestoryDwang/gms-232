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
      cm.npc_ChangeController(9401294, 'oid=206895', -927, 94, 34, -977, -877, 1, true, 0, false);
      cm.npc_ChangeController(9401295, 'oid=206896', -215, 94, 18, -265, -165, 1, false, 0, false);
      cm.npc_ChangeController(9401296, "oid=206897", 22, 94, 19, -1, 72, 1, false, 0, false);
      cm.npc_ChangeController(9401297, "oid=206898", 896, 66, 10, 846, 946, 1, false, 0, false);
      cm.npc_ChangeController(9401317, "oid=206899", -781, 94, 33, -821, -731, 1, false, 0, false);
      cm.npc_ChangeController(9401318, "oid=206900", -422, 94, 18, -472, -372, 1, false, 0, false);
      cm.npc_ChangeController(9401277, "oid=206901", 309, 94, 20, 259, 359, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.sendNewEffects(12, [0, -1140, 20]);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNewEffects(12, [10000, 1200, 20]);
          } else {
            if (status === V++) {
              cm.effect_Text(["#fn黑体##fs18##e生机勃勃的河津村", ''], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0, 0]);
              cm.inGameDirectionEvent_AskAnswerTime(10000);
            } else {
              if (status === V++) {
                cm.forceStartQuest(65927, '');
                cm.updateInfoQuest(65927, 'chk=1');
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 600, 0);
                cm.inGameDirectionEvent_AskAnswerTime(900);
              } else {
                if (status === V++) {
                  cm.sendNewEffects(14, [0, 2000, 1000]);
                } else {
                  if (status === V++) {
                    cm.sendNewEffects(19, [0]);
                  } else if (status === V++) {
                    cm.dispose();
                    cm.warp(875001000, 7, false);
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