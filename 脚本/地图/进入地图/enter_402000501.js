var status = -1;
var selectionLog = [];
function start() {
  status = -1;
  action(1, 0, 0);
}
;
function action(f, E, e) {
  if (!cm.isQuestFinished(34813) && cm.getQuestStatus(34813) == 0) {
    action34813(f, E, e);
  } else {
    cm.dispose();
  }
}
function action34813(f, E, e) {
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
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.npc_ChangeController(3001300, "oid=916160", -1541, 11, 2, -1591, -1491, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=916160", "summon", 0, 0);
      cm.updateInfoQuest(34813, "m=1");
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -1140, 63);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(300);
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
              cm.setAmbience("SoundEff.img/illium/extract", 80, 60);
              cm.sendNormalTalk_Bottom("#face0#抵达目的地。", 37, 3001300, false, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#听说最近水晶门乱事不断？", 37, 3001306, true, true, 1);
              } else {
                if (status === V++) {
                  cm.effect_NormalSpeechBalloon('...', 1, 0, 0, 1000, 1, 118, 0, 0, 4, 3001336, null, cm.getPlayer().getId());
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face1#据传闻所说,那些幽灵已经潜入我们地区了。", 37, 3001306, false, true, 1);
                  } else {
                    if (status === V++) {
                      cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 1000, 1, 402, 0, 0, 4, 3001336, null, cm.getPlayer().getId());
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#什么,这是真的吗？那我们平民翼人的位置岂不是暴露了？", 37, 3001306, false, true, 1);
                      } else {
                        if (status === V++) {
                          cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 1000, 1, 0, 0, 0, 4, 3001336, null, cm.getPlayer().getId());
                          cm.sendNormalTalk_Bottom("#face1#不会的。听说入侵者全被围剿了,水晶门的位置迁移了。嗯……上头应该会看着办吧。", 37, 3001306, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 1000, 1, 402, 0, 0, 4, 3001336, null, cm.getPlayer().getId());
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#说得没错。这段期间我们一直躲躲藏藏,早就习惯了,放心吧。", 37, 3001306, false, true, 1);
                            } else {
                              if (status === V++) {
                                cm.effect_NormalSpeechBalloon('...', 1, 0, 0, 1000, 1, 118, 0, 0, 4, 3001336, null, cm.getPlayer().getId());
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face1#呼……不知道我们要躲到什么时候……", 37, 3001306, false, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 1000, 1, 0, 0, 0, 4, 3001336, null, cm.getPlayer().getId());
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#我反而觉得现在更自在。正如我母亲说的一样,外面太危险了……好,别闲聊了,快干活吧。", 37, 3001306, false, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 1000, 1, 402, 0, 0, 4, 3001336, null, cm.getPlayer().getId());
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#目前这附近未发现阿加特大人的行踪。要不要去其他地方找找看？", 37, 3001300, false, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face1##b阿加特#k大人？", 37, 3001306, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.effect_NormalSpeechBalloon('...', 1, 0, 0, 1000, 1, 0, 0, 0, 4, 3001336, null, cm.getPlayer().getId());
                                              cm.playSoundEffDirectly("SoundEff.img/illium/extract");
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
                                                    cm.npc_LeaveField('oid=916160');
                                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.updateInfoQuest(34813, 'm=0');
                                                      cm.updateInfoQuest(34813, "m=0;d2=1");
                                                      cm.setStandAloneMode(false);
                                                      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                      cm.setInGameDirectionMode(false, true, false);
                                                      cm.setPartner(true, 3001300, 80002330, 0);
                                                      cm.curNodeEventEnd(true);
                                                      cm.setInGameDirectionMode(true, false, false);
                                                      cm.inGameDirectionEvent_AskAnswerTime(100);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.forceCompleteQuest(34812);
                                                        cm.inGameDirectionEvent_AskAnswerTime(100);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.updateInfoQuest(34812, "exp=1");
                                                          cm.gainExp(6993);
                                                          cm.sendNormalTalk_Bottom("#face0#喂,小不点。你是替阿加特大人来跑腿的吗？", 37, 3001306, false, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#嗯？哦……有事吩咐我做吗？", 37, 3001351, true, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                              cm.setInGameDirectionMode(false, true, false);
                                                              cm.sendNormalTalk_Bottom("#face0#你别傻愣着了,倒是来帮帮我们啊。\r\n必须赶快从水晶提取出魔力……", 36, 3001306, false, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.askMenu_Bottom("#face0##fUI/tutorial.img/illium/mob1/0##fUI/tutorial.img/illium/mob2/0##fUI/tutorial.img/illium/mob3/0#\r\n你能消除大约#b20个#k这种形状的水晶吗？\r\n#b#L0#嗯,没问题。#k\r\n#b#L1#这个,有点悬……#k", 132, 3001306, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.forceStartQuest(34813, '');
                                                                  cm.sendNormalTalk_Bottom("#face0##o9101116#分布在右边区域#m402000502#那边。快去找找看吧。", 37, 3001306, false, true, 1);
                                                                } else if (status === V++) {
                                                                  cm.OnStartNavigation(402000502, 0, '', 34813);
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
                }
              }
            }
          }
        }
      }
    }
  }
}