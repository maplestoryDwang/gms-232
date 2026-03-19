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
    cm.spawnMobLimit(8240063, 1, 1855, -119, 100);
    cm.spawnMobLimit(8240063, 1, 1510, -119, 100);
    cm.spawnMobLimit(8240063, 1, 1212, -119, 100);
    cm.spawnMobLimit(8240063, 1, 1024, -119, 100);
    cm.spawnMobLimit(8240063, 1, 805, -119, 100);
    cm.spawnMobLimit(8240063, 1, 483, -119, 100);
    cm.spawnMobLimit(8240063, 1, 274, -119, 100);
    cm.spawnMobLimit(8240066, 1, 60, -119, 100);
    cm.spawnMobLimit(8240066, 1, 87, -119, 100);
    cm.spawnMobLimit(8240066, 1, 415, -119, 100);
    cm.spawnMobLimit(8240066, 1, 649, -119, 100);
    cm.spawnMobLimit(8240066, 1, 687, -119, 100);
    cm.spawnMobLimit(8240066, 1, 920, -119, 100);
    cm.spawnMobLimit(8240066, 1, 1088, -119, 100);
    cm.spawnMobLimit(8240066, 1, 1399, -119, 100);
    cm.spawnMobLimit(8240066, 1, 1590, -119, 100);
    cm.spawnMobLimit(8240066, 1, 1755, -119, 100);
    cm.spawnMobLimit(8240063, 1, 1566, -119, 100);
    cm.spawnMobLimit(8240063, 1, 539, -119, 100);
    cm.spawnMobLimit(8240063, 1, 145, -119, 100);
    cm.spawnMobLimit(8240048, 1, 1276, -119, 100);
    cm.spawnMobLimit(8240065, 1, 336, -119, 100);
    cm.spawnMobLimit(8240064, 1, 1461, -119, 100);
    cm.spawnMobLimit(8240061, 1, 966, -119, 100);
    cm.spawnMobLimit(8240062, 1, 1682, -119, 100);
    cm.spawnMobLimit(8240061, 1, 1833, -119, 100);
    cm.spawnMobLimit(8240064, 1, 829, -119, 100);
    cm.spawnMobLimit(8240064, 1, 484, -119, 100);
    cm.spawnMobLimit(8240063, 1, 215, -119, 100);
    cm.spawnMobLimit(8240062, 1, 719, -119, 100);
    cm.spawnMobLimit(8240062, 1, 1152, -119, 100);
    cm.addPopupSay(1033228, 3000, "果然是你这个家伙. \r\n我这次一定要把你碾碎!", '', 0);
    cm.addPopupSay(1540657, 3000, "#face0#哦哦, 是塔高斯!\r\n那家伙现在死定了!", '', 0);
    cm.spawnMobLimit(8240082, 1, 1855, -119, 100);
    cm.spawnMobLimit(8240082, 1, 1510, -119, 100);
    cm.spawnMobLimit(8240082, 1, 1212, -119, 100);
    cm.spawnMobLimit(8240082, 1, 1024, -119, 100);
    cm.spawnMobLimit(8240082, 1, 805, -119, 100);
    cm.spawnMobLimit(8240082, 1, 483, -119, 100);
    cm.spawnMobLimit(8240082, 1, 274, -119, 100);
    cm.spawnMobLimit(8240083, 1, 60, -119, 100);
    cm.spawnMobLimit(8240083, 1, 87, -119, 100);
    cm.spawnMobLimit(8240083, 1, 415, -119, 100);
    cm.spawnMobLimit(8240083, 1, 649, -119, 100);
    cm.spawnMobLimit(8240083, 1, 687, -119, 100);
    cm.spawnMobLimit(8240083, 1, 920, -119, 100);
    cm.spawnMobLimit(8240083, 1, 1088, -119, 100);
    cm.spawnMobLimit(8240083, 1, 1399, -119, 100);
    cm.spawnMobLimit(8240083, 1, 1590, -119, 100);
    cm.spawnMobLimit(8240083, 1, 1755, -119, 100);
    cm.spawnMobLimit(8240082, 1, 1566, -119, 100);
    cm.spawnMobLimit(8240082, 1, 539, -119, 100);
    cm.spawnMobLimit(8240082, 1, 145, -119, 100);
    cm.spawnMobLimit(8240083, 1, 336, -119, 100);
    cm.spawnMobLimit(8240083, 1, 1461, -119, 100);
    cm.spawnMobLimit(8240082, 1, 966, -119, 100);
    cm.spawnMobLimit(8240082, 1, 1682, -119, 100);
    cm.spawnMobLimit(8240082, 1, 1833, -119, 100);
    cm.spawnMobLimit(8240083, 1, 829, -119, 100);
    cm.spawnMobLimit(8240083, 1, 484, -119, 100);
    cm.spawnMobLimit(8240082, 1, 215, -119, 100);
    cm.spawnMobLimit(8240082, 1, 719, -119, 100);
    cm.spawnMobLimit(8240082, 1, 1152, -119, 100);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;