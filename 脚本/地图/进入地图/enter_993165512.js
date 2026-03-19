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
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.Hidden_background("night", 1, 0, 0, 0);
      cm.monadForceMove('night', 0, 0);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(3005103, "oid=620351", -200, 200, 1, -250, -150, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=620351", "summon", 0, 0);
      cm.npc_ChangeController(3005108, 'oid=620352', -365, 200, 1, -415, -315, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=620352", 'summon', 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -188, 218);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Lara/tear", 100);
          cm.inGameDirectionEvent_AskAnswerTime(1500);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face3#不是的！不是这幅画！！！", 37, 3005108, false, true, 1);
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
                  cm.sendNormalTalk_Bottom("#face3#我想要的画不是这样的！", 37, 3005108, false, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face3#更美丽，更奢华，更完美的……！", 37, 3005108, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#不过……时间给的也不充裕……", 37, 3005103, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face3#我特地抽出宝贵的时间来到这里，可不是为了听你辩解的！", 37, 3005108, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face3#我难道没有把你需要的东西都提供给你吗！", 37, 3005108, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom('#face0#……', 37, 3005103, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#领主大人，若总是欲壑难填、 贪得无厌……", 37, 3005103, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#也许有朝一日，这贪心终究会摧毁了领主大人。", 37, 3005103, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#哼，别以为你可以直接和我交易，\r\n就足以在我面前大放厥词。", 37, 3005108, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face1#只要是我想要的，我都能得到。", 37, 3005108, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else if (status === V++) {
                                      cm.inGameDirectionEvent_SetHideEffect(0);
                                      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                      cm.setInGameDirectionMode(false, true, false);
                                      cm.setStandAloneMode(false);
                                      cm.forceStartQuest(36220, '');
                                      cm.forceCompleteQuest(36220);
                                      cm.gainExp(2474);
                                      cm.updateInfoQuest(36200, "50=h0;60=h1;51=h0;70=h0;52=h0;62=h1;53=h1;63=h0;64=h1;73=h0;55=h0;night=0;57=h0;76=h0;59=h0;77=h0;87=h1;78=h0;88=h1;set=1");
                                      cm.updateInfoQuest(36200, "50=h0;60=h1;51=h0;70=h0;52=h0;62=h1;53=h1;63=h0;64=h1;73=h1;55=h0;night=0;57=h0;76=h0;59=h0;77=h0;87=h1;78=h0;88=h1;set=1");
                                      cm.npc_LeaveField("oid=620351");
                                      cm.npc_LeaveField('oid=620352');
                                      cm.dispose();
                                      cm.warp(410004001, 0, true);
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