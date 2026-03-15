var status = 0;
var amount = -1;
var item;
var cost;
var rec;
var recName;
function start() {
  status = -1;
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status <= 2 && f == 0) {
    cm.dispose();
    return;
  } else {
    if (status >= 3 && f == 0) {
      cm.sendNext("如果下次还有需要在来找我吧。");
      cm.dispose();
      return;
    }
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  if (status == 0) {
    if (cm.getQuestStatus(2013) == 2) {
      cm.sendNext("谢谢你能够帮助我,我可以低价出售你一些东西。");
    } else {
      if (cm.getQuestStatus(2010) == 2) {
        cm.sendNext("如果你能帮助我说服父亲让我去冒险,我可以低价出售一些药品作为补偿。");
      } else {
        cm.sendOk("我的梦想是到处旅行，就像你一样。然而我的父亲，不允许我这样做！因为他认为这是很危险的。但是，如果我给他一些证明，他就会让我去,你能帮帮我吗?");
      }
      cm.dispose();
    }
  } else {
    if (status == 1) {
      var V = "#b你想从我这里购买什么：";
      var w = new Array(2000002, 2022003, 2022000, 2001000);
      var N = new Array(310, 1060, 1600, 3120);
      for (var u = 0; u < w.length; u++) {
        V += "\r\n#L" + u + '##z' + w[u] + "# (售价 : " + N[u] + " 金币)#l";
      }
      cm.askMenu(V);
    } else {
      if (status == 2) {
        var Q = new Array(2000002, 2022003, 2022000, 2001000);
        var m = new Array(310, 1060, 1600, 3120);
        var c = new Array(300, 1000, 800, 1000);
        var B = new Array('HP', 'HP', 'MP', "HP and MP");
        item = Q[U];
        cost = m[U];
        rec = c[U];
        recName = B[U];
        cm.askNumber("#b#t" + item + "##k? #t" + item + "# 回复 " + rec + " " + recName + "选择你想要购买的数量吧。", 1, 1, 100);
      } else {
        if (status == 3) {
          cm.askYesNo("Will you purchase #r" + U + "#k #b#t" + item + "#(s)#k? #t" + item + "# costs " + cost + " mesos for one, so the total comes out to be #r" + cost * U + "#k mesos.");
          amount = U;
        } else if (status == 4) {
          if (cm.getMeso() < cost * amount || !cm.canHold(item)) {
            cm.sendNext("Are you lacking mesos by any chance? Please check and see if you have an empty slot available at your etc. inventory, and if you have at least #r" + cost * amount + "#k mesos with you.");
          } else {
            cm.gainMeso(-cost * amount);
            cm.gainItem(item, amount);
            cm.sendNext("购买好了,赶快检查你的背包吧。");
          }
          cm.dispose();
        }
      }
    }
  }
}