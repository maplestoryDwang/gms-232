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
      cm.sendNormalTalk("通过第1届大陆会议，冒险岛世界所有职业群参加的#b冒险岛联盟#k诞生了。", 0, 1105001, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("冒险家的话，也许希望能自由地旅行，没办法强迫他们全都参加这个联盟。", 0, 1105001, true, true);
      } else if (status === V++) {
        cm.sendNormalTalk("但是希望大家不要忘记我们必须要做的事情，相信共同的目标可以激励冒险家们和我们一起努力。", 0, 1105001, true, false);
      } else {
        cm.dispose();
      }
    }
  }
}