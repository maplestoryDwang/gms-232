var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else if (status === V++) {
    cm.addPopupSay(9401032, 3000, "不管怎么说，我这次应该都成长不少了。", '', 0);
    cm.addPopupSay(0, 3000, '#b确实。', '', 0);
    cm.addPopupSay(9401031, 3000, "你要长大好像还差得远呢？", '', 0);
    cm.addPopupSay(9401032, 3000, "… ", '', 0);
    cm.dispose();
  }
}