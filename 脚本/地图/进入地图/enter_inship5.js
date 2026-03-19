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
    cm.spawnMobLimit(8240013, 1, 844, -24, 100);
    cm.spawnMobLimit(8240011, 1, 527, 18, 100);
    cm.spawnMobLimit(8240013, 1, 1134, -77, 100);
    cm.spawnMobLimit(8240011, 1, 1192, 20, 100);
    cm.spawnMobLimit(8240013, 1, 657, -75, 100);
    cm.npc_ChangeController(1540472, 'oid=34606', -131, 60, 2, -181, -131, 0, false, 0, false);
    cm.npc_ChangeController(1540473, "oid=34607", 1710, 60, 10, 1660, 1760, 1, false, 0, false);
    cm.setAmbience("Ambience.img/warfare_far", 100, 60);
    cm.setPartner(1, 1540765, 80001601, 0);
    cm.setPartner(1, 1540766, 80001602, 0);
    cm.addPopupSay(1540453, 2000, "往这里走. ", "Voice3.img/BlackHeaven/hel/8", 0);
    cm.useItem(2023401);
    cm.spawnMobLimit(8240015, 1, -83, 60, 100);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;