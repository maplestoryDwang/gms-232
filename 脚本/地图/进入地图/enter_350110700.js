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
      cm.updateInfoQuest(33906, "count1=1");
      cm.setNumberForQuestCustomData(33900, 6);
      cm.getPlayer().removeDragon();
      cm.mapleHeroBecomeNpc(9, 0);
      cm.onActionBarResult(6, -1);
      cm.onActionBarResult(5, 32);
      cm.fieldEffect_复合图片动画(["Map/Effect2.img/Blizzard2/skeleton", "normal", '', ''], [1, 1, 1, 0, 0, 0, 0, 0]);
      cm.setAmbience("Ambience.img/blizzard_soft", 80, 60);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 8, -159);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_MoveAction(7);
        cm.inGameDirectionEvent_MoveAction(3);
        cm.inGameDirectionEvent_AskAnswerTime(2000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(0);
          cm.userSetFieldFloating(350110700, 0, 3, 1);
          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act1/AF_roar", 100);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face4#额啊！", 37, 1540805, false, true);
            cm.effect_Voice("Voice3.img/HofM/ACT1/CLIMB/1", 128);
          } else {
            if (status === V++) {
              cm.userSetFieldFloating(350110700, 0, 0, 0);
              cm.sendNormalTalk_Bottom("#face3#刚刚的摇晃是怎么回事啊……？我听到一阵痛苦的声音。", 37, 1540805, true, true);
              cm.effect_Voice("Voice3.img/HofM/ACT1/CLIMB/2", 128);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face3#果然阿弗利埃是出事了，我们得抓紧。", 37, 1540805, true, true);
                cm.effect_Voice("Voice3.img/HofM/ACT1/CLIMB/3", 128);
              } else {
                if (status === V++) {
                  cm.fieldEffect_PlayBGM("Bgm45/Through The Blizzard", 0, 0);
                  cm.sendNormalTalk_Bottom("#face2#……等一下，在此之前我已经有危险了啊！", 37, 1540805, true, true);
                  cm.effect_Voice("Voice3.img/HofM/ACT1/CLIMB/4", 128);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                  } else if (status === V++) {
                    cm.setInGameDirectionMode(false, true, false);
                    cm.obstacleFallRepeat(3, "雪龟岛_大冰岩", "雪龟岛_小冰岩", 5);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;