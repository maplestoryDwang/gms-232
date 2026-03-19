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
      cm.Hidden_background('mark', 1, 0, 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 700, 0, 0, -80);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(50);
      } else {
        if (status === V++) {
          cm.npc_ChangeController(3002121, "oid=37993522", 0, -35, 1, -50, 50, 1, false, 0, false);
          cm.npc_SetSpecialAction("oid=37993522", "summon", 0, 0);
          cm.npc_ChangeController(3002118, "oid=37993523", 810, 85, 2, 760, 860, 1, false, 1000, false);
          cm.npc_SetSpecialAction("oid=37993523", "summon", 0, 0);
          cm.npc_ChangeController(3002118, "oid=37993524", 700, 85, 2, 650, 750, 1, false, 1000, false);
          cm.npc_SetSpecialAction("oid=37993524", "summon", 0, 0);
          cm.npc_ChangeController(3002118, "oid=37993525", 590, 85, 7, 540, 640, 1, false, 1000, false);
          cm.npc_SetSpecialAction("oid=37993525", "summon", 0, 0);
          cm.npc_ChangeController(3002119, "oid=37993526", 390, 85, 7, 340, 440, 1, false, 1000, false);
          cm.npc_SetSpecialAction("oid=37993526", "summon", 0, 0);
          cm.npc_ChangeController(3002118, "oid=37993527", -380, 85, 4, -430, -330, 0, false, 1000, false);
          cm.npc_SetSpecialAction("oid=37993527", "summon", 0, 0);
          cm.npc_ChangeController(3002118, "oid=37993528", -490, 85, 4, -540, -440, 0, false, 1000, false);
          cm.npc_SetSpecialAction("oid=37993528", 'summon', 0, 0);
          cm.npc_ChangeController(3002118, "oid=37993529", -600, 85, 4, -650, -550, 0, false, 1000, false);
          cm.npc_SetSpecialAction("oid=37993529", "summon", 0, 0);
          cm.npc_ChangeController(3002118, "oid=37993530", -710, 85, 3, -760, -660, 0, false, 1000, false);
          cm.npc_SetSpecialAction("oid=37993530", "summon", 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(50);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushScaleInfo(3000, 1000, 3000, 0, -50);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(3000);
              } else {
                if (status === V++) {
                  cm.setNpcSpecialActionReset("oid=37993522");
                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/foxvalley/npc_fox", 100);
                  cm.npc_SetSpecialAction("oid=37993522", "change", 0, 1);
                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                } else {
                  if (status === V++) {
                    cm.npc_ChangeController(3002120, "oid=37994564", 0, -35, 1, -50, 50, 1, true, false);
                    cm.npc_SetSpecialAction("oid=37994564", "summon", 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(100);
                  } else {
                    if (status === V++) {
                      cm.npc_LeaveField("oid=37993522");
                      cm.npc_LeaveField("oid=37993522");
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.npc_SetSpecialAction("oid=37994564", "sleepy", 0, 1);
                        cm.sendNormalTalk_Bottom('#face4#啊啊～', 37, 3002120, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face1#爱哭鬼长大了。", 37, 3002120, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face2#哎呀，好久没从沉睡中醒来了。", 37, 3002120, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom('#face0#抱歉。', 37, 3002119, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face1#啊～既然起来了，就应该去调查一下到底发生了什么事。", 37, 3002120, true, true);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cadena/appear", 100);
                                  cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                  cm.Hidden_background('mark', 1, 1, 1, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(800);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face5#……！", 37, 3002120, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/DLep4/blow", 100);
                                      cm.sendNormalTalk_Bottom("#face0#啊！那个？", 37, 3002119, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(100);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_PlayBGM("Bgm45.img/Time Is Gold", 0, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(800);
                                        } else {
                                          if (status === V++) {
                                            cm.Hidden_background("mark", 1, 0, 0, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_PushScaleInfo(5500, 2000, 5500, 0, 70);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face5#那么……召唤乌云……", 37, 3002120, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face5#遮蔽我视线的……", 37, 3002120, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face5#看来……必须去见见上面那些老头子们了。", 37, 3002120, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_PushScaleInfo(6000, 2000, 6000, 0, -430);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_SetHideEffect(0);
                                                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                              } else if (status === V++) {
                                                                cm.dispose();
                                                                cm.warp(410000100, 0);
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
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;