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
      cm.npc_ChangeController(2074037, "oid=1942950", 694, -11, 8, 644, 744, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=1942950", 'summon', 0, 0);
      cm.npc_ChangeController(2074100, "oid=1942951", 593, -11, 23, 543, 643, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=1942951", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 619, 44);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("哎哟？你是怎么来这里的？", 37, 2074037, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face2#……谁？你认识我吗？", 37, 2074100, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("哇，好神奇啊，这么看来，\r\n嗯，我还以为没什么事情了呢，看来你什么都不记得了吧？", 37, 2074037, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face3#这里果然……是地狱吗？", 37, 2074100, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("哈哈哈哈哈！你挺有趣的嘛，\r\n嗯，果然，你什么都不知道啊。", 37, 2074037, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("你这段时间过得怎么样啊？", 37, 2074037, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face2#哎，我没时间开玩笑。\r\n得赶紧从梦中醒来，回到童话村……", 37, 2074100, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("来，毕竟我们也好久没有这么见面了，\r\n还是先走一走吧。", 37, 2074037, true, true);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 300, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else if (status === V++) {
                        cm.dispose();
                        cm.warp(224000071, 0, true);
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