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
      cm.克里塞_获得技能();
      cm.组队任务_更新任务(1, "kreasePQ_0", "kreasePQ_", 0);
      cm.mapleHeroSandRising(0, 150, 4000);
      cm.mapleHeroSandRising(1, 150, 4000);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.fieldEffect_ProcessOnOffLayer('0', "Map/Effect2.img/kreasePQ", 0, 600, 0, 0, 15, 4, 1, -1, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1600);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.fieldEffect_ProcessOnOffLayer('0', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_PushMoveInfo(0, 500, 68, 3187);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_头顶图片(["Effect/MapEff.img/chaserAppear", "oid=0"], [0, 68, 3287, 1, 0, 1, 1, 0, 0]);
            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/kreasePQ_appear", 100);
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushMoveInfo(0, 500, 68, 2587);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1199);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                } else if (status === V++) {
                  cm.克里塞_获得技能(6, 6, 0, 1, 0, 80001705, 1, 0, 0, 0, 0, 0, 0, 0);
                  cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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