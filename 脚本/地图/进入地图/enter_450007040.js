var status = -1;
function action(f, E, e) {
  status++;
  if (cm.isQuestFinished(34570) && !cm.isQuestFinished(34571)) {
    action1(f, E, e);
  } else if (cm.isQuestFinished(34580) && !cm.isQuestFinished(34581)) {
    action2(f, E, e);
  } else {
    cm.dispose();
  }
}
function action1(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#好吧，这样应该足够了。", 37, 3003502, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face1#呼，现在终于可以向总部报告了。", 37, 3003500, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#中继装置还没安装好，所以无法保证通信质量，不要期望太高。", 37, 3003502, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face3#总部，总部，能听到吗？我是沃莉。", 37, 3003500, true, true);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
                    cm.sendNormalTalk_Bottom("#face1#（唧唧唧唧唧……唧唧唧……）听……了……但……通信……", 37, 1540451, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("真的是南哈特……在这里听到南哈特的声音，心里感觉很微妙。", 57, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face3#嗯，通信质量果然不是很好。", 37, 3003502, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face1#……情况……报告……？", 37, 1540451, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face3#我们和#h0#一起，进入了埃斯佩拉。嗯……还有……", 37, 3003500, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#请说一下天空的事情。", 37, 3003501, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face3#啊，没错。总部，上空只有一轮#r黑色的月亮#k。", 37, 3003500, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face3#重复一遍。太阳没有生气。\r\n塔纳沉到了太初之海的什么地方。", 37, 3003500, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face1#太阳……必须阻止……塔纳……确……", 37, 1540451, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
                                      cm.sendNormalTalk_Bottom("#face3#总部？总部？嗯……信号中断了。", 37, 3003502, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("最后说的是什么呢？", 57, 0, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face3#我觉得可能是这样的。", 37, 3003500, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#让我们#fs18##r确保塔纳的安全#k，阻止仪式。", 37, 3003500, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === V++) {
                                                  cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                  cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
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
                                                        cm.setStandAloneMode(false);
                                                        cm.setInGameDirectionMode(false, true, false);
                                                        cm.updateInfoQuest(34570, "enter=fin");
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
function action2(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.npc_ChangeController(3003536, 'oid=49764', -1461, -395, 151, -1487, -1411, 0, false, false);
      cm.npc_ChangeController(3003537, "oid=49765", -1331, -395, 149, -1381, -1281, 1, false, false);
      cm.npc_ChangeController(3003531, "oid=49766", -173, 27, 139, -223, -123, 1, false, false);
      cm.npc_ChangeController(3003530, "oid=49767", 12, 134, 9, -38, 62, 1, false, false);
      cm.npc_ChangeController(3003532, "oid=49768", -430, 110, 3, -480, -380, 1, false, false);
      cm.npc_ChangeController(3003533, "oid=49769", -788, 153, 2, -838, -738, 0, false, false);
      cm.npc_ChangeController(3003534, "oid=49770", -233, 108, 3, -283, -183, 1, false, false);
      cm.npc_ChangeController(3003535, "oid=49771", 126, 81, 11, 76, 176, 1, false, false);
      cm.npc_ChangeController(9010022, 'oid=49772', -1044, -203, 154, -1094, -994, 1, false, false);
      cm.npc_ChangeController(9000123, "oid=49773", -118, -232, 30, -168, -68, 1, false, false);
      cm.npc_ChangeController(9000124, 'oid=49774', -84, -227, 31, -134, -34, 1, false, false);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -630, -590);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_MoveAction(4);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/esfera/tel", 128);
            cm.inGameDirectionEvent_头顶图片(["Map/Effect3.img/esfera/mystic"], [0, -630, -612, 1, 0, 1, 1, 0]);
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else {
            if (status === V++) {
              cm.onTeleport(0, 3, cm.getPlayer().getId(), -630, -612);
              cm.inGameDirectionEvent_AskAnswerTime(1300);
            } else {
              if (status === V++) {
                cm.userSetFieldFloating(450007040, 10, 10, 50);
                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/esfera/waterdrop", 3000);
                cm.inGameDirectionEvent_AskAnswerTime(600);
              } else {
                if (status === V++) {
                  cm.userSetFieldFloating(450007040, 0, 0, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                    cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
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
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("呃，这里……不是大本营吗？！", 57, 0, false, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_MoveAction(0);
                                cm.sendNormalTalk_Bottom("#face1##h0#！这是怎么回事？", 37, 3003502, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom('是强制空间移动吗！', 57, 0, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("那个人到底……啊！白色的太阳升起来了……", 57, 0, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#最终还是没能拦住蜘蛛。我明明已经警告过了。", 37, 3003501, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom('……沃莉呢？', 57, 0, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face1#躺在船里面。但是毒素正在逐渐扩散。", 37, 3003502, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom('毒素？', 57, 0, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#不是普通的毒素，而是用魔法制造出来的。\r\n可以解开魔法的只有施术者本人。", 37, 3003501, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("呃……", 57, 0, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#威尔应该就在那个太阳的内部。很遗憾，进入内部的办法……", 37, 3003501, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_ChangeController(3003510, "oid=2005737", -788, 151, 2, -838, -738, 0, false, false);
                                                    cm.npc_SetSpecialAction("oid=2005737", "summon", 0, 0);
                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/esfera/waterdrop", 3000);
                                                    cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.updateInfoQuest(34560, "30=h0;50=h0;31=h1;51=h0;32=h1;52=h0;33=h1;53=h0;34=h0;54=h0;35=h0;55=h0;36=h0;56=h0;37=h0;57=h0;38=h0;58=h0;39=h0;59=h0;40=h0;60=h0;41=h0;42=h0;43=h0;44=h0;45=h0;46=h0;47=h0;48=h0;49=h0");
                                                      cm.npc_LeaveField("oid=2005737");
                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#是有的……但这明显是个陷阱。", 37, 3003501, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("就像故意让我们跟过去一样……", 57, 0, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face3#等一下。收到了总部的联络。", 37, 3003502, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
                                                              cm.sendNormalTalk_Bottom("#face1##h0#，（唧唧）……陷阱……千万不要……进去……", 37, 1540451, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("沃莉中了毒，威尔应该有解毒剂。", 57, 0, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face1#轻举妄动的话……支援队马上赶到……（唧唧）务必……原地待命……", 37, 1540451, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face1#首先必须……保证你活着……", 37, 1540451, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
                                                                      cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 500, 0);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#那个姑娘……好像是在必要时替你去死的#r#fs18#棋子#k#fs16#。", 37, 3003503, false, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.fieldEffect_InsertCanvas11(0, 0, 0, 0, 0, 0);
                                                                          cm.fieldEffect_InsertCanvas(1, 1, 255, 255, 255, 200, 0);
                                                                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
                                                                          cm.sendNormalTalk_Bottom('……', 57, 0, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                              cm.sendNormalTalk_Bottom("南哈特，命令沃莉保护我的人，难道是你吗？", 57, 0, false, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face1#……", 37, 1540451, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("我要进去。别想阻止我。", 57, 0, false, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face1#我有……办法。但是……你得答应我一件事……", 37, 1540451, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face1#选择……（唧唧）不要犹豫……", 37, 1540451, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face3#信号中断了。发生了什么事？", 37, 3003502, false, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("他让我在需要选择的时候不要犹豫。", 57, 0, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("我答应你，南哈特。我不会失误两次的。", 57, 0, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                  cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
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
                                                                                                        cm.setStandAloneMode(false);
                                                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                                                        cm.updateInfoQuest(34580, "wave=1;enter2=fin");
                                                                                                        cm.updateInfoQuest(34560, "30=h0;50=h0;31=h1;51=h0;32=h1;52=h0;33=h1;53=h0;34=h0;54=h0;35=h0;55=h1;36=h0;56=h0;37=h0;57=h0;38=h0;58=h0;39=h0;59=h0;40=h0;60=h0;41=h0;42=h0;43=h0;44=h0;45=h0;46=h0;47=h0;48=h0;49=h0");
                                                                                                        cm.fieldEffect_PlayBGM("Bgm49/SoupOfLife", 0, 0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;