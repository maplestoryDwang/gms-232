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
    cm.spawnMobLimit(8240091, 1, 677, 258, 100);
    cm.spawnMobLimit(8240091, 1, 432, 258, 100);
    cm.spawnMobLimit(8240093, 1, 1588, 1, 100);
    cm.spawnMobLimit(8240093, 1, 1305, 258, 100);
    cm.spawnMobLimit(8240093, 1, 412, 258, 100);
    cm.spawnMobLimit(8240093, 1, 1117, 258, 100);
    cm.spawnMobLimit(8240093, 1, 799, 82, 100);
    cm.spawnMobLimit(8240091, 1, 522, 82, 100);
    cm.spawnMobLimit(8240091, 1, 1183, 258, 100);
    cm.updateInfoQuest(33267, "save=0;dir=1");
    cm.spawnMobLimit(8240092, 1, 677, 258, 100);
    cm.spawnMobLimit(8240092, 1, 432, 258, 100);
    cm.spawnMobLimit(8240094, 1, 1588, 1, 100);
    cm.spawnMobLimit(8240094, 1, 1305, 258, 100);
    cm.spawnMobLimit(8240094, 1, 412, 258, 100);
    cm.spawnMobLimit(8240094, 1, 1117, 258, 100);
    cm.spawnMobLimit(8240094, 1, 799, 82, 100);
    cm.spawnMobLimit(8240092, 1, 522, 82, 100);
    cm.spawnMobLimit(8240092, 1, 1183, 258, 100);
    cm.spawnMobLimit(8240094, 1, 1788, 258, 100);
    cm.spawnMobLimit(8240094, 1, 2216, 258, 100);
    cm.spawnMobLimit(8240094, 1, 1876, 1, 100);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;