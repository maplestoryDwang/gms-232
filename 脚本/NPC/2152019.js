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
    if (cm.isQuestActive(23005) && cm.haveItem(4032783)) {
      cm.sendNext('公告栏上贴着传单。');
      cm.forceStartQuest(23006, '1');
      cm.gainItem(4032783, -1);
    } else {
      cm.sendOk("埃德尔斯坦自由市场的公告栏。好像可以张贴买卖广告……但是上面除了黑色之翼的广告，其他的什么都没有。");
    }
    cm.dispose();
  }
}