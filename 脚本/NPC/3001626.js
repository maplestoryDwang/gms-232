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
      cm.askAcceptDecline_Bottom("#face0#听我说，我是神秘的寒风~一口气，就能飞出十万八千里~\r\n你要去#b荒蛮终点站#k吗~？", 36, 3001626);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face0#嗖嗖地就飞走啦~一定要抓牢了啊~！", 36, 3001626, false, true);
      } else if (status === V++) {
        cm.dispose();
        cm.warp(402000000, 4, false);
      }
    }
  }
}