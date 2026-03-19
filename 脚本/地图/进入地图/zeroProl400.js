var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (cm.isQuestActive(40002)) {
    action1(f, E, e);
  } else {
    cm.dispose();
  }
}
function action1(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.updateInfoQuest(40008, "act1=clear");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
      cm.curNodeEventEnd(true);
      cm.effect_OnUserEff("Effect/OnUserEff.img/questEffect/phantom/tutorial");
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_MoveAction(2);
        cm.inGameDirectionEvent_AskAnswerTime(3000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(0);
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("#b(这里就是影子神殿，#o9300744#的诞生之地。不知道这座神殿供奉过谁，但现在已经变成废墟了。)", 41, 2410008, false, true);
            cm.effect_Voice("Voice.img/Alpha/32", 100);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("#b(没有人知道影子神殿里都有什么，因为进去的人全都死掉了……如今即便是影子骑士，也不允许进入神殿内部。)", 41, 2410008, true, true);
              cm.effect_Voice("Voice.img/Alpha/33", 100);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("#b(人们都说神殿里有着怪物，虽然怪物在沉睡……但是一旦怪物醒来，整个世界都会灭亡。)", 41, 2410008, true, true);
                cm.effect_Voice("Voice.img/Alpha/34", 100);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("#face11# #b(全都是说谎)", 41, 2410008, true, true);
                  cm.effect_Voice("Voice.img/Alpha/35", 100);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_MoveAction(2);
                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_MoveAction(0);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("#face11# #b(我知道神殿里有……有谁。)", 41, 2410008, false, true);
                        cm.effect_Voice("Voice.img/Alpha/36", 100);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("#face11# #b(快进入神殿吧。)", 41, 2410008, true, true);
                          cm.effect_Voice("Voice.img/Alpha/37", 100);
                        } else if (status === V++) {
                          cm.setInGameDirectionMode(false, true, false);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;