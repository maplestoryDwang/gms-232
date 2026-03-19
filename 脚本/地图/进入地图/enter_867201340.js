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
      cm.Hidden_background("ribbon01", 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9400580, "oid=7605909", 1987, 346, 18, 1937, 2037, 1, true, false);
      cm.npc_SetSpecialAction("oid=7605909", 'summon', 0, 0);
      cm.npc_ChangeController(9400595, "oid=7605910", 2076, 446, 8, 2026, 2126, 1, true, false);
      cm.npc_SetSpecialAction("oid=7605910", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_SetSpecialAction("oid=7605909", "ribbon", -1, 0);
        cm.inGameDirectionEvent_AskAnswerTime(3000);
      } else {
        if (status === V++) {
          cm.setNpcSpecialActionReset("oid=7605909");
          cm.Hidden_background("ribbon01", 1);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else if (status === V++) {
          cm.npc_LeaveField("oid=7605909");
          cm.npc_LeaveField("oid=7605909");
          cm.npc_LeaveField("oid=7605910");
          cm.npc_LeaveField("oid=7605910");
          cm.setInGameDirectionMode(false, true, false);
          cm.playerMessage(-1, "消灭怪物并进入森林深处吧");
          cm.setPartner(1, 9400580, 80011692, 0);
          cm.setPartner(1, 9400595, 80011701, 0);
          cm.spawnMobLimit(9402243, 1, 250, 402, 100);
          cm.spawnMobLimit(9402243, 1, 118, 401, 100);
          cm.spawnMobLimit(9402242, 1, 456, 402, 100);
          cm.spawnMobLimit(9402243, 1, 391, 402, 100);
          cm.spawnMobLimit(9402242, 1, 551, 402, 100);
          cm.spawnMobLimit(9402242, 1, 966, 402, 100);
          cm.spawnMobLimit(9402244, 1, 304, 402, 100);
          cm.spawnMobLimit(9402243, 1, -26, 402, 100);
          cm.spawnMobLimit(9402242, 1, -794, 402, 100);
          cm.spawnMobLimit(9402242, 1, -235, 402, 100);
          cm.dispose();
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