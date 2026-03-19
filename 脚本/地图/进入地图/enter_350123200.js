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
    cm.showMapleHero();
    cm.addPopupSay(1540801, 1000, "#face4#等一下，这些家伙不是遗迹的怪物，是魔族嘛？", '', 0);
    cm.addPopupSay(1540805, 1000, "#face3#看样子戴米安的势力认出了我们，追上来了！", '', 0);
    cm.addPopupSay(1540801, 1000, "#face4#他们还真是会顺着我们打通的路赶过来啊。", '', 0);
    cm.spawnMobLimit(8240173, 1, 1421, -843, 100);
    cm.spawnMobLimit(8240173, 1, 1309, -843, 100);
    cm.spawnMobLimit(8240173, 1, 1556, -843, 100);
    cm.spawnMobLimit(8240173, 1, 1897, -843, 100);
    cm.spawnMobLimit(8240173, 1, 1790, -843, 100);
    cm.spawnMobLimit(8240173, 1, 1421, -843, 100);
    cm.spawnMobLimit(8240173, 1, 1897, -843, 100);
    cm.spawnMobLimit(8240173, 1, 1790, -843, 100);
    cm.spawnMobLimit(8240173, 1, 1556, -843, 100);
    cm.spawnMobLimit(8240173, 1, 1309, -843, 100);
    cm.scheduleWarpTask(60, 350123300, 0, false, true);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;