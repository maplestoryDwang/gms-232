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
    if (cm.getMapId() == 450013700) {
      cm.addPopupSay(0, 4000, "空无一人的空间……不能让世界变成这个样子……", '', 0);
    } else {
      cm.dispose();
    }
    cm.dispose();
  }
}