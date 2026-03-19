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
    if (cm.isQuestActive(34929)) {
      cm.npc_ChangeController(3001509, "oid=144129598", 298, 200, 1, 248, 348, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=144129598", "summon", 0, 0);
      cm.npc_ChangeController(3001512, "oid=144129599", 374, 200, 1, 324, 424, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=144129599", 'summon', 0, 0);
      cm.npc_ChangeController(3001513, "oid=144129600", 431, 200, 2, 381, 481, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=144129600", 'summon', 0, 0);
      cm.npc_ChangeController(3001510, "oid=144129601", 550, 200, 2, 500, 600, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=144129601", "summon", 0, 0);
      cm.npc_ChangeController(3001514, "oid=144129602", -181, 200, 1, -231, -131, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=144129602", "summon", 0, 0);
      cm.npc_ChangeController(3001515, "oid=144129603", -330, 200, 1, -380, -280, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=144129603", 'summon', 0, 0);
      cm.npc_ChangeController(3001516, "oid=144129604", -275, 200, 1, -325, -225, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=144129604", "summon", 0, 0);
      cm.npc_ChangeController(3001517, "oid=144129605", -487, -5, 3, -537, -437, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=144129605", 'summon', 0, 0);
      cm.npc_ChangeController(3001518, "oid=144129606", -330, -5, 5, -380, -280, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=144129606", "summon", 0, 0);
      cm.npc_ChangeController(3001519, "oid=144129607", -435, -5, 4, -485, -385, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=144129607", "summon", 0, 0);
      cm.npc_ChangeController(3001520, "oid=144129608", -380, -5, 4, -430, -330, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=144129608", "summon", 0, 0);
      cm.npc_ChangeController(3001521, "oid=144129609", -331, 132, 9, -381, -281, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=144129609", "summon", 0, 0);
      cm.npc_ChangeController(3001522, "oid=144129610", -439, 93, 8, -489, -389, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=144129610", 'summon', 0, 0);
      cm.npc_ChangeController(3001511, "oid=144129611", -439, 200, 1, -489, -389, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=144129611", "summon", 0, 0);
    }
    cm.dispose();
  }
}