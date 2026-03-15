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
      cm.askYesNo("(你可以通过雪原圣地的神圣的石头再次进来, 你确定要出去吗?)");
    } else if (status === V++) {
      cm.warp(211040401, 0, false);
      cm.dispose();
    }
  }
}