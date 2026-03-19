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
  } else {
    if (status === V++) {
      cm.sendNormalTalk_Bottom("#b我去收集木柴，麻烦两位去打些野狼肉。", 57, 0, false, true);
      cm.spawnMobLimit(9402301, 1, -720, 135, 1);
      cm.spawnMobLimit(9402308, 1, -650, 135, 1);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face0#不干，凭什么让我做危险的事？", 37, 9400590, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#b那就每人各收集20个木柴，20个野狼肉。", 57, 0, true, true);
        } else if (status === V++) {
          cm.playerMessage(-1, "去收集野狼肉和木柴各20个。");
          cm.dispose();
          cm.forceJoinEvent("莫奈德_地图_Act1.6_收集资源");
        }
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;