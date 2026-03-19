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
    cm.gainSkillBuff(80001592);
    cm.spawnMobLimit(8240078, 1, 843, -119, 100);
    cm.spawnMobLimit(8240014, 1, 999, -119, 100);
    cm.spawnMobLimit(8240014, 1, 896, -119, 100);
    cm.spawnMobLimit(8240014, 1, 750, -119, 100);
    cm.spawnMobLimit(8240014, 1, 635, -119, 100);
    cm.spawnMobLimit(8240014, 1, -38, -119, 100);
    cm.spawnMobLimit(8240014, 1, 75, -119, 100);
    cm.spawnMobLimit(8240014, 1, -123, -119, 100);
    cm.spawnMobLimit(8240014, 1, -238, -119, 100);
    cm.spawnMobLimit(8240014, 1, -361, -119, 100);
    cm.spawnMobLimit(8240012, 1, -274, -119, 100);
    cm.spawnMobLimit(8240012, 1, 1094, -119, 100);
    cm.spawnMobLimit(8240012, 1, 1346, -119, 100);
    cm.spawnMobLimit(8240071, 1, 654, -119, 100);
    cm.spawnMobLimit(8240014, 1, 1169, -119, 100);
    cm.spawnMobLimit(8240015, 1, 985, -119, 100);
    cm.spawnMobLimit(8240012, 1, 681, -119, 100);
    cm.spawnMobLimit(8240015, 1, -96, -119, 100);
    cm.spawnMobLimit(8240014, 1, -242, -119, 100);
    cm.spawnMobLimit(8240012, 1, -353, -119, 100);
    cm.spawnMobLimit(8240005, 1, 237, -119, 100);
    cm.addPopupSay(1540657, 3000, "#face1#最……最后必须死守结界维持器!", '', 0);
    cm.spawnMobLimit(8240014, 1, 1928, -119, 100);
    cm.spawnMobLimit(8240014, 1, 1682, -119, 100);
    cm.spawnMobLimit(8240014, 1, 1489, -119, 100);
    cm.spawnMobLimit(8240014, 1, 1620, -119, 100);
    cm.spawnMobLimit(8240014, 1, 2047, -119, 100);
    cm.spawnMobLimit(8240015, 1, 1604, -119, 100);
    cm.spawnMobLimit(8240005, 1, 2312, -119, 100);
    cm.spawnMobLimit(8240013, 1, 1936, -119, 100);
    cm.spawnMobLimit(8240013, 1, 1882, -119, 100);
    cm.spawnMobLimit(8240013, 1, 1469, -119, 100);
    cm.spawnMobLimit(8240013, 1, 1881, -119, 100);
    cm.spawnMobLimit(8240014, 1, 3585, -119, 100);
    cm.spawnMobLimit(8240014, 1, 2958, -119, 100);
    cm.spawnMobLimit(8240014, 1, 3445, -119, 100);
    cm.spawnMobLimit(8240071, 1, 3333, -119, 100);
    cm.spawnMobLimit(8240071, 1, 2760, -119, 100);
    cm.spawnMobLimit(8240014, 1, 3164, -119, 100);
    cm.spawnMobLimit(8240013, 1, 667, -119, 100);
    cm.spawnMobLimit(8240013, 1, 682, -119, 100);
    cm.spawnMobLimit(8240015, 1, 3282, -119, 100);
    cm.spawnMobLimit(8240014, 1, 3460, -119, 100);
    cm.spawnMobLimit(8240014, 1, 4039, -119, 100);
    cm.spawnMobLimit(8240014, 1, 3651, -119, 100);
    cm.spawnMobLimit(8240081, 1, 4162, -119, 100);
    cm.spawnMobLimit(8240015, 1, 4596, -119, 100);
    cm.spawnMobLimit(8240014, 1, 4297, -119, 100);
    cm.spawnMobLimit(8240013, 1, 3401, -119, 100);
    cm.spawnMobLimit(8240013, 1, 4254, -119, 100);
    cm.spawnMobLimit(8240014, 1, 4345, -119, 100);
    cm.spawnMobLimit(8240014, 1, 4643, -119, 100);
    cm.spawnMobLimit(8240015, 1, 4793, -119, 100);
    cm.spawnMobLimit(8240071, 1, 4985, -119, 100);
    cm.spawnMobLimit(8240014, 1, 5362, -119, 100);
    cm.spawnMobLimit(8240015, 1, 5371, -119, 100);
    cm.spawnMobLimit(8240015, 1, 6433, -119, 100);
    cm.spawnMobLimit(8240015, 1, 6156, -119, 100);
    cm.spawnMobLimit(8240014, 1, 6421, -119, 100);
    cm.spawnMobLimit(8240014, 1, 6148, -119, 100);
    cm.spawnMobLimit(8240014, 1, 5511, -119, 100);
    cm.spawnMobLimit(8240014, 1, 5453, -119, 100);
    cm.spawnMobLimit(8240014, 1, 5653, -119, 100);
    cm.spawnMobLimit(8240014, 1, 5847, -119, 100);
    cm.spawnMobLimit(8240005, 1, 5681, -119, 100);
    cm.spawnMobLimit(8240014, 1, 6490, -119, 100);
    cm.spawnMobLimit(8240013, 1, 5842, -119, 100);
    cm.spawnMobLimit(8240014, 1, 6516, -119, 100);
    cm.spawnMobLimit(8240014, 1, 6611, -119, 100);
    cm.spawnMobLimit(8240071, 1, 6681, -119, 100);
    cm.spawnMobLimit(8240013, 1, 6811, -119, 100);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;