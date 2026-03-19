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
      cm.npc_ChangeController(3004910, "oid=569066", -23, -113, 33, -73, 27, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=569066", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.setAmbience("SoundEff.img/kain/HeavyRain", 100, 60);
      cm.inGameDirectionEvent_AskAnswerTime(1500);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_同时移动镜头和人(1, 10, 0);
        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 104, 34);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1500);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#好久不见，该隐，\r\n坦白说，我原以为你那天活不下来的。", 36, 3004910, false, true, 1);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1200);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
                cm.inGameDirectionEvent_AskAnswerTime(2500);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#伊林。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#既然已经拆掉了项圈，看样子你也找回记忆了啊。", 36, 3004910, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#没错，虽然还有些模糊。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#是吗？我倒是想起了不少。", 36, 3004910, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#我虽然预想过……可那并不是多好的记忆。", 36, 3004910, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#但更糟糕的是……\r\n总归戴着这个项圈是没办法回故乡的。", 36, 3004910, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#你也知道他们是什么人嘛？搞不好他们什么时候就会跑到故乡。", 36, 3004910, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom('#face0#……', 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#你说要告诉我怎么回故乡到底是什么意思？", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#失忆之前的你曾经说过，\r\n如果我先找到的记忆便让我告诉你。", 36, 3004910, false, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#接着吧。\r\n（伊林扔出一团揉圆的纸条。）", 36, 3004910, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#坐标吗？", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#我去打听了一下，那地方在格兰蒂斯的诸多月亮里也算是非常偏僻的。", 36, 3004910, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#恐怕眼下很难说走就走，毕竟这船可不好找。", 36, 3004910, true, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face4#（终于可以……回故乡了。）", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#感谢的话就适可而止，交易总该有来有往才对吧？", 36, 3004910, true, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#你想要什么？", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#没什么的，\r\n把我介绍给影子商团吧。", 36, 3004910, true, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#原因呢？", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#能是什么？当然是要搞清楚怎么解开这个项圈了。", 36, 3004910, true, true, 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#嗯……", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#我这颗人头上的点数还有效吗？\r\n将我交给组织，这应该是更简单的方法吧。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#开玩笑吗？那一定是一条简单上黄泉的路。", 36, 3004910, true, true, 1);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#……好，我会和商团说好你的事的，\r\n不过……你最好是准备好要交易的东西。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#这你别担心，可以转卖的情报我手上多的是。", 36, 3004910, true, true, 1);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1500, 0);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.playSoundEffDirectly("SoundEff.img/kain/HeavyRain");
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face4#回去……那个地方……", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.fieldEffect_PlayBGM("Bgm56/Malice", 0, 0);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.fieldEffect_屏幕渐入插图A(["effect", "Effect/Direction25.img/Dlep6/effect/0", 'cc'], [1, 10, 10, 1, 300, -1, 0, 0, -1]);
                                                                                            cm.fieldEffect_屏幕渐入插图A(['00', "Effect/Direction26.img/kain/illust/3/1", 'cc'], [1, 0, 0, 0, 1500, -1, 0, 0, -1]);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(4500);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.fieldEffect_PlayFieldSound("Sound/Voice6.img/kain/27/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/22", 100);
                                                                                              cm.inGameDirectionEvent_Monologue("只要能……只要能饶我们一命，我什么都愿意做。", 1);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.fieldEffect_屏幕渐入插图消失A(["effect"], [2500]);
                                                                                                  cm.fieldEffect_屏幕渐入插图消失A(['00'], [2500]);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.fieldEffect_屏幕渐入插图A(['02', "Effect/Direction26.img/kain/illust/6/1", 'cc'], [1, 0, 0, 0, 1500, -1, 0, 0, -1]);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.npc_LeaveField("oid=569066");
                                                                                                        cm.sendNormalTalk_Bottom('#face3#唔……', 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.fieldEffect_屏幕渐入插图消失A(['02'], [1500]);
                                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
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
                                                                                                                  cm.sendNormalTalk_Bottom("#face0#（那股强烈的愤怒、无尽的憎恨还有灼烧般的杀意包裹着全身。）", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.forceCompleteQuest(39452);
                                                                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/Direction26.img/kain/effect/0"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                                                                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/kain/malice", 100);
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(4500);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.forceStartQuest(39457, '');
                                                                                                                        cm.forceCompleteQuest(39457);
                                                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1500, 0);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                        } else if (status === V++) {
                                                                                                                          cm.dispose();
                                                                                                                          cm.changeJob(6311);
                                                                                                                          cm.warp(104000000, 0, true);
                                                                                                                          cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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