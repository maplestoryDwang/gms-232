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
      cm.npc_ChangeController(3004850, "oid=679157", -300, 538, 19, -350, -250, 1, true, 0, false);
      cm.npc_SetSpecialAction('oid=679157', "summon", 0, 0);
      cm.npc_ChangeController(3004851, 'oid=679158', -428, 538, 19, -478, -378, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=679158", "summon", 0, 0);
      cm.npc_ChangeController(3004863, "oid=679159", 758, 578, 3, 708, 808, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=679159", "summon", 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -500, 538);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -402, 613);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/esfera/waterdrop", 3000);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face2#噗噜！噗噜噜噜！", 36, 3004850, false, true, 1);
        } else {
          if (status === V++) {
            cm.npc_SetSpecialAction("oid=679157", 'special6', -1, 1);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1400);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom('……。', 56, 0, false, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face1#……。", 36, 3004851, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face1#……。咳咳。", 36, 3004850, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face1#对不起。我可能倒水倒得有点多。", 36, 3004851, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom('休麦，你没事吧？', 56, 0, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#嗯……幸，幸好仪表盘正常。不要紧，可能是一时吓到了。", 36, 3004850, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom('#face0#……。', 36, 3004850, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face2#话说那个……", 36, 3004851, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 714, 800);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_PlayBGM("Ambience.img/WSappear_loop", 0, 0);
                                      cm.sendNormalTalk_Bottom("#face2#一艘艘舰船在不断地坠落。", 36, 3004851, false, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face3#……。", 36, 3004850, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(4000);
                                        } else {
                                          if (status === V++) {
                                            cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -402, 613);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face2#眼下可能有人在等待救援，我想我们应该展开搜索。", 36, 3004851, false, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face3#等等，这我不能批准。", 36, 3004850, true, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face2#诶？为什么？", 36, 3004851, true, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face3#你听说过投入如此众多船只的大规模作战吗？", 36, 3004850, true, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("确实……我没听说过那样的作战行动。", 56, 0, true, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face3#就算有过我们不知道的作战，在埃斯佩拉上空坠毁的船只也不可能已经沉到了这里。", 36, 3004850, true, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face2#那么，那个是什么？", 36, 3004851, true, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face3# 你回想下莫拉斯，那不是出现了许多实际不存在的东西吗。", 36, 3004850, true, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom('啊……！', 56, 0, true, true, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face2#但是好奇怪。\r\n莫拉斯是受塔纳的影响诞生的世界，可这个……。", 36, 3004851, true, true, 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face3#不管怎样，搜索先到此为止吧。\r\n我要立即回总部报告。潜水艇状态也不乐观。", 36, 3004850, true, true, 1);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#话说回来，这艘潜水艇还挺能扛的！\r\n受到了那么强烈的冲击呢。", 36, 3004851, true, true, 1);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face3#是啊。他在部队的时候那么爱捣乱……", 36, 3004850, true, true, 1);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 714, 800);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/tilt", 128);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom('#face1#……。', 36, 3004851, false, true, 1);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom('……。', 56, 0, true, true, 1);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                            } else if (status === V++) {
                                                                                              cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                              cm.setInGameDirectionMode(false, true, false);
                                                                                              cm.setStandAloneMode(false);
                                                                                              cm.forceCompleteQuest(37911);
                                                                                              cm.gainExp(132738181);
                                                                                              cm.updateInfoQuest(37900, "00=h0;10=h2;01=h0;11=h0;20=h0;02=h1;12=h0;21=h0;03=h0;04=h2;05=h0;41=h0;06=h0;24=h1;25=h1;17=h0;09=h0;w2=open");
                                                                                              cm.updateInfoQuest(37900, "00=h0;10=h2;01=h0;11=h0;20=h0;02=h1;12=h0;21=h0;03=h0;04=h0;05=h0;41=h0;06=h0;24=h1;25=h1;17=h0;09=h0;w2=open");
                                                                                              cm.updateInfoQuest(37900, "00=h0;10=h0;01=h0;11=h0;20=h0;02=h1;12=h0;21=h0;03=h0;04=h0;05=h0;41=h0;06=h0;24=h1;25=h1;17=h0;09=h0;w2=open");
                                                                                              cm.updateInfoQuest(37900, "00=h0;10=h0;01=h0;11=h0;20=h0;02=h1;12=h0;21=h0;03=h0;13=h1;04=h0;05=h0;41=h0;06=h0;24=h1;25=h1;17=h0;09=h0;w2=open");
                                                                                              cm.updateInfoQuest(37900, "00=h0;10=h0;01=h0;11=h0;20=h0;02=h1;12=h0;21=h0;03=h0;13=h1;04=h0;05=h0;41=h0;06=h0;24=h1;07=h1;25=h1;17=h0;09=h0;w2=open");
                                                                                              cm.npc_LeaveField('oid=679157');
                                                                                              cm.npc_LeaveField('oid=679158');
                                                                                              cm.npc_LeaveField("oid=679159");
                                                                                              cm.dispose();
                                                                                              cm.warp(450016100, 0, false);
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
                }
              }
            }
          }
        }
      }
    }
  }
}