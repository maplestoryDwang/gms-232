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
      cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
      cm.npc_ChangeController(3005108, "oid=620845", -140, 271, 2, -190, -90, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=620845", "summon", 0, 0);
      cm.npc_ChangeController(3005128, "oid=620846", -352, 276, 2, -402, -302, 0, false, 0, false);
      cm.npc_SetSpecialAction('oid=620846', "summon", 0, 0);
      cm.npc_ChangeController(3005120, "oid=620847", -222, 263, 2, -272, -172, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=620847", 'summon', 0, 0);
      cm.npc_ChangeController(3005121, "oid=620848", -55, 263, 3, -105, -5, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=620848", "summon", 0, 0);
      cm.npc_ChangeController(3005115, "oid=620849", -416, 263, 1, -466, -366, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=620849", 'summon', 0, 0);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -190, 292);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.fieldEffect_PlayBGM("SoundEff.img/ArcaneRiver/thrill", 0, 0);
            cm.sendNormalTalk_Bottom("#face0#你知道我亲自驾临意味着什么吧？", 37, 3005108, false, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#嗯，这是当然……", 37, 3005128, true, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#可这税说涨就涨……我还需要点时间。", 37, 3005128, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#多亏了我，你们才能生活在如此富饶的村庄。", 37, 3005108, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#你该不会想要放弃好不容易置办的房子，活成后巷那帮叫花子的样子吧？", 37, 3005108, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#妈妈，什么是叫花子？", 37, 3005115, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#你的妈妈是个可以不信守承诺的人。", 37, 3005108, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face1#……呜呜。", 37, 3005115, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#今天我就大人有大量，破例饶你这一次。", 37, 3005108, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#谢，谢谢，领主大人！", 37, 3005128, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.npc_setForceFlip("oid=620845", 1);
                                cm.npc_setForceFlip("oid=620847", 1);
                                cm.npc_setForceFlip("oid=620848", 1);
                                cm.npc_SetForceMove('oid=620845', 1, 100, 150);
                                cm.npc_SetForceMove("oid=620847", 1, 100, 150);
                                cm.npc_SetForceMove("oid=620848", 1, 100, 150);
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.Npc_Fadeout("oid=620845", 0, 1000);
                                  cm.Npc_Fadeout("oid=620847", 0, 1000);
                                  cm.Npc_Fadeout("oid=620848", 0, 1000);
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else if (status === V++) {
                                  cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                  cm.setInGameDirectionMode(false, true, false);
                                  cm.setStandAloneMode(false);
                                  cm.forceStartQuest(36225, '');
                                  cm.forceCompleteQuest(36225);
                                  cm.gainExp(3615);
                                  cm.updateInfoQuest(36200, "50=h0;60=h1;51=h0;70=h0;52=h0;62=h1;53=h1;63=h0;64=h0;73=h0;55=h0;65=h1;night=0;57=h0;76=h0;59=h0;77=h0;87=h0;78=h0;88=h0;set=1");
                                  cm.OnStartNavigation(410004000, 1, "3005165", 36226);
                                  cm.npc_LeaveField("oid=620845");
                                  cm.npc_LeaveField("oid=620846");
                                  cm.npc_LeaveField("oid=620847");
                                  cm.npc_LeaveField('oid=620848');
                                  cm.npc_LeaveField("oid=620849");
                                  cm.dispose();
                                  cm.warp(410004000, 0, true);
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