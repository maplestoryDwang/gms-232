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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(3004850, "oid=680071", -138, 592, 76, -188, -88, 0, true, 0, false);
      cm.npc_SetSpecialAction('oid=680071', "summon", 0, 0);
      cm.npc_ChangeController(3004860, "oid=680072", 155, 468, 13, 105, 205, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=680072", "summon", 0, 0);
      cm.npc_ChangeController(3004860, "oid=680073", 360, 468, 3, 310, 410, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=680073", 'summon', 0, 0);
      cm.npc_ChangeController(3004860, "oid=680074", 227, 633, 45, 177, 277, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=680074", "summon", 0, 0);
      cm.npc_ChangeController(3004860, "oid=680075", 434, 633, 47, 384, 484, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=680075", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 12, 628);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
        cm.sendNormalTalk_Bottom("#face3#我会让他亲口把那些烦恼全都说出来的。\r\n等着瞧吧。", 36, 3004851, false, true, 1);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face3#不是开了无线电发射机嘛，沃莉……。\r\n都能听见，你个笨蛋……。", 36, 3004850, false, true, 1);
          } else {
            if (status === V++) {
              cm.npc_SetSpecialAction('oid=680071', "special6", -1, 1);
              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1200);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1400);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face3#哈啊……。", 36, 3004850, false, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face3#好吧……也许\r\n是我太敏感了。反正都是过去的事了！", 36, 3004850, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face3#不会有事的。", 36, 3004850, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face3#什么事都……", 36, 3004850, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                          } else {
                            if (status === V++) {
                              cm.setAmbience("SoundEff.img/sellas/soma", 100, 60);
                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face3#……。", 36, 3004850, false, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face3#又吃了一口。", 36, 3004850, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else if (status === V++) {
                                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                    cm.forceCompleteQuest(37915);
                                    cm.gainExp(265476362);
                                    cm.updateInfoQuest(37900, "00=h0;10=h0;01=h0;11=h0;20=h0;02=h1;12=h0;21=h0;03=h0;13=h1;04=h0;14=h0;05=h0;41=h0;15=h1;06=h0;24=h1;07=h1;25=h1;17=h0;09=h0;w2=open");
                                    cm.updateInfoQuest(37900, "00=h0;10=h0;01=h0;11=h0;20=h0;02=h1;12=h0;21=h0;03=h0;13=h1;04=h0;14=h0;05=h0;41=h0;15=h0;06=h0;24=h1;07=h1;25=h1;17=h0;09=h0;w2=open");
                                    cm.npc_LeaveField("oid=680071");
                                    cm.npc_LeaveField("oid=680072");
                                    cm.npc_LeaveField('oid=680073');
                                    cm.npc_LeaveField("oid=680074");
                                    cm.npc_LeaveField("oid=680075");
                                    cm.dispose();
                                    cm.warp(450016100, 0, false);
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