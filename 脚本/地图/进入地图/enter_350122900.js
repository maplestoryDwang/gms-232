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
      cm.npc_ChangeController(1540795, "oid=58508", 1957, 9, 5, 1917, 2007, 1, false, 0, false);
      cm.updateInfoQuest(33915, "act1=350112400;act2=350122900");
      cm.showMapleHero();
      cm.onSetMapTagedObjectVisible(1, "HofM_DO", 512);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) * 2);
          cm.forceCompleteQuest(33975);
          cm.gainExp(Math.pow(cm.getLevel(), 3) * 2);
          cm.updateInfoQuest(33962, "33971=1;33972=1;33973=1;33974=1;33975=1");
          cm.updateInfoQuest(33978, 'exp=1');
          cm.inGameDirectionEvent_AskAnswerTime(3000);
          cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1400);
            } else {
              if (status === V++) {
                cm.onSetMapObjectCreateLayerMore('HofM_door', 2, "standard", 0);
                cm.sendNormalTalk_Bottom("#face6#哎哟，好不容易逃出来了。\r\n话说回来，你挺不赖的嘛？", 37, 1540803, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face1#龙神，你说对了，如果没有在看守那里得到影子的提示，也许我们就会有危险了，你们确实是弗里德和阿弗利埃的后裔。", 37, 1540801, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#嘿嘿，你过奖了。", 37, 1540805, true, true);
                  } else if (status === V++) {
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
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;