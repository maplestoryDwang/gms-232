var status = -1;
var selectionLog = [];
function start(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.sendNormalTalk_Bottom("#face0#一步之错……", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#事到如今还用会出事这种微不足道的威胁……", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#（别管了，还是从橱柜里拿出装备吧。）", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
        } else {
          if (status === v++) {
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, false);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
            cm.setStandAloneMode(true);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === v++) {
              cm.inGameDirectionEvent_AskAnswerTime(1500);
            } else {
              if (status === v++) {
                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/kain/door", 100);
                cm.fieldEffect_屏幕渐入插图A(['00', "Effect/Direction26.img/kain/illust/2/0", 'cc'], [1, 0, 0, 0, 1000, -1, 0, 0, -1]);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === v++) {
                  cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face0#啊……你好。", 36, 3004914, false, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face0#姐姐……我好饿……", 36, 3004915, true, true, 1);
                    } else {
                      if (status === v++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom("#face0#……？！", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                        } else {
                          if (status === v++) {
                            cm.inGameDirectionEvent_AskAnswerTime(2500);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk_Bottom("#face0#该隐.", 36, 3004907, false, true, 1);
                            } else {
                              if (status === v++) {
                                cm.fieldEffect_屏幕渐入插图消失A(['00'], [100]);
                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/barrier1", 100);
                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 213, -7);
                              } else {
                                if (status === v++) {
                                  cm.onTeleport(0, 3, cm.getPlayer().getId(), 258, 10);
                                  cm.inGameDirectionEvent_同时移动镜头和人(2, 5);
                                  cm.npc_ChangeController(3004907, "oid=564202", 45, -5, 6, -5, 95, 0, false, 0, false);
                                  cm.npc_SetSpecialAction("oid=564202", "summon", 0, 0);
                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
                                  cm.inGameDirectionEvent_AskAnswerTime(100);
                                } else {
                                  if (status === v++) {
                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 250, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                  } else {
                                    if (status === v++) {
                                      cm.sendNormalTalk_Bottom("#face0#？", 36, 3004907, false, true, 1);
                                    } else {
                                      if (status === v++) {
                                        cm.sendNormalTalk_Bottom("#face0#该去出任务了……你这是怎么了？", 36, 3004907, true, true, 1);
                                      } else {
                                        if (status === v++) {
                                          cm.inGameDirectionEvent_同时移动镜头和人(1, 5);
                                          cm.sendNormalTalk_Bottom("#face1#不是，那个……我的橱柜里面……", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                        } else {
                                          if (status === v++) {
                                            cm.sendNormalTalk_Bottom("#face0#难道橱柜里有什么东西？", 36, 3004907, true, true, 1);
                                          } else {
                                            if (status === v++) {
                                              cm.sendNormalTalk_Bottom("#face1#哦，所以说……", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                            } else {
                                              if (status === v++) {
                                                cm.sendNormalTalk_Bottom("#face1#（啊……等一下！）", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                              } else {
                                                if (status === v++) {
                                                  cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
                                                  cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 2);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                } else {
                                                  if (status === v++) {
                                                    cm.fieldEffect_屏幕渐入插图A(['01', "Effect/Direction26.img/kain/illust/2/0", 'cc'], [1, 0, 0, 0, 1500, -1, 0, 0, -1]);
                                                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                  } else {
                                                    if (status === v++) {
                                                      cm.sendNormalTalk_Bottom("#face1#（那个小鬼，怎么会穿着我的制服……？！）", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                                    } else {
                                                      if (status === v++) {
                                                        cm.sendNormalTalk_Bottom("#face1#(这明明就是我昨天穿过的制服……)", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                                      } else {
                                                        if (status === v++) {
                                                          cm.sendNormalTalk_Bottom("#face1#（这件事一旦出错……）", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                                        } else {
                                                          if (status === v++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                          } else {
                                                            if (status === v++) {
                                                              cm.sendNormalTalk_Bottom("#face0#该隐……？", 36, 3004907, false, true, 1);
                                                            } else {
                                                              if (status === v++) {
                                                                cm.fieldEffect_屏幕渐入插图消失A(['01'], [300]);
                                                                cm.fieldEffect_InsertCanvas11(0, 0, 0, 0, 0, 0);
                                                                cm.fieldEffect_InsertCanvas(1, 1, 255, 255, 255, 200, 2);
                                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                              } else {
                                                                if (status === v++) {
                                                                  cm.fieldEffect_InsertCanvas11(0, 0, 0, 0, 0, 0);
                                                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 300, 0);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(450);
                                                                } else {
                                                                  if (status === v++) {
                                                                    cm.sendNormalTalk_Bottom("#face1#啊……没什么。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                                                  } else {
                                                                    if (status === v++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#难道是被人害了？比方说有人洒了坏牛奶之类的。", 36, 3004907, true, true, 1);
                                                                    } else {
                                                                      if (status === v++) {
                                                                        cm.sendNormalTalk_Bottom("#face1#那什么……嗯……算是吧。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                                                      } else {
                                                                        if (status === v++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#哎呀，要不要我找人帮忙打扫打扫？只要你稍等片刻……", 36, 3004907, true, true, 1);
                                                                        } else {
                                                                          if (status === v++) {
                                                                            cm.sendNormalTalk_Bottom("#face1#啊，不，不，没事的，没事的。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                                                          } else {
                                                                            if (status === v++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#？？", 36, 3004907, true, true, 1);
                                                                            } else {
                                                                              if (status === v++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#刚刚，那什么，你不是说该去出任务了嘛？快走吧，大家都该等着了。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                                                              } else {
                                                                                if (status === v++) {
                                                                                  cm.sendNormalTalk_Bottom("#face0#诶？？好，走吧。", 36, 3004907, true, true, 1);
                                                                                } else {
                                                                                  if (status === v++) {
                                                                                    cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                                                  } else {
                                                                                    if (status === v++) {
                                                                                      cm.inGameDirectionEvent_Unknown9(0);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                    } else if (status === v++) {
                                                                                      cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                      cm.npc_LeaveField("oid=564202");
                                                                                      cm.forceStartQuest(39407, '');
                                                                                      cm.updateInfoQuest(39400, "51=h0;52=h0;80=h0;53=h0;81=h0;54=h0;82=h0;73=h0;83=h0;57=h1;84=h0;85=h0");
                                                                                      cm.updateInfoQuest(39400, "51=h0;52=h0;80=h0;53=h0;81=h0;54=h0;82=h0;73=h0;74=h1;83=h0;57=h1;84=h0;85=h0");
                                                                                      cm.updateInfoQuest(39400, "51=h0;52=h0;80=h0;53=h0;81=h0;54=h0;82=h0;73=h0;74=h1;83=h0;75=h1;57=h1;84=h0;85=h0");
                                                                                      cm.updateInfoQuest(39400, "51=h0;52=h0;80=h0;53=h0;81=h0;54=h0;82=h0;73=h0;74=h1;83=h0;75=h1;57=h1;84=h0;76=h1;85=h0");
                                                                                      cm.updateInfoQuest(39400, "51=h0;52=h0;80=h0;53=h0;81=h0;54=h0;82=h0;73=h0;74=h1;83=h0;75=h1;57=h1;84=h0;76=h1;85=h0;77=h1");
                                                                                      cm.updateInfoQuest(39400, "51=h0;52=h0;80=h0;53=h0;81=h0;54=h0;82=h0;73=h0;74=h1;83=h0;75=h1;57=h1;84=h0;76=h1;85=h1;77=h1");
                                                                                      cm.fieldEffect_PlayBGM("Bgm56/TheDispossessed", 0, 0);
                                                                                      cm.OnStartNavigation(410000417, 1, "3004957", 39407);
                                                                                      cm.dispose();
                                                                                      cm.warp(410000416, 3, false);
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
function stage0(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceStartQuest();
      cm.dispose();
    }
  }
}
function end(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -122, -937);
      cm.sendNormalTalk_Bottom("#face0#（还没来得及动手就已经出动了……）", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#（到底为什么这些东西会在我的橱柜里？）", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face2#（切……果然还是至少现在照实说……）", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face2#（不，不是的。）", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face2#（提拉格说得没错，\r\n在这一行但凡有谁出了差错……就完蛋了。）", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#该隐？你在听吗？", 36, 3004907, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face1#额，嗯……", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face0#他们的居住地就在这附近一带，各位去走访附近一带的居民，特别是那些罪犯，查查他们的位置。", 36, 3004907, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face0#那些巴伊托兹是不可能乖乖回答的，结果还是要让我用武力搞清楚嘛。", 36, 3004910, true, true, 1);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face0#那倒是方便……不过何必这么麻烦找什么孩子啊？", 36, 3004911, true, true, 1);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom("#face0#孩子们？", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk_Bottom("#face0#是啊，孩子们，\r\n听说你一直追到据点屋顶的那帮家伙消失得无影无踪，\r\n你没听简报嘛，都干什么去了？", 36, 3004910, true, true, 1);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk_Bottom("#face1#啊……", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                            } else {
                              if (status === v++) {
                                cm.sendNormalTalk_Bottom("#face0#好了，我会划分一下区域，首先1区……", 36, 3004907, true, true, 1);
                              } else {
                                if (status === v++) {
                                  cm.sendNormalTalk_Bottom("#face0#反正都是些小喽啰，有必要齐齐上阵吗？\r\n只要像上次那样凑齐人数……", 36, 3004911, true, true, 1);
                                } else {
                                  if (status === v++) {
                                    cm.sendNormalTalk_Bottom("#face0#这次的事不会那么简单的。", 36, 3004907, true, true, 1);
                                  } else if (status === v++) {
                                    cm.forceCompleteQuest(39407);
                                    cm.gainExp(1604);
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