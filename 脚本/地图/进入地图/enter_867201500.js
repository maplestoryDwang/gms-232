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
    cm.npc_ChangeController(9400580, "oid=7607418", 1650, 440, 24, 1600, 1700, 1, true, false);
    cm.npc_SetSpecialAction("oid=7607418", "summon", 0, 0);
    cm.forfeitQuest(64076);
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