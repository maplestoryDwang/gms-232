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
      cm.sendNormalTalk("吼吼吼…………要想做出好的瓷器，就必须拥有好的环境才行，可海盗团那些家伙们根本不懂这点…………", 0, 2092100, false, false);
      cm.dispose();
    }
  }
}