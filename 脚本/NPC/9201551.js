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
      cm.sendNormalTalk_Bottom("不知克拉齐亚沉入海底时死了多少人？", 57, 9201551, false, true);
    } else if (status === V++) {
      cm.sendNormalTalk_Bottom("真不敢相信为了阻止纳瑞坎获得幻日居然要付出如此沉重的代价。", 57, 9201551, true, false);
    } else {
      cm.dispose();
    }
  }
}