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
  if (!cm.isQuestActive(62013)) {
    cm.sendOk("一双遗落在这里的童鞋。不知道是谁的。");
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
      cm.sendNormalTalk_Bottom("这是#p9310577#遗失的鞋子。快去寻找鞋子主人吧。前往#m701210000#，应该就能找到！", 57, 9310595, false, true);
      cm.gainItem(4034657, 1);
    } else if (status === V++) {
      cm.getTopMsgFont("移动到[嵩山镇]帮助寻找鞋子的主人.", 3, 20, 20, 0);
      cm.dispose();
      cm.warp(701210000, 3);
    }
  }
}