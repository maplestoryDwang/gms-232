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
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.setAmbience("Ambience.img/secretmissionbase", 100, 60);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("你打算抵抗到什么时候？", 37, 1540809, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#……我已经对你说过很多遍了，我的力量对你而言太多了。", 37, 1540819, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("你这说教的口吻还是一如从前啊。\r\n你还打算在我面前狂妄自大到什么时候？", 37, 1540809, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("……可怜的孩子。", 37, 1540819, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom('你给我说话注意点。', 37, 1540809, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("你犯下的罪行实在是太过残忍了，\r\n他们绝对不会坐以待毙的。", 37, 1540819, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("这样才对嘛。", 37, 1540809, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("……难不成，你是故意刺激他们的？", 37, 1540819, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("将碍事的人聚到一起后再行捕猎，\r\n所有的一切现在不过是刚开始而已。", 37, 1540809, true, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 4);
                                cm.forceCompleteQuest(33926);
                                cm.gainExp(Math.pow(cm.getLevel(), 3) / 4);
                                cm.updateInfoQuest(33960, "33920=1;33921=1;33922=1;33923=1;33924=1;33925=1;33926=1");
                                cm.playerMessage(5, "获得7000点声望。");
                                cm.updateInfoQuest(26992, 'state=1');
                                cm.updateInfoQuest(33909, "1_5=0;1=1;2=0;3=0;4=0");
                                cm.updateInfoQuest(33932, "1=1");
                                cm.updateInfoQuest(15249, "ring=1");
                                cm.forceCompleteQuest(33910);
                                cm.finishAchievement(1197);
                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                cm.gainItem(3017011, 1);
                              } else if (status === V++) {
                                cm.dispose();
                                cm.onActionBarResult(6, -1);
                                cm.mapleHeroBecomeNpc(-1, 1);
                                cm.warp(913050010, 0, false);
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