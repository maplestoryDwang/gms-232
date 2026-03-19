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
  } else if (status === V++) {
    if (cm.isQuestFinished(39628) && !cm.isQuestFinished(39630)) {
      cm.npc_ChangeController(3001981, "oid=6673200", -494, -10, 4, -544, -444, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=6673200", "summon", 0, 0);
      cm.npc_ChangeController(3001982, "oid=6673201", -408, -10, 4, -458, -358, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=6673201", "summon", 0, 0);
      cm.npc_ChangeController(3001981, "oid=6673202", -326, -10, 4, -376, -276, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=6673202", 'summon', 0, 0);
      cm.npc_ChangeController(3001982, "oid=6673203", 234, -10, 5, 184, 284, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=6673203", "summon", 0, 0);
      cm.npc_ChangeController(3001981, "oid=6673204", 328, -10, 5, 278, 378, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=6673204", "summon", 0, 0);
    }
    cm.dispose();
  }
}