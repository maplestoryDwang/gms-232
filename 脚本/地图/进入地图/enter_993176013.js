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
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 230, -2500);
      cm.npc_ChangeController(3004650, "oid=123662119", 613, -2694, 11, 563, 663, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=123662119", "summon", 0, 0);
      cm.npc_ChangeController(3004651, "oid=123662120", 430, -2500, 8, 380, 480, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=123662120", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=123662119", "special10", -1, 1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 534, -2444);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(2500);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.npc_SetSpecialAction("oid=123662119", 'special4', -1, 1);
              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
              cm.sendNormalTalk_Bottom("#face0#就算是这样，也不会有任何（唧，唧……）改变。", 36, 3004676, false, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#重力不会复原……太阳也不会……升起。", 36, 3004676, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#在这之前，整座城市（唧……）就会……灰飞烟……灭。", 36, 3004676, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#……", 36, 3004651, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
                      cm.sendNormalTalk_Bottom("#face0#但是我可以满足你一个愿望。", 36, 3004676, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#在我的怀里……（唧）有个小型#b传送装置#k……", 36, 3004676, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#只有一个人……能传送到好友世界（唧……）。", 36, 3004676, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=123662119"], [0, 0, -50, 1, 0, 1, 0, 0, 0]);
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#干嘛给我这个……你又想耍、耍什么花招吗？", 36, 3004651, false, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#在你的朋友们离开的时候（唧）……我看到了。\r\n监视摄像头……全都……录了下来。", 36, 3004676, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_PlayBGM("Bgm54.img/MemoryOfSunset", 0, 0);
                                    cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction24.img/illust2/6", 0, 4000, 0, 0, 3, 4, 0, -1, 0, 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(3500);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_Monologue("#fc0xFF000000#看，夕阳！好友世界的天空映过来了。", 0);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_Monologue("#fc0xFF000000#门终于打开了！", 0);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_Monologue("#fc0xFF000000#真美啊……", 1);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_Monologue("#fc0xFF000000#现在终于可以回去了。", 0);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_Monologue("#fc0xFF000000#你在后面干嘛？快走吧，贝尔。", 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_ProcessOnOffLayer("WhiteOut", "Map/Effect2.img/WhiteOut", 0, 500, 0, 0, 100, 4, 1, -1, 0, 0, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    cm.effect_Voice("UI.img/CameraShutter", 100);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_ProcessOnOffLayer("WhiteOut", '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_Monologue("#fc0xFF000000#\t\t\t\t\t\t\t\t嗯，我用手机拍张照片……", 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(800);
                                                          cm.effect_Voice("Ambience.img/vib", 100);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(800);
                                                            cm.effect_Voice("Ambience.img/vib", 100);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                              cm.effect_Voice("Ambience.img/vib", 100);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_Monologue("#fc0xFF000000#\t\t\t\t\t\t啊，门打开之后，好像能收到信号了。", 0);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_Monologue("#fc0xFF000000#啊……贝尔，等等……！", 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_ProcessOnOffLayer('01', "Effect/Direction24.img/illust2/5", 0, 1000, 0, 0, 3, 4, 0, -1, 0, 0, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_Monologue("#fc0xFF000000#\t\t\t\t\t\t\t\t\t\t\t这是……", 1);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_Monologue("#fc0xFF000000#「生存系列真是无聊。那种破玩意谁看啊？」", 0);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_Monologue("#fc0xFF000000#「写出那种东西，有病吧，呵呵」", 0);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_Monologue("#fc0xFF000000#「树啊，人类对不起你。」", 1);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_Monologue("#fc0xFF000000#「听说这个人失踪了？是想在那个世界走穴吗？呵呵」", 0);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_Monologue("#fc0xFF000000#「呵呵，也是，估计是在这里混不下去了。」", 0);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_Monologue("#fc0xFF000000#「不会是故意去的吧？换成我，我也会。」", 1);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_Monologue("#fc0xFF000000#\t\t\t\t\t\t\t\t\t\t哈……哈哈哈……", 0);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_Monologue("#fc0xFF000000#\t\t\t\t\t\t从头到尾全都是……恶评和嘲弄……", 0);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_Monologue("#fc0xFF000000#\t\t\t\t\t\t还以为这次……一定能得到认可呢……", 1);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_Monologue("#fc0xFF000000#\t\t\t\t\t\t\t\t\t你们……早就知道吧。", 0);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.fieldEffect_ProcessOnOffLayer('01', '', 2, 700, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_Monologue("#fc0xFF000000#那、那个……", 0);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.inGameDirectionEvent_Monologue("#fc0xFF000000#没时间说这些了，贝尔。必须在门完全关上之前回去，否则……", 1);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_Monologue("#fc0xFF000000#\t\t\t\t\t\t\t\t\t\t\t\t我……", 1);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_Monologue("#fc0xFF000000#\t\t\t\t\t\t\t\t\t\t\t不……这是……", 1);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 700, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.inGameDirectionEvent_Monologue("贝尔？等等，你要去哪儿？ ", 0);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.inGameDirectionEvent_Monologue("贝尔！快回来！！！", 1);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.npc_SetSpecialAction("oid=123662119", "special10", -1, 1);
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
                                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
                                                                                                                            cm.npc_SetSpecialAction("oid=123662119", "special4", -1, 1);
                                                                                                                            cm.sendNormalTalk_Bottom("#face0#根本就没有什么事故。", 36, 3004676, false, true, 1);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("#face0#你只是不肯承认（唧）……在逃避……现实而已。", 36, 3004676, true, true, 1);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face0#朋友们……\r\n以各种各样的借、借口，一直不让我打、打开手机。所以……", 36, 3004651, true, true, 1);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#在回去之前，我终、终于明白。", 36, 3004651, true, true, 1);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#如果没有任何人能理解我……\r\n就、就算回去又有什么意义？", 36, 3004651, true, true, 1);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#贝尔，可怜的贝尔。（唧）哈……哈哈。", 36, 3004676, false, true, 1);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#（唧） 谁也无法……理解你。也……没有人在找你……", 36, 3004676, true, true, 1);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#……", 36, 3004651, true, true, 1);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#喂，朋友。\r\n找到了回……去的方法，现在才终于（唧……）感觉到了吧？", 36, 3004676, true, true, 1);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.npc_SetSpecialAction("oid=123662119", "special4", -1, 1);
                                                                                                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#可以回去的地方（唧……）其实根本就不存在。", 36, 3004676, false, true, 1);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                        } else if (status === V++) {
                                                                                                                                                          cm.warp(993176100, 0, false);
                                                                                                                                                          cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                                                          cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                          cm.setStandAloneMode(false);
                                                                                                                                                          cm.npc_LeaveField("oid=123662119");
                                                                                                                                                          cm.npc_LeaveField("oid=123662120");
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