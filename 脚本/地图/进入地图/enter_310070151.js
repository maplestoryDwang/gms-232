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
      cm.npc_ChangeController(2155101, "oid=1274337", 811, 0, 6, 761, 861, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=1274337", "summon", 0, 0);
      cm.sendNormalTalk_Bottom('(发生巨响的地方。)', 57, 0, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("(先到前面去看看吧。)", 57, 0, true, false);
      } else if (status === V++) {
        cm.dispose();
      }
    }
  }
}