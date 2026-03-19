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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 3930, 100);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(100);
      } else {
        if (status === V++) {
          cm.npc_ChangeController(2155104, "oid=45435012", 3921, 0, 26, 3871, 3971, 1, true, 0, false);
          cm.npc_SetSpecialAction("oid=45435012", "summon", 0, 0);
          cm.npc_ChangeController(2155110, "oid=45435013", 4050, 0, 26, 4000, 4100, 1, false, 0, false);
          cm.npc_SetSpecialAction("oid=45435013", "summon", 0, 0);
          cm.npc_setForceFlip("oid=45435012", 1);
          cm.sendNormalTalk_Bottom("嗯……有超级人造人。\r\n而且我还在那条通道里待过……\r\n对了！这是超级人造人的制造号码板！", 37, 2155104, false, true);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 500, 0);
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.fieldEffect_ProcessOnOffLayer("back", "Map/Effect2.img/FieldgraveStory/illust0", 0, 500, 0, 0, 12, 4, 1, -1, 0, 0, 0);
              cm.fieldEffect_ProcessOnOffLayer("pan1", "Map/Effect2.img/FieldgraveStory/illust1", 0, 500, 0, 0, 12, 4, 1, -1, 0, 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1500);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("这不是100000号。\r\n如果把这个旋转过来，把点放在下方…", 37, 2155104, false, true);
              } else {
                if (status === V++) {
                  cm.fieldEffect_ProcessOnOffLayer('pan1', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_ProcessOnOffLayer("pan2", "Map/Effect2.img/FieldgraveStory/illust2", 0, 500, 0, 0, 12, 4, 1, -1, 0, 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#制造号码000001。第一个超级人造人。\r\n主机的操作员…\r\n这好像是她的物品？", 37, 2155121, false, true);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_ProcessOnOffLayer('back', '', 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                        cm.fieldEffect_ProcessOnOffLayer("pan2", '', 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_PushScaleInfo(2500, 0, 1600, 0, 3930, 100);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_PlayBGM("Bgm40.img/SecretMissionBase", 0, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(100);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/heart", 100);
                                cm.npc_SetSpecialAction("oid=45435012", "pain", -1, 1);
                                cm.inGameDirectionEvent_AskAnswerTime(300);
                              } else {
                                if (status === V++) {
                                  cm.setNpcSpecialActionReset("oid=45435012");
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.npc_SetSpecialAction("oid=45435012", "pain", -1, 1);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.setNpcSpecialActionReset("oid=45435012");
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_SetSpecialAction("oid=45435012", 'pain', -1, 1);
                                        cm.sendNormalTalk_Bottom("#face2#这东西为什么在我…\r\n啊！\r\n额…不行，如果再这样的话…", 37, 2155121, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_PushScaleInfo(300, 0, 2000, 0, 3930, 100);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face2#不行，该死。\r\n为什么偏偏这时又…\r\n快想起来… 她究竟怎么…拜托！呃…啊啊啊！", 37, 2155121, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("(该死，还是先返回村庄吧。)", 57, 0, true, true);
                                              } else if (status === V++) {
                                                cm.eventSKill(0);
                                                cm.warp(310070000, 4, false);
                                                cm.setInGameDirectionMode(false, true, false);
                                                cm.forceStartQuest(39208, '');
                                                cm.npc_LeaveField("oid=45435012");
                                                cm.npc_LeaveField("oid=45435012");
                                                cm.npc_LeaveField("oid=45435013");
                                                cm.npc_LeaveField("oid=45435013");
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