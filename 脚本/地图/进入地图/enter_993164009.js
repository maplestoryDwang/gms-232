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
      cm.npc_ChangeController(3004904, "oid=564651", 350, 14, 6, 300, 400, 1, true, 0, false);
      cm.npc_SetSpecialAction('oid=564651', 'summon', 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 270, 20);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2500, 0, 315, 52);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(1500);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face2#（先去看看橱柜吧，千万要没事才好……）", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face1#……！！", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
                cm.inGameDirectionEvent_AskAnswerTime(100);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 250, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(300);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face2#你……！", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face2#该隐，我还纳闷你到底在这里藏了什么好东西……", 36, 3004904, false, true, 1);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face2#哪有人会把吃的放在橱柜里存放，会生虫子的。", 36, 3004904, false, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face1#（什么……！？）", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/kain/door", 100);
                                  cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 2);
                                  cm.inGameDirectionEvent_AskAnswerTime(250);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_屏幕渐入插图A(['00', "Effect/Direction26.img/kain/illust/2/2", 'cc'], [1, 0, 0, 0, 300, -1, 0, 0, -1]);
                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face1#（不见了……难道已经溜走了？）", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#那什么，这件事姑且先不提，上次说的事你还记得吧？\r\n现在这片大陆的战争如火如荼，有了这怨恨石……", 36, 3004904, false, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#滚开。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face1#……什么？", 36, 3004904, true, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/kain/door", 100);
                                                        cm.fieldEffect_屏幕渐入插图消失A(['00'], [100]);
                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
                                                        cm.inGameDirectionEvent_AskAnswerTime(100);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 250, 0);
                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#我不是说过，不要莫名其妙地和我搭话吗？", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face3#……", 36, 3004904, true, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom('#face2#……', 36, 3004904, false, true, 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face2#切，老大叫你，\r\n让你治疗完就立刻上楼去。", 36, 3004904, true, true, 1);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.npc_setForceFlip('oid=564651', 1);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#如果你在找#b手册#k那已经迟了，毕竟那东西已经转交给管理员了。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.fieldEffect_PlayBGM("SoundEff.img/ArcaneRiver/thrill", 0, 0);
                                                                                cm.sendNormalTalk_Bottom("#face2#……", 36, 3004904, false, true, 1);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face2#真不知道是什么意思。", 36, 3004904, true, true, 1);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#手册上所写关于恶意的内容，\r\n要不是内部人员，是绝不可能知道的。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face0#提拉格……你最近好像多了不少相熟的朋友……\r\n你以为上头没发现吗？", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.npc_setForceFlip("oid=564651", -1);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face2#这件事应该不用你管吧。", 36, 3004904, false, true, 1);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0#到底要不要管，由我自己决定。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face2#……", 36, 3004904, true, true, 1);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face2#如果你以为能离开这里才和老大形影不离，\r\n那可就大错特错了。", 36, 3004904, true, true, 1);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face3#那帮家伙已经夺走过一次我们的记忆，你以为他们就不会再来第二次、第三次吗？", 36, 3004904, true, true, 1);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#我还以为你对老大格外仇视……原来是害怕了啊？", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom('#face1#……！', 36, 3004904, true, true, 1);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0#一想到不知道何时又会以某种方式被利用确实会如此……\r\n我也不是不能理解。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face2#……", 36, 3004904, false, true, 1);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face4#噗哈，噗呲，噗哈哈哈哈哈！！！", 36, 3004904, true, true, 1);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face0#真是可笑，该隐，这件事你恐怕不能置身事外吧？", 36, 3004904, true, true, 1);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("#face2#……", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face4#该承认的事还是要承认，\r\n我们两个不过都是听他们差遣的傀儡嘛。", 36, 3004904, true, true, 1);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face4#要说有差，就是我可不像你这么单纯。", 36, 3004904, true, true, 1);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face4#来，那我就先行告辞……哈哈哈哈哈！！", 36, 3004904, true, true, 1);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1500, 0);
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                            } else if (status === V++) {
                                                                                                                              cm.npc_SetForceMove("oid=564651", -1, 120, 70);
                                                                                                                              cm.forceCompleteQuest(39410);
                                                                                                                              cm.getPlayer().levelUp();
                                                                                                                              cm.updateInfoQuest(39400, "60=h1;51=h0;61=h0;52=h0;80=h0;53=h0;81=h0;54=h0;82=h0;73=h0;74=h0;83=h0;75=h0;57=h0;84=h0;58=h0;76=h0;85=h0;59=h0;77=h0");
                                                                                                                              cm.npc_LeaveField('oid=564651');
                                                                                                                              cm.dispose();
                                                                                                                              cm.warp(410000401, 0, true);
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
  }
}