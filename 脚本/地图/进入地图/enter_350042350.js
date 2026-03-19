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
    cm.spawnMobLimit(8240014, 1, -412, -119, 100);
    cm.spawnMobLimit(8240014, 1, -51, -119, 100);
    cm.spawnMobLimit(8240014, 1, 129, -119, 100);
    cm.spawnMobLimit(8240014, 1, 298, -119, 100);
    cm.spawnMobLimit(8240014, 1, 766, -119, 100);
    cm.spawnMobLimit(8240014, 1, 1003, -119, 100);
    cm.spawnMobLimit(8240014, 1, 1240, -119, 100);
    cm.spawnMobLimit(8240061, 1, 1122, -119, 100);
    cm.spawnMobLimit(8240061, 1, -13, -119, 100);
    cm.spawnMobLimit(8240061, 1, -392, -119, 100);
    cm.spawnMobLimit(8240064, 1, -191, -119, 100);
    cm.spawnMobLimit(8240064, 1, 395, -119, 100);
    cm.spawnMobLimit(8240064, 1, 844, -119, 100);
    cm.spawnMobLimit(8240014, 1, 192, -119, 100);
    cm.spawnMobLimit(8240014, 1, -461, -119, 100);
    cm.spawnMobLimit(8240014, 1, 246, -119, 100);
    cm.spawnMobLimit(8240014, 1, -561, -119, 100);
    cm.spawnMobLimit(8240014, 1, -127, -119, 100);
    cm.spawnMobLimit(8240014, 1, 578, -119, 100);
    cm.spawnMobLimit(8240014, 1, 1257, -119, 100);
    cm.spawnMobLimit(8240049, 1, 700, -119, 100);
    cm.spawnMobLimit(8240066, 1, -283, -119, 100);
    cm.spawnMobLimit(8240065, 1, 920, -119, 100);
    cm.spawnMobLimit(8240064, 1, 476, -119, 100);
    cm.addPopupSay(1104002, 3000, "呼, 没想到我们还会再见面. \r\n今天就是你的末日!", '', 0);
    cm.addPopupSay(1540657, 3000, "#face0#埃雷奥诺尔！！一定要阻止那个家伙抵达结界维持装置！！", '', 0);
    cm.spawnMobLimit(8240082, 1, 1122, -119, 100);
    cm.spawnMobLimit(8240082, 1, -13, -119, 100);
    cm.spawnMobLimit(8240082, 1, -392, -119, 100);
    cm.spawnMobLimit(8240083, 1, -191, -119, 100);
    cm.spawnMobLimit(8240083, 1, 395, -119, 100);
    cm.spawnMobLimit(8240083, 1, 844, -119, 100);
    cm.spawnMobLimit(8240083, 1, -283, -119, 100);
    cm.spawnMobLimit(8240083, 1, 920, -119, 100);
    cm.spawnMobLimit(8240083, 1, 476, -119, 100);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;