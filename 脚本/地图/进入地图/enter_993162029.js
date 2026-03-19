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
      cm.npc_ChangeController(3001952, "oid=434203", -933, -85, 20, -983, -883, 5, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -1000, -85);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 1500, 3000, -1000, -85);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face7#呼……总算把那些士兵全部甩掉了。\r\n你可真了不起，阿黛尔，堪称最称职的护卫。", 36, 3001952, false, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face7#如果我将来当上里斯托尼亚的国王，\r\n希望到时候你能继续做我的骑士，哈哈……", 36, 3001952, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face5##fc0xFFbfbfbf#(眼前直发晕，是刚才过度劳累了吗？\r\n在返回据点之前，不能掉以轻心……)", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face3#……", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face6#阿黛尔！？", 36, 3001952, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction18.img/effect/adele/etc/seal/0/0"], [0, 0, 0, 1, 1, 0, 0, 0, 0]);
                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction18.img/effect/adele/etc/seal/0/0"], [0, 0, 0, 1, -1, 0, 0, 0, 0]);
                            cm.inGameDirectionEvent_AskAnswerTime(200);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_MoveAction(4);
                              cm.fieldEffect_复合图片动画(["Effect/Direction18.img/effect/adele/spine/etc/1/black out_smog", "black out_smog", '', '00'], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0]);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom('#face7#呃……', 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face6#阿黛尔！？", 36, 3001952, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_Hero9(0, 2000);
                                        cm.inGameDirectionEvent_AskAnswerTime(2300);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                          cm.fieldEffect_Hero9(100, 500);
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === V++) {
                                            cm.setAmbience("Ambience.img/gravity", 200, 60);
                                            cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(冰冷的感觉……原先所在的地方似乎变得很遥远。)", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(在王国里经历的所有事情……都是场梦吗。)", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face1##fc0xFFbfbfbf#(也罢，反正那地方也不适合我。)", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face1##fc0xFFbfbfbf#(可是，我为什么总想再次回到那个地方？)", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_Hero9(0, 1000);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1300);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                          cm.playSoundEffDirectly("Ambience.img/gravity");
                                                          cm.fieldEffect_Hero9(100, 500);
                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(800);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face10#……黛尔！", 36, 3001952, false, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face10#阿黛尔，阿黛尔！", 36, 3001952, true, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face3#你醒醒！", 36, 3001952, true, true, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_PlayBGM("Bgm53/RomanticSunset", 0, 0);
                                                                      cm.fieldEffect_PlayFieldSound("Sound/Foot.img/water/0", 200);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.fieldEffect_PlayFieldSound("Sound/Foot.img/water/1", 200);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
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
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                cm.fieldEffect_复合图片动画(["Effect/Direction18.img/effect/adele/spine/present/3/0/skeleton", "animation", '', '01'], [0, 1, 1, 0, 0, 0, 0, 1, 0, -80]);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face0#我们现在位于市中心外围的河上。眼下戒备森严，\r\n我觉得绕道走比较好……", 36, 3001952, false, true, 1);
                                                                                  cm.effect_Voice("Voice2.img/adele/present/D/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/1', 100);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(我们正乘船前进。已经平安甩掉了追兵。\r\n唉……刚才我是进入了亚空间之中。)", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face3##fc0xFFbfbfbf#(这里真的是现实吗？这个地方，还有眼前的少年，\r\n全部都是亚空间向我展示的幻影吗？)", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.fieldEffect_PlayFieldSound("Sound/Foot.img/water/2", 200);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.fieldEffect_PlayFieldSound("Sound/Foot.img/water/1", 200);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face6#你在想什么？", 36, 3001952, false, true, 1);
                                                                                            cm.effect_Voice("Voice2.img/adele/present/D/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/2', 100);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0#……嗯？", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                                                                              cm.effect_Voice("Voice2.img/adele/present/D/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + '/3', 100);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#你有时就像在做梦似的，看上去似乎对这个世界没有任何执着与留恋。\r\n也从不叫我的名字……感觉只是在望着远方。", 36, 3001952, true, true, 1);
                                                                                                cm.effect_Voice("Voice2.img/adele/present/D/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/4', 100);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face0#但我和布乌，还有这个里斯托尼亚王国……都是实实在在的，不是幻觉。\r\n你该试着去相信自己眼睛看到的，感受到的东西。", 36, 3001952, true, true, 1);
                                                                                                  cm.effect_Voice("Voice2.img/adele/present/D/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/5', 100);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom('#face3#……', 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                                                                                    cm.effect_Voice("Voice2.img/adele/present/D/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/6', 100);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face7#哈，哈哈……是不是觉得我一下变得很真挚？但我早就想\r\n跟你说这些话了。因为你看上去，总令人感到心疼。", 36, 3001952, true, true, 1);
                                                                                                      cm.effect_Voice("Voice2.img/adele/present/D/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/7', 100);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#我相信，就像我需要你阿黛尔一样，你也需要我的帮助。\r\n世界上没有什么事情是偶然发生的。", 36, 3001952, true, true, 1);
                                                                                                        cm.effect_Voice("Voice2.img/adele/present/D/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/8', 100);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face0#啊，所以说……我的意思是……那个……\r\n当你觉得辛苦的时候，我会守护你的！", 36, 3001952, true, true, 1);
                                                                                                          cm.effect_Voice("Voice2.img/adele/present/D/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/9', 100);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0#……", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
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
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                                      cm.fieldEffect_取消复合图片动画('01', 1, 0);
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(阿黛尔久久没有抬起头，但似乎在静静地微笑。)", 36, 3001952, false, true, 1);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(真希望她能常这样笑笑……)", 36, 3001952, true, true, 1);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.fieldEffect_PlayFieldSound("Sound/Foot.img/water/2", 200);
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/Foot.img/water/1", 200);
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
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
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                                                          cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                                                        } else if (status === V++) {
                                                                                                                                          cm.warp(993162030, 0, false);
                                                                                                                                          cm.setStandAloneMode(false);
                                                                                                                                          cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                                          cm.setInGameDirectionMode(false, true, false);
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