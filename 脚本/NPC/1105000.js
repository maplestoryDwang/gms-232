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
      cm.sendNormalTalk("通过第1届大陆会议，冒险岛世界所有职业群参加的#b冒险岛联盟#k诞生了。", 0, 1105000, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("还好，会议取得了不错的结果……", 0, 1105000, true, true);
      } else if (status === V++) {
        cm.sendNormalTalk("真正的战斗现在刚刚开始。希望大家能解除一切误会，齐心协力。", 0, 1105000, true, false);
      } else {
        cm.dispose();
      }
    }
  }
}