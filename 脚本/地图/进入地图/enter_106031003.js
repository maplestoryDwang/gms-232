var status = -1;
function action(f, E, e) {
  status++;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.npc_ChangeController(1302100, "oid=4352", -101, 192, 30, -151, -51, 0, false, false);
      cm.npc_ChangeController(1302105, 'oid=4353', 36, 382, 15, -14, 86, 0, false, false);
      cm.npc_ChangeController(1302106, "oid=4354", 369, 382, 8, 319, 419, 1, false, false);
      cm.npc_ChangeController(1302107, "oid=4355", -112, 382, 3, -162, -62, 0, false, false);
      cm.npc_ChangeController(1302108, 'oid=4356', 240, 382, 6, 190, 290, 1, false, false);
      cm.npc_ChangeController(1302113, 'oid=4357', 444, 290, 42, 394, 494, 1, false, false);
      cm.npc_ChangeController(1302114, "oid=4358", 538, 334, 44, 488, 588, 1, false, false);
      cm.npc_ChangeController(1302115, "oid=4359", -173, 289, 26, -223, -123, 0, false, false);
      cm.npc_ChangeController(1302116, 'oid=4360', -257, 333, 28, -307, -207, 0, false, false);
      cm.npc_ChangeController(1302104, "oid=4361", 163, 260, 39, 113, 213, 0, false, false);
      cm.npc_ChangeController(1302101, "oid=19478971", 289, 254, 40, 239, 339, 1, true, false);
      cm.npc_SetSpecialAction("oid=19478971", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.sendNormalTalk_Bottom("父亲，请快把药吃下去。这是勇士为你买来的蘑菇万能疗伤药。", 33, 1302001, false, true);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk_Bottom("#face1#谢，谢谢。那么……咕嘟，咕嘟，咕嘟", 33, 1302004, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face2#哦，力量……感觉充满了力量！啊哈哈哈哈哈哈哈！", 33, 1302004, true, true);
        } else {
          if (status === V++) {
            cm.forceStartQuest(30081, '');
            cm.sendNormalTalk_Bottom("你的白血病治好了吗？啊，太好了。真是太好了。勇士，真不知道该如何报答你……", 33, 1302001, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("对了，我碧欧蕾塔愿意成为勇士的新娘。", 33, 1302001, true, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(2500);
                cm.effect_NormalSpeechBalloon('!', 1, 0, 0, 2000, 0, 9897148);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("不，不，没关系。真的……真的没关系。", 57, 1302001, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("不，勇士，你完全有资格做我碧欧蕾塔的新郎。好了，快过来吧。我现在是你的女人了。", 33, 1302001, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("不行。这样下去的话，真的要娶这个难看的蘑菇做新娘了。那样的话……", 57, 1302001, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("其实，我……喜欢黑大海盗！", 57, 1302001, true, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(2500);
                          cm.effect_NormalSpeechBalloon('!', 1, 0, 0, 2000, 1302100, 9897148);
                          cm.effect_NormalSpeechBalloon('!', 1, 1, 0, 2000, 1302101, 9897148);
                          cm.effect_NormalSpeechBalloon('!', 1, 0, 0, 2000, 1302104, 9897148);
                          cm.effect_NormalSpeechBalloon('!', 1, 0, 0, 2000, 1302105, 9897148);
                          cm.effect_NormalSpeechBalloon('!', 1, 0, 0, 2000, 1302106, 9897148);
                          cm.effect_NormalSpeechBalloon('!', 1, 0, 0, 2000, 1302107, 9897148);
                          cm.effect_NormalSpeechBalloon('!', 1, 0, 0, 2000, 1302108, 9897148);
                          cm.effect_NormalSpeechBalloon('!', 1, 0, 0, 2000, 1302113, 9897148);
                          cm.effect_NormalSpeechBalloon('!', 1, 0, 0, 2000, 1302114, 9897148);
                          cm.effect_NormalSpeechBalloon('!', 1, 0, 0, 2000, 1302115, 9897148);
                          cm.effect_NormalSpeechBalloon('!', 1, 0, 0, 2000, 1302116, 9897148);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                            cm.effect_NormalSpeechBalloon("好了, 再见！", 1, 0, 0, 2000, 0, 9897148);
                            cm.inGameDirectionEvent_MoveAction(2);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_MoveAction(0);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_SetHideEffect(1);
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("呵呵，这样也好。我希望你能找个蘑菇做女婿，一起治理这个国家。你明白我的心意吗？", 33, 1302000, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom('父王……呜呜。', 33, 1302001, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("你虽然不是我的亲生女儿，但你仍然是这个国家的公主。蘑菇大臣，请原谅过去那个无能的我。能成为碧欧蕾塔的父亲，我感到很幸福。", 33, 1302000, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face2#陛下，请别这么说！你把我女儿碧欧蕾塔养大成人！我愿意为蘑菇王国鞠躬尽瘁！", 33, 1302004, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("谢谢你，蘑菇大臣。好了，博公主一笑大会重新开始！能够博公主一笑的人，可以成为这个国家的国王！", 33, 1302000, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(2500);
                                            cm.effect_NormalSpeechBalloon('公主万岁！', 1, 0, 0, 2000, 1302105, 9897148);
                                            cm.effect_NormalSpeechBalloon('万岁！', 1, 0, 0, 2000, 1302106, 9897148);
                                            cm.effect_NormalSpeechBalloon("国王陛下万岁！", 1, 0, 0, 2000, 1302107, 9897148);
                                            cm.effect_NormalSpeechBalloon('万岁！', 1, 0, 0, 2000, 1302108, 9897148);
                                            cm.effect_NormalSpeechBalloon('蘑菇王国万岁！！', 1, 0, 0, 2000, 1302113, 9897148);
                                            cm.effect_NormalSpeechBalloon("万岁！", 1, 0, 0, 2000, 1302114, 9897148);
                                            cm.effect_NormalSpeechBalloon("万岁！", 1, 0, 0, 2000, 1302115, 9897148);
                                            cm.effect_NormalSpeechBalloon("万岁！", 1, 0, 0, 2000, 1302116, 9897148);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("(但是父王……父亲……我其实一直在笑。为什么没人看得出来呢……？)", 33, 1302001, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_PushScaleInfo(1500, 5000, 1500, 285, 300);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_SetSpecialAction("oid=19478971", "cry", 0, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_InsertCanvas(1, 80, 80, 0, 0, 1500, 0);
                                                      cm.fieldEffect_PlayBGM("Bgm38.img/FlowerVioleta", 0, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_PushScaleInfo(500, 1000, 500, 133, 200);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_ScreenMsg("Map/Effect2.img/flowervioleta/ending");
                                                            cm.inGameDirectionEvent_MonologueScroll("总监\t\t\t\t\t\tSY", 0, 0, 10, 3);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_MonologueScroll("脚本\t\t\t\t\t\tSyasya", 0, 0, 10, 3);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_MonologueScroll("修复\t\t\t\t\t\tBMS团队", 0, 0, 10, 3);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_MonologueScroll("助理总监\t\t\t\t\tWonky", 0, 0, 10, 3);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_MonologueScroll("艺术总监\t\t\t\t\t林次长", 0, 0, 10, 3);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_MonologueScroll("策划/开发\t\t\t\t\tJara Keutokki", 0, 0, 10, 3);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_MonologueScroll("\t\t\t\t\t\t\tMJ WW", 0, 0, 10, 3);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_MonologueScroll("设计\t\t\t\t\t\tKkyuji Banilra", 0, 0, 10, 3);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_MonologueScroll("\t\t\t\tShyegg洪\tKomaboy", 0, 0, 10, 3);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_MonologueScroll("\t\t\t\t\t\t\t设计师Y ", 0, 0, 10, 3);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_MonologueScroll("QA\t\t\t\t\t\t\t最强战士普通人", 0, 0, 10, 3);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_MonologueScroll("\t\t\t\t粗心姐姐\tKkangroki", 0, 0, 10, 2);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_MonologueScroll("运营\t\t\t\t\t\tTina.P Annamese", 0, 0, 10, 3);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_MonologueScroll("\t\t\t\t\t\t\t海盗王船长", 0, 0, 10, 3);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_MonologueScroll("CS\t\t\t\t\t\t\tEricsson金博士", 0, 0, 10, 3);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_MonologueScroll("营销/网站\t\t\t\t\tSangbbang Keurom", 0, 0, 10, 3);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_MonologueScroll("\t\t\t\t\t\t\tJejeking Cocoa", 0, 0, 10, 3);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_MonologueScroll("\t\t\t\t\t\t\t明月之家老幺", 0, 0, 10, 3);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_MonologueScroll("Gamma歌曲\t\t\t\t\tDD", 0, 0, 10, 3);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_MonologueScroll("Omega歌曲\t\t\t\t\tMini", 0, 0, 10, 3);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.inGameDirectionEvent_MonologueScroll("配音\t\t\t\t\t\t金尚柏", 0, 0, 10, 3);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_MonologueScroll("音响\t\t\t\t\t\tSTUDIO EIM", 0, 0, 10, 3);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_MonologueScroll("标题影像\t\t\t\t\tTodeffect", 0, 0, 10, 3);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_MonologueScroll("制作\t\t\t\t\t\t（株）NEXON Korea", 1, 0, 10, 3);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                          } else if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_SetHideEffect(0);
                                                                                                            cm.npc_LeaveField("oid=19478971");
                                                                                                            cm.eventSKill(0);
                                                                                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 0, 0);
                                                                                                            cm.dispose();
                                                                                                            cm.forceCompleteQuest(30075);
                                                                                                            cm.warp(106030000, 0, true);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;