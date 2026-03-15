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
    cm.sendNormalTalk("村庄的备用电力也几乎要用完了。得尽快采取一些措施才行呢，但是作为村庄的代表，他们的行为真让人心寒啊……", 32, 2450028, false, false);
  } else {
    cm.dispose();
  }
}