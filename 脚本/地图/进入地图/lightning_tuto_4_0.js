var status = -1;
function action(f, E, e) {
  if (f === 0) {
    status--;
  } else {
    status++;
  }
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true);
      cm.sendNextSNoESC("弗里德和双弩精灵应该已经进去了。我不能晚去的。");
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(750);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(2);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.effect_OnUserEff("Effect/OnUserEff.img/normalEffect/demonSlayer/chatBalloon0");
            cm.effect_Direction("Effect/Direction8.img/lightningTutorial2/Scene2");
            cm.sendNextSNoESC("门里面，黑暗的气息浓的仿佛要令人窒息了。难道这就是黑魔法师的力量……？！必须赶紧进去，支援他们两个。");
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else if (status === V++) {
              cm.curNodeEventEnd(true);
              cm.setInGameDirectionMode(false);
              cm.warp(927020090, 0);
              cm.dispose();
            } else {
              cm.dispose();
            }
          }
        }
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;