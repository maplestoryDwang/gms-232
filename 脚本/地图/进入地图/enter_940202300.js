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
    cm.addPopupSay(3001351, 2500, "#face8#一定是出什么大事了。\r\n我们快离开这。", '', 0);
    cm.addPopupSay(3001300, 2500, "#face0#已经看到前方的出口了。\r\n再加把劲。", '', 0);
    cm.dispose();
  }
}