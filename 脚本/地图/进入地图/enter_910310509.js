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
      cm.npc_ChangeController(1052229, 'oid=218947', -4, 132, 1, -54, 46, 1, false, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -90, 170);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
          cm.inGameDirectionEvent_AskAnswerTime(2500);
          cm.effect_Text(["#fn黑体##fs18#出道一天前#fs15##fn黑体#阿赫的办公室"], [100, 1500, 6, -50, -50, 1, 4, 0, 0, 0]);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#终于就是明天了，#b#ho##k，成员们为了明天出道作准备，一直在认真练习呢。", 37, 1052229, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#真希望大家能够不辜负一直以来的努力，好好发挥，哈哈，看样子我今天应该是睡不着觉了，不知道为什么心里总是有点担心呢……", 37, 1052229, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#新人时期总是会莫名其妙地卷入一些奇怪的事情，我也曾如此过，哈哈！", 37, 1052229, true, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1052229"], [0, 0, 0, 1, 0, 1, 0, 0]);
                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/kurningTower/rockSpirit1", 250);
                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#哎，这是什么声音？我总觉得这首歌有点不吉利，明天得平安无事才好……", 37, 1052229, false, true);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else if (status === V++) {
                      cm.dispose();
                      cm.warp(103041001, 0);
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