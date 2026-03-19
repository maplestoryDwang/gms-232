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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.sendNormalTalk_Bottom("#face1#女皇。\r\n我有话要跟你说。", 37, 1540451, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face1#你肯定觉得这个作战很莽撞吧，南哈特？", 37, 1540450, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face1#……联盟在空战方面处于劣势。\r\n我们没有在空中战斗的经验，也没有支援。", 37, 1540451, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face1#现在还为时不晚。\r\n我认为在各个村庄建造对空阵地，进行陆地战才是正确的。\r\n如果我们在空中惨败，那就没有挽回的余地了。", 37, 1540451, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face1#我看到了未来。\r\n……在黑暗的那一边，庞大的巨人覆盖世界的未来。", 37, 1540450, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face1#那巨人非常庞大，他可以用头遮盖天空，用脚踏平整个村庄。\r\n所有人只能趴在地上，无助地颤抖着。", 37, 1540450, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face1#最终，当他背后的太阳完全消失，大地陷入绝望时……\r\n一群发光的鸟飞向天空，冲向了巨人。\r\n它们牺牲自己，绽放出耀眼的光芒，驱散了绝望，之后太阳重新出现了。", 37, 1540450, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face1#南哈特。\r\n我们必须改变命运。", 37, 1540450, true, true);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else if (status === V++) {
                      cm.forceCompleteQuest(33255);
                      cm.dispose();
                      cm.warp(350058603, 0, true);
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
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;