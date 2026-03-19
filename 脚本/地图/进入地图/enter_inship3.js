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
    cm.spawnMobLimit(8240011, 1, 1085, 60, 100);
    cm.spawnMobLimit(8240011, 1, 1390, 60, 100);
    cm.spawnMobLimit(8240011, 1, 1550, 60, 100);
    cm.npc_ChangeController(1540472, "oid=34513", -701, 60, 16, -751, -651, 0, false, 0, false);
    cm.npc_ChangeController(1540473, "oid=34514", 1710, 60, 10, 1660, 1760, 1, false, 0, false);
    cm.setAmbience("Ambience.img/warfare_far", 100, 60);
    cm.setPartner(1, 1540765, 80001601, 0);
    cm.setPartner(1, 1540766, 80001602, 0);
    cm.addPopupSay(1540453, 2000, '我来掩护你!', "Field.img/flowervioleta/wink", 0);
    cm.getTopMsgFont("赫丽娜加入队伍, 战斗力提升了. ", 3, 20, 20, 0);
    cm.spawnMobLimit(8240011, 1, -131, 3, 100);
    cm.spawnMobLimit(8240011, 1, 137, 60, 100);
    cm.spawnMobLimit(8240011, 1, 517, 60, 100);
    cm.spawnMobLimit(8240011, 1, 267, 3, 100);
    cm.spawnMobLimit(8240011, 1, 234, 3, 100);
    cm.spawnMobLimit(8240011, 1, 494, -55, 100);
    cm.spawnMobLimit(8240011, 1, 699, 60, 100);
    cm.spawnMobLimit(8240011, 1, 540, -55, 100);
    cm.spawnMobLimit(8240011, 1, 807, -55, 100);
    cm.spawnMobLimit(8240013, 1, -513, 60, 100);
    cm.spawnMobLimit(8240011, 1, -450, 3, 100);
    cm.spawnMobLimit(8240011, 1, -100, 60, 100);
    cm.useItem(2023401);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;