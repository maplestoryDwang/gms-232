var status = -1;
function action(f, E, e) {
  status++;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.sendNormalTalk("#b(呃……差一点就淹死了。)#k", 17, 0, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("哼，好像是中了无法游泳的魔法，喵。", 1, 1500010, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("#b你应该早说嘛！#k", 17, 1500010, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("别用这种眼光看我，喵。我也不是样样都知道的，喵。看来得想想其他办法才行，喵。", 1, 1500010, true, true);
          } else if (status === V++) {
            cm.eventSKill(0);
            cm.warp(101070000, 0, false);
            cm.setInGameDirectionMode(false, true, false);
            cm.gainExp(3770);
            cm.forceStartQuest(32102, '');
            cm.forceCompleteQuest(32102);
            cm.dispose();
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