var status = -1;
var itemList = Array(Array(1050318, 150000), Array(1051389, 150000), Array(1050296, 90000), Array(1051362, 90000), Array(1050209, 90000), Array(1051255, 90000), Array(1051406, 90000), Array(1050337, 90000), Array(1052842, 90000), Array(1052843, 90000), Array(1051392, 90000), Array(1050322, 90000), Array(1052347, 90000), Array(1052346, 90000), Array(1052727, 90000), Array(1050310, 90000), Array(1051382, 90000), Array(1051405, 90000), Array(1050335, 90000), Array(1052728, 90000));
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
      V += "\r\n#L" + w + "##i" + itemList[w][0] + ":# #b#t" + itemList[w][0] + "##k   #r" + itemList[w][1] + "#k点卷#l";
    }
    cm.askMenu(V);
  } else {
    if (status == 1) {
      var N = itemList[U];
      if (N != null) {
        selectedItem = N[0];
        selectedCost = N[1];
        cm.askYesNo("您是否购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k 需要 #r" + selectedCost + "#k 点卷？");
      } else {
        cm.sendOk('出现错误...');
        cm.dispose();
      }
    } else {
      if (status == 2) {
        if (selectedCost <= 0 || selectedItem <= 0) {
          cm.sendOk("购买道具出现错误...");
          cm.dispose();
          return;
        }
        if (cm.getPlayer().getCSPoints(1) >= selectedCost) {
          var u = cm.gainGachaponItem(selectedItem, 1, "点卷商店", 3, true);
          if (u != -1) {
            cm.getPlayer().modifyCSPoints(1, -selectedCost);
            cm.sendOk("恭喜您成功购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k。");
          } else {
            cm.sendOk("购买失败，请您确认在背包所有栏目窗口中是否有一格以上的空间。");
          }
        } else {
          cm.sendOk("您没有那么多点卷。\r\n\r\n购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k 需要 #r" + selectedCost + "#k 点卷。");
        }
        cm.dispose();
      }
    }
  }
}