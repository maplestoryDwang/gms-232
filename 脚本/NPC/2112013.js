var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      var w = cm.getEventManager("组队任务_罗朱");
      if (w == null) {
        cm.dispose();
        return;
      }
      if (!cm.canHold(4001131, 1)) {
        cm.sendOk("背包必须留1个空间。");
        cm.dispose();
        return;
      }
      if (cm.getMapId() == 926110000) {
        if (java.lang.Math.random() < 0.1) {
          if (w.getProperty("stage1") === '0') {
            w.setProperty("stage1", '1');
            cm.getMap().setReactorState();
            cm.mapMessage(6, "实验室入口已开启！");
            w.getPlayers().forEach(function (N) {
              N.getAPI().getTopMsgFont("实验室入口已开启！", 6, 20, 20, 0);
            });
            cm.dispose();
          }
        } else if (java.lang.Math.random() > 0.1) {
          cm.sendOk("书中好像没有提到#b实验室入口#k的地点!请继续点击查阅!");
          cm.dispose();
        }
      }
      cm.dispose();
    }
  }
}