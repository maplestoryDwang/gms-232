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
      if (cm.haveItem(4031145)) {
        cm.gainExp(1730035);
        cm.playerMessage(1, "哦～！你找到了不一样的娃娃之家，真是太了不起了。");
        cm.forceCompleteQuest(3230);
        cm.removeAll(4031145);
        cm.warp(221023200, 0, false);
        cm.dispose();
        return;
      } else {
        cm.askYesNo("想要放弃任务的话，我可以送你回去。");
      }
    } else if (status === V++) {
      cm.warp(221023200, 0, false);
      cm.dispose();
    }
  }
}