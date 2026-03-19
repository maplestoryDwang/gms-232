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
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.npc_ChangeController(3001690, "oid=3015380", 243, 20, 2, 193, 293, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=3015380", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 255, 18);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#那个，老人家，喝点水吧。", 36, 3001674 + cm.getPlayer().getGender(), false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（老人家艰难地接过水桶，\r\n然后似是觉得有些妨碍到喝水，脱下了斗笠，不过……）", 36, 3001674 + cm.getPlayer().getGender(), true, true);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 2);
                cm.inGameDirectionEvent_AskAnswerTime(1600);
              } else {
                if (status === V++) {
                  cm.fieldEffect_ProcessOnOffLayer('17', "Effect/Direction9.img/HoyoungStory/17", 0, 500, 0, -53, 1, 4, 0, -1, 0, 0, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_ProcessOnOffLayer('18', "Effect/Direction9.img/HoyoungStory/18", 0, 500, 0, -53, 1, 4, 0, -1, 0, 0, 0);
                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/surprise", 100);
                    cm.fieldEffect_ProcessOnOffLayer('17', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face8#额啊！", 36, 3001674 + cm.getPlayer().getGender(), false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face2##fc0xFF25f1ca#额啊！", 36, 3001651, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face8#你……你是！？", 36, 3001674 + cm.getPlayer().getGender(), true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#谢谢……真的要谢谢你，侠义心肠的道士，\r\n你真的太厉害了。", 36, 3001655, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#你是要装作若无其事吗！？", 36, 3001674 + cm.getPlayer().getGender(), true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#这个剧情……我怎么觉得这么熟悉呢。", 36, 3001651, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#我知道这么说有些厚颜无耻，不过既然你都要帮忙了，\r\n能不能再答应我一个请求？", 36, 3001655, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face11#嗯，不行。", 36, 3001674 + cm.getPlayer().getGender(), true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#那至少聊一聊……请你听我发发牢骚。", 36, 3001655, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_ProcessOnOffLayer('18', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else {
                                          if (status === V++) {
                                            cm.updateInfoQuest(39598, "02=h0;11=h0;03=h1;31=h0;23=h0;32=h0;05=h0;24=h0;06=h0;15=h0;33=h0;25=h0;34=h1;16=h1;08=h0;80=h1;35=h0;81=h1;27=h0;09=h0;82=h1;28=h0;29=h0;84=h0;85=h0");
                                            cm.updateInfoQuest(39598, "11=h0;31=h0;32=h0;33=h0;34=h1;15=h0;35=h0;16=h1;02=h0;03=h1;80=h1;23=h0;81=h1;24=h0;05=h0;82=h1;25=h0;06=h0;84=h0;27=h0;08=h0;85=h0;28=h0;09=h1;29=h0");
                                            cm.forceCompleteQuest(39534);
                                            cm.gainExp(5102);
                                            cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                            cm.gainItem(4036583, -30);
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
                                                  cm.warp(410000202, 0, false);
                                                  cm.eventSKill(0);
                                                  cm.setInGameDirectionMode(false, true, false);
                                                  cm.npc_LeaveField("oid=3015380");
                                                  cm.npc_LeaveField("oid=3015380");
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