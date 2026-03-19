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
    cm.spawnMobLimit(8240063, 1, 1752, -119, 100);
    cm.spawnMobLimit(8240063, 1, 1202, -119, 100);
    cm.spawnMobLimit(8240061, 1, 2512, -119, 100);
    cm.spawnMobLimit(8240061, 1, 2752, -119, 100);
    cm.spawnMobLimit(8240062, 1, 2217, -119, 100);
    cm.spawnMobLimit(8240064, 1, 2942, -119, 100);
    cm.spawnMobLimit(8240065, 1, 2711, -119, 100);
    cm.spawnMobLimit(8240066, 1, 2592, -119, 100);
    cm.spawnMobLimit(8240064, 1, 1689, -119, 100);
    cm.spawnMobLimit(8240065, 1, 1556, -119, 100);
    cm.spawnMobLimit(8240066, 1, 1142, -119, 100);
    cm.spawnMobLimit(8240014, 1, 1394, -119, 100);
    cm.spawnMobLimit(8240014, 1, 1862, -119, 100);
    cm.spawnMobLimit(8240014, 1, 2419, -119, 100);
    cm.spawnMobLimit(8240014, 1, 2805, -119, 100);
    cm.spawnMobLimit(8240014, 1, 2644, -119, 100);
    cm.spawnMobLimit(8240014, 1, 1765, -119, 100);
    cm.spawnMobLimit(8240014, 1, 1226, -119, 100);
    cm.spawnMobLimit(8240067, 1, 2066, -119, 100);
    cm.spawnMobLimit(8240014, 1, 1101, -119, 100);
    cm.spawnMobLimit(8240014, 1, 1668, -119, 100);
    cm.spawnMobLimit(8240014, 1, 2680, -119, 100);
    cm.spawnMobLimit(8240014, 1, 2171, -119, 100);
    cm.spawnMobLimit(8240014, 1, 1203, -119, 100);
    cm.spawnMobLimit(8240014, 1, 2565, -119, 100);
    cm.spawnMobLimit(8240014, 1, 1789, -119, 100);
    cm.spawnMobLimit(8240063, 1, 2329, -119, 100);
    cm.spawnMobLimit(8240065, 1, 1330, -119, 100);
    cm.spawnMobLimit(8240066, 1, 2489, -119, 100);
    cm.spawnMobLimit(8240063, 1, 1943, -119, 100);
    cm.spawnMobLimit(8240062, 1, 1446, -119, 100);
    cm.updateInfoQuest(33200, "map=400;failCount=4;underAttack=1;androidHelmet=3");
    cm.addPopupSay(1540657, 3000, "#face1#现在这个时候, 那家伙应该也已经累了!", '', 0);
    cm.addPopupSay(1540657, 3000, "#face1#我就让你瞧瞧连冰川都能穿破的盖奥勒克的厉害!!", '', 0);
    cm.spawnMobLimit(8240082, 1, 1752, -119, 100);
    cm.spawnMobLimit(8240082, 1, 1202, -119, 100);
    cm.spawnMobLimit(8240082, 1, 2512, -119, 100);
    cm.spawnMobLimit(8240082, 1, 2752, -119, 100);
    cm.spawnMobLimit(8240082, 1, 2217, -119, 100);
    cm.spawnMobLimit(8240083, 1, 2942, -119, 100);
    cm.spawnMobLimit(8240083, 1, 2711, -119, 100);
    cm.spawnMobLimit(8240083, 1, 2592, -119, 100);
    cm.spawnMobLimit(8240083, 1, 1689, -119, 100);
    cm.spawnMobLimit(8240083, 1, 1556, -119, 100);
    cm.spawnMobLimit(8240083, 1, 1142, -119, 100);
    cm.spawnMobLimit(8240082, 1, 2329, -119, 100);
    cm.spawnMobLimit(8240083, 1, 1330, -119, 100);
    cm.spawnMobLimit(8240083, 1, 2489, -119, 100);
    cm.spawnMobLimit(8240082, 1, 1943, -119, 100);
    cm.spawnMobLimit(8240082, 1, 1446, -119, 100);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;