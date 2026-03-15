var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.askMenu_Bottom("需要移动至藏经阁的第几层？\r\n#L0#藏经阁1-2层#l\r\n#L1#藏经阁3-4层#l\r\n#L2#藏经阁5-6层#l\r\n#L3#藏经阁7-8层#l\r\n#L4#藏经阁9-10层#l\r\n#L5#藏经阁顶层<首领怪：方丈大师 >#l\r\n#L6#领取击败<首领怪：方丈大师 >的奖励#l", 37, 9310051);
    } else {
      if (status === V++) {
        if (selectionLog[1] == 0) {
          cm.warp(701220100, 0);
          cm.dispose();
        } else {
          if (selectionLog[1] == 1) {
            cm.warp(701220200, 0);
            cm.dispose();
          } else {
            if (selectionLog[1] == 2) {
              cm.warp(701220300, 0);
              cm.dispose();
            } else {
              if (selectionLog[1] == 3) {
                cm.warp(701220400, 0);
                cm.dispose();
              } else {
                if (selectionLog[1] == 4) {
                  cm.warp(701220500, 0);
                  cm.dispose();
                } else {
                  if (selectionLog[1] == 5) {
                    cm.dispose();
                    cm.openNpc(0, "副本_少林寺_Boss_玄慈方丈");
                  } else {
                    if (selectionLog[1] == 6) {
                      var w = cm.getNumberFromQuestInfo(9601068, 'kill');
                      cm.askMenu_Bottom("听说藏经阁中还有方丈大师妖怪的气息。我们非常需要你这样的勇士的帮助。你总共击败了方丈大师#b" + w + "#k次。\r\n#L0#领取击败方丈大师10次的奖励#i2434618##l\r\n#L1#领取击败方丈大师30次的奖励#i2436044##l\r\n#L2#领取击败方丈大师50次的奖励#i3015329##l", 37, 9310051);
                    }
                  }
                }
              }
            }
          }
        }
      } else {
        if (status === V++) {
          var w = cm.getNumberFromQuestInfo(9601068, 'kill');
          if (selectionLog[2] == 0) {
            var N = cm.getNumberFromQuestInfo(9601068, "reward1");
            if (w < 10) {
              cm.sendNormalTalk_Bottom("嗯……很抱歉，好像没有什么奖励可以给你的。", 37, 9310051, false, false);
            } else if (N == 0) {
              cm.setNumberForQuestInfo(9601068, "reward1", 1);
              cm.sendNormalTalk_Bottom("感谢你对少林寺的帮助。这是一点心意，请收下。", 37, 9310051, false, false);
              cm.gainItem(2434618, 1);
            } else {
              cm.sendNormalTalk_Bottom("嗯……你已经领取过奖励了啊。", 37, 9310051, false, false);
            }
          } else {
            if (selectionLog[2] == 1) {
              var N = cm.getNumberFromQuestInfo(9601068, 'reward2');
              if (w < 30) {
                cm.sendNormalTalk_Bottom("嗯……很抱歉，好像没有什么奖励可以给你的。", 37, 9310051, false, false);
              } else if (N == 0) {
                cm.setNumberForQuestInfo(9601068, "reward2", 1);
                cm.sendNormalTalk_Bottom("感谢你对少林寺的帮助。这是一点心意，请收下。", 37, 9310051, false, false);
                cm.gainItem(2436044, 1);
              } else {
                cm.sendNormalTalk_Bottom("嗯……你已经领取过奖励了啊。", 37, 9310051, false, false);
              }
            } else {
              if (selectionLog[2] == 2) {
                var N = cm.getNumberFromQuestInfo(9601068, 'reward3');
                if (w < 50) {
                  cm.sendNormalTalk_Bottom("嗯……很抱歉，好像没有什么奖励可以给你的。", 37, 9310051, false, false);
                } else if (N == 0) {
                  cm.setNumberForQuestInfo(9601068, 'reward3', 1);
                  cm.sendNormalTalk_Bottom("感谢你对少林寺的帮助。这是一点心意，请收下。", 37, 9310051, false, false);
                  cm.gainItem(3015329, 1);
                } else {
                  cm.sendNormalTalk_Bottom("嗯……你已经领取过奖励了啊。", 37, 9310051, false, false);
                }
              } else {
                cm.dispose();
              }
            }
          }
        } else {
          cm.dispose();
        }
      }
    }
  }
}