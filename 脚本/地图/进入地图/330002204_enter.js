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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(1530140, "oid=36005003", 680, 58, 2, 630, 730, 0, true, false);
      cm.npc_SetSpecialAction("oid=36005003", 'summon', 0, 0);
      cm.npc_ChangeController(1530070, "oid=36005004", 940, 58, 3, 890, 990, 1, true, false);
      cm.npc_SetSpecialAction("oid=36005004", 'summon', 0, 0);
      cm.npc_ChangeController(1530060, "oid=36005005", 847, 58, 3, 797, 897, 1, true, false);
      cm.npc_SetSpecialAction("oid=36005005", "summon", 0, 0);
      cm.npc_ChangeController(1530110, "oid=36005006", 600, 58, 2, 550, 650, 0, true, false);
      cm.npc_SetSpecialAction("oid=36005006", 'summon', 0, 0);
      cm.npc_ChangeController(1530100, "oid=36005007", 300, 58, 1, 250, 350, 0, true, false);
      cm.npc_SetSpecialAction("oid=36005007", 'summon', 0, 0);
      cm.npc_ChangeController(1530120, "oid=36005008", 500, 58, 1, 450, 550, 0, true, false);
      cm.npc_SetSpecialAction("oid=36005008", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=36005003", 'shy', -1, 1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_同时移动镜头和人(2, 350);
          cm.inGameDirectionEvent_AskAnswerTime(2500);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("你来啦，#h0#。", 37, 1530070, false, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushMoveInfo(0, 150, 680, 58);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(4803);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("所以，弗朗西斯……\r\n给奥尔卡写那封威胁信的人是你？", 37, 1530060, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#我都说了，那不是威胁信，而是情书！因为我是那种一紧张手心就会出很多汗的体质，所以弄得墨水都晕染开了……那个，你可以替我向老师保密吧？", 37, 1530140, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face1#太不像话了！不论给谁看，那都是一封#r精神病患者#k写的信。", 37, 1530110, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#啊，我都说不是了！原来的内容是这样的。\r\n为了证明我的清白，我把信又重新写了一遍，要不要看看？", 37, 1530140, true, true);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(1600);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_ProcessOnOffLayer('letter', "Map/Effect2.img/spinOff1/letter2", 0, 1500, 0, 0, 12, 4, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_ProcessOnOffLayer("letter2", "Map/Effect2.img/spinOff1/letter1", 0, 1500, 0, 0, 13, 4, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#怎么样？怎么样？", 37, 1530140, false, true);
                              } else {
                                if (status === V++) {
                                  cm.setNpcSpecialActionReset("oid=36005003");
                                  cm.fieldEffect_ProcessOnOffLayer("letter", '', 2, 0, 0, 0, 0, 0, 0);
                                  cm.fieldEffect_ProcessOnOffLayer('letter2', '', 2, 1500, 0, 0, 0, 0, 0);
                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(1600);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_PlayBGM("Bgm38.img/LifeIsComedy", 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(5000);
                                    cm.effect_NormalSpeechBalloon('...', 1, 0, 0, 2000, 1530070, cm.getPlayer().getId());
                                    cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 2000, 1530060, cm.getPlayer().getId());
                                    cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 2000, 1530110, cm.getPlayer().getId());
                                    cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 2000, 1530100, cm.getPlayer().getId());
                                    cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 2000, 1530120, cm.getPlayer().getId());
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#那个……你觉得这种情书会有女生买账吗？", 37, 1530120, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("还不如威胁信呢，喂。", 37, 1530100, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("你怎么这样……至少也不该写这么多错别字啊……", 37, 1530110, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_SetSpecialAction("oid=36005003", 'shy', -1, 1);
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#怎，怎么可能？我觉得我的情书可是非常完美的呢？！", 37, 1530140, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else if (status === V++) {
                                                cm.forceStartQuest(32768, '');
                                                cm.forceCompleteQuest(32768);
                                                cm.dispose();
                                                cm.warp(330001100, 0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;