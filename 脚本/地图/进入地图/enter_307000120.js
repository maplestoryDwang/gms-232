var status = -1;
function action(f, E, e) {
  if (cm.isQuestFinished(32974) && cm.getNumberFromQuestInfo(32974, 'e') == 0) {
    action1(f, E, e);
  } else if (cm.isQuestActive(32987)) {
    action2(f, E, e);
  } else {
    cm.dispose();
  }
}
function action1(f, E, e) {
  status++;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -78, 250);
      cm.Hidden_background("DL5_m", 1, 1, 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 0, 313);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_ForcedFlip(1);
        cm.npc_ChangeController(2560000, "oid=3574014", 134, 258, 10, 84, 184, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=3574014", "summon", 0, 0);
        cm.sendNormalTalk_Bottom('队长，在吗？队长？', 57, 0, false, true);
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
              cm.sendNormalTalk_Bottom("#face0#嗯？是影牙啊。有什么事吗？", 37, 2560000, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("我有话想……嗯？那个是……？", 57, 0, true, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushScaleInfo(500, 0, 3000, 500, 233, 313);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#哎呀，被你发现了。我还想给你个惊喜。", 37, 2560000, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#这是可以看到镜世界之外，#b真实世界中的自己的镜子#k。", 37, 2560000, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#因为最近看你好像对外面的世界很感兴趣。", 37, 2560000, true, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 0, 313);
                          } else {
                            if (status === V++) {
                              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 0, 313);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(300);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                  cm.sendNormalTalk_Bottom("那么说……？", 57, 0, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#没错。为了感谢你在此期间努力执行任务，\r\n我想把这个镜子给你看看。", 37, 2560000, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("真，真的吗？！", 57, 0, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#很遗憾，现在还没准备好。等轮回结束的时候，就能给你看了。", 37, 2560000, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#影牙原来的样子，我也很想知道呢。", 37, 2560000, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom('谢谢你，队长。', 57, 0, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#不过千万不能得意忘形。\r\n#b要是犯了错，这件事就当我没提过。", 37, 2560000, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("（犯了错……就当没提过……）", 57, 0, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#对了，你有什么话想跟我说吗？", 37, 2560000, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("呃……不，没什么。哈哈……", 57, 0, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#呵呵，好了，快出去吧。作战会议马上就要开始了。", 37, 2560000, true, true);
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
                                                          } else if (status === V++) {
                                                            cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                            cm.npc_LeaveField("oid=3574014");
                                                            cm.npc_LeaveField("oid=3574014");
                                                            cm.updateInfoQuest(32974, "e=1;exp=1");
                                                            cm.setStandAloneMode(false);
                                                            cm.eventSKill(0);
                                                            cm.dispose();
                                                            cm.warp(307000100, 4, false);
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
function action2(f, E, e) {
  status++;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 0, 313);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(2560000, "oid=3592279", 105, 258, 10, 55, 155, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=3592279", "summon", 0, 0);
        cm.onTeleport(0, 3, cm.getPlayer().getId(), -105, 250);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#影牙，我不是让你好好等着吗？", 37, 2560000, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("图鉴……一开始就是你放在那里的吗？", 57, 0, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#看来你的眼神还不错嘛。\r\n没错。上面的字是上个轮回你写的。", 37, 2560000, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#除了最后一张。", 37, 2560000, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("上面写着这样的字。", 57, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(1600);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_Monologue("人类的怀疑之心，只要有一颗小小的种子，很快就会长大。", 0);
                        cm.effect_Voice("Voice3.img/DLep5/will/J_1-1.mp3", 100);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_Monologue("最后会完全占据整个大脑。", 0);
                          cm.effect_Voice("Voice3.img/DLep5/will/J_2-1.mp3", 100);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_Monologue("就算使用再强的药物，也无法阻止。", 0);
                            cm.effect_Voice("Voice3.img/DLep5/will/J_3-1.mp3", 100);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_Monologue('', 0);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_Monologue("不过，我决定反过来想。", 0);
                                cm.effect_Voice("Voice3.img/DLep5/will/J_4-1.mp3", 100);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_Monologue("#r只要相信一个#k，怀疑其他一切都没有关系。", 1);
                                  cm.effect_Voice("Voice3.img/DLep5/will/J_5-1.mp3", 100);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("只要相信一个……那就是我。", 57, 0, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#呵呵呵……是不是很管用？\r\n连那个疑心很重的艾特也每次都会乖乖地喝下中和剂。", 37, 2560000, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("结果一切都只是谎言……", 57, 0, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("让我变成真实存在的人，也是谎言吧？", 57, 0, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face1#为什么……会这么想呢？", 37, 2560000, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#fs17#因为你连自己制造的幻象都无可奈何。", 57, 0, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Dlep5/willattack", 100);
                                                    cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                    cm.npc_SetSpecialAction("oid=3592279", 'attack', 0, 1);
                                                    cm.userSetFieldFloating(307000120, 10, 10, 10);
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.userSetFieldFloating(307000120, 0, 0, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face2#和不洁者相处了一小段时间，你就变成了这个样子，影牙。", 37, 2560000, false, true);
                                                        cm.effect_Voice("Voice3.img/DLep5/will/K_1-1.mp3", 100);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face2##fs17#如果想延长自己虚假的生命，就按我的吩咐去做。", 37, 2560000, false, true);
                                                            cm.effect_Voice("Voice3.img/DLep5/will/K_2-3.mp3", 100);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.npc_SetSpecialAction("oid=3592279", "attack2", 0, 1);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#哎呀哎呀，我好像有点太激动了。", 37, 2560000, false, true);
                                                                  cm.effect_Voice("Voice3.img/DLep5/will/K_3-2.mp3", 100);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#没事吧，影牙？你在发抖。", 37, 2560000, true, true);
                                                                    cm.effect_Voice("Voice3.img/DLep5/will/K_4-2.mp3", 100);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("呃……", 57, 0, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#请你先回宿舍。米露会带着中和剂过去找你。", 37, 2560000, false, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#对了，我也得给米露点奖赏才行……在这个轮回中，她可是立了大功。", 37, 2560000, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("（真实之药……必须到迎月山丘去。）", 57, 0, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("（必须从村子的左边出去。）", 57, 0, true, true);
                                                                              } else if (status === V++) {
                                                                                cm.forceCompleteQuest(32987);
                                                                                cm.updateInfoQuest(32987, 'exp=1');
                                                                                cm.gainExp(1091797);
                                                                                cm.updateInfoQuest(32999, "00=h0;10=h0;01=h0;02=h0;20=h0;11=h0;21=h1;12=h0;03=h0;13=h0;04=h0;14=h0;05=h0;15=h1;06=h0;16=h1;07=h1;08=h1;17=h0;18=h0;19=h0");
                                                                                cm.updateInfoQuest(32999, "00=h0;10=h0;01=h0;02=h0;20=h0;11=h0;21=h1;12=h0;03=h0;13=h0;04=h0;14=h0;05=h0;15=h1;06=h0;16=h1;07=h1;08=h1;17=h0;18=h1;19=h0");
                                                                                cm.setStandAloneMode(false);
                                                                                cm.eventSKill(0);
                                                                                cm.dispose();
                                                                                cm.warp(307000100, 0, false);
                                                                                cm.setInGameDirectionMode(false, true, false);
                                                                                cm.npc_LeaveField("oid=3592279");
                                                                                cm.npc_LeaveField("oid=3592279");
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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