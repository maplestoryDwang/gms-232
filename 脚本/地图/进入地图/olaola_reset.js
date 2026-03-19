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
    cm.dispose();
    cm.getWeatherEffectNotice("<新复古向上~向上>请稍等片刻YO！", 287, 3500, 1);
    cm.forceJoinEvent('新复古_爬高高');
  }
}