var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      if (cm.getMap().isSpawn()) {
        cm.askYesNo("是否关闭怪物生成器？", 0, 9075101);
      } else {
        cm.askYesNo("是否启动怪物生成器？", 0, 9075101);
      }
    } else if (status === V++) {
      if (cm.getMap().isSpawn()) {
        cm.playerMessage(-1, '怪物生成器关闭了。');
        cm.getMap().killAllMonsters(true);
        cm.getMap().setSpawn(false);
      } else {
        cm.playerMessage(-1, "怪物生成器启动了。");
        cm.forceStartQuest(1830, "机器启动完成");
        cm.getMap().setSpawn(true);
      }
      cm.dispose();
    }
  }
}