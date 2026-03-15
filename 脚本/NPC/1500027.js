var PQname = ["副本_妖精学院_Boss"];
var PQLog = ["副本_妖精学院_Boss"];
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
  if (cm.isQuestFinished(32102) && !cm.isQuestFinished(32127)) {
    cm.sendOkS('现在不是乱逛的时候。');
    cm.dispose();
    return;
  }
  if (status >= 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  if (cm.getMapId() == 101073200) {
    if (status == 0) {
      var V = cm.getEventManager(PQname[U]);
      if (V == null || false) {
        cm.sendOk("配置文件不存在,请联系管理员。");
        cm.dispose();
        return;
      }
      cm.askAcceptDecline("移动到#b野外演出舞台#k。\r\n\r\n#b（只能一人入场 / 等级：30以上）");
    } else {
      if (status == 1) {
        var V = cm.getEventManager(PQname[0]);
        if (V == null || false) {
          cm.askMenu("配置文件不存在,请联系管理员。");
        } else if (V.getNumberProperty("state") == 0) {
          V.startInstance(cm.getPlayer());
          V.setProperty('PQLog', PQLog[0]);
        } else {
          cm.sendOkS("好像已经有队伍在进行了，换其他频道尝试吧。");
        }
        cm.dispose();
      } else {
        cm.dispose();
      }
    }
  } else {
    if (status == 0) {
      cm.warp(101073200, 0);
    }
    cm.dispose();
  }
}