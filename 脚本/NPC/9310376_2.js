var status = -1;
var itemList = Array(Array(1102466, 100000), Array(1102572, 100000), Array(1102309, 100000), Array(1102308, 50000), Array(1102307, 50000), Array(1102757, 50000), Array(1102709, 50000), Array(1102699, 50000), Array(5010101, 50000), Array(1102376, 50000), Array(1102548, 50000), Array(1102587, 50000), Array(1102511, 50000), Array(1102683, 50000), Array(1102705, 50000), Array(1102550, 50000), Array(1102620, 50000), Array(1102583, 40000), Array(1102676, 45000), Array(1102644, 50000), Array(1102726, 50000), Array(1102142, 40000), Array(1102697, 40000), Array(1102688, 40000), Array(1102669, 40000), Array(1102225, 30000), Array(1102217, 30000), Array(1102157, 30000), Array(1102503, 10000), Array(1102380, 14000), Array(1102385, 14000), Array(1102386, 14000), Array(1102238, 14000), Array(1102245, 14000), Array(1102285, 14000), Array(1102286, 14000), Array(1102287, 14000), Array(1102270, 14000), Array(1102273, 14000), Array(1102288, 14000), Array(1102253, 14000), Array(1102298, 14000), Array(1102299, 14000), Array(1102297, 14000), Array(1102319, 14000), Array(1102272, 14000), Array(1102323, 14000), Array(1102324, 14000), Array(1102349, 14000), Array(1102325, 14000), Array(1102326, 14000), Array(1102338, 14000), Array(1102350, 14000), Array(1102374, 14000), Array(1102353, 14000), Array(1102357, 14000), Array(1102593, 15000), Array(1102564, 15000), Array(1102615, 15000), Array(1102453, 50000), Array(1102450, 50000), Array(1102451, 50000), Array(1102452, 50000), Array(1102511, 50000), Array(1102385, 50000), Array(1102386, 50000), Array(1102487, 50000));
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
      V += "\r\n#L" + w + "##i" + itemList[w][0] + ":# #b#t" + itemList[w][0] + "##k   #r" + itemList[w][1] + '#k点卷#l';
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