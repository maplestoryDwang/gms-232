var status = -1;
var itemid = [4009237, 4009238];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  status++;
  var V = cm.getEventManager("副本_起源之塔");
  var w = parseInt(V.getProperty("stage3_winner"));
  var N = parseInt(V.getProperty("stage3_bet_egg_on_right"));
  if (status < 0) {
    cm.dispose();
  } else {
    if (status === 0) {
      if (w == 0 || N == 0) {
        cm.askNumber("哼哼，这点挑战根本难不倒我！嗯，新面孔？怎么，想要参与我们的世纪决斗，押注到我这边吗？\r\n\r\n想押注多少#b#v4009237##v4009238#古代乌龟蛋#k都可以，等待会我胜利了，会给你回报的。", 1, 1, 999999);
        V.setProperty("stage3_winner", 0);
      } else if (w == cm.getNpc()) {
        cm.sendOk("拿着，这是你的回报。");
        cm.gainItem(itemid[0], N * 2);
        V.setProperty("stage3_winner", 0);
        V.setProperty("stage3_bet_egg_on_left", 0);
        V.setProperty("stage3_bet_egg_on_right", 0);
        cm.dispose();
      } else {
        cm.sendOk("可，可恶……这只是一点小小的意外，看我下一轮就把他打趴下！什么，回报？下一轮再说！");
        V.setProperty("stage3_winner", 0);
        V.setProperty("stage3_bet_egg_on_left", 0);
        V.setProperty("stage3_bet_egg_on_right", 0);
        cm.dispose();
      }
    } else {
      if (status === 1) {
        var u = U;
        var Q = cm.getItemQuantity(itemid[0]);
        var m = cm.getItemQuantity(itemid[1]);
        if (Q + m >= u) {
          if (Q >= u) {
            cm.gainItem(itemid[0], -u);
          } else {
            cm.gainItem(itemid[0], -Q);
            cm.gainItem(itemid[1], Q - u);
          }
          u += parseInt(V.getProperty("stage3_bet_egg_on_right"));
          cm.sendOk("行，你押注的" + u + "个#b#v4009237##v4009238#古代乌龟蛋#k我记下来了。等待会我胜利了，你再来找我。");
          V.setProperty("stage3_bet_egg_on_right", u);
          cm.dispose();
        } else {
          cm.sendOk("什么嘛，你的龟蛋根本不够啊。这样的水平想要参与到我们的世纪决斗里……你还需要多努力啊。");
          cm.dispose();
        }
      } else {
        cm.dispose();
      }
    }
  }
}