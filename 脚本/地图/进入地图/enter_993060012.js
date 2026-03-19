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
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.setAmbience("Ambience.img/night", 200, 60);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -1480, 80);
      cm.npc_ChangeController(3003651, "oid=2199931", -1286, 80, 5, -1336, -1236, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2199931", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -1370, 150);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.npc_SetForceMove("oid=2199931", 1, 1050, 150);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushScaleInfo(8000, 0, 1000, 8000, -300, 0);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_同时移动镜头和人(2, 1010);
              cm.inGameDirectionEvent_AskAnswerTime(3000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#一切要从#b预言卷轴#k的出现开始说起。", 37, 3003651, false, true);
              } else {
                if (status === V++) {
                  cm.fieldEffect_PlayBGM("Bgm45/Heroes Of Maple Theme Piano", 0, 0);
                  cm.playSoundEffDirectly("Ambience.img/night");
                  cm.inGameDirectionEvent_AskAnswerTime(5000);
                } else {
                  if (status === V++) {
                    cm.npc_SetForceMove("oid=2199931", -1, 10, 100);
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#黑色天堂事件之后……\r\n联盟重新开始对与黑魔法师有关的地方进行调查。", 37, 3003651, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#……#b#ho##k，在你前往神秘河之后的某一天。\r\n我们在玛加提亚的地下发现了这个东西。", 37, 3003651, true, true);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(1600);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction20.img/effect/BMPre_Scroll/0", 0, 1500, 0, 0, 1, 4, 1);
                              cm.fieldEffect_ProcessOnOffLayer('01', "Effect/Direction20.img/effect/BMPre_Scroll/1", 0, 1500, 0, 0, 1, 4, 1);
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission3", 100);
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#上面记录着已经发生的事，还有今后将会发生的事。\r\n也就是说……这个卷轴是某种预言卷轴。", 37, 3003651, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#黑魔法师，他在几百年前就已经预见到了一切。\r\n包括对抗者和神秘河的诞生，以及和塔纳的白色太阳融合。", 37, 3003651, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom('……', 57, 0, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#……如果是那件事，你大可不必自责。", 37, 3003651, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#我早就料到了。\r\n因为不是别人，而是你……", 37, 3003651, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#你无法逃避和黑魔法师的对决。\r\n只是如此而已。", 37, 3003651, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#过去的事情就不说了，我们先说正事。\r\n重要的是，在卷轴的最后写这一段奇怪的话。", 37, 3003651, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 500, 0, 0, 0, 0, 0);
                                                    cm.fieldEffect_ProcessOnOffLayer('01', '', 2, 500, 0, 0, 0, 0, 0);
                                                    cm.fieldEffect_ProcessOnOffLayer('02', "Effect/Direction20.img/effect/BMPre_Scroll/2", 0, 500, 0, 0, 1, 4, 1);
                                                    cm.fieldEffect_ProcessOnOffLayer('03', "Effect/Direction20.img/effect/BMPre_Scroll/3", 0, 500, 0, 0, 1, 4, 1);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_ProcessOnOffLayer('02', '', 1, 2000, 410, 150, 0, 0, 0);
                                                      cm.fieldEffect_ProcessOnOffLayer('03', '', 1, 2000, 410, 150, 0, 0, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#穿过黄昏的气息，向着太阳前行之人，", 0);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#将会折断翅膀，在绝望中毁灭。", 0);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#\r\n失去灿烂荣耀的光，", 0);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#将会沉入沼泽，面对世界之魂……", 0);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#\r\n红色之泪诞下吞噬心脏的巨人，", 0);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#无际的黑暗吞噬心愿，宣告末日来临之时，", 0);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#\r\n#r新的命运#k将会来临。", 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.fieldEffect_ProcessOnOffLayer('02', '', 2, 500, 0, 0, 0, 0, 0);
                                                                        cm.fieldEffect_ProcessOnOffLayer('03', '', 2, 500, 0, 0, 0, 0, 0);
                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/wind", 100);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("像歌……不，应该说像首古老的诗。", 57, 0, false, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#虽然形式像诗，但这应该也是预言之一。", 37, 3003651, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face0#对照黑魔法师的记录，我们解读出了前面的部分，\r\n但是最后的部分还没能完全解读出来。", 37, 3003651, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#不过可以确定的是，他是在预言世界将会迎来新的命运。\r\n那样的话，现在的世界……", 37, 3003651, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#但是我们不能坐以待毙。\r\n因此我们也开始着手进行准备。", 37, 3003651, false, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#解读出预言书的内容之后，\r\n我们骑士团马上发出书信，将联盟的首领们请了过来。", 37, 3003651, false, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0#面对绝望的情况，大家一时出现了动摇，\r\n但是守护世界的意志让所有人达成了一致。", 37, 3003651, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#但是最后女皇陛下却迟迟不愿下达召集令。\r\n……女皇陛下也无法轻易做出决断。", 37, 3003651, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#接下去的事情我们边走边讲吧。", 37, 3003651, false, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.npc_SetForceMove("oid=2199931", 1, 350, 110);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_同时移动镜头和人(2, 310);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                            } else if (status === V++) {
                                                                                                              cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                              cm.setInGameDirectionMode(false, true, false);
                                                                                                              cm.npc_LeaveField("oid=2199931");
                                                                                                              cm.npc_LeaveField("oid=2199931");
                                                                                                              cm.dispose();
                                                                                                              cm.warp(993060013, 0, false);
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}