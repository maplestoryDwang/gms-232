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
      if (cm.isQuestActive(35907) || cm.isQuestFinished(35907)) {
        cm.dispose();
        return;
      }
      cm.npc_ChangeController(1013353, 'oid=208430', -72, 86, 7, -122, -22, 0, false, 0, false);
      cm.npc_ChangeController(1013322, 'oid=208431', 420, 45, 0, 370, 470, 1, false, 0, false);
      cm.npc_ChangeController(1013323, "oid=208432", 588, 31, 0, 538, 638, 1, false, 0, false);
      cm.npc_ChangeController(1013322, "oid=208433", 720, -113, 0, 670, 770, 1, false, 0, false);
      cm.updateInfoQuest(35948, "10=h0;11=h0;02=h0;12=h0;22=h1;13=h0;14=h0;15=h0;06=h2;07=h0;16=h0;08=h0;17=h0;09=h0;19=h0");
      cm.updateInfoQuest(35948, "10=h0;11=h0;02=h0;12=h0;22=h1;13=h0;23=h1;14=h0;15=h0;06=h2;07=h0;16=h0;08=h0;17=h0;09=h0;19=h0");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_PushScaleInfo(0, 1, 384000, 0, 110080, 23040);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.effect_NormalSpeechBalloon("怎么回事？好可怕。", 1, 0, 0, 1000, 0, 0, 0, 0, 4, 1013323, null, cm.getPlayer().getId());
            cm.effect_NormalSpeechBalloon("奇怪的人？", 1, 0, 0, 1000, 0, 0, 0, 0, 4, 1013322, null, cm.getPlayer().getId());
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else {
            if (status === V++) {
              cm.effect_NormalSpeechBalloon('起来,我们回家吧。', 1, 0, 0, 1000, 0, 0, 0, 0, 4, 1013323, null, cm.getPlayer().getId());
              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
              cm.inGameDirectionEvent_PushScaleInfo(0, 1, 256000, -256, -129, -129);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(300);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                    cm.updateInfoQuest(35948, "10=h0;11=h0;02=h0;12=h0;22=h0;13=h0;23=h1;14=h0;15=h0;06=h2;07=h0;16=h0;08=h0;17=h0;09=h0;19=h0");
                    cm.updateInfoQuest(35948, "10=h0;11=h0;02=h0;12=h0;22=h0;13=h0;23=h0;14=h0;15=h0;06=h2;07=h0;16=h0;08=h0;17=h0;09=h0;19=h0");
                    cm.inGameDirectionEvent_PushScaleInfo(0, 1, 384000, 0, 110080, 23040);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_PushScaleInfo(512000, 1, 384000, 512000, -30720, 23295);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(2500);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#呵呵,喂,大家出来吧。\r\n这个人是我的救命恩人。", 37, 1013353, false, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#我的朋友们都躲起来了。今天怎么这么怕羞？\r\n可能是因为好久没外地人来了。", 37, 1013353, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#但是却都没有逃走,真奇怪。\r\n嗯……可能是因为几天前的怪声而变得敏感起来了。", 37, 1013353, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#啊,差点忘了说了。\r\n卡鲁帕们之所以会害怕废墟,就是因为那种怪声。", 37, 1013353, false, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#经常会听到“咚！”的可怕的声音。每当那时,人们就会扑通一声跌坐在地上。\r\n感觉就像听到了鬼怪的声音一样。", 37, 1013353, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#好了,我们到了,冒险家。\r\n前面就是我们卡鲁帕的村庄。", 37, 1013353, false, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                              cm.inGameDirectionEvent_PushScaleInfo(0, 1, 256000, -256, -129, -129);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                  } else if (status === V++) {
                                                    cm.setStandAloneMode(false);
                                                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                    cm.setInGameDirectionMode(false, true, false);
                                                    cm.forceCompleteQuest(35906);
                                                    cm.gainExp(847);
                                                    cm.updateInfoQuest(35948, "10=h0;11=h0;02=h0;12=h0;22=h1;13=h0;23=h0;14=h0;15=h0;06=h2;07=h0;16=h0;08=h0;17=h0;09=h0;19=h0");
                                                    cm.updateInfoQuest(35948, "10=h0;11=h0;02=h0;12=h0;22=h1;13=h0;23=h1;14=h0;15=h0;06=h2;07=h0;16=h0;08=h0;17=h0;09=h0;19=h0");
                                                    cm.updateInfoQuest(35948, "10=h0;11=h0;02=h0;12=h0;22=h1;13=h0;23=h1;14=h0;15=h0;06=h0;07=h0;16=h0;08=h0;17=h0;09=h0;19=h0");
                                                    cm.updateInfoQuest(35948, "10=h0;11=h0;02=h1;12=h0;22=h1;13=h0;23=h1;14=h0;15=h0;06=h0;07=h0;16=h0;08=h0;17=h0;09=h0;19=h0");
                                                    cm.dispose();
                                                    cm.warp(100051000, 1, false);
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