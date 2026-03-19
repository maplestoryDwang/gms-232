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
      cm.updateInfoQuest(26900, 'mt=0');
      cm.updateInfoQuest(26900, "mt=0;al=1");
      cm.updateInfoQuest(26900, "mt=0;id=0;al=1");
      cm.updateInfoQuest(26900, "mt=0;id=0;al=1");
      cm.updateInfoQuest(26902, '');
      cm.updateInfoQuest(26903, '');
      cm.updateInfoQuest(26904, '');
      cm.updateInfoQuest(26905, '');
      cm.updateInfoQuest(26900, "sf=0;mt=0;id=0;al=1");
      cm.updateInfoQuest(64542, "gauge=0");
      cm.setSessionValue("kill_count", '0');
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.teachSkill(160010000, 1, 1);
      cm.updateInfoQuest(36200, "set=1");
      cm.npc_ChangeController(3005110, "oid=388496", 5399, 279, 7, 5349, 5449, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=388496", 'summon', 0, 0);
      cm.npc_ChangeController(3005111, "oid=388497", 5507, 279, 5, 5457, 5557, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=388497", "summon", 0, 0);
      cm.npc_ChangeController(3005112, "oid=388498", 5586, 279, 5, 5536, 5636, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=388498", 'summon', 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 3600, -250);
    } else {
      if (status === V++) {
        cm.updateInfoQuest(16150, '');
        cm.updateInfoQuest(66044, '');
        [[1, [[2633627, 1, 10080], [2001566, 1000, 0], [2001567, 1000, 0]], [[2633449, 1, 10080], [2436017, 1, 10080], [2028330, 20, 10080]]], [30, [[2435742, 1, 10080], [2450180, 5, 10080]], [[2633451, 1, 10080], [2023999, 3, 10080]]], [60, [[2634361, 1, 10080], [2437500, 1, 10080]], [[2634362, 1, 10080], [2040826, 3, 0]]], [90, [[2434270, 1, 10080], [2434270, 1, 10080]], [[2633499, 1, 10080], [2633500, 1, 10080]]], [100, [[1004404, 1, 0], [1102799, 1, 0], [1052893, 1, 0], [2633456, 1, 10080]], [[2433509, 1, 10080], [2433510, 1, 10080], [2633455, 1, 10080], [2633633, 1, 10080]]], [120, [[2434288, 5, 10080], [2450180, 5, 10080], [2049715, 3, 10080], [2633458, 1, 10080]], [[2435752, 1, 10080], [2023999, 3, 10080], [2633457, 1, 10080], [2633633, 1, 10080]]], [130, [[2434921, 1, 10080], [4001832, 1000, 0], [2633502, 1, 10080]], [[2633454, 1, 10080], [4001212, 2, 0], [2433654, 2, 0]]], [150, [[2633503, 1, 10080], [2439299, 1, 10080]], [[2633459, 1, 10080], [2634362, 1, 10080]]], [170, [[2711001, 20, 10080], [2433960, 2, 0], [2433961, 2, 0]], [[2631500, 1, 10080], [2633446, 1, 10080], [2633447, 1, 10080]]], [190, [[2632150, 1, 10080], [2450180, 5, 10080]], [[2023999, 3, 10080], [2634362, 1, 10080]]], [200, [[2436078, 20, 10080], [2633629, 1, 10080], [2610003, 20, 10080], [4001832, 1000, 0]], [[2630437, 20, 10080], [2644012, 1, 10080], [2610002, 1, 0], [2730003, 5, 10080]]], [205, [[2631527, 1, 10080], [2633630, 1, 10080], [2610003, 20, 10080], [2633468, 1, 10080]], [[2633501, 1, 10080], [2610002, 1, 0], [2730003, 5, 10080]]], [210, [[2436078, 20, 10080], [2633631, 1, 10080], [2610003, 20, 10080], [2450180, 5, 10080]], [[2630437, 20, 10080], [2610002, 1, 0], [2047405, 1, 10080]]], [215, [[2631527, 1, 10080], [2633469, 1, 10080], [2614079, 1, 10080]], [[2023999, 3, 10080], [2610002, 1, 0]]], [220, [[2632960, 1, 10080], [2633470, 1, 10080], [2470010, 1, 10080], [2633636, 1, 10080]], [[2633467, 1, 10080], [2633464, 1, 10080], [2633501, 1, 10080]]]];
        cm.updateInfoQuest(56995, "state=0");
        cm.updateInfoQuest(14756, "d=22/01/21/12/49");
        cm.updateInfoQuest(14755, '');
        cm.updateInfoQuest(52998, '');
        cm.updateInfoQuest(65132, '');
        cm.updateInfoQuest(26011, '');
        cm.updateInfoQuest(100813, '');
        cm.updateInfoQuest(65891, "newCharacter=1");
        cm.updateInfoQuest(61585, "0=20220121");
        cm.updateInfoQuest(64612, "housing=8");
        cm.updateInfoQuest(64612, "housing=8;furniture=11");
        cm.updateInfoQuest(32547, "lastDecTime=2022/01/21 12:49:57");
        cm.updateInfoQuest(19019, "id=0");
        cm.updateInfoQuest(19019, "date=0;id=0");
        cm.updateInfoQuest(19019, "expired=1;date=0;id=0");
        cm.forceStartQuest(7290, '0');
        cm.forceStartQuest(14431, '');
        cm.forceStartQuest(15148, '');
        cm.updateInfoQuest(16019, '');
        cm.forceStartQuest(16019, '');
        cm.forceStartQuest(16021, '');
        cm.forceStartQuest(16023, '');
        cm.updateInfoQuest(16025, '');
        cm.forceStartQuest(16025, '');
        cm.updateInfoQuest(16027, '');
        cm.forceStartQuest(16027, '');
        cm.forceStartQuest(16029, '');
        cm.forceStartQuest(16874, '');
        cm.forceCompleteQuest(16874);
        cm.forceStartQuest(16875, '');
        cm.forceCompleteQuest(16875);
        cm.forceStartQuest(16876, '');
        cm.forceCompleteQuest(16876);
        cm.forceStartQuest(18938, '');
        cm.forceStartQuest(26024, '');
        cm.forceStartQuest(33189, '');
        cm.forceStartQuest(33190, '');
        cm.forceStartQuest(33243, '');
        cm.forceStartQuest(33265, '');
        cm.forceStartQuest(33267, '');
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.forceStartQuest(501366, '');
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.effect_Voice("Voice6.img/lara/0/Female/1", 100);
            cm.inGameDirectionEvent_Monologue("大家知道吗？", 1);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(800);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushScaleInfo(40000, 0, 1000, 40000, 6100, -250);
              } else {
                if (status === V++) {
                  cm.effect_Voice("Voice6.img/lara/0/Female/2", 100);
                  cm.inGameDirectionEvent_Monologue("诞生于大自然的所有生命", 0);
                } else {
                  if (status === V++) {
                    cm.effect_Voice("Voice6.img/lara/0/Female/3", 100);
                    cm.inGameDirectionEvent_Monologue("据说由风和水形成，接受阳光的照耀而存在于这片土地。", 0);
                  } else {
                    if (status === V++) {
                      cm.effect_Voice("Voice6.img/lara/0/Female/4", 100);
                      cm.inGameDirectionEvent_Monologue("所以据说只要看看土地，就知道我们该怎么活下去了。", 1);
                    } else {
                      if (status === V++) {
                        cm.effect_Voice("Voice6.img/lara/0/Female/5", 100);
                        cm.inGameDirectionEvent_Monologue("以敞开的心扉像风一般飞翔", 0);
                      } else {
                        if (status === V++) {
                          cm.effect_Voice("Voice6.img/lara/0/Female/6", 100);
                          cm.inGameDirectionEvent_Monologue("像河流一般永不停息地向前奔跑", 0);
                        } else {
                          if (status === V++) {
                            cm.effect_Voice("Voice6.img/lara/0/Female/7", 100);
                            cm.inGameDirectionEvent_Monologue("像阳光一样温暖那些痛苦的心灵", 0);
                          } else {
                            if (status === V++) {
                              cm.effect_Voice("Voice6.img/lara/0/Female/8", 100);
                              cm.inGameDirectionEvent_Monologue("说是只要像大山一样静静停留，之后离开就好。", 1);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.effect_Voice("Voice6.img/lara/0/Female/9", 100);
                                  cm.sendNormalTalk_Bottom("#face0#你怎么总是说一些我根本就听不懂的话！", 37, 3005110, false, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_Unknown9(1000);
                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 5350, 280);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(100);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1500, 1000, 5400, 280);
                                          } else {
                                            if (status === V++) {
                                              cm.effect_Voice("Voice6.img/lara/0/Female/10", 100);
                                              cm.sendNormalTalk_Bottom("#face0#我让你把手上的东西都交出来！明白了吗？", 37, 3005111, false, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.effect_Voice("Voice6.img/lara/0/Female/11", 100);
                                                cm.sendNormalTalk_Bottom("#face0#那我们就乖乖放行！", 37, 3005112, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.effect_Voice("Voice6.img/lara/0/Female/12", 100);
                                                  cm.sendNormalTalk_Bottom("#face0#另外通过土地也能知晓人的本质。", 37, 3005100, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.effect_Voice("Voice6.img/lara/0/Female/13", 100);
                                                    cm.sendNormalTalk_Bottom("#face0#我从很久以前开始就很能感受到土地的气息！", 37, 3005100, true, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.effect_Voice("Voice6.img/lara/0/Female/14", 100);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.effect_Voice("Voice6.img/lara/0/Female/15", 100);
                                                        cm.sendNormalTalk_Bottom("#face0#嗯……各位大发雷霆与这风和日丽的天气真是格格不入，对吧？！", 37, 3005100, false, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.effect_Voice("Voice6.img/lara/0/Female/16", 100);
                                                          cm.sendNormalTalk_Bottom("#face0#这连路过的小毛孩都懂！！！", 37, 3005110, true, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1500, 1000, 5450, 280);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_同时移动镜头和人(2, 100, 0);
                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.effect_Voice("Voice6.img/lara/0/Female/16", 100);
                                                                cm.sendNormalTalk_Bottom("#face0#什……什么鬼！别靠过来！你要是想攻击，我们的人更多……", 37, 3005110, false, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.effect_Voice("Voice6.img/lara/0/Female/17", 100);
                                                                  cm.sendNormalTalk_Bottom("#face0#这个，是我的包。", 37, 3005100, true, true, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.effect_Voice("Voice6.img/lara/0/Female/18", 100);
                                                                    cm.sendNormalTalk_Bottom("#face0#如果你有什么需要的，我可以分给你。", 37, 3005100, true, true, 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.effect_Voice("Voice6.img/lara/0/Female/19", 100);
                                                                      cm.sendNormalTalk_Bottom("#face0#听说生气有害于身体健康。", 37, 3005100, true, true, 1);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.effect_Voice("Voice6.img/lara/0/Female/20", 100);
                                                                        cm.sendNormalTalk_Bottom("#face0#？好……好吧，给我。", 37, 3005110, true, true, 1);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.effect_Voice("Voice6.img/lara/0/Female/21", 100);
                                                                          cm.sendNormalTalk_Bottom("#face0#大……大哥，没装什么东西啊。", 37, 3005112, true, true, 1);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.effect_Voice("Voice6.img/lara/0/Female/21", 100);
                                                                            cm.sendNormalTalk_Bottom("#face0#饭团……草料……还有几枚硬币？", 37, 3005110, true, true, 1);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.effect_Voice("Voice6.img/lara/0/Female/22", 100);
                                                                              cm.sendNormalTalk_Bottom("#face6#啊，那个饭团啊，是我朋友做的，超好吃的！", 37, 3005100, true, true, 1);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.effect_Voice("Voice6.img/lara/0/Female/23", 100);
                                                                                cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（看起来情况比我们还可怜，该怎么办呢？要不就光拿个饭团，直接放行吧？）", 37, 3005112, true, true, 1);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.effect_Voice("Voice6.img/lara/0/Female/24", 100);
                                                                                  cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（蠢货，不要晃！）", 37, 3005111, true, true, 1);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.effect_Voice("Voice6.img/lara/0/Female/25", 100);
                                                                                    cm.sendNormalTalk_Bottom("#face0#等、等等！你那个铃铛是什么鬼！", 37, 3005110, true, true, 1);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.effect_Voice("Voice6.img/lara/0/Female/26", 100);
                                                                                      cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1000, 0);
                                                                                      cm.fieldEffect_屏幕渐入插图A(['00', "Effect/Direction26.img/Lara/illust/13", 'cc'], [1, 0, 0, 0, 1000, -1, 0, 0, -1]);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.effect_Voice("Voice6.img/lara/0/Female/27", 100);
                                                                                        cm.sendNormalTalk_Bottom("#face0#这个铃铛吗？", 37, 3005100, false, true, 1);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.effect_Voice("Voice6.img/lara/0/Female/28", 100);
                                                                                          cm.sendNormalTalk_Bottom("#face0#没错！那东西看起来价值不菲，至少把铃铛交出来！", 37, 3005110, true, true, 1);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.effect_Voice("Voice6.img/lara/0/Female/29", 100);
                                                                                            cm.sendNormalTalk_Bottom("#face4#对不起。", 37, 3005100, true, true, 1);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.effect_Voice("Voice6.img/lara/0/Female/30", 100);
                                                                                              cm.sendNormalTalk_Bottom("#face4#我可以把我的饭团和路费分给你，但不能给你这个铃铛。", 37, 3005100, true, true, 1);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.effect_Voice("Voice6.img/lara/0/Female/31", 100);
                                                                                                cm.sendNormalTalk_Bottom("#face0#我吧，有件事必须完成！", 37, 3005100, true, true, 1);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.fieldEffect_屏幕渐入插图消失A(['00'], [1000]);
                                                                                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 3000, 0);
                                                                                                  cm.effect_Voice("Voice6.img/lara/0/Female/32", 100);
                                                                                                  cm.sendNormalTalk_Bottom("#face0#我之前生活的地方是个几乎和外界没有什么往来的阿尼玛小村庄。", 37, 3005100, true, true, 1);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.effect_Voice("Voice6.img/lara/0/Female/33", 100);
                                                                                                    cm.sendNormalTalk_Bottom("#face0#那是一个和外部隔绝开来、温馨恬静的大家庭。", 37, 3005100, true, true, 1);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#唔，这是突然开始回忆了吗？", 37, 3005110, false, true, 1);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1000, 0);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1300);
                                                                                                        } else if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                          cm.setInGameDirectionMode(false, true, false);
                                                                                                          cm.setStandAloneMode(false);
                                                                                                          cm.npc_LeaveField("oid=388496");
                                                                                                          cm.npc_LeaveField('oid=388497');
                                                                                                          cm.npc_LeaveField("oid=388498");
                                                                                                          cm.dispose();
                                                                                                          cm.warp(993165502, 0, true);
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}