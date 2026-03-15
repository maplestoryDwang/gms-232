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
  if (status == 0) {
    cm.askMenu("#e[起源之塔排名公告栏]\r\n#L0##n#b起源之塔探险排名#l\r\n#L2#我探险到的最深层#l", 0, 2540019);
  } else {
    if (selectionLog[1] == 0) {
      cm.openUI(211);
    } else {
      var V = cm.getNumberFromQuestInfo(42002, 'tf');
      cm.sendNormalTalk("#e[我的累计最佳记录]#n\r\n\r\n累计最佳记录：#e#b" + V + " #k#n层", 0, 2540019, false, false);
    }
    cm.dispose();
  }
}