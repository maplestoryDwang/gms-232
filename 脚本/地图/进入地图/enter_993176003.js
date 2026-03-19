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
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 442, -30);
      cm.npc_ChangeController(3004652, "oid=123293810", 550, -52, 3, 500, 600, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=123293810", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 5000, 0, 150, -245);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(2000);
      } else {
        if (status === V++) {
          cm.fieldEffect_PlayBGM("Bgm54.img/MemoryOfSunset", 0, 0);
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(2500);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(3000);
            } else {
              if (status === V++) {
                cm.Hidden_background("reversecity_ad", 1, 0, 0, 0);
                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ReverseCity/electric", 100);
                cm.inGameDirectionEvent_AskAnswerTime(2500);
              } else {
                if (status === V++) {
                  cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 150, -260);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1300);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("你到这里来，是因为那个吗？", 56, 0, false, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#是的，因为这是地下世界唯一可以看到的“天空”。", 36, 3004652, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#哈……真羡慕地上世界的人。\r\n每天都能看到那样的风景。", 36, 3004652, false, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom('嗯……是，是吗？', 56, 0, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 1500, 3000, 627, -10);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(4000);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#我是后来在地下铁路出生的，所以从没亲眼见过。", 36, 3004652, false, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#天空和夕阳，对我来说只是存在于画中的风景。", 36, 3004652, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#但是……总有一天我会回到地上。", 36, 3004652, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#坐在向阳的山坡上看上一整天。", 36, 3004652, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#那不是一整天都、都能看到的东西……", 36, 3004651, false, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_setForceFlip("oid=123293810", 1);
                                                  cm.npc_ChangeController(3004651, "oid=123300125", 737, -264, 3, 687, 787, 1, true, 1000, false);
                                                  cm.npc_SetSpecialAction("oid=123300125", "summon", 0, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#夕阳很、很快就会落山。", 36, 3004651, false, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("（这个人就是贝尔？）", 56, 0, false, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#呃，好臭！你就不能洗个澡吗？", 36, 3004652, true, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#你……又没、没有鼻子。", 36, 3004651, true, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#但还是很臭，呃呃～那身衣服多久没换了啊？", 36, 3004652, true, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#哼。那、那可真不好意思。\r\n很高兴见到你。再见。", 36, 3004651, true, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.Npc_Fadeout("oid=123300125", 0, 500);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#啊，等等等等。我把鼠肉带来了！跳跳糖口味的！", 36, 3004652, false, true, 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#嗯，还、还是留给你吃吧～", 36, 3004651, true, true, 1);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("啊……#b#i4036638# #r#t4036638##k有反应？", 56, 0, false, true, 1);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.fieldEffect_PlayBGM("Bgm54/ReverseCity", 0, 0);
                                                                              cm.sendNormalTalk_Bottom("#face0#（这个声音是……？）", 36, 3004651, true, true, 1);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.Npc_Fadeout("oid=123300125", 255, 500);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                cm.updateInfoQuest(500827, "q1Set=1;q2Set=1;q3Set=0;q4Set=1;start=0;q5Set=0;lT=20/04/19;qSetDate=20/07/22;accSum=901948;QuestCount=3;accCheck=200722224020189");
                                                                                cm.updateInfoQuest(500827, "q1Set=1;q2Set=1;q3Set=0;q4Set=1;start=0;q5Set=0;lT=20/04/19;qSetDate=20/07/22;accSum=962676;QuestCount=3;accCheck=200722224020189");
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.npc_SetForceMove("oid=123300125", -1, 50, 70);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#你……", 36, 3004651, false, true, 1);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face0#和我一样是地面上的人。", 36, 3004651, true, true, 1);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#但……不是好、好友世界的人。", 36, 3004651, true, true, 1);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("我……\r\n（说明到反转城来的原因。）", 56, 0, true, true, 1);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#……", 36, 3004651, true, true, 1);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0#故事太复杂了，听了都头晕。", 36, 3004651, true, true, 1);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#总之，你是来把那个东西还，还给我的吗？", 36, 3004651, true, true, 1);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("嗯，其实不只是那个原因。", 56, 0, true, true, 1);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#……那个无线电发射机，我已经不需要了。留着还是丢掉随你的便。", 36, 3004651, true, true, 1);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face0#嗯？但是这不是大叔最宝贝的东西吗？\r\n你一直说好友世界的朋友们一定会通过无线电发射机和你联系的……", 36, 3004652, true, true, 1);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ReverseCity/earthq", 100);
                                                                                                          cm.userSetFieldFloating(993176003, 3, 3, 10);
                                                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=123293810"], [0, 0, -50, 1, 0, 1, 0, 0, 0]);
                                                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=123300125"], [0, 0, -50, 1, 0, 1, 0, 0, 0]);
                                                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.userSetFieldFloating(993176003, 0, 0, 0);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face0#这、这有点扯远了。", 36, 3004651, false, true, 1);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face0#一定是T-boy干的好事吧？\r\n最近他经常在地下铁路出现，我就觉得有点奇怪。", 36, 3004652, true, true, 1);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face0#看来应该调查一下他到底在策划什么阴谋。", 36, 3004652, true, true, 1);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face0#你真是太、太乱来了。", 36, 3004651, true, true, 1);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("#face0#谁知道呢？说不定就能找到打败他的方法呢。", 36, 3004652, true, true, 1);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face0#还在说那种话吗……", 36, 3004651, true, true, 1);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face0#大叔，你不也想快点回到故乡去吗？\r\n我也一样。对我来说，#r地上世界#k就是我的故乡。", 36, 3004652, true, true, 1);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face0#你在说什么呢？你不是在地下世界出、出生的吗？", 36, 3004651, true, true, 1);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.npc_setForceFlip("oid=123293810", -1);
                                                                                                                              cm.sendNormalTalk_Bottom("#face0#勇士，你能帮帮我吗？", 36, 3004652, true, true, 1);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face0#你听、听我说……", 36, 3004651, true, true, 1);
                                                                                                                              } else if (status === V++) {
                                                                                                                                cm.warp(450014090, 1, true);
                                                                                                                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                                cm.setInGameDirectionMode(false, true, false);
                                                                                                                                cm.setStandAloneMode(false);
                                                                                                                                cm.updateInfoQuest(37600, "10=h0;02=h0;09=h0");
                                                                                                                                cm.updateInfoQuest(37600, "10=h0;11=h1;02=h0;09=h0");
                                                                                                                                cm.forceCompleteQuest(37606);
                                                                                                                                cm.gainExp(17565641);
                                                                                                                                cm.gainItem(4036632, -20);
                                                                                                                                cm.npc_LeaveField("oid=123293810");
                                                                                                                                cm.npc_LeaveField("oid=123300125");
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