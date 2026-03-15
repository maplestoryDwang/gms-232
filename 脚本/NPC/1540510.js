var PQname = ["黑色天堂_Act1_奥尔卡的内心世界"];
var PQLog = ["黑色天堂_Act1_奥尔卡的内心世界"];
var minLevel = [33];
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
  if (!cm.isQuestActive(33158)) {
    cm.dispose();
    cm.getTopMsgFont("需要先了解一下这里的状况。", 3, 20, 20, 0);
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  if (cm.getMapId() == 350013000) {
    if (status == 0) {
      var V = cm.getEventManager(PQname[0]);
      if (V == null || false) {
        cm.askMenu("配置文件不存在,请联系管理员。");
      } else if (V.getNumberProperty("state") == 0) {
        V.startInstance(cm.getPlayer());
        V.setProperty('PQLog', PQLog[0]);
      } else {
        cm.sendOkS("好像已经有人在进行尝试了，换其他频道尝试吧。");
      }
      cm.dispose();
    } else {
      cm.dispose();
    }
  } else {
    if (status == 0) {
      cm.warp(350013000, 0);
    }
    cm.dispose();
  }
}