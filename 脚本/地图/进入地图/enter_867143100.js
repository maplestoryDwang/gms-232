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
    if (cm.isQuestActive(64911)) {
      cm.addPopupSay(9401071, 2000, "现在还有一些阿特利埃#b电子眼#k。\r\n一直往左走，就能再次走到#b阿特利埃#k。", '', 0);
    }
    cm.dispose();
  }
}