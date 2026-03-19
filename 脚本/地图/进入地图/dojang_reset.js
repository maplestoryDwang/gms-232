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
    cm.fieldEffect_ScreenMsg("Map/Effect2.img/MuruengTime");
    cm.getMap().startSimpleMapEffect("师傅使用了特殊道法消除了所有增益效果，这样才公平吧？我会给你30秒，准备好就上去吧。", 5120024);
    cm.scheduleWarpTask(30, 925070100, true);
    cm.clearAllBuffs();
    cm.dispose();
  }
}