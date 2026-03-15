var PQname = ["副本_列娜海峡_Boss"];
var PQLog = ["副本_列娜海峡_Boss"];
var minLevel = [30];
var maxLevel = [999];
var maxenter = [1000];
var interval = [1000];
var status = -1;
function start() {
  status = -1;
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status >= 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  if (cm.getMapId() == 141050200) {
    if (status == 0) {
      cm.dispose();
      var V = cm.getEventManager(PQname[0]);
      if (V == null || false) {
        cm.askMenu("配置文件不存在,请联系管理员。");
      } else if (V.getNumberProperty("state") == 0) {
        V.startInstance(cm.getPlayer());
        V.setProperty("PQLog", PQLog[0]);
      } else {
        cm.sendOkS("好像已经有人在进行尝试了，换其他频道尝试吧。");
      }
    } else {
      cm.dispose();
    }
  } else {
    if (status == 0) {
      cm.warp(141050200, 0);
    }
    cm.dispose();
  }
}