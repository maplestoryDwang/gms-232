var status = -1;
var itemList = Array(Array(4001839, 100, 20000), Array(5062010, 10, 8000), Array(5064003, 1, 2000), Array(5064003, 10, 18000), Array(5064100, 1, 700), Array(5064100, 10, 6500), Array(5050000, 10, 1000), Array(5050000, 50, 4500), Array(5050000, 100, 8800), Array(5050001, 10, 1200), Array(5050002, 10, 1800), Array(5050003, 10, 3000), Array(5050004, 10, 4500), Array(2501000, 1, 1000), Array(5062400, 1, 10000), Array(2049405, 1, 20000), Array(2048309, 1, 2000), Array(2048309, 10, 18000), Array(2048305, 1, 1000), Array(2048305, 10, 9000));
var selectedItem = -1;
var selequantity = -1;
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
      V += "\r\n#L" + w + "##i" + itemList[w][0] + ":# #b#t" + itemList[w][0] + "##k x (" + itemList[w][1] + ")   #r" + itemList[w][2] + "#k点卷#l";
    }
    cm.askMenu(V);
  } else {
    if (status == 1) {
      var N = itemList[U];
      if (N != null) {
        selectedItem = N[0];
        selequantity = N[1];
        selectedCost = N[2];
        cm.askYesNo("您是否购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k x (" + selequantity + ") 需要 #r" + selectedCost + "#k 点卷？");
      } else {
        cm.sendOk("出现错误...");
        cm.dispose();
      }
    } else {
      if (status == 2) {
        if (selectedCost <= 0 || selequantity <= 0 || selectedItem <= 0) {
          cm.sendOk("购买道具出现错误...");
          cm.dispose();
          return;
        }
        if (cm.getPlayer().getCSPoints(1) >= selectedCost) {
          if (cm.canHold(selectedItem, selequantity)) {
            cm.getPlayer().modifyCSPoints(1, -selectedCost);
            cm.gainItem(selectedItem, selequantity);
            cm.worldMessage("『点卷商城』 " + cm.getName() + " 玩家在点卷商城购买道具： " + cm.getItemName(selectedItem) + " x " + selequantity);
            cm.sendOk("恭喜您成功购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k x (" + selequantity + ") 。");
          } else {
            cm.sendOk("购买失败，请您确认在背包所有栏目窗口中是否有一格以上的空间。");
          }
        } else if (cm.getPlayer().getCSPoints(1) >= selectedCost) {
          if (cm.canHold(selectedItem, selequantity)) {
            cm.getPlayer().modifyCSPoints(1, -selectedCost);
            cm.gainItem(selectedItem, selequantity);
            cm.worldMessage("『点卷商城』 " + cm.getName() + " 玩家在点卷商城购买道具： " + cm.getItemName(selectedItem) + " x " + selequantity);
            cm.sendOk("恭喜您成功购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k x (" + selequantity + ") 。");
          } else {
            cm.sendOk("购买失败，请您确认在背包所有栏目窗口中是否有一格以上的空间。");
          }
        } else {
          cm.sendOk("您没有那么多点卷。\r\n\r\n购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k x (" + selequantity + ") 需要 #r" + selectedCost + "#k 点卷。");
        }
        status = -1;
      }
    }
  }
}