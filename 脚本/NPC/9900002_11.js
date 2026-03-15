var status = -1;
var itemList = Array(Array(5360015, 3000, 1), Array(5211060, 800, 7200000), Array(5210004, 500, 1), Array(5210002, 500, 1));
var itemId = -1;
var points = -1;
var period = -1;
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (f == 1) {
    status++;
  } else {
    if (status >= 0) {
      cm.dispose();
      return;
    }
    status--;
  }
  if (status == 0) {
    var V = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好，请选择您希望购买的道具：";
    for (var w = 0; w < itemList.length; w++) {
      V += "\r\n#L" + w + "##i" + itemList[w][0] + ":# #b#t" + itemList[w][0] + "##k   #r" + itemList[w][1] + "#k点卷#l";
    }
    cm.askMenu(V);
  } else {
    if (status == 1) {
      var N = itemList[U];
      if (N != null) {
        itemId = N[0];
        points = N[1];
        period = N[2];
        cm.askYesNo("您是否购买#i" + itemId + ":# #b#t" + itemId + "##k 需要 #r" + points + "#k 点卷？");
      } else {
        cm.sendOk("出现错误...");
        cm.dispose();
      }
    } else {
      if (status == 2) {
        if (itemId <= 0 || points <= 0 || period <= 0) {
          cm.sendOk("购买道具出现错误...");
          cm.dispose();
          return;
        }
        if (cm.getPlayer().getCSPoints(1) >= points) {
          if (cm.haveItem(itemId)) {
            cm.sendOk('您已经拥有#i' + itemId + ":# #b#t" + itemId + "##k无需重复购买。");
          } else {
            cm.getPlayer().modifyCSPoints(1, -points);
            cm.gainItemPeriod(itemId, 1, period, false);
            cm.sendOk("恭喜您成功购买#i" + itemId + ":# #b#t" + itemId + '##k。');
          }
        } else {
          cm.sendOk("您没有那么多点卷。\r\n\r\n购买#i" + itemId + ":# #b#t" + itemId + "##k 需要 #r" + points + "#k 点卷。");
        }
        cm.dispose();
      }
    }
  }
}