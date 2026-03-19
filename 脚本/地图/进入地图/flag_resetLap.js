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
  } else {
    if (status === V++) {
      if (cm.getMapId() == 932200200) {
        var O = cm.getEventManager("活动_跑旗赛7点");
        O.setProperty("Round" + cm.getPlayer().getName(), '0');
      } else {
        if (cm.getMapId() == 932200100) {
          var O = cm.getEventManager("活动_跑旗赛9点");
          O.setProperty("Round" + cm.getPlayer().getName(), '0');
        }
      }
      cm.dispose();
    } else {
      cm.dispose();
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;