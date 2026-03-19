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
    cm.forceCompleteQuest(33150);
    cm.npc_ChangeController(1540446, "oid=32886", 1010, 16, 1);
    cm.updateInfoQuest(33128, "act1=350011450");
    cm.npc_ChangeController(1540485, "oid=11963757", 1625, -10, 1);
    cm.npc_SetSpecialAction("oid=11963757", "summon", 0, 0);
    cm.npc_ChangeController(1540502, "oid=11963758", 1398, -10, 0);
    cm.npc_SetSpecialAction("oid=11963758", "summon", 0, 0);
    cm.npc_ChangeController(1540503, "oid=11963759", 1705, -10, 0);
    cm.npc_SetSpecialAction("oid=11963759", 'summon', 0, 0);
    cm.npc_ChangeController(1540504, "oid=11963760", 1295, -10, 0);
    cm.npc_SetSpecialAction("oid=11963760", 'summon', 0, 0);
    cm.dispose();
    cm.useItem(2023418);
    cm.useItem(2023419);
    cm.useItem(2023420);
  } else {
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;