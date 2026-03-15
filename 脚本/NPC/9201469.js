var a = 0;
var text;
var selects;
var buynum = 0;
var itemlist = Array();
function start() {
  a = -1;
  action(1, 0, 0);
}
function action(f, W, U) {
  if (f == -1) {
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
        text = "#h0#,你好！在这里可以选择你想要购买的漂亮点装,点击图片购买\r\n#b";
        for (var V = 0; V < itemlist.length; V++) {
          text += '#L' + V + '##i' + itemlist[V] + "#  ";
          if (V != 0 && (V + 1) % 5 == 0) {
            text += "\r\n";
          }
        }
        cm.askMenu(text);
      } else {
        if (a == 1) {
          selects = U;
          cm.askNumber("请输入你请你输入想要购买的数量\r\n\r\n#r - 1个需要" + itemlist[selects][1] + '点卷', 0, 0, 999999);
        } else {
          if (a == 2) {
            buynum = U;
            cm.sendNext('你想购买' + buynum + '个#r#i' + itemlist[selects][0] + "##k？\r\n你将使用掉" + buynum * itemlist[selects][1] + "点卷。");
          } else if (a == 3) {
            if (cm.getPlayer().getCSPoints(1) >= buynum * itemlist[selects][1]) {
              cm.getPlayer().modifyCSPoints(1, -buynum * itemlist[selects][1]);
              cm.gainItem(itemlist[selects][0], buynum);
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
}
var status = -1;