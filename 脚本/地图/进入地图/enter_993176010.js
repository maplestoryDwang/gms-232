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
      cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 223, -12);
      cm.npc_ChangeController(3004651, "oid=123540308", 106, -10, 2, 56, 156, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=123540308", "summon", 0, 0);
      cm.npc_ChangeController(3004664, "oid=123540309", 450, -40, 3, 400, 500, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=123540309", "summon", 0, 0);
      cm.Npc_Fadeout("oid=123540309", 0, 500);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 280, -100);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(300);
      } else {
        if (status === V++) {
          cm.onSetMapTagedObjectVisible(1, "reversecity_fire1", 512);
          cm.onSetMapTagedObjectVisible(1, "reversecity_fire3", 512);
          cm.userSetFieldFloating(993176010, 3, 3, 700);
          cm.setAmbience("SoundEff.img/ReverseCity/subinLoop", 100, 100);
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(2500);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.userSetFieldFloating(993176010, 8, 8, 300);
                cm.onSetMapObjectMove("reversecity_back2", "01_fast", [2, 1]);
                cm.setAmbience("SoundEff.img/ReverseCity/subin3", 100, 100);
                cm.playSoundEffDirectly("SoundEff.img/ReverseCity/subinLoop");
                cm.sendNormalTalk_Bottom("列车的速度正在加快。", 56, 0, false, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#列车正在加速。为了爬上地面。", 36, 3004651, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.onSetMapObjectMove("reversecity_back2", [1, 0, 0]);
                        cm.onSetMapObjectMove("reversecity_back1", "02_slow", [2, 1]);
                        cm.userSetFieldFloating(993176010, 3, 3, 700);
                        cm.inGameDirectionEvent_AskAnswerTime(2500);
                      } else {
                        if (status === V++) {
                          cm.playSoundEffDirectly("SoundEff.img/ReverseCity/subin3");
                          cm.setAmbience("SoundEff.img/ReverseCity/subinLoop", 70, 100);
                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(2500);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("外面是晚上。\r\n也是，这里原本就没有太阳……", 56, 0, false, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#在世界反、反转之前，这里曾经是有白天的。", 36, 3004651, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_PlayBGM("Bgm54.img/MemoryOfSunset", 0, 0);
                                  cm.sendNormalTalk_Bottom('嗯？', 56, 0, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#连接好友世界的#b门#k打开的时候，\r\n那里的天空会像海市蜃楼一样映在这边的天上。", 36, 3004651, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction24.img/illust2/6", 0, 6000, 0, -80, 3, 4, 0, -1, 0, 0, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(4000);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#当落、落日的余辉通过门映照过来的时候，\r\n无人的城市看上去是那么的美、美丽。", 36, 3004651, false, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#大家会一起坐在那里，望、望着此情此景，回想我们的故乡。", 36, 3004651, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("大家？", 56, 0, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom('#face0#……', 36, 3004651, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#和城市一起被吸到这里来的人有、有很多。\r\n其中还有我的朋友。", 36, 3004651, true, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#虽然一开始有点不知所措……但我们很快成、成立了救助队。", 36, 3004651, false, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#齐心协力寻、寻找其他人，通过那扇门把人送回去。", 36, 3004651, true, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#我们打算把所有人都送、送回去之后，就一起回去。", 36, 3004651, true, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("但是怎么只剩下了你一个人……？", 56, 0, false, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom('#face0#……', 36, 3004651, false, true, 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#出了点事故。", 36, 3004651, true, true, 1);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.userSetFieldFloating(993176010, 0, 0, 700);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 320, -10);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("（到底发生了什么事……）", 56, 0, false, true, 1);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
                                                                                cm.sendNormalTalk_Bottom("#face0#事故？哈哈，你是被人抛弃了，贝尔。", 36, 3004664, false, true, 1);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom('T-boy！', 56, 0, true, true, 1);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                    cm.Npc_Fadeout("oid=123540309", 255, 500);
                                                                                    cm.userSetFieldFloating(993176010, 3, 3, 700);
                                                                                    cm.fieldEffect_PlayBGM("Bgm54/ReverseCity2", 0, 0);
                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("（新型智能机器人……！）", 56, 0, false, true, 1);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#实话实说吧，贝尔。那些朋友真的理解你吗？\r\n难道不是只有你一厢情愿地把他们当成朋友吗？", 36, 3004664, true, true, 1);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0#……", 36, 3004651, true, true, 1);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("别耍花招，T-boy。", 56, 0, true, true, 1);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face0#哈哈哈。", 36, 3004664, true, true, 1);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0##h0#，你怎么样？\r\n你的处境也没什么两样吧？", 36, 3004664, true, true, 1);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face0#说说看，你有能彼此理解、并肩作战的同伴吗？", 36, 3004664, true, true, 1);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.askMenu_Bottom("那个嘛……\r\n\r\n#b#L0# 当然有！！ #l\r\n#L1# 嗯……", 57, 0, 1);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face0#那可奇了怪了。之前你不都是一个人吗？", 36, 3004664, false, true, 1);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0#大家吹捧你是勇士，其实只是想利用你。\r\n难道不是吗？", 36, 3004664, true, true, 1);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("呃……", 56, 0, true, true, 1);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face0#好了，承认吧，朋友们。我们是这个世界的局外人。", 36, 3004664, true, true, 1);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face0#现在三个孤家寡人居然凑在了一起，是不是应该庆祝一下？", 36, 3004664, true, true, 1);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.userSetFieldFloating(993176010, 0, 0, 5);
                                                                                                                    cm.sendNormalTalk_Bottom("#face0#非常好。我刚好准备了一份礼物。", 36, 3004664, true, true, 1);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=123540308"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                                                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                                                                                                                      cm.inGameDirectionEvent_PushScaleInfo(300, 0, 1000, 300, 280, -100);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.onSetMapTagedObjectVisible(1, "reversecity_fire1", 0);
                                                                                                                          cm.onSetMapTagedObjectVisible(1, "reversecity_fire3", 0);
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.Hidden_background("reversecity_fire2", 1, 0, 0, 0);
                                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion2", 100);
                                                                                                                            cm.userSetFieldFloating(993176010, 10, 10, 5);
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.userSetFieldFloating(993176010, 3, 3, 700);
                                                                                                                              cm.npc_ChangeController(3004666, "oid=123550993", -120, -10, 2, -170, -70, 0, true, 500, false);
                                                                                                                              cm.npc_SetSpecialAction("oid=123550993", "summon", 0, 0);
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.npc_ChangeController(3004666, "oid=123550998", -220, -10, 1, -270, -170, 0, true, 500, false);
                                                                                                                                cm.npc_SetSpecialAction("oid=123550998", "summon", 0, 0);
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.npc_ChangeController(3004666, "oid=123551439", -320, -10, 1, -370, -270, 0, true, 500, false);
                                                                                                                                  cm.npc_SetSpecialAction("oid=123551439", "summon", 0, 0);
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.npc_ChangeController(3004666, "oid=123551461", 670, -10, 4, 620, 720, 1, true, 500, false);
                                                                                                                                    cm.npc_SetSpecialAction("oid=123551461", "summon", 0, 0);
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.npc_ChangeController(3004666, "oid=123551462", 770, -10, 4, 720, 820, 1, true, 500, false);
                                                                                                                                      cm.npc_SetSpecialAction("oid=123551462", "summon", 0, 0);
                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.npc_ChangeController(3004666, "oid=123551541", 870, -10, 4, 820, 920, 1, true, 500, false);
                                                                                                                                        cm.npc_SetSpecialAction("oid=123551541", 'summon', 0, 0);
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNormalTalk_Bottom('切！', 56, 0, false, true, 1);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#祝你们玩得愉快，朋友们。", 36, 3004664, true, true, 1);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#通信结束。", 36, 3004664, true, true, 1);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.onSetNpcScript("oid=123540309", 1, ['special', "special2"], [1, -1]);
                                                                                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2300);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#先突破这里再说。否、否则它们会通过打开的门一直过来。", 36, 3004651, false, true, 1);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                    } else if (status === V++) {
                                                                                                                                                      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                                                      cm.warp(450014170, 0, true);
                                                                                                                                                      cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                      cm.setStandAloneMode(false);
                                                                                                                                                      cm.forceCompleteQuest(37614);
                                                                                                                                                      cm.gainExp(17565641);
                                                                                                                                                      cm.updateInfoQuest(37600, "01=h0;10=h0;11=h0;02=h1;12=h0;13=h0;14=h0;15=h0;16=h0;09=h0");
                                                                                                                                                      cm.updateInfoQuest(37600, "01=h0;10=h0;11=h0;02=h1;12=h0;13=h0;14=h0;15=h0;16=h0;17=h1;09=h0");
                                                                                                                                                      cm.npc_LeaveField("oid=123540308");
                                                                                                                                                      cm.npc_LeaveField("oid=123540309");
                                                                                                                                                      cm.npc_LeaveField("oid=123550993");
                                                                                                                                                      cm.npc_LeaveField("oid=123550998");
                                                                                                                                                      cm.npc_LeaveField("oid=123551439");
                                                                                                                                                      cm.npc_LeaveField("oid=123551461");
                                                                                                                                                      cm.npc_LeaveField("oid=123551462");
                                                                                                                                                      cm.npc_LeaveField("oid=123551541");
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
          }
        }
      }
    }
  }
}