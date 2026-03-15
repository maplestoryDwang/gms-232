var status = -1;
var facetype;
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (f == 0) {
    cm.dispose();
    return;
  } else {
    status++;
  }
  if (status == 0) {
    cm.sendNext("嘿~！你好!如果你有#b#t5152057##k，我可以为你进行整形手术。");
  } else {
    if (status == 1) {
      var V = cm.getPlayerStat("FACE");
      if (cm.getPlayer().getGender() == 0) {
        facetype = [20000, 20001, 20002, 20003, 20004, 20005, 20006, 20007, 20008, 20012, 20014];
      } else {
        facetype = [21000, 21001, 21002, 21003, 21004, 21005, 21006, 21007, 21008, 21012, 21014];
      }
      for (var w = 0; w < facetype.length; w++) {
        facetype[w] = facetype[w] + V % 1000 - V % 100;
      }
      cm.setCharStyle("可以让你的面容焕然一新…不想让你的面容变一变吗？只需要#b万能会员卡#k就可以给你做整形手术.怎么样~慢慢挑选一下你想要的面容~", facetype, 5152057);
    } else if (status == 2) {
      if (cm.setCharStyle(5152057, facetype[U]) == 1) {
        cm.sendOk("好了,你的朋友们一定认不出来是你了!");
      } else {
        cm.sendOk("嗯。。。你肯定没有我们医院的会员卡。。。不好意思如果你没会员卡，我不能给你做手术。");
      }
      cm.dispose();
    }
  }
}