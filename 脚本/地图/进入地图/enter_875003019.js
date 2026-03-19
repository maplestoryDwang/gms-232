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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_ForcedFlip(1);
      cm.npc_ChangeController(9401277, "oid=2750467", -500, 10, 22, -550, -450, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2750467", "summon", 0, 0);
      cm.npc_ChangeController(9401278, "oid=2750468", -1000, 10, 14, -1050, -950, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2750468", "summon", 0, 0);
      cm.sendNewEffects(17, [0, 1000, 2000, -550, 50]);
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
            cm.sendNormalTalk_Bottom("#face5##b……收拾了这么久……辛苦了。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom('#face6#…', 37, 9401277, false, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face6#" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "……昨天……那种气息……", 37, 9401277, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face6#不，昨天……的事情你还记得吗……？", 37, 9401277, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom('#face5##b…', 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(300);
                      } else {
                        if (status === V++) {
                          cm.npc_SetForceMove("oid=2750468", 1, 260, 150);
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                        } else {
                          if (status === V++) {
                            cm.npc_setForceFlip("oid=2750468", -1);
                            cm.inGameDirectionEvent_AskAnswerTime(300);
                          } else {
                            if (status === V++) {
                              cm.npc_setForceFlip("oid=2750468", 1);
                              cm.inGameDirectionEvent_AskAnswerTime(300);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face3#咦、咦！！？这、这到底是怎么回事？！", 37, 9401278, false, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_ForcedFlip(-1);
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.effect_NormalSpeechBalloon("......", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 0, null, cm.getPlayer().getId());
                                    cm.sendNormalTalk_Bottom("#face5##b… ", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face3#一、一夜之间就发生了这种惨剧……？", 37, 9401278, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face3#到底是谁？把玄山派？……", 37, 9401278, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face3#玄山派应该不是会轻易遭人毒手的门派吧？！\r\n还有谁……能这样加害他们呢……", 37, 9401278, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face5##b…", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_ProcessOnOffLayer('00', "Effect/DirectionWz2.img/MukhyunStory/12", 0, 1000, 0, 0, 1, 4, 0, -1, 0, 0, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face5##b（……因气血扭曲而倒下的灵物……那是……）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face6##b好像……有人下了毒。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face3#毒药？！谁做出如此恶毒之事？！", 37, 9401278, true, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face6##b… ", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face3#啊……啧……", 37, 9401278, true, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face3#我……都不知道该说什么了。", 37, 9401278, true, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face3#那今后……你打算怎么办？", 37, 9401278, true, true, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face4##b必须查明真相。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face4##b怎么了？到底是谁把玄山派变成了这样……", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face3#查明之后呢？", 37, 9401278, true, true, 1);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face4##b……我一定要报仇。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face3#… ", 37, 9401278, true, true, 1);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face4#还有，我们必须重建门派！\r\n不能看着玄山派就这样消失。不是吗，" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + '？', 37, 9401277, true, true, 1);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_ForcedFlip(1);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face4##b当然。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face4#啊！还必须找到失踪的师兄们！", 37, 9401277, true, true, 1);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face3##b那是……什么意思？", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face6#……收拾的时候……大师兄和几个师兄的尸体……没有找到。\r\n他们一定还活着吧？也许受了伤在哪里治疗……也可能是被坏人抓走了……或者……", 37, 9401277, true, true, 1);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face5##b……不管那个地方在哪里，都希望他能活着。不管怎样……都还有希望。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face3#（像这样一败涂地……一定有敌人潜伏在我们之中。）", 37, 9401278, true, true, 1);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face3#（……现在说也没什么用了。）", 37, 9401278, true, true, 1);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face3#唉……啧……都不知道该怎么安慰你。", 37, 9401278, true, true, 1);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face3#……我来帮你！", 37, 9401278, false, true, 1);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face6#……谢谢你的这份心意，风乞丐大叔。", 37, 9401277, true, true, 1);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face3#不不不，不只是心意！我真的能帮助你们！", 37, 9401278, true, true, 1);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.effect_Voice("VoiceWz2.img/Mukhyun/K/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/5', 100);
                                                                                                            cm.sendNormalTalk_Bottom("#face0#付饭钱的时候到了。", 37, 9401278, true, true, 1);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.npc_SetForceMove("oid=2750468", 1, 10, 100);
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.effect_Voice("VoiceWz2.img/Mukhyun/K/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/6', 100);
                                                                                                                cm.sendNormalTalk_Bottom("#face3#我就是丐帮河津分舵主！风乞丐！", 37, 9401278, false, true, 1);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face0#…", 37, 9401277, true, true, 1);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.effect_NormalSpeechBalloon("......", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 0, null, cm.getPlayer().getId());
                                                                                                                    cm.effect_NormalSpeechBalloon("......", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 9401277, null, cm.getPlayer().getId());
                                                                                                                    cm.sendNormalTalk_Bottom("#face0##b…", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("#face4#怎么是这种反应……难道你们连丐帮都不知道吗？丐帮！", 37, 9401278, true, true, 1);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face0#当然知道。“世上何处无乞丐”。将情报化作力量的门派……不是吗？", 37, 9401277, true, true, 1);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face3#大致没错，但缺了一样重要的东西。那就是“正义的门派”。", 37, 9401278, true, true, 1);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face0#是的，那个传闻我听过很多次。", 37, 9401277, true, true, 1);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("#face8#……话所如此，但是……总不会所有的乞丐……都是丐帮的吧？", 37, 9401277, true, true, 1);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face4#啊？啊……哈哈哈！哈哈哈哈！原来是这样。", 37, 9401278, true, true, 1);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("#face1#也是。就算换成我，要是说眼前的乞丐就是丐帮分舵主，我也不信。", 37, 9401278, true, true, 1);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNewEffects(17, [1000, 2000, 3000, -600, 60]);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#嗯，让我想想……对了。看见我肩上的这些鸟了吗？\r\n这是丐帮中用来传递情报的。身份越高，带着的鸟也就越多。", 37, 9401278, false, true, 1);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face1#我风乞丐可是掌管着7个人的分舵主，哼哼。", 37, 9401278, true, true, 1);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#真的……吗？", 37, 9401277, true, true, 1);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#好像只是普通的鸟啊……", 37, 9401277, true, true, 1);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#只有够普通，才不会引人耳目！\r\n要是一看就知道是丐帮的鸟，我不就没法混了。", 37, 9401278, true, true, 1);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face0##b丐帮的鸟我倒是听说过……但是完全没有想到。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.sendNormalTalk_Bottom("#face1#现在知道我能帮你们多大的忙了吗？", 37, 9401278, true, true, 1);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0##b谢谢你，风大侠。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.sendNormalTalk_Bottom("#face1#什么大侠不大侠的。就像平时一样叫我风形好了。", 37, 9401278, true, true, 1);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("#face3#首先，最重要的是寻找线索……你到村里去一趟。", 37, 9401278, true, true, 1);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#我在酒肆前面等你。你慢慢过来！", 37, 9401278, true, true, 1);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.npc_setForceFlip("oid=2750468", -1);
                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(600);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.npc_SetForceMove("oid=2750468", -1, 300, 100);
                                                                                                                                                              cm.sendNormalTalk_Bottom("#face3#（……一定什么都没吃吧。唉……要先去吃点饭吗？）", 37, 9401278, false, true, 1);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 600, 0);
                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(900);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.sendNewEffects(14, [0, 2000, 1000]);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.sendNewEffects(19, [0]);
                                                                                                                                                                    } else if (status === V++) {
                                                                                                                                                                      cm.forceStartQuest(65937, '');
                                                                                                                                                                      cm.npc_LeaveField("oid=2750467");
                                                                                                                                                                      cm.npc_LeaveField("oid=2750468");
                                                                                                                                                                      cm.dispose();
                                                                                                                                                                      cm.warp(875001000, 0, false);
                                                                                                                                                                      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                                                                      cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                    }
                                                                                                                                                                  }
                                                                                                                                                                }
                                                                                                                                                              }
                                                                                                                                                            }
                                                                                                                                                          }
                                                                                                                                                        }
                                                                                                                                                      }
                                                                                                                                                    }
                                                                                                                                                  }
                                                                                                                                                }
                                                                                                                                              }
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}