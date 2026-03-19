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
      cm.updateInfoQuest(34125, "350=2;360=2;370=2;380=2;390=2;300=2;310=2;320=2;330=2;340=2");
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setAmbience("SoundEff.img/ArcaneRiver/waterfall", 200, 60);
      cm.npc_ChangeController(3003113, "oid=2073510", -322, 24, 22, -372, -272, 1, true, false);
      cm.npc_SetSpecialAction("oid=2073510", 'summon', 0, 0);
      cm.setNpcSpecialActionReset("oid=2073510");
      cm.npc_SetSpecialAction("oid=2073510", "lying", -1, 1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -340, 130);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
          cm.inGameDirectionEvent_PushScaleInfo(2000, 2000, 2000, -340, 70);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(3000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("卡奥，卡奥！", 57, 0, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#咳额…… 额……", 37, 3003113, true, true);
              } else {
                if (status === V++) {
                  cm.OverlapScreenDetail19(0, 1000, 1000, 1);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.setNpcSpecialActionReset("oid=2073510");
                      cm.npc_SetSpecialAction("oid=2073510", "stand2", -1, 1);
                      cm.sendNormalTalk_Bottom("#face0#……我还没有消失啊。真是太好了。我最后还有一句重要的话要对你说。", 37, 3003113, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("卡奥！", 57, 0, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#也许传达了这句话，我就要消失了。", 37, 3003113, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#…………", 37, 3003113, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#你不要太伤心。", 37, 3003113, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#这是我必须要做的事。", 37, 3003113, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#……你一定要好好记住我接下来所说的每一句话。", 37, 3003113, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#你用你的力量从阿勒玛手中守护了大家。和我不同，你可以完全接受神秘徽章的力量。", 37, 3003113, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#你沿着河走，会遇见很多不同形态的艾尔达。与此同时，你要不断收集神秘徽章，增强力量。", 37, 3003113, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#应该会有很多威胁在等着你，但是你也要记住，也会有同样多的人会帮助你。", 37, 3003113, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#我消失后，你拿着神秘徽章，跳进瀑布中。那之后……", 37, 3003113, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#呼……", 37, 3003113, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#哈…… 时间所剩无几了。以后的事情就交给你了。", 37, 3003113, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#那么，拜托了。再见，#ho#…… 请一定要消灭黑魔法师，守护好这个世界……", 37, 3003113, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.setNpcSpecialActionReset("oid=2073510");
                                                        cm.npc_SetSpecialAction("oid=2073510", "bye", 0, 0);
                                                        cm.emotion(4, 50000);
                                                        cm.inGameDirectionEvent_AskAnswerTime(2400);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_PushScaleInfo(4000, 2000, 4000, -200, 70);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                                                              cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                            } else if (status === V++) {
                                                              cm.dispose();
                                                              cm.warp(450001250, 0);
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