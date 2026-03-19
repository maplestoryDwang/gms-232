var status = -1;
var selectionLog = [];
function action(b, C, m) {
  if (status == 0 && b == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = m;
  var h = -1;
  if (status <= h++) {
    cm.dispose();
  } else if (status === h++) {
    cm.setPartner(1, 1540765, 80001594, 0);
    cm.setPartner(1, 1540766, 80001595, 0);
    cm.setPartner(1, 1540767, 80001596, 0);
    cm.useItem(2023447);
    cm.useItem(2023448);
    cm.useItem(2023449);
    cm.getMap().killAllMonsters(false);
    cm.spawnMobLimit(8240060, 1, 475, -784, 12);
    cm.spawnMobLimit(8240060, 1, 1013, -784, 12);
    cm.spawnMobLimit(8240060, 1, 910, -1594, 12);
    cm.spawnMobLimit(8240060, 1, 278, -1594, 12);
    cm.spawnMobLimit(8240060, 1, 375, -784, 12);
    cm.spawnMobLimit(8240060, 1, -6, -2348, 12);
    cm.spawnMobLimit(8240060, 1, 114, -2348, 12);
    cm.spawnMobLimit(8240060, 1, 695, -3900, 12);
    cm.spawnMobLimit(8240060, 1, 465, -3900, 12);
    cm.spawnMobLimit(8240060, 1, 479, -3900, 12);
    cm.spawnMobLimit(8240060, 1, 695, -3900, 12);
    cm.spawnMobLimit(8240060, 1, 465, -3900, 12);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;