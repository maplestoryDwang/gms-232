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
      cm.sendNormalTalk("嗯？被发现了吗？我人这么小，你却这么快就找到了。真是厉害。\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0#\r\n3exp", 0, 2159016, false, true);
    } else if (status === V++) {
      if (cm.getNumberFromQuestInfo(23007, 'exp4') == 0) {
        cm.gainExp(3);
        cm.setNumberForQuestInfo(23007, "exp4", 1);
      }
      cm.npc_LeaveField('oid=248452');
      cm.sendNormalTalk("反正被发现了，我要吃颗糖了。", 0, 2159016, false, true);
      cm.dispose();
    }
  }
}