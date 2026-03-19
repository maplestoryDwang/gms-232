var status = -1;
var selectionLog = [];
function start() {
  status = -1;
  action(1, 0, 0);
}
;
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else if (status === V++) {
    cm.playerMessage(-1, "黑色天堂核心开始向入侵者发动攻击. ");
    cm.obstacleFallRepeat(3, "黑色天堂_蓝色残骸", "黑色天堂_紫色残骸", 5);
    cm.dispose();
  }
}