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
  } else if (status === V++) {
    cm.sendNormalTalk("#p2450003#是个善良的好孩子……怎么会遇到这种事情呢？#p2450002#真是很可怜。恋人竟然被绑架了……", 32, 2450030, false, false);
  } else {
    cm.dispose();
  }
}