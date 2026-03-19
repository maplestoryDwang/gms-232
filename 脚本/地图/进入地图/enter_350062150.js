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
    cm.spawnMobLimit(8240093, 1, 1593, 61, 100);
    cm.spawnMobLimit(8240093, 1, 45, -178, 100);
    cm.spawnMobLimit(8240093, 1, -103, -178, 100);
    cm.spawnMobLimit(8240093, 1, 1696, 61, 100);
    cm.spawnMobLimit(8240093, 1, 1442, 61, 100);
    cm.spawnMobLimit(8240093, 1, 1143, 61, 100);
    cm.updateInfoQuest(33267, "save=0;dir=1");
    cm.spawnMobLimit(8240094, 1, 1593, 61, 100);
    cm.spawnMobLimit(8240094, 1, 45, -178, 100);
    cm.spawnMobLimit(8240094, 1, -103, -178, 100);
    cm.spawnMobLimit(8240094, 1, 1696, 61, 100);
    cm.spawnMobLimit(8240094, 1, 1442, 61, 100);
    cm.spawnMobLimit(8240094, 1, 1143, 61, 100);
    cm.spawnMobLimit(8240094, 1, 1997, 61, 100);
    cm.spawnMobLimit(8240092, 1, 1771, 258, 100);
    cm.spawnMobLimit(8240092, 1, 2343, 258, 100);
    cm.spawnMobLimit(8240094, 1, 1806, 61, 100);
    cm.spawnMobLimit(8240092, 1, 2286, 258, 100);
    cm.spawnMobLimit(8240092, 1, 2221, 258, 100);
    cm.spawnMobLimit(8240092, 1, 2014, 258, 100);
    cm.spawnMobLimit(8240094, 1, 140, -178, 100);
    cm.spawnMobLimit(8240094, 1, -213, -178, 100);
    cm.getTopMsgFont("必须消灭所有的怪物. ", 3, 20, 20, 0);
    cm.spawnMobLimit(8240094, 1, 140, -178, 100);
    cm.spawnMobLimit(8240094, 1, -221, -178, 100);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;