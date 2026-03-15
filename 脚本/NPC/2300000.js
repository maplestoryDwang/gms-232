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
      cm.askMenu("有什么事吗？\r\n\r\n#b#L0#和鲁提对话#l#l", 0, 2300000);
    } else if (status === V++) {
      cm.sendNormalTalk("嗯，虽然我很想帮你，但你不是尖兵……你也想赠送礼物吗？", 0, 2300000, false, false);
      cm.dispose();
    }
  }
}