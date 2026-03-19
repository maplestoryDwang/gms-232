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
    cm.addPopupSay(0, 2500, "#face0#切！怎么有这么多碍事的东西？", '', 0);
    cm.addPopupSay(0, 2500, "#face0#看来是没办法轻易过去了！", '', 0);
    cm.addPopupSay(0, 2500, "#face0#必须弄清楚那扇门到底是什么门！", '', 0);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;