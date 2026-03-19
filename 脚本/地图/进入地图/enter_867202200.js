var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (cm.isQuestActive(64135)) {
    cm.dispose();
    cm.warp(867202210, 0);
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      if (cm.isQuestActive(64107)) {
        cm.npc_ChangeController(9400589, "oid=58567073", -1350, 90, 32, -1400, -1300, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=58567073", "summon", 0, 0);
        cm.npc_ChangeController(9400592, "oid=58567074", -1420, 90, 32, -1470, -1370, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=58567074", "summon", 0, 0);
        cm.npc_ChangeController(9400635, "oid=58567075", -1500, 90, 33, -1550, -1450, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=58567075", 'summon', 0, 0);
      } else if (cm.isQuestFinished(64132)) {
        cm.Hidden_background("deffence01", 1);
        cm.Hidden_background('deffence02', 1);
        cm.Hidden_background("deffence03", 1);
      } else {
        cm.Hidden_background("deffence01", 1);
        cm.Hidden_background('deffence02', 0);
        cm.Hidden_background("deffence03", 0);
      }
      if (cm.isQuestActive(64133)) {
        cm.sendNormalTalk_Bottom("#b(……去森林里找找能当绳索用的东西吧。) ", 57, 0, false, true);
      } else {
        cm.dispose();
      }
    } else {
      cm.dispose();
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;