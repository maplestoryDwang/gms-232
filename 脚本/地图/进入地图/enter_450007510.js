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
      if (cm.isQuestFinished(34586)) {
        cm.dispose();
        cm.warp(450007240, 0, true);
        return;
      }
      cm.npc_ChangeController(3003559, 'oid=49876', 339, 281, 1, 289, 389, 1, false, false);
      cm.npc_ChangeController(3003563, "oid=49877", 80, 281, 1, 30, 130, 1, false, false);
      cm.updateInfoQuest(34586, "dummy=1");
      cm.forceStartQuest(34585, '001');
      cm.dispose();
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;