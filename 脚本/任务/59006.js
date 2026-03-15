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
      cm.sendNormalTalk("刚刚在与狼战斗时，你的#b等级#k好像上升了喵。", 0, 9390463, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("#b等级#k？", 2, 9390463, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("没错，消灭魔怪会获得#b经验值#k，当经验值累积到一定程度时，#b等级#k就会上升喵。", 0, 9390463, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("嘿嘿……等级提高有什么好处啊?", 2, 9390463, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk("等级上升之后，就会变得更强喵。\r\n不仅体力会上升，每次等级提高时，将获得的#b能力点数#k分配到“我的属性”中，还能变得更强喵。\r\n\r\n直接按属性窗中的#b“自动分配”#k按钮，就直接OK了喵。", 0, 9390463, true, true);
            } else {
              if (status === v++) {
                cm.askAcceptDecline("首先，打开#b属性窗#k，将刚刚升级获得的能力点数分配到“我的属性”中吧。", 0, 9390463);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk("只要按#b[S]#k键，就能随时打开属性窗了喵。\r\n#i03800628#", 1, 9390463, false, true);
                } else if (status === v++) {
                  cm.forceStartQuest(59006, '');
                  cm.openUI(2);
                  cm.updateInfoQuest(59006, "ap=1");
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
      cm.sendNormalTalk("做的很好喵,有没有感觉到变得更强一些喵。", 0, 9390463, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("就像现在这样通过狩猎怪物来练级并不断的变强喵!!!", 0, 9390463, true, true);
      } else if (status === v++) {
        cm.forceCompleteQuest(59006);
        cm.gainExp(34);
        cm.dispose();
      }
    }
  }
}