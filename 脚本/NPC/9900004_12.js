var status = -1;
var itemList = Array(Array(1542075, 200000), Array(1113055, 200000), Array(1152154, 200000), Array(1032200, 200000), Array(1212077, 400000), Array(1222072, 400000), Array(1232071, 400000), Array(1402204, 400000), Array(1242076, 400000), Array(1302285, 400000), Array(1312162, 400000), Array(1322213, 400000), Array(1332235, 400000), Array(1342084, 400000), Array(1362099, 400000), Array(1372186, 400000), Array(1382220, 400000), Array(1412144, 400000), Array(1422149, 400000), Array(1432176, 400000), Array(1442232, 400000), Array(1452214, 400000), Array(1462202, 400000), Array(1472223, 400000), Array(1482177, 400000), Array(1492188, 400000), Array(1522103, 400000), Array(1532106, 400000), Array(1252058, 400000));
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
      V += "\r\n#L" + w + '##i' + itemList[w][0] + ":# #b#t" + itemList[w][0] + "##k   #r" + itemList[w][1] + "#k抵用卷#l";
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
            cm.sendOk("恭喜您成功购买#i" + selectedItem + ":# #b#t" + selectedItem + '##k。');
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