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
    cm.npc_ChangeController(1540510, "oid=33195", 713, 56, 1);
    cm.npc_ChangeController(1540514, 'oid=33196', 634, 56, 1);
    cm.npc_ChangeController(1540513, 'oid=33197', 479, 56, 1);
    cm.npc_ChangeController(1540511, 'oid=33198', 361, 56, 1);
    cm.npc_ChangeController(1540450, "oid=33199", 222, 56, 0);
    cm.npc_ChangeController(1540451, 'oid=33200', 162, 56, 0);
    cm.npc_ChangeController(1540458, "oid=33201", 276, 56, 0);
    cm.npc_ChangeController(1540515, "oid=33202", 529, 56, 1);
    cm.npc_ChangeController(1540459, 'oid=33203', 417, 56, 1);
    cm.npc_ChangeController(1540446, 'oid=33204', 13, 56, 1);
    cm.updateInfoQuest(33128, "act1=350013000");
    cm.onHireTutorById(0, 80001600, 350013100);
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