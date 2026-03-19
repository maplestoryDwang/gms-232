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
    cm.playerMessage(-1, "为了修复损毁的佛像，需要5个以上的面具。");
    cm.setPartner(1, 9112003, 80011300, 0);
    cm.addPopupSay(9111062, 1000, "嗯，我估计有5个面具就能修复一座佛像。", '', 0);
    cm.addPopupSay(9111062, 1000, "喂，我说……我从妖鬼的面具里察觉到异常的气息。搜集这些面具应该可以修复损毁的佛像。", '', 0);
    cm.dispose();
  }
}