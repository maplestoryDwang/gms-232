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
      cm.inGameDirectionEvent_AskAnswerTime(1500);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk_Bottom("#face0#我有时真猜不透伟大主君的心思。", 36, 1540929, false, true, 1);
        cm.effect_Voice("Voice6.img/Library/hilla/26-01-hilla.mp3", 100);
      } else {
        if (status === V++) {
          cm.setAccountQuestInfo(252, "count=42031;T=20210420235240");
          cm.sendNormalTalk_Bottom("#face0#我知道，在经历数千数万次的战斗\r\n与数千数万次的誓约后，#r可以炼成无比强大的灵魂#k……", 36, 1540929, true, true, 1);
          cm.effect_Voice("Voice6.img/Library/hilla/26-02-hilla.mp3", 100);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#在此基础上，混入超越之力，就造就了名副其实的怪物……", 36, 1540929, true, true, 1);
            cm.effect_Voice("Voice6.img/Library/hilla/26-03-hilla.mp3", 100);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#他到底为什么需要那样盲目的傀儡？", 36, 1540929, true, true, 1);
              cm.effect_Voice("Voice6.img/Library/hilla/26-04-hilla.mp3", 100);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#稍微转变下思路的话，可以简单类推出两个结论。", 36, 2560000, true, true, 1);
                cm.effect_Voice("Voice6.img/Library/will/26-05-will.mp3", 100);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#嗯？", 36, 1540929, true, true, 1);
                  cm.effect_Voice("Voice6.img/Library/hilla/26-06-hilla.mp3", 100);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#预见这一切的黑魔法师制造出那样的怪物……", 36, 2560000, true, true, 1);
                    cm.effect_Voice("Voice6.img/Library/will/26-07-will.mp3", 100);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#反过来说，也就是会出现那样#b强大的敌人#k。", 36, 2560000, true, true, 1);
                      cm.effect_Voice("Voice6.img/Library/will/26-08-will.mp3", 100);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#究竟是什么样的敌人……不觉得很期待吗？", 36, 2560000, true, true, 1);
                        cm.effect_Voice("Voice6.img/Library/will/26-09-will.mp3", 100);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#那么强大的敌人……完全无法想象……", 36, 1540929, true, true, 1);
                          cm.effect_Voice("Voice6.img/Library/hilla/26-10-hilla.mp3", 100);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#那么，第二个结论呢？", 36, 1540929, false, true, 1);
                              cm.effect_Voice("Voice6.img/Library/hilla/26-11-hilla.mp3", 100);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#第二个是……", 36, 2560000, true, true, 1);
                                cm.effect_Voice("Voice6.img/Library/will/26-12-will.mp3", 100);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#这个嘛？是什么呢？", 36, 2560000, false, true, 1);
                                    cm.effect_Voice("Voice6.img/Library/will/26-13-will.mp3", 100);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#……。", 36, 1540929, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#哼，白痴。", 36, 1540929, true, true, 1);
                                        cm.effect_Voice("Voice6.img/Library/hilla/26-14-hilla.mp3", 100);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(3500);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#(第二个结论就是……需要在任何情况下都不会叛变的，真正的忠臣。)", 36, 2560000, false, true, 1);
                                            cm.effect_Voice("Voice6.img/Library/will/26-15-will.mp3", 100);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#(话说回来，没想到那些恶魔还挺有用处的。)", 36, 2560000, true, true, 1);
                                              cm.effect_Voice("Voice6.img/Library/will/26-16-will.mp3", 100);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#(创造与现实完全相同的#r虚假世界#k的力量……真有意思。)", 36, 2560000, true, true, 1);
                                                cm.effect_Voice("Voice6.img/Library/will/26-17-will.mp3", 100);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#(可以役使恶魔的魔导文明圣瑞尼亚……。)", 36, 2560000, false, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#(应该会在某处留下痕迹……。)", 36, 2560000, true, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_PlayBGM("Bgm55/MyPrinceMyKingdom", 0, 0);
                                                          cm.fieldEffect_ProcessOnOffLayer("BlackOut", "Map/Effect2.img/BlackOut", 0, 0, 0, 0, 2000000, 4, 1, 0, 1, 0, 0);
                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction25.img/Dlep6/ilust/6/0", 0, 0, 0, 0, 0, 4, 1, -1, 0, 0, 0);
                                                            cm.fieldEffect_ProcessOnOffLayer('01', "Effect/Direction25.img/Dlep6/ilust/6/2", 0, 0, 0, 0, 1, 4, 1, -1, 0, 0, 0);
                                                            cm.fieldEffect_ProcessOnOffLayer('10', "Effect/Direction25.img/Dlep6/ilust/6/3", 0, 0, 0, 0, 1, 4, 1, -1, 0, 0, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(4500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_ProcessOnOffLayer("BlackOut", '', 2, 3500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                              cm.inGameDirectionEvent_AskAnswerTime(6500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_Monologue("在某个温暖的春日", 0);
                                                                cm.effect_Voice("Voice6.img/Library/kel/01-01-kel.mp3", 100);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_Monologue("我看徒弟打瞌睡的模样实在可爱", 0);
                                                                  cm.effect_Voice("Voice6.img/Library/kel/01-02-kel.mp3", 100);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_Monologue("就打趣地问他在深思熟虑什么。", 1);
                                                                    cm.effect_Voice("Voice6.img/Library/kel/01-03-kel.mp3", 100);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_Monologue("睁开眼睛的徒弟，", 0);
                                                                        cm.effect_Voice("Voice6.img/Library/kel/01-04-kel.mp3", 100);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_Monologue("接住刚巧落到手上的花瓣，\r\n开始胡诌。", 1);
                                                                          cm.effect_Voice("Voice6.img/Library/kel/01-05-kel.mp3", 100);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_Monologue("世间所有的美好事物，\r\n为何都只是昙花一现。", 1);
                                                                              cm.effect_Voice("Voice6.img/Library/kel/01-06-kel.mp3", 100);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_Monologue("他微笑的脸庞犹如春风般和煦，\r\n我也不由自主地露出了笑容。", 1);
                                                                                  cm.effect_Voice("Voice6.img/Library/kel/01-07-kel.mp3", 100);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_Monologue("花瓣之美，在于它会纷飞飘落。", 0);
                                                                                      cm.effect_Voice("Voice6.img/Library/kel/01-08-kel.mp3", 100);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_Monologue("人也正因此才美丽。", 1);
                                                                                        cm.effect_Voice("Voice6.img/Library/kel/01-09-kel.mp3", 100);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_Monologue("所以，请不要与述说永恒的人过多来往。", 1);
                                                                                            cm.effect_Voice("Voice6.img/Library/kel/01-10-kel.mp3", 100);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_Monologue("天底下没有什么是一成不变的，", 0);
                                                                                                cm.effect_Voice("Voice6.img/Library/kel/01-11-kel.mp3", 100);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_Monologue("鼓吹永恒的人，绝对是个骗子。", 1);
                                                                                                  cm.effect_Voice("Voice6.img/Library/kel/01-12-kel.mp3", 100);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_Monologue("但想到我也是曾许下永恒誓约的骑士……", 0);
                                                                                                      cm.effect_Voice("Voice6.img/Library/kel/01-13-kel.mp3", 100);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_Monologue("我们不禁相视而笑。", 1);
                                                                                                        cm.effect_Voice("Voice6.img/Library/kel/01-14-kel.mp3", 100);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.fieldEffect_ProcessOnOffLayer("BlackOut2", "Map/Effect2.img/BlackOut", 0, 3500, 0, 0, 2000000, 4, 1, 0, 1, 0, 0);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(6000);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.inGameDirectionEvent_Monologue('在某个温暖的……', 0);
                                                                                                              cm.effect_Voice("Voice6.img/Library/kel/01-15-kel.mp3", 100);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.inGameDirectionEvent_Monologue("那是个温暖的春日。", 1);
                                                                                                                  cm.effect_Voice("Voice6.img/Library/kel/01-16-kel.mp3", 100);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.inGameDirectionEvent_Monologue("#fs40#Episode VI：圣瑞尼亚的骑士", 1);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.fieldEffect_Hero9(0, 5000);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.fieldEffect_Hero9(45, 0);
                                                                                                                              cm.fieldEffect_PlayBGM("Bgm34/DimensionLibrary", 0, 0);
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk("故事就到这里结束了.", 5, 2500000, false, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk("现在回来吧, 以现实中真实的#h0#为身份!", 5, 2500000, true, true);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                  } else if (status === V++) {
                                                                                                                                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                                    cm.forceCompleteQuest(37813);
                                                                                                                                    cm.forceCompleteQuest(37835);
                                                                                                                                    cm.finishAchievement(1239);
                                                                                                                                    cm.updateInfoQuest(37813, "exp=1");
                                                                                                                                    cm.gainExp(5872020);
                                                                                                                                    cm.updateInfoQuest(37800, "01=h1;02=die;03=die;q1=clear;04=die;q2=clear;05=h0;06=h0;q4=clear;q6=clear;q7=clear;q8=clear;q9=clear;dir00=end;dir01=end;dir02=end;dir03=end;dir04=end;dir05=end;q10=clear;q11=clear;q12=clear;q13=clear");
                                                                                                                                    cm.updateInfoQuest(37800, "01=h1;02=h1;03=die;q1=clear;04=die;q2=clear;05=h0;06=h0;q4=clear;q6=clear;q7=clear;q8=clear;q9=clear;dir00=end;dir01=end;dir02=end;dir03=end;dir04=end;dir05=end;q10=clear;q11=clear;q12=clear;q13=clear");
                                                                                                                                    cm.updateInfoQuest(37800, "01=h1;02=h1;03=h1;q1=clear;04=die;q2=clear;05=h0;06=h0;q4=clear;q6=clear;q7=clear;q8=clear;q9=clear;dir00=end;dir01=end;dir02=end;dir03=end;dir04=end;dir05=end;q10=clear;q11=clear;q12=clear;q13=clear");
                                                                                                                                    cm.updateInfoQuest(37800, "01=h1;02=h1;03=h1;q1=clear;04=h1;q2=clear;05=h0;06=h0;q4=clear;q6=clear;q7=clear;q8=clear;q9=clear;dir00=end;dir01=end;dir02=end;dir03=end;dir04=end;dir05=end;q10=clear;q11=clear;q12=clear;q13=clear");
                                                                                                                                    cm.updateInfoQuest(37800, "01=h1;02=h1;03=h1;q1=clear;04=h1;q2=clear;05=h1;06=h0;q4=clear;q6=clear;q7=clear;q8=clear;q9=clear;dir00=end;dir01=end;dir02=end;dir03=end;dir04=end;dir05=end;q10=clear;q11=clear;q12=clear;q13=clear");
                                                                                                                                    cm.dispose();
                                                                                                                                    cm.warp(302000000, 0, false);
                                                                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                                                                    cm.setStandAloneMode(false);
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}