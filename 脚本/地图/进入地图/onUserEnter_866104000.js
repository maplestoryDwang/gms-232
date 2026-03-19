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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, false);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_AskAnswerTime(300);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(3000);
        cm.effect_REPEAT("Effect/Direction14.img/effect/ShamanBT/ChapterA/20", 1, 1, 1, 0, 0);
      } else {
        if (status === V++) {
          cm.sendNormalTalk('你没事吧，猫咪？', 3, 9390300, false, true);
          cm.effect_REPEAT("Effect/Direction14.img/effect/ShamanBT/ChapterA/20", 1, 0, 0, 0, 0);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("谢，谢谢你喵…… 但是我现在有点内急…… 你到后面点，我好害羞喵。", 1, 9390300, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("好了吗？", 3, 9390300, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("喵喵！！！很抱歉喵！！！你再等一会儿喵！！！！", 1, 9390300, true, true);
              } else if (status === V++) {
                cm.forceCompleteQuest(59003);
                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                cm.dispose();
                cm.warp(866105000, 0, true);
                cm.setInGameDirectionMode(false, true, false);
                cm.setStandAloneMode(false);
              }
            }
          }
        }
      }
    }
  }
}