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
  f == 1 ? status++ : status--;
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++)
    cm.dispose();
  else if (status === V++) {
    cm.npc_SetSpecialAction('oid=18612', 'act33451', 0, 0);
    cm.playerMessage(5, '第一个魔法阵有反应了。');
    cm.npc_SetSpecialAction('oid=18613', 'act33452', 0, 0);
    cm.playerMessage(5, '第二个魔法阵有反应了。');
    cm.npc_SetSpecialAction('oid=18614', 'act33453', 0, 0);
    cm.playerMessage(5, '第三个魔法阵有反应了。');
    cm.fieldEffect_PlayFieldSound('Magatia/alceCircle', 100);
    cm.npc_SetSpecialAction('oid=18615', 'act33454', 0, 0);
    cm.setQuestCustomData(3345, '4');
    cm.completeQuest(3345);
    cm.playerMessage(5, '魔法阵开始发出光芒了。');
    cm.gainItem(4031741, -1);
    cm.gainItem(4031740, -1);
    cm.gainItem(4031739, -1);
    cm.dispose();
  }
}