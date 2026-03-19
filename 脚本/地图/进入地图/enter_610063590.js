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
      cm.updateInfoQuest(61333, "act1=610061570;act2=610062450;act3=610063590");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_MoveAction(4);
      cm.emotion(7, 4200);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("啊啊，好亮！", 57, 0, false, true);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(0);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_ForcedFlip(-1);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_ForcedFlip(1);
              cm.inGameDirectionEvent_AskAnswerTime(1200);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("噢，我回到守护者的要塞了！\r\n太好了！", 57, 0, false, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face5#很高兴你能对我说出你真实的感想。\r\n现在我知道你站在哪一边了。", 37, 9201539, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face5#当然，对你来说，事态反而恶化了。\r\n我清楚你既不能被说服也不会被吓跑，所以，我将倾尽全力，\r\n杀死你。", 37, 9201539, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("你听听自己说的都是些什么鬼话。\r\n你疯了，在击败你和纳瑞坎前，我绝不会放弃的！", 57, 0, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face5#至少，我现在能理解你的决心了。\r\n但它并不能帮助你打败我。", 37, 9201539, true, true);
                        } else {
                          if (status === V++) {
                            cm.userSetFieldFloating(610063590, 5, 5, 10);
                            cm.inGameDirectionEvent_AskAnswerTime(4200);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion2", 100);
                              cm.inGameDirectionEvent_头顶图片(["Map/EffectGL.img/MBlockbuster/boss_rock"], [0, 550, 300, 1, 1000, 1, 1, 0]);
                              cm.inGameDirectionEvent_AskAnswerTime(200);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_头顶图片(["Map/EffectGL.img/MBlockbuster/boss"], [0, 280, 285, 1, 1000, 1, 1, 0]);
                                cm.inGameDirectionEvent_AskAnswerTime(200);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_MoveAction(5);
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_ForcedFlip(1);
                                    cm.inGameDirectionEvent_MoveAction(4);
                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                  } else {
                                    if (status === V++) {
                                      cm.userSetFieldFloating(610063590, 0, 0, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(5200);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(2200);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_Monologue("\r\n\r\n\r\n\r\n#fs40#   第3幕. 来自反转界的男人\r\n\r\n                  结束。", 1);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(4000);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 4);
                                                cm.updateInfoQuest(61370, "1=1;2=1;3=1;4=1;5=1;6=1;7=1;8=1;9=1");
                                                cm.gainExp(Math.pow(cm.getLevel(), 3) / 4);
                                                cm.playerMessage(5, "你获得了2000荣耀EXP。");
                                                cm.updateInfoQuest(61331, "honor=1");
                                                cm.forceCompleteQuest(61331);
                                                cm.updateInfoQuest(61346, "act1=1;act2=1;act3=1");
                                                cm.inGameDirectionEvent_AskAnswerTime(4200);
                                                cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                              } else if (status === V++) {
                                                cm.setStandAloneMode(false);
                                                cm.warp(610060000, 0, true);
                                                cm.eventSKill(0);
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