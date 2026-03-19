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
    cm.addPopupSay(9111018, 2000, "#face0#我给你个提示……#r摒弃执念！#k", '', 0);
    cm.addPopupSay(9111018, 2000, "#face0#这竹林像迷宫一样非常复杂，在里面很容易迷路，但#b只要你摒弃执念，就可以发现出路。#k", '', 0);
    cm.setQuestCustomData(58772, new Date().getTime());
    cm.dispose();
    cm.openNpc;
  }
}