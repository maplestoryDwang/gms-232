var a = 0;
var text;
var selects;
var buynum = 0;
var itemlist = Array(Array(1112918, 18000, 7), Array(2431938, 68000), Array(1132246, 78000), Array(1122267, 78000), Array(1032223, 78000), Array(1113075, 78000), Array(1122122, 88000), Array(1122123, 88000), Array(1122124, 88000), Array(1122125, 88000), Array(1122126, 88000), Array(1102476, 70000), Array(1102477, 70000), Array(1102478, 70000), Array(1102479, 70000), Array(1102480, 70000), Array(1072737, 70000), Array(1072738, 70000), Array(1072739, 70000), Array(1072740, 70000), Array(1072741, 70000), Array(1132169, 70000), Array(1132170, 70000), Array(1132171, 70000), Array(1132172, 70000), Array(1132173, 70000), Array(3994417, 90000), Array(3994418, 90000), Array(3994419, 90000), Array(3994420, 90000), Array(3994421, 90000), Array(3994422, 90000));
function start() {
  a = -1;
  action(1, 0, 0);
}
function action(f, W, U) {
  if (f == -1) {
    cm.sendOk("好吧，等你考虑清楚了再来找我。");
    cm.dispose();
  } else {
    if (f == 1) {
      a++;
    } else {
      a--;
    }
    if (a == -1) {
      cm.dispose();
    } else {
      if (a == 0) {
        text = "#h0#,您可以在这里兑换#e#b上乘装备#n#k,请选择你想要购买的物品\r\n#b";
        for (var V = 0; V < itemlist.length; V++) {
          var w = '';
          if (itemlist[V][2] != null) {
            w = "/ #e" + itemlist[V][2] + "天权#n";
          }
          text += '#L' + V + "##i" + itemlist[V] + ":##t" + itemlist[V] + "# " + w + " - #r" + itemlist[V][1] + "#b点券  \r\n";
          if (V != 0 && (V + 1) % 5 == 0) {
            text += "\r\n";
          }
        }
        cm.askMenu(text);
      } else {
        if (a == 1) {
          selects = U;
          buynum = 1;
          cm.askYesNo('你想购买' + buynum + "个#r#i" + itemlist[selects][0] + "##k？\r\n你将使用掉" + buynum * itemlist[selects][1] + '点券。');
        } else if (a == 2) {
          if (cm.getPlayer().getCSPoints(1) > buynum * itemlist[selects][1]) {
            cm.getPlayer().modifyCSPoints(1, -buynum * itemlist[selects][1]);
            if (itemlist[selects][2] != null) {
              cm.gainItem(itemlist[selects][0], buynum, itemlist[selects][2]);
            } else {
              cm.gainItem(itemlist[selects][0], buynum);
            }
            cm.sendOk("购买成功了！");
            cm.dispose();
          } else {
            cm.sendOk("对不起，你没有足够的点卷。");
            cm.dispose();
          }
        }
      }
    }
  }
}
var status = -1;