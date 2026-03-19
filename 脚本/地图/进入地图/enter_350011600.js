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
      cm.npc_ChangeController(1540487, "oid=32971", -548, 785, 39, -598, -498, 1, false, 0, false);
      cm.userSetFieldFloating(350011600, 0, 3, 1);
      cm.npc_ChangeController(1540502, "oid=12989309", 814, 39, 4, 764, 864, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=12989309", "summon", 0, 0);
      cm.npc_ChangeController(1540503, "oid=12989310", 959, 39, 6, 909, 1009, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=12989310", "summon", 0, 0);
      cm.npc_ChangeController(1540504, "oid=12989311", 759, 39, 10, 709, 809, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=12989311", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_SetForceMove("oid=12989309", -1, 1500, 300);
      cm.npc_SetForceMove("oid=12989310", -1, 1500, 300);
      cm.npc_SetForceMove("oid=12989311", -1, 1500, 300);
      cm.inGameDirectionEvent_MoveAction(1);
      cm.inGameDirectionEvent_AskAnswerTime(6000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_MoveAction(0);
        cm.npc_ChangeController(1540486, "oid=12989681", 239, 46, 11, 189, 289, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=12989681", "summon", 0, 0);
        cm.npc_SetSpecialAction("oid=12989681", "appear", 0, 0);
        cm.userSetFieldFloating(350011600, 50, 60, 20);
        cm.inGameDirectionEvent_AskAnswerTime(1300);
        cm.effect_Voice("SoundEff.img/blackHeaven/explosion2", 100);
      } else {
        if (status === V++) {
          cm.userSetFieldFloating(350011600, 0, 0, 0);
          cm.npc_SetSpecialAction("oid=12989681", "stay", -1, 1);
          cm.inGameDirectionEvent_AskAnswerTime(3000);
        } else {
          if (status === V++) {
            cm.npcMove(1540487, -500, -3000, 15000);
            cm.inGameDirectionEvent_AskAnswerTime(5000);
            cm.effect_Voice("SoundEff.img/blackHeaven/secretmission1", 100);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else if (status === V++) {
              cm.dispose();
              cm.warp(350011700, 0, true);
              cm.cancelItem(2023418);
              cm.cancelItem(2023419);
              cm.cancelItem(2023420);
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