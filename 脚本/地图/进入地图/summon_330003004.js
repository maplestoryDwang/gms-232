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
      cm.spawnMobLimit(2700030, 1, -186, 43, 100);
      cm.spawnMobLimit(2700030, 1, -163, 43, 100);
      cm.spawnMobLimit(2700031, 1, -111, 43, 100);
      cm.spawnMobLimit(2700030, 1, -70, 43, 100);
      cm.spawnMobLimit(2700030, 1, 68, -155, 100);
      cm.spawnMobLimit(2700031, 1, 183, 43, 100);
      cm.spawnMobLimit(2700030, 1, 214, 43, 100);
      cm.spawnMobLimit(2700031, 1, 245, 43, 100);
      cm.spawnMobLimit(2700030, 1, 276, 43, 100);
      cm.spawnMobLimit(2700030, 1, 446, 43, 100);
      cm.spawnMobLimit(2700031, 1, 476, 43, 100);
      cm.spawnMobLimit(2700030, 1, 506, 43, 100);
      cm.spawnMobLimit(2700031, 1, 546, 43, 100);
      cm.spawnMobLimit(2700030, 1, 586, 43, 100);
      cm.spawnMobLimit(2700031, 1, 626, 43, 100);
      cm.spawnMobLimit(2700030, 1, 656, 43, 100);
      cm.spawnMobLimit(2700031, 1, 548, -202, 100);
      cm.spawnMobLimit(2700030, 1, 653, -202, 100);
      cm.spawnMobLimit(2700030, 1, 660, -202, 100);
      cm.spawnMobLimit(2700031, 1, 852, 43, 100);
      cm.spawnMobLimit(2700030, 1, 862, 43, 100);
      cm.spawnMobLimit(2700031, 1, 1029, 43, 100);
      cm.spawnMobLimit(2700030, 1, 1039, 43, 100);
      cm.spawnMobLimit(2700030, 1, 1140, -152, 100);
      cm.spawnMobLimit(2700031, 1, 1338, 43, 100);
      cm.spawnMobLimit(2700030, 1, 1348, 43, 100);
      cm.spawnMobLimit(2700031, 1, 1511, 43, 100);
      cm.spawnMobLimit(2700030, 1, 1521, 43, 100);
      cm.npc_ChangeController(1530190, "oid=37906185", 700, 40, 5, 650, 750, 1, true, false);
      cm.npc_SetSpecialAction("oid=37906185", "summon", 0, 0);
      cm.npc_SetForceMove("oid=37906185", 1, 1000, 100);
      cm.inGameDirectionEvent_AskAnswerTime(3000);
      cm.curNodeEventEnd(true);
    } else if (status === V++) {
      cm.npc_LeaveField("oid=37906185");
      cm.npc_LeaveField("oid=37906185");
      cm.setInGameDirectionMode(false, true, false);
      cm.dispose();
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;