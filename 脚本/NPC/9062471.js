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
      var w = cm.getNumberFromQuestInfo(16192, "curTowerPoint");
      cm.sendNormalTalk("玩得开心吗~？这次你获得了#e#b" + w + "个焕新宝石#k#n~", 5, 9062461, false, true);
    } else if (status === V++) {
      cm.dispose();
      cm.warp(993189100, 8, false);
    }
  }
}