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
      cm.npc_ChangeController(9400635, "oid=7543930", -1300, 80, 31, -1350, -1250, 0, true, false);
      cm.npc_SetSpecialAction("oid=7543930", 'summon', 0, 0);
      cm.npc_ChangeController(9400629, "oid=7543931", -1450, 80, 33, -1500, -1400, 0, true, false);
      cm.npc_SetSpecialAction("oid=7543931", "summon", 0, 0);
      cm.npc_ChangeController(9400623, "oid=7543932", -1400, 80, 32, -1450, -1350, 0, true, false);
      cm.npc_SetSpecialAction("oid=7543932", "summon", 0, 0);
      cm.npc_ChangeController(9400672, "oid=7543933", -1500, 80, 33, -1550, -1450, 0, true, false);
      cm.npc_SetSpecialAction("oid=7543933", "summon", 0, 0);
      cm.npc_ChangeController(9400674, "oid=7543934", -1600, 80, 8, -1650, -1550, 0, true, false);
      cm.npc_SetSpecialAction("oid=7543934", 'summon', 0, 0);
      cm.npc_ChangeController(9400676, "oid=7543935", -1700, 80, 16, -1750, -1650, 0, true, false);
      cm.npc_SetSpecialAction("oid=7543935", 'summon', 0, 0);
      cm.npc_ChangeController(9400642, "oid=7543936", -1800, 80, 34, -1850, -1750, 0, true, false);
      cm.npc_SetSpecialAction("oid=7543936", "summon", 0, 0);
      cm.npc_SetForceMove("oid=7543930", 1, 1500, 200);
      cm.npc_SetForceMove("oid=7543931", 1, 1500, 200);
      cm.npc_SetForceMove("oid=7543932", 1, 1500, 200);
      cm.npc_SetForceMove("oid=7543933", 1, 1500, 170);
      cm.npc_SetForceMove("oid=7543934", 1, 1500, 170);
      cm.npc_SetForceMove("oid=7543935", 1, 1500, 170);
      cm.npc_SetForceMove("oid=7543936", 1, 1500, 170);
      cm.sendNewEffects(1, [0, 0, 0, 0, 0]);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNewEffects(12, [3000, -1200, -20, 0, 0]);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(3000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom('#face0#…！', 37, 9400602, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#b…！", 57, 0, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#快跑！", 37, 9400582, true, true);
              } else {
                if (status === V++) {
                  cm.sendNewEffects(14, [0, 2000, 1000, 0, 0]);
                } else {
                  if (status === V++) {
                    cm.sendNewEffects(19, [0]);
                  } else if (status === V++) {
                    cm.warp(867202210, 0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;