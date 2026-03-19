var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
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
  } else {
    if (status === V++) {
      cm.spawnMobLimit(9400041, 1, -540, 95, 27);
      cm.spawnMobLimit(9400041, 1, -495, 95, 27);
      cm.spawnMobLimit(9400042, 1, -395, 95, 27);
      cm.spawnMobLimit(9400041, 1, -295, 95, 27);
      cm.spawnMobLimit(9400042, 1, -195, 95, 27);
      cm.spawnMobLimit(9400042, 1, 1300, 95, 27);
      cm.spawnMobLimit(9400041, 1, 1200, 95, 27);
      cm.spawnMobLimit(9400042, 1, 1100, 95, 27);
      cm.spawnMobLimit(9400041, 1, 1000, 95, 27);
      cm.spawnMobLimit(9400041, 1, -540, 95, 27);
      cm.spawnMobLimit(9400041, 1, -495, 95, 27);
      cm.spawnMobLimit(9400042, 1, -395, 95, 27);
      cm.spawnMobLimit(9400041, 1, -295, 95, 27);
      cm.spawnMobLimit(9400042, 1, -195, 95, 27);
      cm.spawnMobLimit(9400042, 1, 1300, 95, 27);
      cm.spawnMobLimit(9400041, 1, 1200, 95, 27);
      cm.spawnMobLimit(9400042, 1, 1100, 95, 27);
      cm.spawnMobLimit(9400041, 1, 1000, 95, 27);
      cm.spawnMobLimit(9400041, 1, -540, 95, 27);
      cm.spawnMobLimit(9400041, 1, -495, 95, 27);
      cm.spawnMobLimit(9400042, 1, -395, 95, 27);
      cm.spawnMobLimit(9400041, 1, -295, 95, 27);
      cm.spawnMobLimit(9400042, 1, -195, 95, 27);
      cm.spawnMobLimit(9400042, 1, 1300, 95, 27);
      cm.spawnMobLimit(9400041, 1, 1200, 95, 27);
      cm.spawnMobLimit(9400042, 1, 1100, 95, 27);
      cm.spawnMobLimit(9400041, 1, 1000, 95, 27);
      cm.sendNormalTalk_Bottom("(唔，到处都是流氓团伙啊……\r\n看样子必须把流氓团伙全消灭了，才能采集药草。)", 57, 0, false, true);
    } else if (status === V++) {
      cm.dispose();
    }
  }
}