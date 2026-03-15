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
      cm.sendNormalTalk("这一刻，也许会被载入史册……", 0, 1105003, false, true);
    } else if (status === V++) {
      cm.sendNormalTalk("真是让人感触良多。想起离开村子的时候……不，我是在自说自话。别在意。", 0, 1105003, true, false);
    } else {
      cm.dispose();
    }
  }
}