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
      if (em == null) {
        cm.dispose();
        cm.openNpc(2112003, "组队任务_罗朱入场");
      } else {
        switch (cm.getMapId()) {
          case 261000021:
            cm.dispose();
            return;
          case 910002010:
            cm.dispose();
            return;
          case 926110000:
            cm.sendNext("尝试调查这里，看看文件库中的#b书本#k内容是否有线索。请务必找到可以进入实验室的入口。");
            break;
          case 926110001:
            cm.sendNext("请消灭所有的怪物！我会支持你的。");
            break;
          case 926110100:
            cm.sendNext("这些烧杯有泄漏。我们必须把#b可疑的液体#k倒入烧杯里边，一段时间不把#b可疑的液体#k倒入烧杯内，烧杯里的液体会流失光。请抓紧了！");
            break;
          case 926110400:
            cm.sendNext("你什么时候准备好，我们要去拯救我的爱情。");
            break;
          case 926110401:
            if (!cm.haveMonster(9300139)) {
              cm.dispose();
              cm.openNpc(2112003, "系统_超级结算（组队）");
            } else {
              cm.sendOk("请确认地图上否还存在怪物!");
            }
            break;
        }
        cm.dispose();
      }
    }
  }
}