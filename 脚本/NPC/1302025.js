var status = -1;
function action(f, W, U) {
  if (f === 0) {
    status--;
  } else {
    status++;
  }
  if (cm.isQuestFinished(30067)) {
    cm.playerMessage(5, "碧欧蕾塔公主曾经卖力地劳动的地方。真是令人印象深刻。");
  } else {
    cm.playerMessage(5, "都说碧欧蕾塔公主很柔弱，没想到看到了她正在非常卖力地劳动……？看上去即使不来救她也一点事都没有。");
  }
  cm.dispose();
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;