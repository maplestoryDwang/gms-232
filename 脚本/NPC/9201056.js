var status = -1;
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  cm.checkURDVNMOOKGD();
  status++;
  if (cm.getMapId() == 600000000) {
    action600000000(f, W, U);
  } else if (cm.getMapId() == 610010000) {
    action610010000(f, W, U);
  } else {
    cm.dispose();
  }
}
function action600000000(f, W, U) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.askYesNo("嘿，你好。有兴趣深入大师领地荒野探险吗？这片大陆还有很多地方无人涉足……所以说能走的路不多。幸好我们有这东西……有了它，没有路也能前进，而且看上去还特别帅！我现在可以带你去#b幽影森林#k。那里有个叫#b普伦德加斯特庄园#k的地方。有人说那儿闹鬼！怎么样……想去见识一下么", 0, 9201056);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("好嘞！系好安全带，咱们这就去那庄园咯！小心颠簸哦！", 0, 9201056, false, true);
      } else if (status === V++) {
        cm.dispose();
        cm.warp(610010000, 6, false);
      }
    }
  }
}
function action610010000(f, W, U) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.askYesNo("嘿，你好。玩的还开心吧。准备回新叶都市了吗？", 0, 9201056);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("那就让我们回到文明社会吧！进来坐好……马上就到目的地！", 0, 9201056, false, true);
      } else if (status === V++) {
        cm.dispose();
        cm.warp(600000000, 33, false);
      }
    }
  }
}
function randomNum(f, W) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * f + 1, 10);
    case 2:
      return parseInt(Math.random() * (W - f + 1) + f, 10);
    default:
      return 0;
  }
}