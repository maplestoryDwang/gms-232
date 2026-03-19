var status = -1;
function start() {
  status = -1;
  action(1, 0, 0);
}
;
function action(f, E, e) {
  status++;
  if (cm.getQuestStatus(34601) == 1) {
    action1(f, E, e);
  } else if (cm.isQuestFinished(34648) && cm.getQuestStatus(34649) == 0) {
    action2(f, E, e);
  } else {
    cm.dispose();
  }
}
function action1(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.updateInfoQuest(34655, "10=1;11=1;gender=1;0=1;2=1");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_同时移动镜头和人(2, 100);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.teachSkill(60021278, -1, 0);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face1#幸好支部成员执行任务还没回来。看看时间……他们应该快回来了。", 37, 3001270, false, true, 1);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_同时移动镜头和人(2, 200);
              cm.inGameDirectionEvent_AskAnswerTime(1800);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_MoveAction(6);
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face2#喂，新来的。绝不做无意义的争斗。这是支部守则第三条。难道你忘了吗，啊？", 37, 3001250, false, true, 1);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                    cm.sendNormalTalk_Bottom("#face0#真是神了，你怎么知道我刚战斗回来？啊哈，看来这年纪不白长！", 37, 3001270, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_MoveAction(0);
                      cm.inGameDirectionEvent_同时移动镜头和人(2, 200);
                      cm.inGameDirectionEvent_AskAnswerTime(1800);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face2#废话少说，你好好反省一下吧。从今天起，你就是支部的正式成员了。做任何事都要对得起自己的身份。", 37, 3001250, false, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face1#好，好，随你的便。", 37, 3001270, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(300);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                              } else if (status === V++) {
                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                cm.setInGameDirectionMode(false, true, false);
                                cm.setStandAloneMode(false);
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
      cm.updateInfoQuest(34655, "10=1;11=1;18=1;gender=1;0=1;1=1;failC=1;2=1;3=1;4=1;5=1;6=1;7=1;8=1;9=1");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.curNodeEventEnd(true);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_MoveAction(4);
        cm.sendNormalTalk_Bottom("#face6#……我这是怎么了……莫非我到了那个世界？", 37, 3001270, false, true, 1);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face6#不，感觉好像沉睡了好久。", 37, 3001270, true, true, 1);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face6#……呃呃，突然头好痛啊……", 37, 3001270, true, true, 1);
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
                  cm.sendNormalTalk_Bottom("#face0#哈哈，清醒点了吗？", 37, 3001250, false, true, 1);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_PlayBGM("Bgm47.img/SavageTerminal", 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(300);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                          cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                        } else if (status === V++) {
                          cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                          cm.setInGameDirectionMode(false, true, false);
                          cm.setStandAloneMode(false);
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
}