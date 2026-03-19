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
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 846, 0);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(2560000, "oid=3594102", 944, -144, 1, 894, 994, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=3594102", "summon", 0, 0);
        cm.onTeleport(0, 3, cm.getPlayer().getId(), 759, -35);
        cm.npc_SetSpecialAction("oid=3594102", "portion1", -1, 1);
        cm.inGameDirectionEvent_MoveAction(4);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("呃……", 57, 0, false, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_MoveAction(0);
              cm.sendNormalTalk_Bottom("#face0#影子中和剂和真实之药……", 37, 2560000, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#选项只有两个。选择正确的答案，真的有那么难吗？", 37, 2560000, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#没办法。我再给你一次机会。", 37, 2560000, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("给我……机会？", 57, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Dlep5/willbreak", 100);
                        cm.npc_SetSpecialAction("oid=3594102", "portion2", 1, 1);
                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("啊，啊啊……", 57, 0, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0##fs18#好了～现在选择的时候到了。", 37, 2560000, true, true);
                            cm.effect_Voice("Voice3.img/DLep5/will/M_1-1.mp3", 100);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#喝下中和剂，变回原来的影牙，或者消失。", 37, 2560000, false, true);
                                cm.effect_Voice("Voice3.img/DLep5/will/M_2-1.mp3", 100);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#如果你愿意变回原来的影牙……我向你保证。\r\n你可以拥有想要的一切。", 37, 2560000, true, true);
                                  cm.effect_Voice("Voice3.img/DLep5/will/M_3-1.mp3", 100);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#当然，是在镜世界之中。", 37, 2560000, true, true);
                                    cm.effect_Voice("Voice3.img/DLep5/will/M_4-1.mp3", 100);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("呵，呵呵呵呵。", 57, 0, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face1#有什么……好笑的吗？", 37, 2560000, true, true);
                                          cm.effect_Voice("Voice3.img/DLep5/will/M_6-2.mp3", 100);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#fs18#废话我已经听够了。", 57, 0, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face2##fs18#什么？", 37, 2560000, true, true);
                                                cm.effect_Voice("Voice3.img/DLep5/will/M_8-5.mp3", 100);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_PlayBGM("Bgm48/EveningPrimrose", 0, 0);
                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 3000, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("欺骗朋友的事情……我做不到……", 57, 0, false, true);
                                                    cm.effect_Voice("Voice3.img/DLep5/pangM/M_9.mp3", 100);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_ProcessOnOffLayer('0', "Map/Effect3.img/DLep5/7", 0, 3000, 0, 0, 0, 4, 1);
                                                        cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                          cm.effect_Voice("Voice3.img/DLep5/pangM/M_10.mp3", 100);
                                                          cm.effect_Text(["#fn黑体##fs22#虽然最终变不成月亮……"], [50, 2200, 4, -50, -50, 1, 4, 0, 0, 0]);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                            cm.effect_Text(["#fn黑体##fs22#但是没关系。只要能看着你就好……"], [50, 2200, 4, -50, -50, 1, 4, 0, 0, 0]);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_ProcessOnOffLayer('1', "Map/Effect3.img/DLep5/8", 0, 3000, 0, 0, 1, 4, 1);
                                                              cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face1#竟然自愿变成了影子怪物……", 37, 2560000, false, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_ProcessOnOffLayer('0', '', 2, 100, 0, 0, 0, 0, 0);
                                                                    cm.fieldEffect_ProcessOnOffLayer('1', '', 2, 5000, 0, 0, 0, 0, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(10000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face1#果然像那个人说的一样吗？\r\n也许……第九次很难再糊弄过去了。", 37, 2560000, false, true);
                                                                      cm.effect_Voice("Voice3.img/DLep5/will/N_1-2.mp3", 100);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face1#不管怎样，我已经尽力了……一切都是在误差范围之内……", 37, 2560000, true, true);
                                                                        cm.effect_Voice("Voice3.img/DLep5/will/N_2-2.mp3", 100);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face1#但是……为什么呢？这种感觉……", 37, 2560000, true, true);
                                                                          cm.effect_Voice("Voice3.img/DLep5/will/N_3-2.mp3", 100);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                          } else if (status === V++) {
                                                                            cm.setStandAloneMode(false);
                                                                            cm.eventSKill(0);
                                                                            cm.dispose();
                                                                            cm.warp(307090051, 0, false);
                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                            cm.npc_LeaveField("oid=3594102");
                                                                            cm.npc_LeaveField("oid=3594102");
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
          }
        }
      }
    }
  }
}