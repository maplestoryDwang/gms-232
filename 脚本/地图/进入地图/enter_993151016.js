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
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(3004430, "oid=63521507", 40, 45, -1, -10, 90, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=63521507", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 90, 12);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1500);
      } else {
        if (status === V++) {
          cm.fieldEffect_PlayBGM("Bgm53/GraveyardOfSword", 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(2500);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face3#“握紧圣剑吧。拯救之法就在帕尔玛。”", 37, 3004432, true, true);
            cm.effect_Voice("Voice5.img/CH2/Loland/6", 128);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face4#据说帕尔玛的意思是塞尔提乌……\r\n塞伦，你找到拯救之法了吗？", 37, 3004432, true, true);
              cm.effect_Voice("Voice5.img/CH2/Loland/7", 128);
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
                      cm.sendNormalTalk_Bottom("#face0#……没有。", 37, 3004430, false, true);
                      cm.effect_Voice("Voice5.img/CH3/6_5", 128);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#我没有找到任何……能称得上是拯救之法的东西。", 37, 3004430, false, true);
                          cm.effect_Voice("Voice5.img/CH3/6_6", 128);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#罗兰德……", 37, 3004430, false, true);
                              cm.effect_Voice("Voice5.img/CH3/6_1", 128);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#我没事。\r\n我已经，习惯失去了。", 37, 3004430, false, true);
                                  cm.effect_Voice("Voice5.img/CH3/6_2", 128);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#不管是故乡，战友还是新结交的朋友…… ", 37, 3004430, true, true);
                                    cm.effect_Voice("Voice5.img/CH3/6_3", 128);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face5#还有信念……", 37, 3004430, false, true);
                                        cm.effect_Voice("Voice5.img/CH3/6_4", 128);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("信念……？", 57, 0, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face4#……！", 37, 3004430, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=63521507"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                cm.npc_setForceFlip("oid=63521507", -1);
                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_PushScaleInfo(1500, 0, 1500, 1500, -30, 12);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_SetHideEffect(0);
                                                    cm.npc_ChangeController(3004431, "oid=63524963", -164, 27, -1, -214, -114, 0, true, 1000, false);
                                                    cm.npc_SetSpecialAction("oid=63524963", 'summon', 0, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face4#我该怎么办……", 37, 3004430, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#我现在才明白。", 37, 3004431, false, true);
                                                          cm.effect_Voice("Voice5.img/CH3/6_9", 128);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#无法展开翅膀，不过是种说辞。", 37, 3004431, false, true);
                                                              cm.effect_Voice("Voice5.img/CH3/6_10", 128);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#之所以认为你无法成为剑的主人，是因为……", 37, 3004431, false, true);
                                                                  cm.effect_Voice("Voice5.img/CH3/6_11", 128);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#因为你一直在怀疑神的存在。", 37, 3004431, false, true);
                                                                      cm.effect_Voice("Voice5.img/CH3/6_12", 128);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", 'oid=1'], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_ProcessOnOffLayer("BlackOut3", "Map/Effect2.img/BlackOut", 0, 50, 0, 0, 0, 4, 1, 0, 0, -1, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.fieldEffect_复合图片动画(["Effect/Direction23.img/spine/3/BurnningSky_00", "animation", '', "sky"], [0, 1, 0, 90000, 0, 0, -1, 1]);
                                                                              cm.fieldEffect_ProcessOnOffLayer("BlackOut3", '', 2, 1500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("（她的故乡被烈火焚烧。）", 57, 0, false, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("（直到她失去所珍视的一切，圣剑都没有绽放光芒。）", 57, 0, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.fieldEffect_取消复合图片动画('sky', 1, 700);
                                                                                      cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction23.img/illust2/7", 0, 1000, 0, 0, 1, 4, 0, -1, 0, 0, 0);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("（就像罗兰德说的那样，她会失去信仰也不足为奇。）", 57, 0, false, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(4000);
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
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom('#face0#……', 37, 3004430, false, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face2#可若是这样，我就更无法理解你的行为了。", 37, 3004431, true, true);
                                                                                                    cm.effect_Voice("Voice5.img/CH3/6_13", 128);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face2#如果信仰不坚定，如果你怀疑神的存在……", 37, 3004431, false, true);
                                                                                                        cm.effect_Voice("Voice5.img/CH3/6_14", 128);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face2#为什么还那么竭尽全力想达成使命？", 37, 3004431, false, true);
                                                                                                            cm.effect_Voice("Voice5.img/CH3/6_15", 128);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face2#都放下吧。这样下去，只会让你自己陷入痛苦。", 37, 3004431, false, true);
                                                                                                                cm.effect_Voice("Voice5.img/CH3/6_16", 128);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("#face0#我办不到……", 37, 3004430, false, true);
                                                                                                                      cm.effect_Voice("Voice5.img/CH3/6_18", 128);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face0#我的故乡沦陷火海，无辜的百姓们纷纷丧生。", 37, 3004430, false, true);
                                                                                                                          cm.effect_Voice("Voice5.img/CH3/6_19", 128);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("#face5#想想我那些阵亡的战友。\r\n他们全都为了守护圣剑而牺牲了。", 37, 3004430, false, true);
                                                                                                                              cm.effect_Voice("Voice5.img/CH3/6_20", 128);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face4#塞伦！就算他们都是为了圣剑而死的，没必要连你也……", 37, 3004431, true, true);
                                                                                                                                cm.effect_Voice("Voice5.img/CH3/6_21", 128);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#现在只剩下我一个人了。", 37, 3004430, true, true);
                                                                                                                                  cm.effect_Voice("Voice5.img/CH3/6_22", 128);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("#face5#如果我背弃这个使命……", 37, 3004430, false, true);
                                                                                                                                      cm.effect_Voice("Voice5.img/CH3/6_23", 128);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("#face5#他们的死，那么多人的牺牲……", 37, 3004430, false, true);
                                                                                                                                          cm.effect_Voice("Voice5.img/CH3/6_24", 128);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.sendNormalTalk_Bottom("#face5#就全都白费了。", 37, 3004430, false, true);
                                                                                                                                              cm.effect_Voice("Voice5.img/CH3/6_25", 128);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#塞伦……", 37, 3004431, false, true);
                                                                                                                                                  cm.effect_Voice("Voice5.img/CH3/6_26", 128);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("（如果无法相信神明，那她的战友究竟为何而牺牲……）", 57, 0, true, true);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#……", 37, 3004430, true, true);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.npc_setForceFlip("oid=63521507", 1);
                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("#face3#请你回去吧。", 37, 3004430, false, true);
                                                                                                                                                            cm.effect_Voice("Voice5.img/CH3/6_27_1", 128);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.sendNormalTalk_Bottom("#face3#圣剑一定会重拾光芒。", 37, 3004430, true, true);
                                                                                                                                                              cm.effect_Voice("Voice5.img/CH3/6_28_1", 128);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                  } else if (status === V++) {
                                                                                                                                                                    cm.eventSKill(0);
                                                                                                                                                                    cm.warp(993151035, 0, true);
                                                                                                                                                                    cm.npc_LeaveField("oid=63521507");
                                                                                                                                                                    cm.npc_LeaveField("oid=63521507");
                                                                                                                                                                    cm.npc_LeaveField("oid=63524963");
                                                                                                                                                                    cm.npc_LeaveField("oid=63524963");
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
            }
          }
        }
      }
    }
  }
}