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
    cm.getMap().getWeatherEffectNotice("暂时无法伤害蝙蝠怪，封印启动前尽力输出削弱它！！", 265, 3000, 1);
  }
}