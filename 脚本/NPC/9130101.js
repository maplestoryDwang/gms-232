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
  f == 1 ? status++ : status--;
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++)
    cm.dispose();
  else if (status === V++)
    cm.sendNormalTalk('为了打败浓姬的分身，必须以1~3人组队进入，并且由队长和我对话。', 0, 9130101, false, true);
  else if (status === V++)
    cm.askMenu('怎么办？\r\n#L0#为了打败浓姬的分身，进去吧。#l\r\n#L1#离开比睿山副本。#l\r\n', 0, 9130101);
  else if (status === V++) {
    if (U == 0) {
      cm.sendNormalTalk('为了打败浓姬的分身，进去吧。', 1, 9130101, false, true);
    } else {
      cm.dispose();
      cm.onActionBarResult(6, -1);
      cm.mapleHeroBecomeNpc(-1, 1);
      cm.warp(811000008, 0);
    }
  } else if (status === V++) {
    cm.forceStartQuest(58957, '0');
    cm.forceStartQuest(58900, '2');
    cm.dispose();
    cm.openNpc(9130101, 'Boss_比睿山_浓姬分身');
  }
}