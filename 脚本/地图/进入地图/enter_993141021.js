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
      cm.npc_ChangeController(3004437, 'oid=374246', 594, 109, 2, 544, 644, 4, true, 0, false);
      cm.npc_ChangeController(3004431, "oid=374247", 28, 109, 2, 22, 78, 4, true, 0, false);
      cm.npc_ChangeController(3004433, "oid=374248", -61, 109, 1, -111, -17, 4, true, 0, false);
      cm.npc_ChangeController(3004443, "oid=374249", 1550, 109, 5, 1500, 1600, 1, false, 0, false);
      cm.npc_ChangeController(3004445, "oid=374250", 1056, 109, 5, 1048, 1106, 0, false, 0, false);
      cm.npc_ChangeController(3004444, "oid=374251", 954, 109, 3, 904, 1004, 4, true, 0, false);
      cm.npc_ChangeController(3004444, 'oid=374252', 867, 109, 3, 817, 917, 4, true, 0, false);
      cm.npc_ChangeController(3004442, "oid=374253", 1648, 109, 5, 1598, 1693, 5, true, 0, false);
      cm.npc_ChangeController(3004437, 'oid=374254', 679, 109, 2, 629, 679, 4, true, 0, false);
      cm.npc_ChangeController(3004430, 'oid=374255', 1413, 109, 5, 1363, 1463, 5, true, 0, false);
      cm.npc_ChangeController(3004435, "oid=374256", 1755, 109, 4, 1732, 1805, 5, true, 0, false);
      cm.npc_ChangeController(3004436, 'oid=374257', 1184, 109, 5, 1134, 1234, 4, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 4, 48);
      cm.curNodeEventEnd(true);
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
            cm.sendNormalTalk_Bottom("#face0#总算挡住敌人的攻势了。", 37, 3004433, false, true);
            cm.effect_Voice("Voice5.img/CH2/Carlyle/93", 128);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#哼……本以为大家很难团结起来……\r\n没想到混乱这么快就平息了。", 37, 3004431, true, true);
              cm.effect_Voice("Voice5.img/CH2/Idea/119", 128);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#这都多亏了诸位大神官及时停止纷争，齐心加入守备的队伍。", 37, 3004433, true, true);
                cm.effect_Voice("Voice5.img/CH2/Carlyle/94", 128);
              } else {
                if (status === V++) {
                  cm.fieldEffect_PlayBGM("Bgm53/TheHolyLand", 0, 0);
                  cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 1500, 3000, 1364, 48);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(3500);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face4#他们……不是被驱逐了吗？", 37, 3004431, false, true);
                      cm.effect_Voice("Voice5.img/CH2/Idea/120", 128);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#几天后就被释放了。审判的时候，塞伦卿亲自给他们做的辩护。", 37, 3004433, true, true);
                        cm.effect_Voice("Voice5.img/CH2/Carlyle/95", 128);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face4#什么？！", 37, 3004431, true, true);
                          cm.effect_Voice("Voice5.img/CH2/Idea/121", 128);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#这很正常，她经常因为维护异教徒，受到停职反省的处分。", 37, 3004433, true, true);
                            cm.effect_Voice("Voice5.img/CH2/Carlyle/96", 128);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom('#face4#……', 37, 3004431, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#听说她跪在二人面前，说了这么一番话。", 37, 3004433, true, true);
                                cm.effect_Voice("Voice5.img/CH2/Carlyle/97", 128);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
                                  cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(1600);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(700);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face5#我今天在此，不是奉神的名义下达命令，而是以人的名义恳请你们。", 37, 3004430, false, true);
                                      cm.effect_Voice("Voice5.img/CH2/Seren/91", 128);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face5#请不要白白放弃你们的生命。", 37, 3004430, true, true);
                                        cm.effect_Voice("Voice5.img/CH2/Seren/93", 128);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(700);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_InsertCanvas11(0, 0, 0, 0, 0, 0);
                                            cm.fieldEffect_InsertCanvas(1, 1, 255, 255, 255, 200, 0);
                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(1600);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(700);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face4#她怎么……？她不是密特拉的圣骑士吗？\r\n她这么做，骑士们还会听从她的指挥吗？", 37, 3004431, false, true);
                                                cm.effect_Voice("Voice5.img/CH2/Idea/122", 128);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face1#你还没听过她的故事吧。", 37, 3004433, true, true);
                                                  cm.effect_Voice("Voice5.img/CH2/Carlyle/99", 128);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face1#最初她来这里时，并不止带来了圣剑。", 37, 3004433, true, true);
                                                    cm.effect_Voice("Voice5.img/CH2/Carlyle/100", 128);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction23.img/illust2/6", 0, 1000, 0, -80, 1, 4, 0, -1, 0, 0, 0);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face1#她背着战死的同僚们的剑，穿越了半个大陆。", 37, 3004433, false, true);
                                                            cm.effect_Voice("Voice5.img/CH2/Carlyle/101", 128);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face4#啊啊……这么说那坟墓里的剑全部都是……", 37, 3004431, true, true);
                                                              cm.effect_Voice("Voice5.img/CH2/Idea/123", 128);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 700, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#尽管她是会向异教徒下跪的队长，但部下们誓死追随她，都是有理由的。", 37, 3004433, false, true);
                                                                      cm.effect_Voice("Voice5.img/CH2/Carlyle/102", 128);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face4#……", 37, 3004431, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#我丑话说在前，我不相信预言什么的。", 37, 3004431, false, true);
                                                                            cm.effect_Voice("Voice5.img/CH2/Idea/124", 128);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#不过……", 37, 3004431, true, true);
                                                                              cm.effect_Voice("Voice5.img/CH2/Idea/125", 128);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#高洁之人，如果这真是驾驭神之力的条件……", 37, 3004431, true, true);
                                                                                cm.effect_Voice("Voice5.img/CH2/Idea/126", 128);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 1409, 69);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0#她，才是成为圣剑主人的不二人选。", 37, 3004431, false, true);
                                                                                          cm.effect_Voice("Voice5.img/CH2/Idea/128", 128);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission3", 100);
                                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.fieldEffect_PlayBGM("Bgm53/Apostles", 0, 0);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#城墙虽然塌了，但城还没有被攻破…… \r\n毕竟是塞尔提乌，无法毕其功于一役也在意料之中。", 37, 3004447, false, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face0#所以下面该轮到你出场了啊？", 37, 3004447, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.fieldEffect_ProcessOnOffLayer('01', "Effect/Direction23.img/illust2/3/2", 0, 1000, 0, 0, 1, 4, 0, -1, 0, 0, 0);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0#……", 37, 3004483, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.fieldEffect_ProcessOnOffLayer('01', '', 2, 700, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                              } else if (status === V++) {
                                                                                                                cm.eventSKill(0);
                                                                                                                cm.updateInfoQuest(39800, "01=h0;10=h0;11=h1;02=h0;12=h0;22=h0;04=h0;13=h0;05=h1;14=h1;06=h1;15=h1;16=h1;07=h1;17=h0;08=h1;18=h1;09=h0;19=h1;27=h1;28=h1");
                                                                                                                cm.warp(410000500, 0, false);
                                                                                                                cm.setInGameDirectionMode(false, true, false);
                                                                                                                cm.setStandAloneMode(false);
                                                                                                                cm.forceCompleteQuest(39817);
                                                                                                                cm.gainExp(25 * Math.pow(cm.getLevel(), 3));
                                                                                                                cm.forceCompleteQuest(39850);
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