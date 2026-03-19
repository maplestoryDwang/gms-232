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
    if (cm.isQuestActive(64902)) {
      cm.OnStartNavigation(871000054, 0, "go_871000055", 0);
      cm.addPopupSay(9400920, 3000, "#face0#孩子们好像往那个方向去了！快跟上！", '', 0);
      cm.setPartner(1, 9400928, 80011836, 0);
      cm.setPartner(1, 9400929, 80011837, 0);
    }
    if (cm.isQuestActive(64903)) {
      cm.addPopupSay(9400921, 3000, "#face0#伐木区方向应该是往那边走！", '', 0);
      cm.OnStartNavigation(871000054, 0, "go_871000056", 0);
      cm.setPartner(1, 9400928, 80011836, 0);
      cm.setPartner(1, 9400929, 80011837, 0);
    }
    if (cm.isQuestActive(64906)) {
      cm.npc_ChangeController(9401070, "oid=2600422", -312, 250, 33, -362, -262, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2600422", "summon", 0, 0);
    }
    cm.dispose();
  }
}