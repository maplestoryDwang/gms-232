var status = -1;
var selectionLog = [];
function action(z, T, u) {
  if (status == 0 && z == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = u;
  var y = -1;
  if (status <= y++) {
    cm.dispose();
  } else if (status === y++) {
    cm.npc_ChangeController(1540744, 'oid=56796', -1550, -237, 17, -1600, -1541, 5, true, 0, false);
    cm.npc_ChangeController(1540745, 'oid=56797', -1450, -237, 18, -1500, -1400, 5, true, 0, false);
    cm.npc_ChangeController(1540746, "oid=56798", -1350, -237, 18, -1400, -1329, 5, true, 0, false);
    cm.npc_ChangeController(1540446, "oid=56799", -2082, -364, 10, -2132, -2032, 1, false, 0, false);
    cm.npc_ChangeController(1540729, "oid=56800", -1200, -237, 19, -1250, -1150, 5, true, 0, false);
    cm.npc_ChangeController(1540458, "oid=56801", -1107, -237, 19, -1157, -1057, 5, true, 0, false);
    cm.npc_ChangeController(1540458, 'oid=56802', -826, -118, 23, -876, -776, 5, true, 0, false);
    cm.npc_ChangeController(1540459, "oid=56803", -712, -118, 23, -762, -662, 5, true, 0, false);
    cm.npc_ChangeController(1540459, "oid=56804", -625, -118, 23, -675, -575, 5, true, 0, false);
    cm.npc_ChangeController(1540458, "oid=56805", -1971, -237, 15, -2021, -1965, 4, true, 0, false);
    cm.npc_ChangeController(1540458, 'oid=56806', -2149, -237, 15, -2149, -2099, 4, true, 0, false);
    cm.updateInfoQuest(33128, "act1=350013000;act2=350024300;act3=350033100;act4=350044000;act5=350058700;act6=350063200");
    cm.dispose();
    if (cm.isQuestFinished(33294)) {
      cm.warp(350063202, 0, true);
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;