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
      cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.npc_ChangeController(3005102, "oid=620806", -40, 290, 3, -90, 10, 1, true, 0, false);
      cm.npc_SetSpecialAction('oid=620806', 'summon', 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -453, 286);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -128, 298);
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
            cm.inGameDirectionEvent_同时移动镜头和人(2, 200, 0);
            cm.sendNormalTalk_Bottom("#face0#格里！！！", 37, 3005100, false, true, 1);
          } else {
            if (status === V++) {
              cm.effect_Voice("Voice6.img/lara/9/Female/1", 100);
              cm.fieldEffect_PlayBGM("Bgm57/LifeIsFullOfHappiness", 0, 0);
              cm.sendNormalTalk_Bottom("#face0#……？", 37, 3005102, true, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#你一定很好奇，我为什么会对别人深信不疑吧？", 37, 3005100, true, true, 1);
              } else {
                if (status === V++) {
                  cm.effect_Voice("Voice6.img/lara/9/Female/3", 100);
                  cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(1600);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_Monologue("奶奶……", 0);
                  } else {
                    if (status === V++) {
                      cm.effect_Voice("Voice6.img/lara/9/Female/4", 100);
                      cm.inGameDirectionEvent_Monologue("\r\n\r\n啦啦，你哭什么？", 1);
                    } else {
                      if (status === V++) {
                        cm.effect_Voice("Voice6.img/lara/9/Female/5", 100);
                        cm.inGameDirectionEvent_Monologue("朋友又骗了我，\r\n好伤心啊，我怎么一天到晚总是上当呢？", 0);
                      } else {
                        if (status === V++) {
                          cm.effect_Voice("Voice6.img/lara/9/Female/6", 100);
                          cm.inGameDirectionEvent_Monologue("\r\n\r\n啦啦，眼见不一定为实。", 0);
                        } else {
                          if (status === V++) {
                            cm.effect_Voice("Voice6.img/lara/9/Female/7", 100);
                            cm.inGameDirectionEvent_Monologue("如果你能坚持相信……", 1);
                          } else {
                            if (status === V++) {
                              cm.effect_Voice("Voice6.img/lara/9/Female/8", 100);
                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(1600);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#她说过，总有一天，就有人会回应我的信任。", 37, 3005100, false, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.effect_Voice("Voice6.img/lara/9/Female/9", 100);
                                    cm.sendNormalTalk_Bottom("#face0#所以你试着信我一回怎么样？", 37, 3005100, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.effect_Voice("Voice6.img/lara/9/Female/10", 100);
                                      cm.sendNormalTalk_Bottom("#face0#下次如果你遇到了难事，到时候我一定会帮忙的。", 37, 3005100, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.effect_Voice("Voice6.img/lara/9/Female/11", 100);
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#……", 37, 3005102, false, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#行了，我还以为你要说什么呢。", 37, 3005102, false, true, 1);
                                            } else if (status === V++) {
                                              cm.effect_Voice("Voice6.img/lara/9/Female/13", 100);
                                              cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                              cm.setInGameDirectionMode(false, true, false);
                                              cm.setStandAloneMode(false);
                                              cm.updateInfoQuest(36200, "50=h0;60=h1;51=h0;70=h0;52=h0;62=h1;53=h1;63=h1;64=h1;73=h0;55=h0;night=0;57=h0;76=h0;59=h0;77=h0;87=h1;78=h0;88=h1;set=1");
                                              cm.forceStartQuest(36223, '');
                                              cm.forceCompleteQuest(36223);
                                              cm.gainExp(3235);
                                              cm.npc_LeaveField("oid=620806");
                                              cm.dispose();
                                              cm.warp(410004003, 1, true);
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