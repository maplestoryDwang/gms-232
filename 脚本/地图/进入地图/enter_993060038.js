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
    cm.npc_ChangeController(3003629, "oid=275788", 341, 503, 8, 291, 391, 1, false, 0, false);
    cm.npc_ChangeController(3003631, "oid=275789", 5, 503, 9, -45, 55, 0, false, 0, false);
    cm.npc_ChangeController(3003676, "oid=275790", -103, 503, 9, -153, -53, 4, true, 0, false);
    cm.npc_ChangeController(3003677, "oid=275791", -214, 503, 9, -264, -164, 4, true, 0, false);
    cm.npc_ChangeController(3003660, "oid=275792", 465, 182, 1, 462, 515, 5, true, 0, false);
    cm.npc_ChangeController(3003660, "oid=275793", 536, 182, 1, 486, 586, 5, true, 0, false);
    cm.npc_ChangeController(3003660, "oid=275794", 609, 182, 1, 559, 659, 5, true, 0, false);
    cm.npc_ChangeController(3003660, "oid=275795", 708, 182, 3, 708, 758, 5, true, 0, false);
    cm.npc_ChangeController(3003660, "oid=275796", -152, 182, 6, -202, -102, 4, true, 0, false);
    cm.npc_ChangeController(3003660, "oid=275797", -229, 182, 5, -279, -179, 4, true, 0, false);
    cm.npc_ChangeController(3003660, "oid=275798", -339, 182, 5, -389, -289, 4, true, 0, false);
    cm.npc_ChangeController(3003660, "oid=275799", 698, 503, 8, 648, 748, 5, true, 0, false);
    cm.npc_ChangeController(3003660, "oid=275800", -368, 503, 9, -418, -318, 4, true, 0, false);
    cm.npc_ChangeController(3003660, "oid=275801", -422, 182, 7, -457, -422, 4, true, 0, false);
    cm.npc_ChangeController(3003660, 'oid=275802', -465, 503, 9, -515, -415, 4, true, 0, false);
    cm.dispose();
  }
}