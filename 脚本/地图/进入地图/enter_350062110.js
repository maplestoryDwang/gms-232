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
    cm.spawnMobLimit(8240091, 1, -179, 258, 100);
    cm.spawnMobLimit(8240091, 1, 634, 258, 100);
    cm.spawnMobLimit(8240091, 1, 834, 258, 100);
    cm.spawnMobLimit(8240091, 1, 1384, 61, 100);
    cm.spawnMobLimit(8240091, 1, 1315, 258, 100);
    cm.spawnMobLimit(8240091, 1, 1604, 258, 100);
    cm.spawnMobLimit(8240091, 1, 970, 61, 100);
    cm.spawnMobLimit(8240091, 1, 1072, 258, 100);
    cm.spawnMobLimit(8240091, 1, 42, 258, 100);
    cm.spawnMobLimit(8240091, 1, 183, 61, 100);
    cm.updateInfoQuest(33267, "save=0;dir=1");
    cm.spawnMobLimit(8240092, 1, -179, 258, 100);
    cm.spawnMobLimit(8240092, 1, 634, 258, 100);
    cm.spawnMobLimit(8240092, 1, 834, 258, 100);
    cm.spawnMobLimit(8240092, 1, 1384, 61, 100);
    cm.spawnMobLimit(8240092, 1, 1315, 258, 100);
    cm.spawnMobLimit(8240092, 1, 1604, 258, 100);
    cm.spawnMobLimit(8240092, 1, 970, 61, 100);
    cm.spawnMobLimit(8240092, 1, 1072, 258, 100);
    cm.spawnMobLimit(8240092, 1, 42, 258, 100);
    cm.spawnMobLimit(8240092, 1, 183, 61, 100);
    cm.spawnMobLimit(8240092, 1, 2043, 60, 100);
    cm.spawnMobLimit(8240092, 1, 2013, 258, 100);
    cm.spawnMobLimit(8240092, 1, 956, 258, 100);
    cm.spawnMobLimit(8240092, 1, 45, 258, 100);
    cm.spawnMobLimit(8240092, 1, -314, 258, 100);
    cm.spawnMobLimit(8240092, 1, 242, 61, 100);
    cm.spawnMobLimit(8240092, 1, -115, 258, 100);
    cm.spawnMobLimit(8240092, 1, -188, 258, 100);
    cm.spawnMobLimit(8240092, 1, -49, 61, 100);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;