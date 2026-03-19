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
    cm.updateInfoQuest(58748, "underCover=2");
    cm.spawnMobLimit(9400038, 1, -300, -88, 4);
    cm.spawnMobLimit(9400038, 1, -200, -298, 4);
    cm.getTopMsgFont("请在不被亡灵武士们发现的情况下移动到下个地区。", 3, 20, 20, 0, 0);
    cm.spawnMobLimit(9400038, 1, 900, -148, 4);
    cm.spawnMobLimit(9400038, 1, 900, -148, 4);
    cm.dispose();
  }
}