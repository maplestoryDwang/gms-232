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
  } else {
    if (status === V++) {
      cm.sendNormalTalk("居然空空如也…………难道幻影来过这儿了？那么就只剩下#r神木村的那个地方#k了。啊啊，幻影那家伙是绝对不允许别人进入那里的。能找到在哪儿吗？可要辛苦了。", 17, 0, false, true);
    } else if (status === V++) {
      cm.updateInfoQuest(38052, '');
      cm.forceStartQuest(38052, "clear");
      cm.forceCompleteQuest(38052);
      cm.updateInfoQuest(38053, '');
      cm.forceStartQuest(38053, '');
      cm.gainExp(20000);
      cm.dispose();
      cm.warp(240010102, 0, false);
    }
  }
}