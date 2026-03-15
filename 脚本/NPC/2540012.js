var status = -1;
var itemid = [4009237, 4009238];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  status++;
  var V = cm.getEventManager("副本_起源之塔");
  var w = parseInt(V.getProperty("stage3_winner"));
  var N = parseInt(V.getProperty("stage3_bet_egg_on_left"));
  if (status < 0) {
    cm.dispose();
  } else {
    if (status === 0) {
      if (w == 0 || N == 0) {
        cm.askNumber("哈，你也是来参加世纪龟蛋大决斗的吗？哦，是要押注到我这边吗？呵呵，你的眼光很准，待会等我赢了这次决斗，会给你回报的！\r\n\r\n想押注多少#b#v4009237##v4009238#古代乌龟蛋#k都可以。", 1, 1, 999999);
        V.setProperty("stage3_winner", 0);
      } else if (w == cm.getNpc()) {
        cm.sendOk("拿着，这是你的回报。");
        cm.gainItem(itemid[0], N * 2);
        V.setProperty("stage3_winner", 0);
        V.setProperty("stage3_bet_egg_on_left", 0);
        V.setProperty("stage3_bet_egg_on_right", 0);
        cm.dispose();
      } else {
        cm.sendOk("不，不要惊慌，只是一点小小的技术事故而已，看我马上就把他给拿下。回报等我待会赢得下一轮决斗就给你。");
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
          u += parseInt(V.getProperty("stage3_bet_egg_on_left"));
          cm.sendOk('行，你押注的' + u + "个#b#v4009237##v4009238#古代乌龟蛋#k我记下来了。等会我胜利了再来找我就行。");
          V.setProperty("stage3_bet_egg_on_left", u);
          cm.dispose();
        } else {
          cm.sendOk("嘿，你手头没有那么多#b#v4009237##v4009238#古代乌龟蛋#k啊。想要参加世纪决斗，得有真材实料才行。");
          cm.dispose();
        }
      } else {
        cm.dispose();
      }
    }
  }
}