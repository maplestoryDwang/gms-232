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
    cm.spawnMobLimit(8240169, 1, 772, -83, 100);
    cm.spawnMobLimit(8240167, 1, 2201, -243, 100);
    cm.spawnMobLimit(8240169, 1, 2099, -243, 100);
    cm.spawnMobLimit(8240168, 1, 360, 9, 100);
    cm.spawnMobLimit(8240162, 1, 1500, -278, 100);
    cm.spawnMobLimit(8240162, 1, 1341, -278, 100);
    cm.spawnMobLimit(8240162, 1, 1205, -278, 100);
    cm.spawnMobLimit(8240162, 1, 1031, -278, 100);
    cm.spawnMobLimit(8240162, 1, 1505, -131, 100);
    cm.spawnMobLimit(8240162, 1, 2327, 9, 100);
    cm.spawnMobLimit(8240162, 1, 1519, 9, 100);
    cm.spawnMobLimit(8240162, 1, 1298, 9, 100);
    cm.spawnMobLimit(8240162, 1, 1104, 9, 100);
    cm.spawnMobLimit(8240162, 1, 905, 9, 100);
    cm.spawnMobLimit(8240162, 1, 1758, 9, 100);
    cm.spawnMobLimit(8240162, 1, 2122, 9, 100);
    cm.spawnMobLimit(8240162, 1, 1949, 9, 100);
    cm.spawnMobLimit(8240162, 1, 2324, -243, 100);
    cm.spawnMobLimit(8240162, 1, 2180, -243, 100);
    cm.spawnMobLimit(8240162, 1, 2018, -243, 100);
    cm.spawnMobLimit(8240162, 1, 1775, -181, 100);
    cm.spawnMobLimit(8240162, 1, 1356, -131, 100);
    cm.spawnMobLimit(8240162, 1, 1196, -131, 100);
    cm.spawnMobLimit(8240162, 1, 1015, -131, 100);
    cm.spawnMobLimit(8240162, 1, 695, -83, 100);
    cm.addPopupSay(1540804, 2500, "幻影，你可千万不准打偷遗迹宝物的主意。", '', 0);
    cm.addPopupSay(1540803, 2500, "木头越不让我做，我倒是越想做了。", '', 0);
    cm.addPopupSay(1540804, 2500, "#face2#阿布拉克萨斯是被称为注视之神的古代神圣之神……", '', 0);
    cm.addPopupSay(1540803, 2500, "#face6#是是，不用再说明了。", '', 0);
    cm.spawnMobLimit(8240171, 1, 360, 9, 100);
    cm.spawnMobLimit(8240172, 1, 772, -83, 100);
    cm.spawnMobLimit(8240162, 1, 2119, 9, 100);
    cm.spawnMobLimit(8240168, 1, 2736, -309, 100);
    cm.spawnMobLimit(8240167, 1, 3066, 9, 100);
    cm.spawnMobLimit(8240162, 1, 2513, -115, 100);
    cm.spawnMobLimit(8240162, 1, 2851, 9, 100);
    cm.spawnMobLimit(8240162, 1, 2881, 9, 100);
    cm.spawnMobLimit(8240162, 1, 3031, -309, 100);
    cm.spawnMobLimit(8240162, 1, 2992, -309, 100);
    cm.spawnMobLimit(8240162, 1, 2559, 9, 100);
    cm.spawnMobLimit(8240162, 1, 2584, -115, 100);
    cm.spawnMobLimit(8240162, 1, 2523, -115, 100);
    cm.spawnMobLimit(8240162, 1, 2772, -115, 100);
    cm.spawnMobLimit(8240162, 1, 2525, -243, 100);
    cm.spawnMobLimit(8240162, 1, 2525, -243, 100);
    cm.spawnMobLimit(8240172, 1, 2099, -243, 100);
    cm.spawnMobLimit(8240170, 1, 2201, -243, 100);
    cm.spawnMobLimit(8240170, 1, 3066, 9, 100);
    cm.spawnMobLimit(8240171, 1, 2736, -309, 100);
    cm.spawnMobLimit(8240162, 1, 1397, -278, 100);
    cm.spawnMobLimit(8240162, 1, 1121, -278, 100);
    cm.spawnMobLimit(8240162, 1, 924, -278, 100);
    cm.spawnMobLimit(8240162, 1, 1009, -131, 100);
    cm.spawnMobLimit(8240171, 1, 360, 9, 100);
    cm.spawnMobLimit(8240172, 1, 772, -83, 100);
    cm.spawnMobLimit(8240162, 1, 1047, -278, 100);
    cm.spawnMobLimit(8240162, 1, 1310, -278, 100);
    cm.spawnMobLimit(8240162, 1, 1408, -278, 100);
    cm.spawnMobLimit(8240162, 1, 1135, -131, 100);
    cm.spawnMobLimit(8240162, 1, 1238, -131, 100);
    cm.spawnMobLimit(8240171, 1, 360, 9, 100);
    cm.spawnMobLimit(8240172, 1, 772, -83, 100);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;