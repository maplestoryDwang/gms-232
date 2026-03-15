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
      if (cm.getMap().getNumMonsters() > 0) {
        cm.getTopMsgFont("地图剩余怪物：" + cm.getMap().getNumMonsters() + '', 3, 20, 4, 0, 0);
        cm.dispose();
      } else {
        cm.sendNormalTalk("就、就是现在！快帮我解开绳子！", 4, 3001243, false, true);
      }
    } else if (status === V++) {
      cm.dispose();
      cm.warp(940200508, 0, true);
    }
  }
}