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
    cm.Hidden_background('spine', 1, 1, 0, 0);
    cm.Hidden_background("spine2", 1, 1, 0, 0);
    cm.getWeatherEffectNotice("如果被那风吹过，梦境就会变得更强！", 222, 2000, 1);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;