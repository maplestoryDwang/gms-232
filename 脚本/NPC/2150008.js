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
      cm.askMenu("你想离开埃德尔斯坦，到其他大陆去吗？这里的船开往金银岛和神秘岛的天空之城。费用是800金币。你想去哪里？\r\n#L0#金银岛#l\r\n#L1#天空之城#l");
    } else {
      if (status === V++) {
        if (U == 0) {
          cm.warp(200090710, 0);
          cm.scheduleWarpTask(20, 104020130);
          cm.dispose();
        } else if (U == 1) {
          cm.warp(200090610, 0);
          cm.scheduleWarpTask(20, 200000170);
          cm.dispose();
        }
      }
    }
  }
}