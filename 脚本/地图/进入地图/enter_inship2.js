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
    cm.spawnMobLimit(8240011, 1, 1044, 60, 100);
    cm.spawnMobLimit(8240011, 1, 679, -3, 100);
    cm.spawnMobLimit(8240011, 1, 922, -3, 100);
    cm.spawnMobLimit(8240011, 1, 880, 60, 100);
    cm.spawnMobLimit(8240011, 1, 765, -3, 100);
    cm.spawnMobLimit(8240011, 1, 678, 60, 100);
    cm.spawnMobLimit(8240011, 1, 346, 60, 100);
    cm.spawnMobLimit(8240011, 1, 418, -3, 100);
    cm.npc_ChangeController(1540472, "oid=34444", 1187, 60, 9, 1153, 1237, 1, false, 0, false);
    cm.npc_ChangeController(1540473, "oid=34445", 1557, 60, 10, 1507, 1607, 1, false, 0, false);
    cm.npc_ChangeController(1540473, "oid=34446", -127, 60, 3, -177, -127, 0, false, 0, false);
    cm.setAmbience("Ambience.img/warfare_far", 100, 60);
    cm.setPartner(1, 1540765, 80001601, 0);
    cm.spawnMobLimit(8240045, 1, 579, -3, 100);
    cm.cameraSwitch_PushSwitchMoveInfo("center", 3000);
    cm.addPopupSay(1540453, 2000, "这些家伙还真是没完没了!", "Voice3.img/BlackHeaven/hel/1", 0);
    cm.addPopupSay(1540453, 2000, "南哈特?\r\n你平安无事啊!", "Voice3.img/BlackHeaven/hel/2", 0);
    cm.addPopupSay(1540451, 2000, "我也算是死里逃生. \r\n女皇在哪里?", "Voice3.img/BlackHeaven/nh/12", 0);
    cm.addPopupSay(1540453, 2000, "我没看见!\r\n你们没有待在一起吗?", "Voice3.img/BlackHeaven/hel/3", 0);
    cm.spawnMobLimit(8240011, 1, 571, 60, 100);
    cm.spawnMobLimit(8240011, 1, -206, 60, 100);
    cm.spawnMobLimit(8240011, 1, -340, 60, 100);
    cm.spawnMobLimit(8240011, 1, 398, -3, 100);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;