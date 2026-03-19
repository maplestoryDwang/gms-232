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
  } else if (status === V++) {
    cm.updateInfoQuest(58748, "underCover=4");
    cm.spawnMobLimit(9400038, 1, 595, -28, 3);
    cm.spawnMobLimit(9400038, 1, 180, -808, 3);
    cm.getTopMsgFont("请在不被亡灵武士们发现的情况下移动到下个地区。", 3, 20, 20, 0, 0);
    cm.spawnMobLimit(9400038, 1, -660, -28, 3);
    cm.dispose();
  }
}