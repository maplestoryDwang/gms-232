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
      cm.fieldEffect_PlayBGM("Bgm57/OnedayAtTheAtelier", 0, 0);
      cm.Hidden_background("box2", 1, 0, 0, 0);
      cm.npc_ChangeController(3005102, "oid=622829", -200, 200, 1, -250, -150, 0, true, 0, false);
      cm.npc_SetSpecialAction('oid=622829', "summon", 0, 0);
      cm.Npc_Fadeout("oid=622829", 0, 0);
      cm.npc_ChangeController(3005103, "oid=622830", 49, 200, 2, -1, 99, 1, true, 0, false);
      cm.npc_SetSpecialAction('oid=622830', 'summon', 0, 0);
      cm.sendNormalTalk_Bottom("#face0#不知不觉时间已经晚了，太阳下山了。", 37, 3005100, false, true, 1);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk_Bottom("#face0#来了啊？", 37, 3005103, true, true, 1);
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
              cm.effect_Text(["#fn黑体##fs18#昏暗的甜蜜蜜工坊", ''], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0, 0]);
              cm.inGameDirectionEvent_AskAnswerTime(5000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#快看，啦啦，我有东西要给你看。", 37, 3005103, false, true, 1);
              } else {
                if (status === V++) {
                  cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 31, 222);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(300);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#这是我很久之前收到的毛笔礼物。", 37, 3005103, false, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face1#我在毛笔上感受到的气息……", 37, 3005100, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#这果然不是普通的毛笔吧？", 37, 3005103, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face1##fc0xFFbfbfbf#（虽然微弱，但还是能从铃铛上感受到一些震动。）", 37, 3005100, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#果然，你的铃铛好像也有反应了。", 37, 3005103, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#或许这支毛笔就是一种#r器物#k呢？", 37, 3005103, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#若是为了摇响铃铛……", 37, 3005103, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#搞不好要由你来摧毁这支毛笔，啦啦。", 37, 3005103, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face1#摧毁？", 37, 3005100, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#大家一般都会用火烧掉附着有邪恶气息的东西嘛。", 37, 3005103, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#所以你亲自去烧掉这支毛笔怎么样？", 37, 3005103, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face1#可是……如果这支毛笔是别人送你的礼物，对你来说应该很珍贵吧。", 37, 3005100, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#啦啦，你已经帮过我好几回了。", 37, 3005103, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face2#你若能完成使命，我也会很开心的。", 37, 3005103, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face1##fc0xFFbfbfbf#（如果完成使命……）", 37, 3005100, true, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face1##fc0xFFbfbfbf#（是啊，为了完成使命，我便踏上了旅途。）", 37, 3005100, true, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_屏幕渐入插图A(['00', "Effect/Direction26.img/Lara/illust/8", 'cc'], [1, 0, 0, 0, 1000, -1, 0, 0, -1]);
                                                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/fire_partem", 100);
                                                            cm.fieldEffect_屏幕渐入插图A(['01', "Effect/Direction26.img/Lara/illust/9", 'cc'], [1, 0, 0, 0, 1000, -1, 0, 0, -1]);
                                                            cm.Hidden_background('box', 1, 0, 0, 0);
                                                            cm.Hidden_background("box2", 1, 1, 0, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face1##fc0xFFbfbfbf#（现在想起来倒是漏问了最重要的问题。）", 37, 3005100, false, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#海娜，你是从谁那里得到的这支毛笔？", 37, 3005100, true, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_屏幕渐入插图消失A(['00'], [500]);
                                                                  cm.fieldEffect_屏幕渐入插图消失A(['01'], [500]);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1700);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.effect_Voice("Voice6.img/lara/10/Female/1", 100);
                                                                    cm.sendNormalTalk_Bottom("#face0#……", 37, 3005103, false, true, 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.effect_Voice("Voice6.img/lara/10/Female/2", 100);
                                                                            cm.sendNormalTalk_Bottom("#face0#你知道想要制造出完美的红色，都需要用什么材料来调吗？", 37, 3005103, false, true, 1);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.fieldEffect_PlayBGM("Bgm57/AnotherdayOfTheAtelier", 0, 0);
                                                                              cm.effect_Voice("Voice6.img/lara/10/Female/3", 100);
                                                                              cm.sendNormalTalk_Bottom("#face0#用尽了各种方法。", 37, 3005103, true, true, 1);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.effect_Voice("Voice6.img/lara/10/Female/4", 100);
                                                                                  cm.sendNormalTalk_Bottom("#face0#有一天，我见到了纸划伤手指后沾到的血。", 37, 3005103, false, true, 1);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.effect_Voice("Voice6.img/lara/10/Female/5", 100);
                                                                                    cm.sendNormalTalk_Bottom("#face0#我是那时明白的，要想达到美的极致，就需要一定的牺牲。", 37, 3005103, true, true, 1);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.effect_Voice("Voice6.img/lara/10/Female/6", 100);
                                                                                      cm.sendNormalTalk_Bottom("#face5#海娜，我不明白你在说什么……", 37, 3005100, true, true, 1);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.effect_Voice("Voice6.img/lara/10/Female/7", 100);
                                                                                          cm.sendNormalTalk_Bottom("#face3#你为什么在烧父亲的遗物？", 37, 3005102, false, true, 1);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_PushScaleInfo(500, 0, 2000, 500, -105, 222);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.Npc_Fadeout("oid=622829", 255, 1000);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.effect_Voice("Voice6.img/lara/10/Female/8", 100);
                                                                                                cm.sendNormalTalk_Bottom('#face5#……！', 37, 3005100, false, true, 1);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.effect_Voice("Voice6.img/lara/10/Female/9", 100);
                                                                                                  cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                                                  cm.sendNormalTalk_Bottom("#face5#格里！", 37, 3005100, true, true, 1);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face3#……这都是真的吗？", 37, 3005102, true, true, 1);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.effect_Voice("Voice6.img/lara/10/Female/10", 100);
                                                                                                      cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
                                                                                                      cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 0);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.effect_Voice("Voice6.img/lara/10/Female/11", 100);
                                                                                                        cm.sendNormalTalk_Bottom("#face0#其实最近啦啦为了想办法摇响铃铛，真的急红了眼。", 37, 3005103, false, true, 1);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.effect_Voice("Voice6.img/lara/10/Female/12", 100);
                                                                                                          cm.sendNormalTalk_Bottom("#face0#虽说让我对你保密……", 37, 3005103, true, true, 1);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.effect_Voice("Voice6.img/lara/10/Female/13", 100);
                                                                                                            cm.sendNormalTalk_Bottom("#face1#不可能的。", 37, 3005102, true, true, 1);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.effect_Voice("Voice6.img/lara/10/Female/14", 100);
                                                                                                              cm.sendNormalTalk_Bottom("#face1#要是有什么事，那个家伙会直接告诉我的。", 37, 3005102, true, true, 1);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.effect_Voice("Voice6.img/lara/10/Female/15", 100);
                                                                                                                cm.sendNormalTalk_Bottom("#face0#啦啦说今晚有东西要给我看。", 37, 3005103, true, true, 1);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.effect_Voice("Voice6.img/lara/10/Female/16", 100);
                                                                                                                  cm.sendNormalTalk_Bottom("#face0#由你亲眼见证如何？", 37, 3005103, true, true, 1);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.fieldEffect_InsertCanvas11(0, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_InsertCanvas(1, 1, 255, 255, 255, 200, 0);
                                                                                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.effect_Voice("Voice6.img/lara/10/Female/17", 100);
                                                                                                                      cm.sendNormalTalk_Bottom("#face5#你说这个器物是你父亲的遗物？", 37, 3005100, false, true, 1);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.effect_Voice("Voice6.img/lara/10/Female/19", 100);
                                                                                                                        cm.sendNormalTalk_Bottom("#face5#我之前是真不知道啊！", 37, 3005100, true, true, 1);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.effect_Voice("Voice6.img/lara/10/Female/18", 100);
                                                                                                                          cm.sendNormalTalk_Bottom("#face3#是不是当初就不该说什么相不相信的话。", 37, 3005102, true, true, 1);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.effect_Voice("Voice6.img/lara/10/Female/20", 100);
                                                                                                                            cm.sendNormalTalk_Bottom("#face3#若是如此，也就不会失望了……", 37, 3005102, true, true, 1);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.effect_Voice("Voice6.img/lara/10/Female/21", 100);
                                                                                                                              cm.sendNormalTalk_Bottom("#face5#格里！", 37, 3005100, true, true, 1);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.npc_SetForceMove("oid=622829", -1, 100, 100);
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.Npc_Fadeout("oid=622829", 0, 500);
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.effect_Voice("Voice6.img/lara/10/Female/22", 100);
                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#格里彻底离开了啊。", 37, 3005103, false, true, 1);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.effect_Voice("Voice6.img/lara/10/Female/23", 100);
                                                                                                                                      cm.sendNormalTalk_Bottom("#face5#你说……离开了？", 37, 3005100, true, true, 1);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.effect_Voice("Voice6.img/lara/10/Female/24", 100);
                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#你也感受到了吧？", 37, 3005103, true, true, 1);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.effect_Voice("Voice6.img/lara/10/Female/25", 100);
                                                                                                                                          cm.sendNormalTalk_Bottom("#face3#那就是元素灵不会再来到你身边。", 37, 3005103, true, true, 1);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.effect_Voice("Voice6.img/lara/10/Female/26", 100);
                                                                                                                                            cm.sendNormalTalk_Bottom("#face5#……！！！", 37, 3005100, true, true, 1);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.sendNormalTalk_Bottom("#face5##fc0xFFbfbfbf#（总觉得内心某处好像破了个洞。）", 37, 3005100, true, true, 1);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face5##fc0xFFbfbfbf#（好痛苦……）", 37, 3005100, true, true, 1);
                                                                                                                                              } else if (status === V++) {
                                                                                                                                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                                                cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                cm.setStandAloneMode(false);
                                                                                                                                                cm.npc_LeaveField('oid=622829');
                                                                                                                                                cm.npc_LeaveField("oid=622830");
                                                                                                                                                cm.dispose();
                                                                                                                                                cm.warp(993165524, 0, true);
                                                                                                                                              }
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}