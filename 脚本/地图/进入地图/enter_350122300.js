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
    cm.spawnMobLimit(8240163, 1, 1899, 9, 100);
    cm.spawnMobLimit(8240163, 1, 2075, 9, 100);
    cm.spawnMobLimit(8240167, 1, 2201, -234, 100);
    cm.spawnMobLimit(8240169, 1, 549, -272, 100);
    cm.spawnMobLimit(8240169, 1, 2099, -234, 100);
    cm.spawnMobLimit(8240167, 1, 1102, -272, 100);
    cm.spawnMobLimit(8240163, 1, 1519, -337, 100);
    cm.spawnMobLimit(8240163, 1, 1343, -337, 100);
    cm.spawnMobLimit(8240163, 1, 1050, -272, 100);
    cm.spawnMobLimit(8240163, 1, 915, -272, 100);
    cm.spawnMobLimit(8240163, 1, 1507, -181, 100);
    cm.spawnMobLimit(8240163, 1, 1526, 9, 100);
    cm.spawnMobLimit(8240163, 1, 1671, -181, 100);
    cm.spawnMobLimit(8240163, 1, 1091, -105, 100);
    cm.spawnMobLimit(8240163, 1, 909, -105, 100);
    cm.spawnMobLimit(8240163, 1, 758, -105, 100);
    cm.spawnMobLimit(8240163, 1, 957, 9, 100);
    cm.spawnMobLimit(8240163, 1, 1321, 9, 100);
    cm.spawnMobLimit(8240163, 1, 1148, 9, 100);
    cm.spawnMobLimit(8240163, 1, 2324, -234, 100);
    cm.spawnMobLimit(8240163, 1, 2180, -234, 100);
    cm.spawnMobLimit(8240163, 1, 2018, -234, 100);
    cm.spawnMobLimit(8240163, 1, 1682, -337, 100);
    cm.spawnMobLimit(8240163, 1, 1350, -181, 100);
    cm.spawnMobLimit(8240163, 1, 613, -105, 100);
    cm.spawnMobLimit(8240163, 1, 771, -272, 100);
    cm.spawnMobLimit(8240163, 1, 597, -272, 100);
    cm.showMapleHero();
    cm.addPopupSay(1540801, 2500, "#face3#话说回来，刚刚大家怎么都来迟了？不遵守时间这一点还真是老样子。", '', 0);
    cm.addPopupSay(1540805, 2500, "双弩精灵不也迟到了嘛。", '', 0);
    cm.addPopupSay(1540801, 2500, "#face1#啊，这些遗迹里的坛子真漂亮啊。", '', 0);
    cm.addPopupSay(1540805, 2500, "#face0#......", '', 0);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;