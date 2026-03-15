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
      if (!cm.isQuestActive(3310)) {
        cm.sendNormalTalk("炼金术…… 还有炼金术士…… 都很重要。但更重要的是，可以包容这一切的玛加提亚村庄…… 玛加提亚的名誉要保存下去。你有这个能力吗？", 0, 2111000, false, true);
        cm.dispose();
        return;
      } else {
        cm.askAcceptDecline("可以去废弃的研究室制御哈闷吗？", 0, 2111000);
      }
    } else {
      if (status === V++) {
        cm.sendNormalTalk("要提高警惕，要除去让哈闷变得凶暴的魔法阵并不是件容易的事儿。", 0, 2111000, false, true);
      } else if (status === V++) {
        cm.dispose();
        cm.warp(926120100, 0, false);
      }
    }
  }
}