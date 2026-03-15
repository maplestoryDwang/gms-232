var status = -1;
var itemList = Array(Array(1352803, 400000), Array(1342095, 400000), Array(1352009, 400000), Array(1352109, 400000), Array(1352206, 400000), Array(1352216, 400000), Array(1352226, 400000), Array(1352276, 400000), Array(1352286, 400000), Array(1352296, 400000), Array(1352406, 400000), Array(1352506, 400000), Array(1352707, 400000), Array(1352906, 400000), Array(1352916, 400000), Array(1352935, 400000), Array(1352945, 400000), Array(1352957, 400000), Array(1352967, 400000), Array(1352975, 400000), Array(1353006, 400000), Array(1352928, 400000), Array(1352236, 400000), Array(1352256, 400000), Array(1352266, 400000), Array(1352606, 400000), Array(1099011, 400000), Array(1099012, 400000), Array(1353105, 400000));
var selectedItem = -1;
var selectedCost = -1;
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
      V += "\r\n#L" + w + '##i' + itemList[w][0] + ":# #b#t" + itemList[w][0] + "##k   #r" + itemList[w][1] + '#k抵用卷#l';
    }
    cm.askMenu(V);
  } else {
    if (status == 1) {
      var N = itemList[U];
      if (N != null) {
        selectedItem = N[0];
        selectedCost = N[1];
        cm.askYesNo("您是否购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k 需要 #r" + selectedCost + "#k 抵用卷？");
      } else {
        cm.sendOk("出现错误...");
        cm.dispose();
      }
    } else {
      if (status == 2) {
        if (selectedCost <= 0 || selectedItem <= 0) {
          cm.sendOk("购买道具出现错误...");
          cm.dispose();
          return;
        }
        if (cm.getPlayer().getCSPoints(2) >= selectedCost) {
          var u = cm.gainGachaponItem(selectedItem, 1, "抵用卷商店", 3, true);
          if (u != -1) {
            cm.getPlayer().modifyCSPoints(2, -selectedCost);
            cm.sendOk('恭喜您成功购买#i' + selectedItem + ":# #b#t" + selectedItem + '##k。');
          } else {
            cm.sendOk("购买失败，请您确认在背包所有栏目窗口中是否有一格以上的空间。");
          }
        } else {
          cm.sendOk("您没有那么多抵用卷。\r\n\r\n购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k 需要 #r" + selectedCost + "#k 抵用卷。");
        }
        cm.dispose();
      }
    }
  }
}