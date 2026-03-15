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
      cm.askMenu("这是只在埃德尔斯坦运营的埃德尔斯坦专用出租车。它能将黑色之翼的各位安全快速地送到目的地。认识黑色之翼的人…？呃，如果你给我金币，我也能送你一程。你想去哪里呢？\r\n#L0##b莱班矿山#k#l\r\n#L1##b避风港#k#l", 4, 2150007);
    } else {
      if (status === V++) {
        if (U == 0) {
          cm.warp(310040200, 0);
          cm.dispose();
        } else if (U == 1) {
          cm.warp(310070000, 0);
          cm.dispose();
        }
      }
    }
  }
}