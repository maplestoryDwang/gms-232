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
    cm.spawnMobLimit(8240061, 1, 406, -119, 100);
    cm.spawnMobLimit(8240061, 1, 798, -119, 100);
    cm.spawnMobLimit(8240061, 1, 1254, -119, 100);
    cm.spawnMobLimit(8240061, 1, 1484, -119, 100);
    cm.spawnMobLimit(8240061, 1, 1834, -119, 100);
    cm.spawnMobLimit(8240061, 1, 1699, -119, 100);
    cm.spawnMobLimit(8240061, 1, 1589, -119, 100);
    cm.spawnMobLimit(8240061, 1, 1354, -119, 100);
    cm.spawnMobLimit(8240061, 1, 1145, -119, 100);
    cm.spawnMobLimit(8240061, 1, 1046, -119, 100);
    cm.spawnMobLimit(8240061, 1, 993, -119, 100);
    cm.spawnMobLimit(8240061, 1, 682, -119, 100);
    cm.spawnMobLimit(8240061, 1, 616, -119, 100);
    cm.spawnMobLimit(8240061, 1, 517, -119, 100);
    cm.spawnMobLimit(8240061, 1, 95, -119, 100);
    cm.spawnMobLimit(8240061, 1, 184, -119, 100);
    cm.spawnMobLimit(8240061, 1, 231, -119, 100);
    cm.spawnMobLimit(8240063, 1, 1525, -119, 100);
    cm.spawnMobLimit(8240061, 1, 1397, -119, 100);
    cm.spawnMobLimit(8240062, 1, 336, -119, 100);
    cm.spawnMobLimit(8240061, 1, 613, -119, 100);
    cm.spawnMobLimit(8240061, 1, 966, -119, 100);
    cm.spawnMobLimit(8240062, 1, 1682, -119, 100);
    cm.spawnMobLimit(8240061, 1, 1833, -119, 100);
    cm.spawnMobLimit(8240061, 1, 829, -119, 100);
    cm.spawnMobLimit(8240061, 1, 484, -119, 100);
    cm.spawnMobLimit(8240063, 1, 215, -119, 100);
    cm.spawnMobLimit(8240063, 1, 1123, -119, 100);
    cm.spawnMobLimit(8240062, 1, 719, -119, 100);
    cm.spawnMobLimit(8240062, 1, 1268, -119, 100);
    cm.spawnMobLimit(8240061, 1, 85, -119, 100);
    cm.updateInfoQuest(33200, "map=100;failCount=4;underAttack=1;androidHelmet=3");
    cm.addPopupSay(1540657, 3000, "#face1#咿咿……\r\n我们有的是兵力!\r\n冲上去!", '', 0);
    cm.addPopupSay(1540657, 3000, "#face1#敌人到底有多少个，怎么就挡不住呢！", '', 0);
    cm.addPopupSay(1540654, 3000, "目标，确认为一个。", '', 0);
    cm.addPopupSay(1540657, 3000, "#face1#你说什么？！一个？！", '', 0);
    cm.spawnMobLimit(8240082, 1, 406, -119, 100);
    cm.spawnMobLimit(8240082, 1, 798, -119, 100);
    cm.spawnMobLimit(8240082, 1, 1254, -119, 100);
    cm.spawnMobLimit(8240082, 1, 1484, -119, 100);
    cm.spawnMobLimit(8240082, 1, 1834, -119, 100);
    cm.spawnMobLimit(8240082, 1, 1699, -119, 100);
    cm.spawnMobLimit(8240082, 1, 1589, -119, 100);
    cm.spawnMobLimit(8240082, 1, 1354, -119, 100);
    cm.spawnMobLimit(8240082, 1, 1145, -119, 100);
    cm.spawnMobLimit(8240082, 1, 1046, -119, 100);
    cm.spawnMobLimit(8240082, 1, 993, -119, 100);
    cm.spawnMobLimit(8240082, 1, 682, -119, 100);
    cm.spawnMobLimit(8240082, 1, 616, -119, 100);
    cm.spawnMobLimit(8240082, 1, 517, -119, 100);
    cm.spawnMobLimit(8240082, 1, 95, -119, 100);
    cm.spawnMobLimit(8240082, 1, 184, -119, 100);
    cm.spawnMobLimit(8240082, 1, 231, -119, 100);
    cm.spawnMobLimit(8240082, 1, 1525, -119, 100);
    cm.spawnMobLimit(8240082, 1, 1397, -119, 100);
    cm.spawnMobLimit(8240082, 1, 336, -119, 100);
    cm.spawnMobLimit(8240082, 1, 613, -119, 100);
    cm.spawnMobLimit(8240082, 1, 966, -119, 100);
    cm.spawnMobLimit(8240082, 1, 1682, -119, 100);
    cm.spawnMobLimit(8240082, 1, 1833, -119, 100);
    cm.spawnMobLimit(8240082, 1, 829, -119, 100);
    cm.spawnMobLimit(8240082, 1, 484, -119, 100);
    cm.spawnMobLimit(8240082, 1, 215, -119, 100);
    cm.spawnMobLimit(8240082, 1, 1123, -119, 100);
    cm.spawnMobLimit(8240082, 1, 719, -119, 100);
    cm.spawnMobLimit(8240082, 1, 1268, -119, 100);
    cm.spawnMobLimit(8240082, 1, 85, -119, 100);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;