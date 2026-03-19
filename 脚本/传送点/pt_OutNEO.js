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
      cm.askMenu("要去哪里呢？\r\n#L0#返回#b#e来过的地方#n#k。#k#l\r\n#L1#前往#b#e#m867157500##n#k。#k#l", 24, 0);
    } else if (status === R++) {
      cm.dispose();
      if (x == 1) {
        cm.warp(cm.getNumberFromQuestInfo(100714, "rMap"));
      } else {
        cm.sendNormalTalk("想要进入焕新城堡入口，最好接受星星与月亮的指引。\r\n去找#b#e卡琳#n#k购买#r#e焕新椅子#n#k吧。", 4, 9062453, false, false);
      }
    }
  }
}