var status = -1;
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  var V = cm.getMapId();
  if (V < 101082100 || V > 101082300) {
    cm.sendOkS("在打扫#b鲁安的屋子#k时才用得上它们。");
    cm.dispose();
    return;
  }
  var w = -1;
  var N = Math.floor(cm.getItemQuantity(2630159) / 10);
  if (N <= 0) {
    cm.sendOkS("得收集#b10个草屑#k才能制作一把扫帚。");
    cm.dispose();
    return;
  }
  if (status <= w++) {
    cm.dispose();
  } else {
    if (status === w++) {
      var u = cm.getNumberFromQuestInfo(37164, "count");
      var Q = Math.max(0, Math.floor((50 - u) / 10) - cm.getItemQuantity(4036502));
      var m = "要用草屑再制作几个扫帚呢？\r\n\r\n";
      m += "（额外需要的扫帚数量：#r" + Q + "把#k）\r\n";
      m += "（最多可以制作的扫帚数量：#b" + N + '把#k）';
      cm.askNumber(m, 1, 1, N);
    } else {
      if (status === w++) {
        cm.gainItem(2630159, -U * 10);
        cm.gainItem(4036502, U);
        cm.playerMessage(5, '消耗' + U + "个草屑，制作了" + U + "把简陋的扫帚。");
        cm.dispose();
      } else if (status === w++) {
        cm.dispose();
      }
    }
  }
}