var status = -1;
var selectionLog = [];
function action(f, E, e) {
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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.sendNormalTalk("#fs12#那边有#fs11#人#fs10#吗？", 5, 9400200, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("#fs10#有没有人听见我说话#fs11#……？", 5, 9400200, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("#b是谁在求助？你在哪里？", 3, 0, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("#fs12#谁#fs11#来#fs12#帮帮#fs13#我！#fs14##e有没有人啊？！", 5, 9400200, true, true);
          } else {
            if (status === V++) {
              cm.askAcceptDecline("#b(看样子他听不见我的声音。情况似乎很危急……循着声音过去看看吧？)", 3, 0);
            } else {
              if (status === V++) {
                cm.playerMessage(-1, "该内容只有在1024*768以上的分辨率下才能正常进行。");
                cm.sendNormalTalk("#b(嗯，我不能对陷入危机的人坐视不管！)", 3, 0, false, true);
              } else {
                if (status === V++) {
                  cm.addNumberForQuestInfo(63260, "enterD", 1);
                  cm.forceCompleteQuest(63020);
                  cm.dispose();
                  var O = cm.rand(1, 4);
                  cm.setNumberForQuestInfo(63099, "enterQ", O);
                  if (O == 1) {
                    cm.warp(867113601, 0, false);
                    cm.playerMessage(5, "循着紧急求助的声音向射手村外围地区移动。");
                  } else {
                    if (O == 2) {
                      cm.warp(867113611, 0, false);
                      cm.playerMessage(5, "循着紧急求助的声音向金银岛高山地区移动。");
                    } else if (O == 3) {
                      cm.warp(867113621, 0, false);
                      cm.playerMessage(5, "循着紧急求助的声音向魔法密林中移动。");
                    } else {
                      cm.warp(867113630, 0, false);
                      cm.playerMessage(5, "循着紧急求助的声音向蝙蝠怪所在的林中之城移动。");
                    }
                  }
                  cm.inGameDirectionEvent_SetHideEffect(0);
                  cm.setInGameDirectionMode(false, true, false);
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