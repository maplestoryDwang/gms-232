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
      if (cm.isQuestActive(37804)) {
        cm.sendNormalTalk_Bottom("(我得找到那些边消灭#r恶魔#k边进行搜索的团员，听听他们的报告。)", 56, 0, false, true, 1);
      } else {
        cm.sendNormalTalk_Bottom("现在还无法移动。", 56, 0, false, true, 1);
        cm.dispose();
      }
    } else if (status === R++) {
      cm.forceJoinEvent("圣瑞尼亚的骑士_清怪3");
      cm.dispose();
    }
  }
}