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
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.fieldEffect_PlayBGM("Bgm30/thePhoto", 0, 0);
      cm.fieldEffect_屏幕渐入插图A(['00', "Effect/Direction26.img/Lara/illust/7", 'cc'], [1, 0, 0, 0, 1500, -1, 0, 0, -1]);
      cm.inGameDirectionEvent_AskAnswerTime(4000);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk_Bottom("#face0#可是有一天，格里哥哥撇下格里逃跑了。", 37, 3005103, false, true, 1);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#就带着一直以来的积蓄，找了个地方把自己严严实实藏了起来。", 37, 3005103, true, true, 1);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#从那天起，格里就彻底变了个人。", 37, 3005103, true, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#脸上不复从前那般的微笑……", 37, 3005103, true, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#就一股脑子想着要怎么把债还清，赶紧离开这座村庄。", 37, 3005103, true, true, 1);
              } else if (status === V++) {
                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                cm.setInGameDirectionMode(false, true, false);
                cm.setStandAloneMode(false);
                cm.dispose();
                cm.warp(993165516, 0, true);
              }
            }
          }
        }
      }
    }
  }
}