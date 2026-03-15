var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (cm.getMapId() == 252030000) {
    cm.dispose();
    cm.openNpc(9000080, "副本_黄金寺院_Boss_拉瓦那");
    return;
  }
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
      cm.sendNormalTalk("祝贺你消灭了拉瓦那。移动至拉瓦那黄金祭坛通道。", 0, 9000080, false, true);
    } else if (status === V++) {
      cm.playerMessage(5, '离开拉瓦那黄金祭坛。');
      cm.dispose();
      cm.warp(252030001, 1);
    }
  }
}