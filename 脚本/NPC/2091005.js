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
  status++;
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      if (cm.getMapId() == 925080000) {
        var w = cm.getNumberFromQuestInfo(18766, "Time");
        cm.askYesNo("还没到出去的时间你就要走吗？\r\n现在还剩#r#e " + parseInt(parseInt(w) / 60000) + " #k#n分钟。虽说剩下的时间下一次还可以继续使用，可这有点浪费吧？你好好考虑。");
      } else if (em.getNumberProperty("clear") > 0) {
        cm.askYesNo("怎么, 都打倒对方了你还想去哪儿? 现在直接进入下一个阶段就可以了吧? 难不成你是想起什么要紧事了吗?");
      } else {
        cm.askYesNo("呵！怎么, 你现在就要放弃了吗? 所以我不是让你不要蛮干逞能了嘛, 你真的打算放弃之后出去吗?");
      }
    } else {
      if (f > 0) {
        if (cm.getMapId() == 925080000) {
          cm.warp(925020001, 0);
        } else {
          cm.warp(925020002, 0);
          cm.setStringForQuestInfo(3847, "Result", "giveup");
        }
      }
      cm.dispose();
    }
  }
}