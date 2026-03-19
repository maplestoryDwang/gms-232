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
      switch (cm.getMapId()) {
        case 450013810:
          cm.addPopupSay(0, 4000, "这里发生的攻击似乎遭到了创造或破坏的诅咒。\r\n如果同时中了两种诅咒，将会受到#b巨大伤害#k，一定要小心", '', 0);
          break;
        case 450013830:
          cm.addPopupSay(0, 4000, "这里发生的攻击似乎遭到了创造或破坏的诅咒。\r\n如果同时中了两种诅咒，将会受到#b巨大伤害#k，一定要小心", '', 0);
          break;
        case 450013870:
          cm.addPopupSay(0, 4000, "空无一人的空间……不能让世界变成这个样子……", '', 0);
          break;
      }
      cm.dispose();
    } else {
      cm.dispose();
    }
  }
}