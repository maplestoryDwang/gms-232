var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
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
      cm.npc_ChangeController(2142933, "oid=221160", 704, -94, 155, 654, 754, 1, false, 0, false);
      cm.npc_ChangeController(2142934, "oid=221161", 593, 1, 231, 543, 643, 1, false, 0, false);
      cm.npc_ChangeController(2142935, 'oid=221162', 801, 1, 232, 751, 851, 1, false, 0, false);
      cm.npc_ChangeController(2142936, "oid=221163", 713, 1, 232, 663, 763, 1, false, 0, false);
      cm.npc_ChangeController(2142930, "oid=221164", -108, -303, 18, -158, -58, 1, false, 0, false);
      cm.npc_ChangeController(2142931, "oid=221165", -225, -303, 18, -275, -175, 1, false, 0, false);
      cm.npc_ChangeController(2142932, "oid=221166", 6, -303, 18, -44, 56, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_ScreenMsg("twilightPerion/text7");
      cm.inGameDirectionEvent_AskAnswerTime(2500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("不断重复的相同的梦。你们也梦到了吗？", 1, 2142934, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("抽泣抽泣… 每天晚上都不敢睡觉。", 1, 2142935, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("别哭。不就是个梦吗？", 1, 2142936, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("用不着害怕。只不过是梦罢了。", 1, 2142933, true, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushMoveInfo(0, 150, -110, -210);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(6000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("我虽然活了几百年，但还是头一次遇到这种现象。", 1, 2142932, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("我也没听说过这种奇怪的现象。是黑魔法师的手下干的吗？", 1, 2142931, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("目的是想让我们陷入混乱吗？或者是别的……不知道敌人的目的到底是什么。", 1, 2142930, true, true);
                      } else if (status === V++) {
                        cm.dispose();
                        cm.warp(913051006, 0, false);
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