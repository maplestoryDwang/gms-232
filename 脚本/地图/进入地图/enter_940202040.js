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
    cm.npc_ChangeController(3001343, "oid=255823", -512, 813, 7, -535, -462, 1, true, false);
    cm.npc_ChangeController(3001326, "oid=255824", -262, 813, 7, -312, -212, 1, true, false);
    cm.npc_ChangeController(3001326, "oid=255825", -119, 813, 7, -169, -69, 1, true, false);
    cm.npc_ChangeController(3001326, 'oid=255826', 6, 541, 2, -44, 56, 1, true, false);
    cm.npc_ChangeController(3001326, "oid=255827", 163, 541, 3, 113, 213, 1, true, false);
    cm.npc_ChangeController(3001326, "oid=255828", 262, 813, 9, 215, 312, 1, true, false);
    cm.npc_ChangeController(3001326, "oid=255829", 415, 813, 9, 365, 465, 1, true, false);
    cm.npc_ChangeController(3001326, "oid=255830", 325, 541, 6, 277, 375, 1, true, false);
    cm.npc_ChangeController(3001310, "oid=425957", -1060, 790, 8, -1110, -1010, 0, true, false);
    cm.npc_SetSpecialAction("oid=425957", 'summon', 0, 0);
    cm.npc_ChangeController(3001311, "oid=425958", -1120, 790, 8, -1170, -1070, 0, true, false);
    cm.npc_SetSpecialAction("oid=425958", "summon", 0, 0);
    cm.npc_ChangeController(3001307, "oid=425959", -1200, 790, 8, -1250, -1150, 0, true, false);
    cm.npc_SetSpecialAction("oid=425959", "summon", 0, 0);
    cm.npc_ChangeController(3001308, "oid=425960", -1280, 790, 8, -1330, -1230, 0, true, false);
    cm.npc_SetSpecialAction('oid=425960', 'summon', 0, 0);
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