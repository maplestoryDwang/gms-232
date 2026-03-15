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
    cm.sendNormalTalk("#p2450003#……她是个好孩子……但是绑匪会要求些什么……现在电站的能源也已全部被阻断。他有更多要求的话，我们也很难答应了。啧啧……", 32, 2450027, false, false);
  } else {
    cm.dispose();
  }
}