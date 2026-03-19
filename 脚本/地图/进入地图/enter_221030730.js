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
    if (cm.isQuestFinished(3489) && !cm.isQuestFinished(3490)) {
      cm.setPartner(1, 2052037, 80002246, 0);
    }
    if (cm.isQuestFinished(3490) && !cm.isQuestFinished(3491)) {
      cm.npc_ChangeController(2052027, "oid=38479537", 500, -20, 25, 450, 550, 1, true, false);
    }
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;