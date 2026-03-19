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
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(3005107, "oid=619830", -1050, 300, 8, -1100, -1000, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=619830", "summon", 0, 0);
      cm.npc_ChangeController(3005102, "oid=619831", -550, 300, 1, -600, -500, 1, true, 0, false);
      cm.npc_SetSpecialAction('oid=619831', 'summon', 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -360, -25);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(300);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushScaleInfo(5000, 0, 1500, 5000, -920, 280);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(300);
          } else {
            if (status === V++) {
              cm.npc_SetForceMove("oid=619831", -1, 250, 100);
              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1200);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1400);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(5000);
                } else {
                  if (status === V++) {
                    cm.effect_Text(["#fn黑体##fs18#片刻后，后巷静谧之所", ''], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0, 0]);
                    cm.sendNormalTalk_Bottom("#face0#所以就冷不丁地找上门来……", 37, 3005107, false, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#你让我去打听这个铃铛的价格？", 37, 3005107, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#好吧，既然没有声响，要是能知道怎么修理，应该会好很多。", 37, 3005102, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#这次可别也像上次一样拿来了赝品……", 37, 3005107, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#……", 37, 3005107, false, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#你这东西是哪儿来的？", 37, 3005107, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#那、那怎么了？", 37, 3005102, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#看这个。", 37, 3005107, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/glass", 100);
                                      cm.onSetNpcScript("oid=619830", 1, ["special", "special2"], [1, -1]);
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#我使用了魔力探测器，不过很快就被摧毁了。", 37, 3005107, false, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#在你眼中这意味着什么？", 37, 3005107, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#……在想你拿来的设备是个便宜货？", 37, 3005102, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#……说明这可不是普通铃铛，靠一般的小伎俩是没办法弄明白的。", 37, 3005107, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#我是不知道你又从哪儿偷来了什么东西，不过……", 37, 3005107, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#我建议你尽快还给主人。", 37, 3005107, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#你说什么呢！明明可以高价转手卖出去，为什么要还！", 37, 3005102, true, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#能将陈旧之物珍藏到如此毫无瑕疵的地步……", 37, 3005107, true, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#也就是说对某人而言，这是极其珍贵的宝物。", 37, 3005107, true, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#还有，因为我知道你不至于这么没底线。", 37, 3005107, true, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#……", 37, 3005102, true, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.npc_LeaveField('oid=619831');
                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 600, 280);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1500, 2000, 725, 280);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.npc_ChangeController(3005102, "oid=619847", 500, 300, 4, 450, 550, 0, true, 0, false);
                                                                      cm.npc_SetSpecialAction('oid=619847', "summon", 0, 0);
                                                                      cm.npc_SetForceMove("oid=619847", 1, 150, 100);
                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.npc_setForceFlip('oid=619847', -1);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#这个家伙，净说些胡话。", 37, 3005102, false, true, 1);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#你这是在向谁胡说八道什么底线不底线的啊。", 37, 3005102, true, true, 1);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#……那个家伙，会不会一直等到现在？", 37, 3005102, false, true, 1);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face0#不，到了现在这个时候，搞不好已经知道自己被骗，将一切向警卫兵和盘托出了。", 37, 3005102, true, true, 1);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#可一切已经晚了，\r\n这次那家伙一定就能明白，轻信于人会摔大跟头的道理吧。", 37, 3005102, true, true, 1);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
                                                                                          cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 0);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#谢谢！我会听你的，在这里一动不动地等着！", 36, 3005100, false, true, 1);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.fieldEffect_InsertCanvas11(0, 0, 0, 0, 0, 0);
                                                                                              cm.fieldEffect_InsertCanvas(1, 1, 255, 255, 255, 200, 0);
                                                                                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#那……那就稍微看一眼再回来？", 37, 3005102, false, true, 1);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.npc_setForceFlip("oid=619847", 1);
                                                                                                  cm.npc_SetForceMove("oid=619847", 1, 100, 100);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.Npc_Fadeout("oid=619847", 0, 500);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                    } else if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_SetHideEffect(0);
                                                                                                      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                      cm.setInGameDirectionMode(false, true, false);
                                                                                                      cm.setStandAloneMode(false);
                                                                                                      cm.forceStartQuest(36210, '');
                                                                                                      cm.updateInfoQuest(36200, "50=h0;51=h0;52=h0;53=h1;55=h0;76=h0;77=h0;78=h0;set=1");
                                                                                                      cm.npc_LeaveField("oid=619847");
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