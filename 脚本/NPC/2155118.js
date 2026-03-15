var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(D, V, R) {
  if (status == 0 && D == 0) {
    cm.dispose();
    return;
  }
  if (D == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = R;
  var e = -1;
  if (status <= e++) {
    cm.dispose();
  } else {
    if (status === e++) {
      if (!cm.haveItem(4034301, 2)) {
        cm.sendNormalTalk("修理所需的材料不足。\r\n#r[尝试修理]#k\r\n所需材料：#i4034301# #b#t4034301# 2个以上#k", 1, 2155118, false, true);
        cm.dispose();
      } else if (cm.getNumberFromQuestInfo(39152, "success") > 0) {
        cm.sendNormalTalk("已经完成了修理。\r\n回去告诉#b侦察中的机器人吧。#k", 1, 2155118, false, true);
        cm.dispose();
      } else {
        cm.askYesNo("修理所需的材料已经足够。\r\n#r[尝试修理]#k\r\n所需材料：#i4034301# #b#t4034301# 2个以上#k\r\n\r\n确定要现在修理吗？", 0, 2155118);
      }
    } else if (status === e++) {
      cm.gainItem(4034301, -2);
      cm.npc_SetSpecialAction('oid=tower3', 'repaired', -1, 1);
      cm.updateInfoQuest(39152, "success=1;start=1");
      cm.sendNormalTalk("适当运用材料，完成了修理。\r\n带着这些材料，\r\n回去告诉#b侦察中的机器人吧。#k", 1, 2155118, false, true);
    } else {
      cm.dispose();
    }
  }
}