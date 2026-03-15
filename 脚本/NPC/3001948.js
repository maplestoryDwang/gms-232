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
      cm.askAcceptDecline_Bottom("#face0#呦呦~我是能掀起飓风的特鲁比英~\r\n需要的话，我可以送你去#b里斯托尼亚#k哟~", 36, 3001931, 1);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face0#我会呼呼地掀起飓风~\r\n深吸一口气，转眼就到目的地啦~呦呦！", 36, 3001931, false, true, 1);
      } else if (status === V++) {
        cm.dispose();
        cm.warp(410000300, 4, false);
      }
    }
  }
}