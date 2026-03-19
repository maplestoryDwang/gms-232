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
    cm.addPopupSay(3004203, 6000, "这里是#b荣耀特攻队练武场#k，荣耀特攻队队员会在这里提高自身实力。", '', 0);
    cm.addPopupSay(3004203, 6000, "别愣着了，赶快通过#b力量训练#k强化你的力量吧。", '', 0);
    cm.dispose();
    cm.setNumberForQuestInfo(100321, "type", 0);
    cm.gloryIdle();
  }
}