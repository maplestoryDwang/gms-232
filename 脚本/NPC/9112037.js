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
      if (cm.isQuestFinished(58770)) {
        cm.sendNormalTalk("托#h0#你的福，现在暗把狐妖们领导得很好！\r\n（我在狐狸山暂时没什么可做的。）", 4, 9111007, false, false);
      } else if (cm.getNumberFromQuestInfo(58758, "stage0") >= 2) {
        cm.askYesNo("现在要前往狐狸山所在的妖怪森林吗？", 4, 9111007);
      } else {
        cm.sendNormalTalk("不好意思……请你先做好帮助暗的准备！", 4, 9111007, false, false);
        cm.dispose();
      }
    } else {
      cm.dispose();
      if (cm.isQuestFinished(58767)) {
        cm.warp(800023018, 1);
      } else {
        if (cm.isQuestActive(58763)) {
          cm.warp(800023015, 5);
        } else {
          if (cm.isQuestActive(58762)) {
            cm.warp(800023010, 4);
          } else if (cm.isQuestFinished(58759)) {
            cm.warp(800023007, 1, false);
          } else {
            cm.warp(800023003, 2, false);
          }
        }
      }
    }
  }
}