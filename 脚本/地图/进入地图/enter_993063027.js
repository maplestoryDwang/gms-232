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
    cm.npc_ChangeController(3003737, 'oid=277067', -766, -34, 125, -816, -716, 1, false, 0, false);
    cm.npc_ChangeController(3003738, "oid=277068", -711, -574, 168, -761, -661, 0, false, 0, false);
    cm.npc_ChangeController(3003738, "oid=277069", -526, 206, 5, -576, -476, 1, false, 0, false);
    cm.npc_ChangeController(3003737, 'oid=277070', -758, 206, 14, -808, -708, 0, false, 0, false);
    cm.npc_ChangeController(3003737, "oid=277071", -950, -214, 120, -1000, -900, 1, false, 0, false);
    cm.npc_ChangeController(3003738, 'oid=277072', 395, 206, 8, 345, 445, 1, false, 0, false);
    cm.npc_ChangeController(3003737, 'oid=277073', 509, -334, 179, 459, 549, 0, false, 0, false);
    cm.updateInfoQuest(35757, "enter=993063027;do=ing");
    cm.setPartner(1, 3003770, 80002582, 0);
    cm.sendNormalTalk_Bottom("#face0#唉……四处都是太多了。\r\n这次也要小心啊", 37, 3003770, false, true);
    cm.dispose();
  }
}