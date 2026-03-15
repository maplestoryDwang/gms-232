var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (cm.getzhizunvip() != 2) {
    cm.dispose();
    cm.playerMessage(-1, "该菜单是至尊版专享。");
    return;
  }
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
      var w = cm.getEventManager('组队任务_罗朱');
      if (w == null) {
        cm.sendOk("脚本不存在。");
        cm.dispose();
        return;
      }
      switch (cm.getMapId()) {
        case 926110200:
          if (w.getProperty("stage10") === '1') {
            cm.sendNext("我身边的铁门已经为你开启，请进入。");
          } else if (cm.haveItem(4001133, 10) && cm.haveItem(4001134, 1) && cm.haveItem(4001135, 1)) {
            cm.removeAll(4001133);
            cm.removeAll(4001134);
            cm.removeAll(4001135);
            cm.mapMessage(6, "实验室入口已开启!");
            cm.sendNext("我身边的铁门已经为你开启，请进入。");
            w.setProperty("stage10", '1');
            cm.getMap().setReactorState();
          } else {
            cm.sendOk("  #b#v4001133# #z4001133##k #e#rx10#n#k\r\n #b#v4001135# #z4001135##k #e#rx1#n#k\r\n #b#v4001134# #z4001134##k #e#rx1#n#k\r\n\r\n请帮我消灭实验室里怪物,开启左右两侧的大门并得到文件.\r\n#e#b事成之后我身边的铁门就能开启。#n#k");
          }
          break;
      }
      cm.dispose();
    }
  }
}