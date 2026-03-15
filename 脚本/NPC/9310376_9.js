var status = -1;
var itemList = Array(Array(1112170, 100000), Array(1112282, 100000), Array(1112166, 80000), Array(1112278, 80000), Array(1112176, 80000), Array(1112288, 80000), Array(1112162, 50000), Array(1112274, 50000), Array(1112159, 50000), Array(1112271, 50000), Array(1112158, 50000), Array(1112270, 50000), Array(1112157, 50000), Array(1112269, 50000), Array(1112268, 20000), Array(1112156, 20000), Array(1112266, 50000), Array(1112154, 50000), Array(1112149, 50000), Array(1112261, 50000), Array(1112177, 50000), Array(1112289, 50000), Array(1112181, 30000), Array(1112294, 30000), Array(1112178, 30000), Array(1112290, 30000), Array(1112150, 30000), Array(1112262, 30000), Array(1112263, 30000), Array(1113021, 50000), Array(1112151, 30000), Array(1112155, 30000), Array(1112267, 30000), Array(1112236, 50000), Array(1112126, 50000), Array(1112943, 40000), Array(1112904, 30000), Array(1112238, 30000), Array(1112135, 30000), Array(1112916, 50000), Array(1112118, 10000), Array(1112119, 10000), Array(1112120, 10000), Array(1112228, 10000), Array(1112229, 10000), Array(1112230, 10000), Array(1112103, 50000), Array(1112141, 10000), Array(1112252, 10000), Array(1112253, 10000), Array(1112142, 10000), Array(1112930, 10000), Array(1112136, 10000), Array(1112920, 14000), Array(1112145, 15000), Array(1112257, 15000), Array(1112146, 15000), Array(1112258, 15000), Array(1112254, 15000), Array(1112143, 15000), Array(1112928, 15000), Array(1112907, 15000), Array(1112937, 15000), Array(1112101, 10000), Array(1112204, 14000));
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
        if (cm.getPlayer().getCSPoints(1) >= selectedCost) {
          var u = cm.gainGachaponItem(selectedItem, 1, "点卷商店", 3, true);
          if (u != -1) {
            cm.getPlayer().modifyCSPoints(1, -selectedCost);
            cm.sendOk('恭喜您成功购买#i' + selectedItem + ":# #b#t" + selectedItem + "##k。");
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