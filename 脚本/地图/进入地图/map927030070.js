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
  } else {
    if (status === V++) {
      cm.npc_ChangeController(2159468, "oid=254374", 5, -78, 46, -45, 55, 1, false, 0, false);
      cm.spawnMobLimit(9300875, 1, 0, -78, 100);
      cm.updateInfoQuest(38068, '');
      cm.forceStartQuest(38068, '');
      cm.sendNormalTalk("我感到一种很强烈的黑暗力量，让人的心情变得很糟糕。就像#r那天#k来到这里的黑魔法师一样。", 16, 0, false, false);
    } else if (status === V++) {
      cm.forceStartQuest(38068, "clear");
      cm.dispose();
    }
  }
}