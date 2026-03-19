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
    cm.spawnMobLimit(8240060, 1, 2964, -119, 16);
    cm.spawnMobLimit(8240060, 1, 2846, -119, 16);
    cm.spawnMobLimit(8240060, 1, 2728, -119, 16);
    cm.spawnMobLimit(8240060, 1, 2619, -119, 16);
    cm.spawnMobLimit(8240060, 1, 2503, -119, 16);
    cm.spawnMobLimit(8240060, 1, 2410, -119, 16);
    cm.spawnMobLimit(8240060, 1, 2303, -119, 16);
    cm.spawnMobLimit(8240060, 1, 2186, -119, 16);
    cm.spawnMobLimit(8240060, 1, 1016, -119, 16);
    cm.spawnMobLimit(8240060, 1, 1158, -119, 16);
    cm.spawnMobLimit(8240060, 1, 1279, -119, 16);
    cm.spawnMobLimit(8240060, 1, 1409, -119, 16);
    cm.spawnMobLimit(8240060, 1, 1526, -119, 16);
    cm.spawnMobLimit(8240060, 1, 1655, -119, 16);
    cm.spawnMobLimit(8240060, 1, 1855, -119, 16);
    cm.spawnMobLimit(8240060, 1, 1953, -119, 16);
    cm.addPopupSay(1540657, 3000, "#face1#你把这里当做什么地方, 胆敢闯进来!", '', 0);
    cm.getTopMsgFont("请消灭所有敌人, 继续往前进!", 3, 20, 20, 0);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;