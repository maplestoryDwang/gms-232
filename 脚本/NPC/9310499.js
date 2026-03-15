var a = 0;
var text;
var selects;
var buynum = 0;
var itemlist = Array(Array(2430249, 300), Array(2430259, 300), Array(2430260, 300), Array(2430261, 300), Array(2430262, 300), Array(2430265, 300), Array(2430266, 300), Array(2430271, 300), Array(2430578, 300), Array(2430579, 300), Array(2430580, 300), Array(2430583, 300), Array(2430582, 300), Array(2430587, 300), Array(2430588, 300), Array(2430589, 300), Array(2430590, 300), Array(2430592, 300), Array(2430593, 300), Array(2430594, 300), Array(2430595, 300), Array(2430596, 300), Array(2430597, 300), Array(2430599, 300), Array(2430600, 300), Array(2430601, 300), Array(2430602, 300));
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
        text = "#h0#,您可以在这里兑换#e#b本服可爱骑宠哦#n#k,请选择你想要兑换的物品\r\n#e#r注意背包是否有空格 \r\n#r#e注意背包是否有空格#k#n\r\n#b";
        for (var V = 0; V < itemlist.length; V++) {
          text += '#L' + V + "##i" + itemlist[V] + ':##t' + itemlist[V] + "# 需要  x  #r" + itemlist[V][1] + "#b#v4000645##l\r\n";
          if (V != 0 && (V + 1) % 5 == 0) {
            text += "\r\n";
          }
        }
        cm.askMenu(text);
      } else {
        if (a == 1) {
          selects = U;
          cm.askNumber("请输入你请你输入想要购买的数量\r\n\r\n#r1个需要" + itemlist[selects][1] + "个#b#v4000645##l#k", 0, 0, 999999);
        } else {
          if (a == 2) {
            buynum = U;
            cm.sendNext("你想购买" + buynum + '个#r#i' + itemlist[selects][0] + "##k？\r\n你将使用掉" + buynum * itemlist[selects][1] + "变异的漂漂猪脖子肉#v4000645##l。");
          } else if (a == 3) {
            if (cm.haveItem(4000645, buynum * itemlist[selects][1])) {
              cm.gainItem(4000645, -buynum * itemlist[selects][1]);
              cm.gainItem(itemlist[selects][0], buynum);
              cm.sendOk("购买成功了！");
              cm.dispose();
            } else {
              cm.sendOk("对不起，你没有足够的变异的漂漂猪脖子肉#v4000645##l。");
              cm.dispose();
            }
          }
        }
      }
    }
  }
}
var status = -1;