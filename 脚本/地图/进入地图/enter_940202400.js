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
    cm.curNodeEventEnd(true);
    cm.setInGameDirectionMode(true, false, true);
    cm.npc_ChangeController(3001316, "oid=640849", 60, -700, 4, 10, 110, 1, true, false);
    cm.npc_SetSpecialAction("oid=640849", "summon", 0, 0);
    cm.npc_ChangeController(3001315, "oid=640850", 110, -700, 4, 60, 160, 1, true, false);
    cm.npc_SetSpecialAction("oid=640850", "summon", 0, 0);
    cm.npc_ChangeController(3001317, "oid=640851", 160, -700, 4, 110, 210, 1, true, false);
    cm.npc_SetSpecialAction("oid=640851", "summon", 0, 0);
    cm.npc_ChangeController(3001318, "oid=640852", 210, -700, 4, 160, 260, 1, true, false);
    cm.npc_SetSpecialAction("oid=640852", 'summon', 0, 0);
    cm.npc_ChangeController(3001319, 'oid=640853', 260, -700, 5, 210, 310, 1, true, false);
    cm.npc_SetSpecialAction("oid=640853", "summon", 0, 0);
    cm.setInGameDirectionMode(false, true, false);
    cm.updateInfoQuest(34817, "m=1;kc=0;clear=1");
    cm.addPopupSay(3001300, 2500, "#face0#我们好像被怪物包围了！", '', 0);
    cm.addPopupSay(3001351, 2500, "#face0#务必守护……同伴！", '', 0);
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