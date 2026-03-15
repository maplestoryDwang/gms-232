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
  } else if (status === V++) {
    if (!cm.isQuestActive(3923)) {
      cm.sendNormalTalk("偷东西的话会被警卫发现的。", 0, 2103002, false, true);
      cm.dispose();
    } else {
      if (cm.haveItem(4031578)) {
        cm.sendOkS("已经拿走了戒指，可以离开了。");
      } else {
        cm.sendNormalTalk("小心翼翼地取出抽屉，拿出了王妃的戒指。", 0, 2103002, false, false);
        cm.gainItem(4031578, 1);
      }
      cm.dispose();
    }
  }
}