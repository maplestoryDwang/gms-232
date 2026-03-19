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
      cm.setStandAloneMode(true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.setNPC_Fadein(3001676, 1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 200, 22);
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
            cm.sendNormalTalk_Bottom("#face0#你将永远记住自己的罪孽，在这个空间里游荡。", 36, 3001938 - cm.getPlayer().getGender(), false, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#因为这是你活下来的唯一理由。", 36, 3001938 - cm.getPlayer().getGender(), true, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face3#赎罪……这是我活下来的理由？", 36, 3001950, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#我要被永远囚禁？", 36, 3001950, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face2#是啊，我的罪孽不可抹消，但是……", 36, 3001950, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face2#我似乎曾许下了重要的约定。", 36, 3001950, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#是什么呢……我在想念什么？", 36, 3001950, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_MoveAction(4);
                          cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(混乱的心绪让我很泄气，不禁腿脚一软瘫坐在地上。\r\n这时，怀里突然掉出了一个东西。)", 36, 3001950, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction18.img/effect/adele/illust/present/1/0", 0, 1000, 0, 0, 1, 4, 1, -1, 0, 0, 0);
                              cm.sendNormalTalk_Bottom("#face2#我对着这座让你我相遇的雕像起誓，\r\n今后只会在拯救这个王国的事情上，借助你的力量。", 36, 3001952, false, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face2#你要好好保管骑士之证哦。\r\n以后哪一天封你做我直属骑士的话，这个依然有效。", 36, 3001952, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_Hero9(0, 1000);
                                  cm.inGameDirectionEvent_AskAnswerTime(1300);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                    cm.fieldEffect_Hero9(100, 500);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_PlayBGM("Bgm53/AdelesOath", 0, 0);
                                      cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(至今为止经历的事情在我脑海中一一掠过。\r\n认识杰罗姆之后发生的众多事情……我要守护的那些东西。)", 36, 3001950, false, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                        cm.sendNormalTalk_Bottom("#face2#我还有要做的事情。", 36, 3001950, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#我……不能被关在亚空间里！", 36, 3001950, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(2500);
                                            cm.effect_Text(["#fn黑体##fs30##fc0xFFd8d8d8#得到剑之恩宠的勇士啊……化身为光之剑吧。", "SampleType00"], [50, 1000, 4, 0, 0, 0, 4, 3, 0, 0, 0, 0]);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(5500);
                                              cm.effect_Text(["#fn黑体##fs30##fc0xFFd8d8d8#你已找到了新的使命……", "SampleType00"], [50, 1000, 4, 0, 0, 0, 4, 3, 0, 0, 0, 0]);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(我又听见了那个神秘声音的呼唤。\r\n黑暗中掩埋的记忆在渐渐复苏。)", 36, 3001950, false, true, 1);
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
                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/adele/memory_in", 100);
                                                            cm.fieldEffect_复合图片动画(["Effect/Direction18.img/effect/adele/spine/etc/7/skeleton", "new", '', '00'], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0]);
                                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_复合图片动画(["Effect/Direction18.img/effect/adele/spine/etc/5/skeleton", "new", '', '5'], [0, 1, 0, 0, 0, 0, 0, 1, 0, 0]);
                                                              cm.fieldEffect_复合图片动画(["Effect/Direction18.img/effect/adele/spine/etc/6/skeleton", "new", '', '6'], [0, 1, 0, 0, 0, 0, 0, 1, 0, 0]);
                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_ProcessOnOffLayer('02', "Effect/Direction18.img/effect/adele/spine/past_job/4/0", 0, 1000, 0, -80, 1, 4, 1, -1, 0, 0, 0);
                                                                cm.effect_Voice("Voice2.img/adele/past/E/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/1', 100);
                                                                cm.effect_Text(["#fn黑体##fs30##fc0xFF8d8d8d#神王殿的门……", ''], [10, 100, 7, 0, -60, 0, 4, 3, 0, 0, -1, 1]);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.effect_Voice("Voice2.img/adele/past/E/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/2', 100);
                                                                  cm.effect_Text(["#fn黑体##fs30##fc0xFF8d8d8d#“你们竟推倒了……英灵之门。”", ''], [10, 100, 7, 0, -60, 0, 4, 3, 0, 0, -1, 1]);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.effect_Voice("Voice2.img/adele/past/E/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/3', 100);
                                                                    cm.effect_Text(["#fn黑体##fs30#维罗妮卡，你终究……", ''], [10, 100, 7, 0, -60, 0, 4, 3, 0, 0, -1, 1]);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.effect_Voice("Voice2.img/adele/past/E/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/4', 100);
                                                                      cm.effect_Text(["#fn黑体##fs30##fc0xFF8d8d8d#剑之庇佑依然存在。", ''], [10, 100, 7, 0, -60, 0, 4, 3, 0, 0, -1, 1]);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.effect_Voice("Voice2.img/adele/past/E/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/5', 100);
                                                                        cm.effect_Text(["#fn黑体##fs30##fc0xFF8d8d8d#这是否意味着，我还有要做的事情？", ''], [10, 100, 7, 0, -60, 0, 4, 3, 0, 0, -1, 1]);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.effect_Voice("Voice2.img/adele/past/E/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/6', 100);
                                                                          cm.effect_Text(["#fn黑体##fs30##fc0xFF8d8d8d#对我这个失格的骑士……", ''], [10, 100, 7, 0, -60, 0, 4, 3, 0, 0, -1, 1]);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.effect_Voice("Voice2.img/adele/past/E/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/8', 100);
                                                                            cm.effect_Text(["#fn黑体##fs30#咳呃……", ''], [10, 100, 7, 0, -60, 0, 4, 3, 0, 0, -1, 1]);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.fieldEffect_ProcessOnOffLayer('02', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1300);
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
                                                                                        cm.fieldEffect_复合图片动画(["Effect/Direction18.img/effect/adele/spine/past_job/4/1/skeleton", "animation", '', '99'], [0, 1, 0, 0, 0, 0, 0, 1, 0, -80]);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1300);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.effect_Voice("Voice2.img/adele/past/E/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/9', 100);
                                                                                          cm.effect_Text(["#fn黑体##fs30##fc0xFF8d8d8d#主君，属下也希望追随您而去。", ''], [10, 100, 7, 0, -60, 0, 4, 3, 0, 0, -1, 1]);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.effect_Voice("Voice2.img/adele/past/E/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/10", 100);
                                                                                            cm.effect_Text(["#fn黑体##fs30##fc0xFF8d8d8d#但是……我还有要做的事……", ''], [10, 100, 7, 0, -60, 0, 4, 3, 0, 0, -1, 1]);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.effect_Voice("Voice2.img/adele/past/E/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/11", 100);
                                                                                              cm.effect_Text(["#fn黑体##fs30##fc0xFF8d8d8d#还有未尽的使命……等我去完成。", ''], [10, 100, 7, 0, -60, 0, 4, 3, 0, 0, -1, 1]);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.effect_Voice("Voice2.img/adele/past/E/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/12", 100);
                                                                                                cm.effect_Text(["#fn黑体##fs30#咳，呃……", ''], [10, 100, 7, 0, -60, 0, 4, 3, 0, 0, -1, 1]);
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
                                                                                                          cm.fieldEffect_取消复合图片动画('99', 1, 0);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1300);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/adele/memory_in", 100);
                                                                                                            cm.fieldEffect_复合图片动画(["Effect/Direction18.img/effect/adele/spine/etc/7/skeleton", "new", '', '00'], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0]);
                                                                                                            cm.fieldEffect_取消复合图片动画('5', 0, 0);
                                                                                                            cm.fieldEffect_取消复合图片动画('6', 0, 0);
                                                                                                            cm.fieldEffect_Hero9(0, 1000);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1300);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                              cm.fieldEffect_Hero9(100, 500);
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.fieldEffect_PlayBGM("Bgm53/ForEinherjar", 0, 0);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(3000);
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
                                                                                                                          cm.warp(993162060, 0, false);
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