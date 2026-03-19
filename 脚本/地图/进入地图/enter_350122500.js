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
    cm.spawnMobLimit(8240168, 1, 1535, -136, 100);
    cm.spawnMobLimit(8240162, 1, 1723, -279, 100);
    cm.spawnMobLimit(8240162, 1, 1971, -279, 100);
    cm.spawnMobLimit(8240163, 1, 2170, -279, 100);
    cm.spawnMobLimit(8240163, 1, 1399, -231, 100);
    cm.spawnMobLimit(8240163, 1, 1028, -231, 100);
    cm.spawnMobLimit(8240163, 1, 1531, -367, 100);
    cm.spawnMobLimit(8240163, 1, 1363, -367, 100);
    cm.spawnMobLimit(8240162, 1, 1151, -367, 100);
    cm.spawnMobLimit(8240167, 1, 2013, -279, 100);
    cm.spawnMobLimit(8240169, 1, 1125, 9, 100);
    cm.spawnMobLimit(8240169, 1, 2106, -279, 100);
    cm.spawnMobLimit(8240168, 1, 1235, -367, 100);
    cm.spawnMobLimit(8240167, 1, 613, 9, 100);
    cm.spawnMobLimit(8240162, 1, 1240, -231, 100);
    cm.spawnMobLimit(8240162, 1, 843, -108, 100);
    cm.spawnMobLimit(8240163, 1, 863, -367, 100);
    cm.spawnMobLimit(8240162, 1, 796, -231, 100);
    cm.spawnMobLimit(8240163, 1, 1541, -136, 100);
    cm.spawnMobLimit(8240162, 1, 1519, 9, 100);
    cm.spawnMobLimit(8240163, 1, 1298, 9, 100);
    cm.spawnMobLimit(8240163, 1, 1104, 9, 100);
    cm.spawnMobLimit(8240162, 1, 905, 9, 100);
    cm.spawnMobLimit(8240162, 1, 1758, 9, 100);
    cm.spawnMobLimit(8240163, 1, 2122, 9, 100);
    cm.spawnMobLimit(8240163, 1, 1949, 9, 100);
    cm.spawnMobLimit(8240162, 1, 2299, -136, 100);
    cm.showMapleHero();
    cm.addPopupSay(1540803, 2500, "#face0#就算过去了数百年，坏人还是会持续不断地出场啊。", '', 0);
    cm.addPopupSay(1540801, 2500, "#face0#雪龟岛上的事情我很遗憾，米乐。", '', 0);
    cm.addPopupSay(1540807, 2500, "#face1#我绝对不能原谅那个叫戴米安的人呢。", '', 0);
    cm.spawnMobLimit(8240162, 1, 2159, 9, 100);
    cm.spawnMobLimit(8240170, 1, 613, 9, 100);
    cm.spawnMobLimit(8240172, 1, 1125, 9, 100);
    cm.spawnMobLimit(8240171, 1, 1535, -136, 100);
    cm.spawnMobLimit(8240171, 1, 1235, -367, 100);
    cm.spawnMobLimit(8240162, 1, 2580, -357, 100);
    cm.spawnMobLimit(8240162, 1, 2447, -357, 100);
    cm.spawnMobLimit(8240163, 1, 2650, -98, 100);
    cm.spawnMobLimit(8240163, 1, 2875, 9, 100);
    cm.spawnMobLimit(8240162, 1, 3198, 9, 100);
    cm.spawnMobLimit(8240163, 1, 2772, -221, 100);
    cm.spawnMobLimit(8240162, 1, 2639, -221, 100);
    cm.spawnMobLimit(8240162, 1, 2670, 9, 100);
    cm.spawnMobLimit(8240162, 1, 3238, 9, 100);
    cm.spawnMobLimit(8240162, 1, 2756, -98, 100);
    cm.spawnMobLimit(8240163, 1, 2926, -98, 100);
    cm.spawnMobLimit(8240163, 1, 2912, -221, 100);
    cm.spawnMobLimit(8240163, 1, 2684, -221, 100);
    cm.spawnMobLimit(8240170, 1, 2013, -279, 100);
    cm.spawnMobLimit(8240172, 1, 2106, -279, 100);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;