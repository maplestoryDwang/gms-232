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
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.userSetFieldFloating(940204012, 5, 5, 20);
      cm.onCameraTilt(8, 5000);
      cm.npc_ChangeController(3003405, "oid=2009014", -440, -80, 12, -490, -390, 1, true, false);
      cm.npc_SetSpecialAction("oid=2009014", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 142, 300);
    } else {
      if (status === V++) {
        cm.npc_SetForceMove("oid=2009014", 1, 400, 80);
        cm.Npc_Fadeout("oid=2009014", 0, 1800);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.Npc_Fadeout("oid=2009014", 100, 1800);
            cm.sendNormalTalk_Bottom("#face0#时间……还没到……", 37, 3003405, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#记忆中的那位马上就要出现了。夺走女神伦娜的力量，返回过去……", 37, 3003405, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#如果那位出现了，就能重新找回力量，啊……肉体……", 37, 3003405, true, true);
              } else {
                if (status === V++) {
                  cm.Npc_Fadeout("oid=2009014", 0, 1800);
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.onCameraTilt(5, 500);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_PlayBGM("Bgm26.img/DarkMage", 0, 0);
                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.userSetFieldFloating(940204012, 0, 0, 0);
                        cm.onCameraTilt(0, 0);
                        cm.fieldEffect_ProcessOnOffLayer('00', "Map/Effect3.img/morass/Arkarium/1", 0, 1000, 0, -80, 12, 4, 1);
                        cm.fieldEffect_ProcessOnOffLayer('01', "Map/Effect3.img/morass/Arkarium/0", 0, 1000, 0, -80, 12, 4, 1);
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#黑、黑魔法师大人！！", 37, 3003405, false, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(3500);
                          } else {
                            if (status === V++) {
                              cm.effect_Text(["#fn黑体##fs25##r阿卡伊勒..."], [70, 2200, 4, 0, 0, 1, 4, 0, 0, 0]);
                              cm.sendNormalTalk_Bottom("#face0#伟、伟大的人啊，请再给我一次机会……", 37, 3003405, false, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(3500);
                              } else {
                                if (status === V++) {
                                  cm.effect_Text(["#fn黑体##fs25##r黑魔法师让我告诉你。"], [70, 2200, 4, 0, 0, 1, 4, 0, 0, 0]);
                                  cm.sendNormalTalk_Bottom("#face0#嗯？", 37, 3003405, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(3500);
                                  } else {
                                    if (status === V++) {
                                      cm.effect_Text(["#fn黑体##fs25##r辛苦了……现在可以休息了……"], [70, 2200, 4, 0, 0, 1, 4, 0, 0, 0]);
                                      cm.sendNormalTalk_Bottom("#face0#！！！", 37, 3003405, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Falldown", 100);
                                            cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 300, 0, 0, 0, 0, 0);
                                            cm.fieldEffect_ProcessOnOffLayer('01', '', 2, 300, 0, 0, 0, 0, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_SetHideEffect(0);
                                              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                            } else if (status === V++) {
                                              cm.npc_LeaveField("oid=2009014");
                                              cm.dispose();
                                              cm.warp(450006040, 1, true);
                                              cm.setInGameDirectionMode(false, true, false);
                                              cm.setStandAloneMode(false);
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