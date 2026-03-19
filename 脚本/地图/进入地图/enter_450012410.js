var status = -1;
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  status++;
  if (!cm.isQuestFinished(35810) && cm.isQuestFinished(35809) && cm.isQuestFinished(35817) && cm.getQuestStatus(35834, 'q35810') > 0) {
    action1(f, E, e);
  } else {
    if (cm.isQuestFinished(35810) && cm.isQuestFinished(35817)) {
      action2(f, E, e);
    } else {
      cm.onSetMapObjectMove("attack", [1, 0, 0]);
      cm.onSetMapObjectMove("attackAll", [1, 0, 0]);
      cm.monadForceMove("giantHit1", 0, 0);
      cm.monadForceMove("giantHit2", 0, 0);
      cm.monadForceMove("giantHit3", 0, 0);
      cm.monadForceMove("giantHit4", 0, 0);
      cm.monadForceMove("giantHit5", 0, 0);
      cm.monadForceMove("giantHit6", 0, 0);
      cm.monadForceMove('giantHit7', 0, 0);
      cm.monadForceMove("giantHit8", 0, 0);
      cm.monadForceMove('giantHit9', 0, 0);
      cm.monadForceMove("giantHit10", 0, 0);
      cm.dispose();
      return;
    }
  }
}
function action1(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.onSetMapObjectMove("attack", [1, 0, 0]);
      cm.onSetMapObjectMove("attackAll", [1, 0, 0]);
      cm.monadForceMove('giantHit1', 0, 0);
      cm.monadForceMove("giantHit2", 0, 0);
      cm.monadForceMove('giantHit3', 0, 0);
      cm.monadForceMove("giantHit4", 0, 0);
      cm.monadForceMove("giantHit5", 0, 0);
      cm.monadForceMove("giantHit6", 0, 0);
      cm.monadForceMove("giantHit7", 0, 0);
      cm.monadForceMove("giantHit8", 0, 0);
      cm.monadForceMove('giantHit9', 0, 0);
      cm.monadForceMove("giantHit10", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.sendNormalTalk_Bottom("#face0#发射！发射！！", 37, 3003759, false, true);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk_Bottom("#face0#开始清除怪物！！", 37, 3003759, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#甲板夺回来了！把我们的旗帜升起来！", 37, 3003759, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("呼，现在终于可以喘口气了。", 57, 0, true, true);
          } else {
            if (status === V++) {
              cm.updateInfoQuest(35832, "dir000=end;dir010=end;dir200=end;dir410_1=end;dir400=end;skip=5;dir600=end;skip2=3");
              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(300);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(1400);
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
}
function action2(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.onSetMapObjectMove('attack', [1, 0, 0]);
      cm.onSetMapObjectMove('attackAll', [1, 0, 0]);
      cm.monadForceMove("giantHit1", 0, 0);
      cm.monadForceMove("giantHit2", 0, 0);
      cm.monadForceMove("giantHit3", 0, 0);
      cm.monadForceMove("giantHit4", 0, 0);
      cm.monadForceMove("giantHit5", 0, 0);
      cm.monadForceMove('giantHit6', 0, 0);
      cm.monadForceMove("giantHit7", 0, 0);
      cm.monadForceMove('giantHit8', 0, 0);
      cm.monadForceMove("giantHit9", 0, 0);
      cm.monadForceMove("giantHit10", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.sendNormalTalk_Bottom("#face0#发射！发射！！", 37, 3003759, false, true);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk_Bottom("#face0#援军到了！！", 37, 3003759, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#1号到15号舰炮全部可以正常发射！", 37, 3003759, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#看样子现在可以执行作战了。", 37, 3003759, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("行了。这样应该没问题了。", 57, 0, true, true);
            } else {
              if (status === V++) {
                cm.updateInfoQuest(35832, "dir000=end;dir010=end;dir200=end;dir410_1=end;dir400=end;dir410_2=end;skip=5;dir600=end;skip2=3");
                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(300);
                  } else {
                    if (status === V++) {
                      cm.spawnMobLimit(8645040, 1, -377, -483, 100);
                      cm.spawnMobLimit(8645040, 1, -271, -1, 100);
                      cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1400);
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
  }
}
function action3(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {}
  }
}