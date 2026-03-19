var status = -1;
var selectionLog = [];
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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_ProcessOnOffLayer("BlackOut", "Map/Effect2.img/BlackOut", 0, 0, 0, 0, 2000000, 4, 1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(2550001, "oid=1748416", 505, -400, 7, 455, 555, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=1748416", 'summon', 0, 0);
      cm.fieldEffect_复合图片动画(["Map/Effect2.img/Blizzard/skeleton", "normal", '', "key"], [1, 1, 1, 0, 0, 0, 0, 1]);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -450, -510);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
        cm.setAmbience("Ambience.img/blizzard_soft", 80, 60);
        cm.inGameDirectionEvent_同时移动镜头和人(1, 10);
        cm.inGameDirectionEvent_AskAnswerTime(3000);
      } else {
        if (status === V++) {
          cm.fieldEffect_ProcessOnOffLayer("BlackOut", '', 2, 4000, 0, 0, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(3000);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_Monologue("小时候，经常有人问我#r「喜欢雪吗」#k", 0);
            cm.effect_Voice("Voice3.img/DLep4/a/a_1.mp3", 100);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_Monologue("大部分问这问题的人都被我一脸不悦地无视了，也有几个人，我冲他们大发了一通雷霆。", 0);
              cm.effect_Voice("Voice3.img/DLep4/a/a_2.mp3", 100);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_Monologue('', 0);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_Monologue("在常年漫天飞雪的“冰峰雪域”，", 0);
                  cm.effect_Voice("Voice3.img/DLep4/a/a_3.mp3", 100);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_Monologue("#r再也没有比「暴风雪，寒冷，饥饿」#k这些更常见的东西了。", 0);
                    cm.effect_Voice("Voice3.img/DLep4/a/a_4.mp3", 100);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_Monologue('', 0);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_Monologue("那东西就像战争一样残酷，如果和战争一起更是加倍残酷。", 0);
                        cm.effect_Voice("Voice3.img/DLep4/a/a_5.mp3", 100);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_Monologue('', 1);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_Monologue("#fs40#EpisodeIV:雪原吟游诗人", 0);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_Monologue('', 1);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(700);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 3000, 0);
                                    cm.setAmbience("Ambience.img/blizzard_soft", 100, 60);
                                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_Monologue("冰峰雪域的人们相信雪是一种#r「天罚」#k。", 0);
                                      cm.effect_Voice("Voice3.img/DLep4/a/a_6.mp3", 100);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_Monologue("这话并非全无道理。", 0);
                                        cm.effect_Voice("Voice3.img/DLep4/a/a_7.mp3", 100);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_Monologue('', 0);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_Monologue("这个时代的人们，在制造惨剧方面真的很有一手。", 0);
                                            cm.effect_Voice("Voice3.img/DLep4/a/a_8.mp3", 100);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_Monologue('', 1);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_Monologue("但是……我的想法略有不同。", 0);
                                                  cm.effect_Voice("Voice3.img/DLep4/a/a_9.mp3", 100);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_Monologue("虽然就像是因一件小事而引发的固执一样……", 0);
                                                    cm.effect_Voice("Voice3.img/DLep4/a/a_10.mp3", 100);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_Monologue('也许雪……', 0);
                                                      cm.effect_Voice("Voice3.img/DLep4/a/a_11.mp3", 100);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_Monologue('', 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 1000, 3000, 37, -370);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(4500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("是一种爱呢。", 57, 0, false, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#fs18#爱……吗？", 37, 2550001, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("很美，不是吗？白茫茫的。", 57, 0, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("怎么？你不喜欢吗？", 57, 0, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("这个……", 37, 2550001, true, true);
                                                                        cm.updateInfoQuest(49004, "ComboK=51;QET=0O1wOY7N1QE$");
                                                                        cm.updateInfoQuest(49004, "QET=0O1wOY7N1QE$");
                                                                        cm.updateInfoQuest(49004, "QET=0O1wOY7N1QE$");
                                                                        cm.forceStartQuest(49004, '');
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.npc_ChangeController(2550007, "oid=1748719", 610, -400, 5, 560, 660, 1, true, 1000, false);
                                                                          cm.npc_SetSpecialAction("oid=1748719", 'summon', 0, 0);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("队长，已经完成兵力部署了。", 37, 2550007, false, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("开始战斗吧。", 57, 0, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom('是。', 37, 2550007, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.npc_SetForceMove("oid=1748719", 1, 250, 100);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act1/horn", 100);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.setAmbience("SoundEff.img/DLep4/war2", 50, 60);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("话说，那是什么？", 57, 0, false, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("是烽火台。", 37, 2550001, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -60, -210);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#fs18#烽火台？", 57, 0, false, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("据说当末日来临的时候，就用它来向人们示警。\r\n它是“龙神”的作品。", 37, 2550001, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("要说末日，不就是现在吗。\r\n那个被称为龙神的家伙到底在做什么？", 57, 0, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_Monologue("那个时代，就算哪天突然迎来#r末日#k，也不会有人觉得奇怪。", 0);
                                                                                                            cm.effect_Voice("Voice3.img/DLep4/b/b_1.mp3", 100);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.inGameDirectionEvent_Monologue("人们不停地破坏着什么。", 0);
                                                                                                              cm.effect_Voice("Voice3.img/DLep4/b/b_2.mp3", 100);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.inGameDirectionEvent_Monologue('', 0);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.inGameDirectionEvent_Monologue('还有，我也……', 0);
                                                                                                                  cm.effect_Voice("Voice3.img/DLep4/b/b_3.mp3", 100);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.inGameDirectionEvent_Monologue("是其中之一。这一点实在无法否认。", 0);
                                                                                                                    cm.effect_Voice("Voice3.img/DLep4/b/b_4.mp3", 100);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.inGameDirectionEvent_Monologue('', 1);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.fieldEffect_取消复合图片动画("key", 1, 0);
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.playSoundEffDirectly("SoundEff.img/DLep4/war2");
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.setAmbience("Ambience.img/flyingdeck_fire", 80, 60);
                                                                                                                                cm.setAmbience("Ambience.img/blizzard_soft", 60, 60);
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.fieldEffect_ProcessOnOffLayer('0', "Map/Effect3.img/DLep4/2", 0, 1500, 0, -80, 0, 4, 1);
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("冬天来了，房子却被烧毁了。\r\n那么多难民，究竟要去哪儿呢？", 37, 2550001, false, true);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("无处可去吧。我们也一样。", 57, 0, true, true);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.inGameDirectionEvent_Monologue("我们在为从未见过的王战斗。", 0);
                                                                                                                                          cm.effect_Voice("Voice3.img/DLep4/c/c_1.mp3", 100);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.inGameDirectionEvent_Monologue("曾经还保留着一丝天真的时候，我一度相信只要他的敌人全都消失，战争就会结束了。", 0);
                                                                                                                                            cm.effect_Voice("Voice3.img/DLep4/c/c_2.mp3", 100);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.inGameDirectionEvent_Monologue('', 1);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.inGameDirectionEvent_Monologue("然而很久之前我就明白了，那只是一种错觉。但是", 0);
                                                                                                                                                cm.effect_Voice("Voice3.img/DLep4/c/c_3.mp3", 100);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.inGameDirectionEvent_Monologue("也没有其他的方法。", 0);
                                                                                                                                                  cm.effect_Voice("Voice3.img/DLep4/c/c_4.mp3", 100);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.inGameDirectionEvent_Monologue('', 1);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("那、那个……", 37, 2550008, false, true);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.sendNormalTalk_Bottom("怎么了，小家伙？", 37, 2550001, true, true);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("天琴弓……500金币。", 37, 2550008, true, true);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.sendNormalTalk_Bottom("好漂亮的天琴弓啊。给，500金币。", 57, 0, true, true);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("我都不知道你还喜欢音乐。", 37, 2550001, true, true);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.sendNormalTalk_Bottom("你不知道吗？我原来的梦想就是做一个吟游诗人呢。", 57, 0, true, true);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.sendNormalTalk_Bottom("…………", 37, 2550001, true, true);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom("话说回来，现在该怎么办才好？\r\n听说邻国又打起内战了，要去那里吗？", 37, 2550001, false, true);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.sendNormalTalk_Bottom("我打算隐退。佣兵团就交给你了。", 57, 0, true, true);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.sendNormalTalk_Bottom("你又说这话。当然，我是没什么意见，不过……", 37, 2550001, true, true);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.sendNormalTalk_Bottom("保重。别饿着了。", 57, 0, true, true);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.sendNormalTalk_Bottom("诶？喂，队长，你去哪儿？", 37, 2550001, true, true);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#fs19#队长？#fs22#队长！", 37, 2550001, true, true);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.fieldEffect_ProcessOnOffLayer('0', '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                  } else if (status === V++) {
                                                                                                                                                                                    cm.dispose();
                                                                                                                                                                                    cm.warp(306090010, 0, true);
                                                                                                                                                                                    cm.eventSKill(0);
                                                                                                                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                    cm.npc_LeaveField("oid=1748416");
                                                                                                                                                                                    cm.npc_LeaveField("oid=1748416");
                                                                                                                                                                                    cm.npc_LeaveField("oid=1748719");
                                                                                                                                                                                    cm.npc_LeaveField("oid=1748719");
                                                                                                                                                                                  }
                                                                                                                                                                                }
                                                                                                                                                                              }
                                                                                                                                                                            }
                                                                                                                                                                          }
                                                                                                                                                                        }
                                                                                                                                                                      }
                                                                                                                                                                    }
                                                                                                                                                                  }
                                                                                                                                                                }
                                                                                                                                                              }
                                                                                                                                                            }
                                                                                                                                                          }
                                                                                                                                                        }
                                                                                                                                                      }
                                                                                                                                                    }
                                                                                                                                                  }
                                                                                                                                                }
                                                                                                                                              }
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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