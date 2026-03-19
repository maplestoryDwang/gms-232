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
  } else if (status === V++) {
    cm.playerMessage(-1, "到达了阿布鲁大本营。");
    if (cm.isQuestFinished(64014)) {
      cm.Hidden_background('go64014', 0);
    }
    if (cm.isQuestFinished(64145)) {
      cm.npc_ChangeController(9400588, "oid=2042482", -360, 95, 52, -410, -310, 1, true, false);
      cm.npc_SetSpecialAction("oid=2042482", 'summon', 0, 0);
      cm.npc_ChangeController(9400593, "oid=2042483", -430, 95, 51, -480, -380, 0, true, false);
      cm.npc_SetSpecialAction("oid=2042483", 'summon', 0, 0);
    }
    cm.dispose();
  } else {
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;