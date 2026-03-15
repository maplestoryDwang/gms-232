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
      cm.sendNormalTalk("#b#h0##k你住在这旁边的大树村？", 0, 9390463, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("嗯,就住在大树村罗斯娜奶奶家。", 2, 9390463, true, true);
      } else {
        if (status === v++) {
          cm.askAcceptDecline("我知道了喵。那你回去等着吧。\r\n#b我会和同伴们一起去找你的喵#k。", 0, 9390463);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("好的。我会准备好吃的鱼，你快点来。猫咪。", 2, 9390463, false, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk("我不是猫咪，我叫#b阿尔#k！！还有，我可是只吃素食的猫。鱼还是给#b波波#k那家伙吃吧。", 0, 9390463, true, true);
            } else {
              if (status === v++) {
                cm.sendNormalTalk("#b波波#k？", 2, 9390463, true, true);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk("喵喵！！！#b波波#k也是我们冒险岛动物英雄团的一员。波波很强大的！！！", 0, 9390463, true, true);
                } else if (status === v++) {
                  cm.forceStartQuest(59008, '');
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