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
    cm.sendNormalTalk_Illus_II('这里就是真正的浓姬所在之地。为了进入，需要1人以上组队，并且队长必须持有#i4009283:##t4009283:t#。', 9130100, 4, false, true, 9130103);
  else if (status === V++)
    cm.sendNormalTalk_Illus_II('并且队员必须全部达到140级以上，必须完成#b#e#y58913:##n#k任务和#b#e#y58955:##n#k任务。', 9130100, 4, true, true, 9130103);
  else if (status === V++)
    cm.askMenu_Bottom('#face0#那么，你要尝试击败浓姬吗？#b\r\n#L0# 前去击败浓姬。（140级以上）#l\r\n#L2# 进入浓姬练习模式。（140级以上）#l\r\n#L1# 不，我还不想进入。#l', 36, 9130103);
  else if (status === V++) {
    cm.dispose();
    if (U == 0) {
      cm.addNumberForQuestInfo(2432, 'count', 1);
      cm.openNpc(9130100, 'Boss_比睿山_浓姬');
    }
    if (U == 2) {
      cm.addNumberForQuestInfo(2432, 'count', 1);
      cm.openNpc(9130100, 'Boss_比睿山_浓姬分身');
    }
    if (U == 1) {
      cm.dispose();
    }
  }
}