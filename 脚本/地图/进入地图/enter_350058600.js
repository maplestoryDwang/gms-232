var status = -1;
var selectionLog = [];
function action(m, n, j) {
  if (status == 0 && m == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = j;
  var c = -1;
  if (status <= c++) {
    cm.dispose();
  } else if (status === c++) {
    cm.npc_ChangeController(1540725, "oid=55823", 198, 116, 2, 148, 248, 1, false, 0, false);
    cm.npc_ChangeController(1540726, "oid=55824", 48, 116, 2, -2, 98, 1, false, 0, false);
    cm.npc_ChangeController(1540727, 'oid=55825', -99, 116, 2, -149, -49, 1, false, 0, false);
    cm.npc_ChangeController(1540728, "oid=55826", -438, 116, 1, -488, -388, 1, false, 0, false);
    cm.updateInfoQuest(33128, "act1=350013000;act2=350024300;act3=350033100;act4=350044000;act5=350058600");
    cm.updateInfoQuest(33251, '');
    cm.updateInfoQuest(33252, '');
    cm.updateInfoQuest(33253, '');
    cm.updateInfoQuest(33254, '');
    cm.updateInfoQuest(33255, '');
    cm.forceForfeitQuest(33251);
    cm.forceForfeitQuest(33252);
    cm.forceForfeitQuest(33253);
    cm.forceForfeitQuest(33254);
    cm.forceForfeitQuest(33255);
    cm.setPartner(1, 1540721, 80001638, 0);
    cm.setPartner(1, 1540722, 80001637, 0);
    cm.setPartner(1, 1540451, 80001636, 0);
    cm.npc_ChangeController(1540724, "oid=285911931", 346, 104, 3, 296, 396, 1, false, 0, false);
    cm.npc_SetSpecialAction("oid=285911931", "summon", 0, 0);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;