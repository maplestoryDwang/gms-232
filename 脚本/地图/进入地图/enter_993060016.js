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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(3003651, "oid=2200557", -3933, 80, 26, -3983, -3883, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2200557", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -3736, 150);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(300);
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
              cm.npc_SetForceMove("oid=2200557", 1, 1300, 150);
              cm.inGameDirectionEvent_AskAnswerTime(300);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_同时移动镜头和人(2, 1350);
                cm.inGameDirectionEvent_PushScaleInfo(10000, 0, 1000, 10000, -2580, 0);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#看到女皇陛下崩溃的样子，让我受到了很大的冲击。\r\n因为我一直相信虽然她看上去很柔弱，但内心却非常坚强。", 37, 3003651, false, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#那天晚上，我在深深的担忧和不安之中度过了不眠的一夜。", 37, 3003651, false, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(2500);
                        } else {
                          if (status === V++) {
                            cm.npc_setForceFlip("oid=2200557", -1);
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#天亮之后，女皇陛下带着疲倦的表情，说要去拜见神兽。\r\n昨天晚上女皇陛下好像也没睡好。", 37, 3003651, false, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#我和冒险骑士团迅速完成了准备，\r\n和女皇陛下一起来到了神兽所在的神木村的独立森林。", 37, 3003651, true, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_PushScaleInfo(5000, 0, 2000, 5000, -1830, -400);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#她说希望能从神兽那里找到某种答案……", 37, 3003651, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/wind", 100);
                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face4#神兽……", 37, 3003655, false, true);
                                              cm.effect_Voice("Voice4.img/BMpre/DIR2/1", 128);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction20.img/effect/BMPre_night/0", 0, 2000, 0, -80, 1, 4, 1);
                                                cm.inGameDirectionEvent_AskAnswerTime(2500);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face1#黑暗之影笼罩着世界，遮住了清净之光。", 37, 3003657, false, true);
                                                  cm.effect_Voice("Voice4.img/BMpre/DIR2/2", 128);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face1#女皇啊，你梦到噩梦了吗……", 37, 3003657, true, true);
                                                    cm.effect_Voice("Voice4.img/BMpre/DIR2/3", 128);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#女皇陛下向神兽讲述了黑魔法师的预言和不祥的梦。", 37, 3003651, false, true);
                                                        cm.effect_Voice("Voice4.img/BMpre/DIR2/4", 128);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#在所有人面前无法表露内心的恐惧……", 37, 3003651, true, true);
                                                          cm.effect_Voice("Voice4.img/BMpre/DIR2/5", 128);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#我来问你。这个世界的主人是谁？", 37, 3003657, false, true);
                                                              cm.effect_Voice("Voice4.img/BMpre/DIR2/6", 128);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face4#……", 37, 3003655, true, true);
                                                                cm.effect_Voice("Voice4.img/BMpre/DIR2/7", 128);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#那个嘛……生活在这个世界上的我们所有人……", 37, 3003655, true, true);
                                                                  cm.effect_Voice("Voice4.img/BMpre/DIR2/8", 128);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#那如果有人想破坏这个世界的话，该怎么办？", 37, 3003657, true, true);
                                                                    cm.effect_Voice("Voice4.img/BMpre/DIR2/9", 128);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face4#当然应该……站起来反抗。但是，神兽……", 37, 3003655, true, true);
                                                                      cm.effect_Voice("Voice4.img/BMpre/DIR2/10", 128);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face1#没错，谁说黑魔法师的预言必定会实现呢？", 37, 3003657, false, true);
                                                                          cm.effect_Voice("Voice4.img/BMpre/DIR2/11", 128);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#如果真是那样的话，之前你们所做的一切不就没有意义了吗？", 37, 3003657, true, true);
                                                                            cm.effect_Voice("Voice4.img/BMpre/DIR2/12", 128);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#……", 37, 3003655, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/wind", 100);
                                                                                  cm.fieldEffect_ProcessOnOffLayer('f00', "Effect/Direction20.img/effect/BMPre_flashBack/0", 0, 1000, 0, -80, 1, 4, 1);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/wind", 100);
                                                                                    cm.fieldEffect_ProcessOnOffLayer("f01", "Effect/Direction20.img/effect/BMPre_flashBack/1", 0, 1000, 0, -80, 1, 4, 1);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.fieldEffect_ProcessOnOffLayer('f00', '', 2, 300, 0, 0, 0, 0, 0);
                                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/wind", 100);
                                                                                      cm.fieldEffect_ProcessOnOffLayer("f02", "Effect/Direction20.img/effect/BMPre_flashBack/2", 0, 1000, 0, -80, 1, 4, 1);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.fieldEffect_ProcessOnOffLayer("f01", '', 2, 300, 0, 0, 0, 0, 0);
                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/wind", 100);
                                                                                        cm.fieldEffect_ProcessOnOffLayer("f03", "Effect/Direction20.img/effect/BMPre_flashBack/3", 0, 1000, 0, -80, 1, 4, 1);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.fieldEffect_ProcessOnOffLayer('f02', '', 2, 300, 0, 0, 0, 0, 0);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.fieldEffect_ProcessOnOffLayer("f03", '', 2, 1500, 0, 0, 0, 0, 0);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0#不，我们的努力绝对不会白费。", 37, 3003655, false, true);
                                                                                              cm.effect_Voice("Voice4.img/BMpre/DIR2/13", 128);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face0#放下心中的恐惧，女皇。", 37, 3003657, false, true);
                                                                                                  cm.effect_Voice("Voice4.img/BMpre/DIR2/14", 128);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/tree_revive", 100);
                                                                                                    cm.fieldEffect_ProcessOnOffLayer('01', "Effect/Direction20.img/effect/BMPre_night/1", 0, 1000, 0, -80, 1, 4, 1);
                                                                                                    cm.fieldEffect_ProcessOnOffLayer('02', "Effect/Direction20.img/effect/BMPre_night/2", 0, 1000, 0, -80, 1, 4, 1);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.fieldEffect_ProcessOnOffLayer('03', "Effect/Direction20.img/effect/BMPre_night/3", 0, 500, 0, -80, 1, 4, 1);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.fieldEffect_ProcessOnOffLayer('03', '', 2, 300, 0, 0, 0, 0, 0);
                                                                                                        cm.fieldEffect_Hero9(80, 1000);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face1#神兽之翼具有保护弱者的力量。\r\n但是现在我的身体非常虚弱。", 37, 3003657, false, true);
                                                                                                          cm.effect_Voice("Voice4.img/BMpre/DIR2/15", 128);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0#我把我的力量传给你。用这种力量去守护勇士们的心愿吧。\r\n这件事除了你之外，任何人都无法做到。", 37, 3003657, true, true);
                                                                                                            cm.effect_Voice("Voice4.img/BMpre/DIR2/16", 128);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face0#神兽……", 37, 3003655, false, true);
                                                                                                                cm.effect_Voice("Voice4.img/BMpre/DIR2/17", 128);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face0#人类是细腻、柔弱的存在。内心随时都可能变得脆弱。\r\n那样的话，很可能会再次被恐惧趁虚而入。", 37, 3003657, true, true);
                                                                                                                  cm.effect_Voice("Voice4.img/BMpre/DIR2/18", 128);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.fieldEffect_复合图片动画(["Map/Effect2.img/HofM/ACT1_bye/whiteback2/skeleton", "animation", '', ''], [1, 0, 1, 0, 0, 0, 0, 0]);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 2000, 0, 0, 0, 0, 0);
                                                                                                                      cm.fieldEffect_ProcessOnOffLayer('01', '', 2, 2000, 0, 0, 0, 0, 0);
                                                                                                                      cm.fieldEffect_ProcessOnOffLayer('02', '', 2, 2000, 0, 0, 0, 0, 0);
                                                                                                                      cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 2000, 0);
                                                                                                                      cm.sendNormalTalk_Bottom("#face0#但是希纳斯，别忘了。\r\n在任何绝望中，你都是拯救所有人的希望之光……", 37, 3003657, false, true);
                                                                                                                      cm.effect_Voice("Voice4.img/BMpre/DIR2/19", 128);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/butterfly0", 100);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.fieldEffect_Hero9(0, 1000);
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                                            cm.fieldEffect_Hero9(80, 1000);
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
                                                                                                                                cm.npc_LeaveField("oid=2200557");
                                                                                                                                cm.npc_LeaveField("oid=2200557");
                                                                                                                                cm.dispose();
                                                                                                                                cm.warp(993060017, 0, false);
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}