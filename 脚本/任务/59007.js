var status = -1;
var selectionLog = [];
function start(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.sendNormalTalk("喵喵！我要重新介绍下我自己喵！我是冒险岛动物英雄团的一员，我叫#b阿尔#k喵！", 0, 9390463, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("我的名字是#b#h0##k。你说冒险岛动物英雄团？", 2, 9390463, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("喵喵！冒险岛动物英雄团。就是为了成为未来冒险岛的英雄，而踏上旅途的#b4个动物#k喵。", 0, 9390463, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("嘿~ 终有一天，我也会成为冒险岛的英雄的。就像冒险岛5英雄那样！！", 2, 9390463, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk("喵喵！我们也非常喜欢冒险岛5英雄喵。幻影是我的偶像喵。真是太好了喵。\r\n说到英雄，那当然是冒险岛5英雄啦。所以，我们正寻找我们最后的伙伴，你来做#b我们最后一名伙伴#k怎么样？", 0, 9390463, true, true);
            } else {
              if (status === v++) {
                cm.sendNormalTalk("呃?我?", 2, 9390463, true, true);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk("虽然有人的脸型和身体,但还是动物不是吗喵?", 0, 9390463, true, true);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk("什么！！！虽然我有动物的耳朵和尾巴，但我是人！！！", 2, 9390463, true, true);
                  } else {
                    if (status === v++) {
                      cm.askAcceptDecline("那个,给我那个喵。反正想成为我们的同伴吗喵?", 0, 9390463);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk("嗯。我想成为你的同伴!", 2, 9390463, false, true);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk("知道啦喵。那么下定决心的话,再来和我说话吧喵。", 0, 9390463, true, true);
                        } else if (status === v++) {
                          cm.forceStartQuest(59007, '');
                          cm.dispose();
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function stage0(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceStartQuest();
      cm.dispose();
    }
  }
}
function end(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      var e = cm.getQuest();
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceCompleteQuest();
      cm.dispose();
    }
  }
}