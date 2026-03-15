var status = -1;
function action(f, W, U) {
  if (f == 1) {
    status++;
  } else {
    cm.dispose();
    return;
  }
  if (status == 0) {
    cm.askYesNo("要移动到能够和其他玩家交易物品的#b<自由市场>#k吗？");
  } else if (status == 1) {
    cm.saveLocation("FREE_MARKET");
    cm.warp(910000000, 'st00');
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;