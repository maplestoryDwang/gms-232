function start() {
  status = -1;
  action(1, 0, 0);
}
function action(f, W, U) {
  if (f == -1) {
    cm.dispose();
  } else {
    if (status == 0 && f == 0) {
      cm.dispose();
      return;
    } else if (status == 2 && f == 0) {
      cm.sendNext("。。。");
      cm.dispose();
    }
    if (f == 1) {
      status++;
    } else {
      status--;
    }
    if (status == 0) {
      cm.askYesNo("#e<阿里安特竞技场:注意事项>#n\r\n#d\r\n\r\n#b1）进入竞技场后，将有五分钟的时间消灭怪物。\r\n2）在规定时间内，消灭的怪物越多，结束时获得奖励越多。\r\n#e3）如果触碰陷阱，将会有可怕的怪物出现。#n\r\n4）组队中，消灭怪物最多的将会有额外的奖励。\r\n5）从竞技场获取的积分，可以从拍卖处兑换奖励。\r\n\r\n\r\n确定进入等候室吗？");
    } else if (status == 1) {
      cm.dispose();
      cm.openNpc(2101017, 1);
    }
  }
}
var status = -1;