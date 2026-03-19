var status = -1;
var selectionLog = [];
function start() {
  status = -1;
  action(1, 0, 0);
}
;
function action(E, W, u) {
  if (status == 0 && E == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = u;
  var g = -1;
  if (status <= g++) {
    cm.dispose();
  } else if (status === g++) {
    cm.updateInfoQuest(33128, "act1=350013000;act2=350024300;act3=350033100;act4=350040240");
    cm.setPartner(1, 1540765, 80001594, 0);
    cm.setPartner(1, 1540766, 80001595, 0);
    cm.setPartner(1, 1540767, 80001596, 0);
    cm.useItem(2023447);
    cm.useItem(2023448);
    cm.useItem(2023449);
    cm.getMap().killAllMonsters(false);
    cm.spawnMobLimit(8240060, 1, 328, -1594, 11);
    cm.spawnMobLimit(8240060, 1, 345, -784, 11);
    cm.spawnMobLimit(8240060, 1, -328, -784, 11);
    cm.spawnMobLimit(8240060, 1, 1100, -1594, 11);
    cm.spawnMobLimit(8240060, 1, -140, -2348, 11);
    cm.spawnMobLimit(8240060, 1, 531, -3900, 11);
    cm.spawnMobLimit(8240060, 1, -105, -3900, 11);
    cm.spawnMobLimit(8240060, 1, 856, -3900, 11);
    cm.spawnMobLimit(8240060, 1, 218, -3900, 11);
    cm.spawnMobLimit(8240060, 1, 572, -3900, 11);
    cm.spawnMobLimit(8240060, 1, -65, -3900, 11);
    cm.dispose();
  }
}