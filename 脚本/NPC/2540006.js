var status = -1;
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  status++;
  var V = cm.getEventManager("副本_起源之塔");
  if ('clear' === V.getProperty("stage38")) {
    actionEnd(f, W, U, V);
  } else if ("fight" === V.getProperty("stage38")) {
    action1(f, W, U, V);
  } else {
    action0(f, W, U, V);
  }
}
function action0(f, W, U, V) {
  if (status < 0) {
    cm.dispose();
  } else {
    if (status === 0) {
      cm.sendNext("唔，看来你也是挑战这里的勇士吗？很高兴见到你。");
    } else {
      if (status === 1) {
        cm.sendNext("但如你所见，现在这一层被缠绕着黑暗气息的怪物所包围了。想要突破到下一层，必须要准确地清除掉附着了黑暗气息的怪物才行。");
      } else {
        if (status === 2) {
          cm.sendNext("我可以帮你寻找现在被黑暗气息附身的是哪一种怪物，清除掉它们就能拯救这一层楼。");
        } else {
          if (status === 3) {
            cm.sendOk("事不宜迟，我们现在就开工吧。");
          } else if (status === 4) {
            V.setProperty("stage38", "fight");
            V.schedule("stage38_Relocate", 1000);
            cm.dispose();
          } else {
            cm.dispose();
          }
        }
      }
    }
  }
}
function action1(f, W, U, V) {
  cm.sendOk("黑暗气息还没有清理干净啊。还需要继续努力。");
  cm.dispose();
}
function actionEnd(f, W, U, V) {
  cm.sendOk("多亏你的帮助，这里的黑暗气息已经清理干净了。通往下一层的门已经打开。");
  cm.dispose();
}