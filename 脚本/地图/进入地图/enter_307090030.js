var status = -1;
function action(f, E, e) {
  status++;
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
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.fieldEffect_PlayBGM("Bgm33/ShadowKnight", 0, 0);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(2560003, "oid=3590780", 205, -6, 87, 155, 255, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3590780", 'summon', 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(4000);
      cm.curNodeEventEnd(true);
      cm.effect_Text(["#fn黑体##fs18#几小时后"], [100, 2200, 6, -50, -50, 1, 4, 0, 0, 0]);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face11#呃，你……我以为你毫无战斗能力的……", 37, 2560003, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#谁都会藏着一手，不是吗？", 37, 2560000, true, true);
        } else {
          if (status === V++) {
            cm.npc_SetSpecialAction("oid=3590780", 'hurt', -1, 1);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1400);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#现在，你愿意听我说了吗？", 37, 2560000, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face11#哼，那就快说吧。", 37, 2560003, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0##fs18#反正都是狗屁。", 37, 2560003, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face1#…… ", 37, 2560000, false, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face1#影子骑士团是为了封印你而创建的。", 37, 2560000, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face1#永恒的时间轮回，毫无意义的重复消灭怪物的任务。\r\n这一切，全都是为了阻止你觉醒成超越者。", 37, 2560000, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face1#封印在影子神殿中的怪物，那个少女，就是你。", 37, 2560000, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face1#什么？你在胡说什么呢？！", 37, 2560003, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_ForcedFlip(-1);
                                    cm.inGameDirectionEvent_SetHideEffect(0);
                                    cm.inGameDirectionEvent_同时移动镜头和人(1, 150);
                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom('艾特……', 57, 0, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face1#呃，是人质吗？", 37, 2560003, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face1#怎么可能。影牙，你能告诉他吗？", 37, 2560000, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("队长的话……全都是事实。", 57, 0, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face7#影牙……？", 37, 2560003, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face1#你必须尽快喝下中和剂，艾特。否则很快就会有事情发生。", 37, 2560000, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face1#呃，我不相信你说的话！！", 37, 2560003, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face1#影牙，你来说。那是真的吗？", 37, 2560003, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("我……", 57, 0, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
                                                          cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 0);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#怎么样？你想要的真相……", 37, 2560000, false, true);
                                                            cm.effect_Voice("Voice3.img/DLep5/will/H_1-1.mp3", 100);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#你是谁，是谁创造了你，现在清楚了吗？", 37, 2560000, true, true);
                                                              cm.effect_Voice("Voice3.img/DLep5/will/H_2-1.mp3", 100);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("所以……才会……欺骗我……", 57, 0, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("什么外面的世界……镜世界，都是甜蜜的谎言……", 57, 0, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom('我一直都不知道……', 57, 0, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#没错。但是不必太绝望。\r\n只要按我说的去做，我就会给你。", 37, 2560000, false, true);
                                                                        cm.effect_Voice("Voice3.img/DLep5/will/H_4-1.mp3", 100);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#你想要的月光……真相。", 37, 2560000, true, true);
                                                                          cm.effect_Voice("Voice3.img/DLep5/will/H_5-1.mp3", 100);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_InsertCanvas11(0, 0, 0, 0, 0, 0);
                                                                            cm.fieldEffect_InsertCanvas(1, 1, 255, 255, 255, 200, 0);
                                                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("这是……真的，艾特。你必须喝下那个东西。", 57, 0, false, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face16#……", 37, 2560003, false, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face11#好，我相信。", 37, 2560003, false, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face4#影牙，因为这是你说的。", 37, 2560003, false, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.npc_SetSpecialAction("oid=3590780", "portion", 0, 1);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face11#呃……", 37, 2560003, false, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("艾特？！", 57, 0, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face0#别担心。你的朋友不会有任何事。\r\n只不过会永远做你的朋友罢了。", 37, 2560000, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#干得好，影牙。", 37, 2560000, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom('……', 57, 0, true, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face16#我……是谁？", 37, 2560003, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face1#你叫纳因。隶属于影子骑士团攻击队。", 37, 2560000, true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face1#不要怀疑任何事情，\r\n一切奉命行事，好好执行骑士团的任务。", 37, 2560000, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face16#我叫纳因……隶属于影子骑士团，遵命……", 37, 2560003, true, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face0#谢谢你，影牙。这次辛苦你了。", 37, 2560000, false, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("这次……嗯？难道我们重复的轮回……", 57, 0, true, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("#face0#当然，每次都不一样，呵呵呵……只是结果是一样的。", 37, 2560000, true, true);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face0#好了，现在回去吧。还得为你准备一份中和剂呢。", 37, 2560000, true, true);
                                                                                                                              } else if (status === V++) {
                                                                                                                                cm.forceCompleteQuest(32986);
                                                                                                                                cm.updateInfoQuest(32999, "00=h0;10=h0;01=h0;02=h0;20=h0;11=h0;21=h1;12=h01;03=h0;13=h0;04=h0;14=h1;05=h0;15=h1;06=h0;16=h1;07=h0;08=h1;17=h0;18=h0;19=h0");
                                                                                                                                cm.updateInfoQuest(32999, "00=h0;10=h0;01=h0;02=h0;20=h0;11=h0;21=h1;12=h0;03=h0;13=h0;04=h0;14=h1;05=h0;15=h1;06=h0;16=h1;07=h0;08=h1;17=h0;18=h0;19=h0");
                                                                                                                                cm.updateInfoQuest(32986, "exp=1");
                                                                                                                                cm.gainExp(1091797);
                                                                                                                                cm.eventSKill(0);
                                                                                                                                cm.dispose();
                                                                                                                                cm.warp(307000110, 0, false);
                                                                                                                                cm.setInGameDirectionMode(false, true, false);
                                                                                                                                cm.npc_LeaveField("oid=3590780");
                                                                                                                                cm.npc_LeaveField("oid=3590780");
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