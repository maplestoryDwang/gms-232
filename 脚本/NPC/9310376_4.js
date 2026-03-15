var status = -1;
var itemList = Array(Array(1004167, 50000), Array(1004282, 50000), Array(1003952, 50000), Array(1003131, 50000), Array(1004094, 50000), Array(1004112, 50000), Array(1004211, 50000), Array(1004193, 50000), Array(1003859, 50000), Array(1004137, 50000), Array(1003831, 50000), Array(1003955, 50000), Array(1004095, 50000), Array(1004029, 50000), Array(1003204, 40000), Array(1004110, 40000), Array(1001083, 40000), Array(1001095, 45000), Array(1004200, 45000), Array(1003892, 50000), Array(1004124, 50000), Array(1003953, 50000), Array(1001097, 40000), Array(1000074, 40000), Array(1004200, 40000), Array(1001076, 40000), Array(1004204, 50000), Array(1004205, 50000), Array(1003950, 50000), Array(1004126, 40000), Array(1002846, 40000), Array(1004158, 40000), Array(1004114, 40000), Array(1002598, 40000), Array(1004157, 100000), Array(1004156, 100000), Array(1004025, 40000), Array(1004093, 40000), Array(1002845, 10000), Array(1002721, 10000), Array(1002568, 10000), Array(1002888, 10000), Array(1002890, 10000), Array(1002863, 20000), Array(1003207, 20000), Array(1003051, 20000), Array(1003048, 20000), Array(1002995, 10000), Array(1003012, 20000), Array(1002876, 20000), Array(1002839, 20000), Array(1001048, 30000), Array(1003214, 14000), Array(1003141, 14000), Array(1003269, 14000), Array(1003268, 14000), Array(1003492, 14000), Array(1003493, 14000), Array(1003494, 14000), Array(1003495, 14000), Array(1003496, 14000), Array(1003519, 14000), Array(1003520, 14000), Array(1002726, 14000), Array(1002524, 14000), Array(1002714, 14000), Array(1002841, 14000), Array(1003220, 14000), Array(1003170, 14000), Array(1003226, 14000), Array(1000050, 14000), Array(1003232, 14000), Array(1001064, 14000), Array(1001075, 14000), Array(1003252, 14000), Array(1003249, 14000), Array(1001036, 14000), Array(1002998, 14000), Array(1003091, 14000), Array(1003114, 14000), Array(1003075, 14000), Array(1000043, 14000), Array(1003149, 14000), Array(1002988, 14000), Array(1003505, 15000), Array(1003504, 15000), Array(1003965, 15000), Array(1003964, 15000), Array(1003920, 15000), Array(1003921, 15000), Array(1003918, 15000), Array(1003861, 15000), Array(1003865, 15000), Array(1003919, 15000), Array(1002566, 15000), Array(1003581, 15000), Array(1003417, 14000), Array(1003271, 14000), Array(1003196, 14000), Array(1003193, 14000), Array(1003194, 14000));
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
        cm.askYesNo('您是否购买#i' + selectedItem + ":# #b#t" + selectedItem + "##k 需要 #r" + selectedCost + "#k 点卷？");
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