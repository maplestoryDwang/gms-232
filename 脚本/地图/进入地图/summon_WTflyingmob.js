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
      if (cm.isQuestActive(1464)) {
        if (cm.getMapId() == 105300300 && cm.getNumberFromQuestInfo(1464, 'r') + 105300300 == cm.getMapId()) {
          cm.npc_ChangeController(1540941, "oid=101389413", -578, -750, 1);
          cm.npc_SetSpecialAction("oid=101389413", "summon", 0, 0);
        } else {
          if (cm.getMapId() == 105300301 && cm.getNumberFromQuestInfo(1464, 'r') + 105300300 == cm.getMapId()) {
            cm.npc_ChangeController(1540941, "oid=101389413", 72, -939, 1);
            cm.npc_SetSpecialAction("oid=101389413", 'summon', 0, 0);
          } else if (cm.getMapId() == 105300302 && cm.getNumberFromQuestInfo(1464, 'r') + 105300300 == cm.getMapId()) {
            cm.npc_ChangeController(1540941, "oid=101389413", -969, -1144, 50, -1019, -919, 1, false, 0, false);
            cm.npc_SetSpecialAction("oid=101389413", "summon", 0, 0);
          }
        }
      }
      cm.dispose();
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;