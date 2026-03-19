var status = -1;
var selectionLog = [];
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
    cm.addPopupSay(3003480, 2500, "#face10#没有路了，看来我们快到了。", '', 0);
    cm.addPopupSay(0, 2500, "#face0#真是好险。", '', 0);
    cm.addPopupSay(3003480, 2500, "#face0#前面就是斜塔！再坚持一下！", '', 0);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;