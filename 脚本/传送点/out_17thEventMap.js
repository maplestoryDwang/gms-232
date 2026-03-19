function enter() {
  cm.openScriptNpc();
}
var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(l, B, x) {
  if (status == 0 && l == 0) {
    cm.dispose();
    return;
  }
  if (l == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = x;
  var R = -1;
  if (status <= R++) {
    cm.dispose();
  } else {
    if (status === R++) {
      cm.askMenu("去哪里好呢？\r\n#L0# 回到#b#e原处#n#k。#k#l\r\n#L1# 前往#b#e酒店外部#n#k。#k#l", 24, 0);
    } else if (status === R++) {
      if (x == 0) {
        cm.warp(cm.getNumberFromQuestInfo(100591, "map"));
      } else if (cm.haveItem(3018542) || cm.haveItem(3018543) || cm.haveItem(3018544)) {
        cm.warp(993177100, 8, false);
      } else {
        cm.sendNormalTalk("在酒店外部，可以将酒店壮丽的外观尽收眼底。\r\n请在#r#e精品店#n#k购买#b#e<酒店观光椅子>#n#k或者#b#e<酒店接送椅子>#n#k其中之一后再进入。", 4, 9062297, false, false);
      }
      cm.dispose();
    }
  }
}