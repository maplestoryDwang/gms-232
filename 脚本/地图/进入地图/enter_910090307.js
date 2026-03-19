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
      cm.npc_ChangeController(1013326, 'oid=208435', 134, 26, 17, 84, 184, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.Hidden_background('object', 1, 0, 0, 0);
      cm.Hidden_background("object1", 1, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1, 256000, 0, 34304, -5120);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(300);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1400);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_同时移动镜头和人(2, 330);
              cm.inGameDirectionEvent_PushScaleInfo(640000, 1, 384000, 640000, 34304, 5120);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(3500);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face1#哦,这就是那个传说中的工具啊。", 37, 1013358, false, true, 1);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(300);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face1##b(虽然覆盖着苔藓,但这确实是古代的东西。\r\n看来他们并不知道这是遗物。)#k", 37, 1013358, false, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face1##b(这个还让人稍微有点期待。\r\n那个小孩说,最后会把灵药分给大家喝,对吧？)#k", 37, 1013358, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face3#……感觉到了村民们的气息。\r\n先离开这里,装作自然地跟他们汇合吧。", 37, 1013358, false, true, 1);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(300);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.onTeleport(0, 3, cm.getPlayer().getId(), -371, -41);
                                  cm.Hidden_background('object', 1, 1, 0, 0);
                                  cm.Hidden_background('object1', 1, 1, 0, 0);
                                  cm.updateInfoQuest(35948, "10=h0;11=h0;02=h1;12=h0;22=h1;13=h0;23=h1;14=h0;15=h0;06=h0;07=h0;16=h0;26=h1;08=h0;17=h0;09=h0;19=h0");
                                  cm.npc_ChangeController(1013352, "oid=857324", 220, -81, 12, 170, 270, 1, false, 0, false);
                                  cm.npc_SetSpecialAction('oid=857324', "summon", 0, 0);
                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1400);
                                  } else {
                                    if (status === V++) {
                                      cm.effect_Text(["#fn黑体##fs18#片刻之后,石臼森林", ''], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0, 0]);
                                      cm.inGameDirectionEvent_AskAnswerTime(4500);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#呵呵……那就从制作传说中的卡鲁帕灵药开始吧。\r\n希望今年治愈之力能保佑我们村……", 37, 1013352, false, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_SetSpecialAction('oid=857324', "special1", 1080, 1);
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/foxvalley/npc_doldol", 100);
                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#哦,灵验的力量渗入了石臼！", 37, 1013353, false, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#在这次的节日里,来了一位特殊的客人。\r\n我想让他先来尝尝我们的灵药。", 37, 1013352, false, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#过来喝下灵药吧,冒险家。", 37, 1013352, true, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_PushScaleInfo(384000, 1, 384000, 384000, -90112, -4865);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face6#好,那我就不客气了。", 37, 1013358, false, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_同时移动镜头和人(2, 330);
                                                                cm.inGameDirectionEvent_PushScaleInfo(640000, 1, 384000, 640000, 34304, 5120);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 2);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0##b(走近并喝下了灵药。感觉不祥的气息变得更强了。\n和触碰遗物时类似的感觉,瞬间击穿了我的身体。)#k", 37, 1013358, false, true, 1);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.fieldEffect_Hero9(0, 2000);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(2300);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                          cm.fieldEffect_Hero9(100, 1000);
                                                                          cm.setAmbience("Ambience.img/WSappear_loop", 200, 60);
                                                                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face3#！？", 37, 1013358, false, true, 1);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/pathfinder/roar2", 100);
                                                                                cm.userSetFieldFloating(910090307, 10, 10, 50);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.userSetFieldFloating(910090307, 0, 0, 0);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/pathfinder/roar1", 100);
                                                                                    cm.userSetFieldFloating(910090307, 5, 5, 50);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face1#咦,咦……这个声音是！？", 37, 1013353, false, true, 1);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0#村外那个凶物发出的声音,为什么……", 37, 1013352, true, true, 1);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 2500, 2);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face3##b(诅咒依旧未变,但身体感觉到了某种奇妙的反应。\r\n这个村子一定和遗物有着某种联系。)#k", 37, 1013358, false, true, 1);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/pathfinder/roar1", 100);
                                                                                                cm.sendNormalTalk_Bottom("#face1#呃……感觉头都要裂开了……", 37, 1013353, true, true, 1);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.Hidden_background("object", 1, 0, 0, 0);
                                                                                                  cm.userSetFieldFloating(910090307, 0, 0, 0);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/pathfinder/roar2", 100);
                                                                                                    cm.sendNormalTalk_Bottom("#face1#紧,紧急情况！大,大家马上躲到村里去！", 37, 1013352, false, true, 1);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
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
                                                                                                              cm.sendNormalTalk_Bottom("#face0##b(听到怪声之后,村民们几乎全都向村子逃去。\r\n除了村长和那个唠叨鬼之外。)#k", 37, 1013358, false, true, 1);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face1#真是咄咄怪事……\r\n冒险家,为什么在你身上会听到废墟中的那种怪声呢？", 37, 1013352, false, true, 1);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face6##b(没想到喝下灵药之后,竟然会出现这种效果……看来和他们搞好关系的愿望落空了。\r\n既然这样,就不必再遮遮掩掩了。)#k", 37, 1013358, true, true, 1);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face0#我想先问一个问题。这个遗物……到底是什么东西？", 37, 1013358, false, true, 1);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 2);
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face0##b(从腰间拿出遗物给他们看。\r\n两人好像非常害怕,脸色一下子变得煞白。)#k", 37, 1013358, false, true, 1);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face1#呃……冒险家,你为什么会带着那种凶物呢？\r\n快把它拿走。我马斯卡波……看错人了。", 37, 1013353, false, true, 1);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("#face1#把不祥之物带进村子,玷污了神圣的祭典……\r\n发出恐怖的声音,让村民们陷入了恐惧。", 37, 1013352, true, true, 1);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face1#这是绝对不可原谅的事情。我们不想再跟你有任何牵连。\r\n马上离开这里。", 37, 1013352, true, true, 1);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.npc_SetSpecialAction("oid=857324", "special2", 1080, 1);
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.Hidden_background("object1", 1, 0, 0, 0);
                                                                                                                                          cm.npc_LeaveField("oid=857324");
                                                                                                                                          cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                                                          cm.inGameDirectionEvent_PushScaleInfo(0, 1, 256000, -256, -129, -129);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 1, 512000, 0, 0, 23040);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#啧……这可难办了。\r\n既然这样,就只能看看是否有别的办法了。", 37, 1013358, false, true, 1);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 1, 256000, -256, -129, -129);
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
                                                                                                                                                              cm.updateInfoQuest(35948, "00=h0;10=h0;11=h0;02=h1;12=h0;22=h1;13=h0;23=h1;14=h0;15=h0;06=h0;07=h0;16=h0;26=h1;08=h0;17=h0;09=h0;19=h0");
                                                                                                                                                              cm.updateInfoQuest(35948, "00=h0;10=h0;11=h0;02=h1;12=h0;22=h1;13=h0;23=h1;14=h0;15=h0;06=h0;07=h1;16=h0;26=h1;08=h0;17=h0;09=h0;19=h0");
                                                                                                                                                              cm.forceCompleteQuest(35911);
                                                                                                                                                              cm.gainExp(1271);
                                                                                                                                                              cm.dispose();
                                                                                                                                                              cm.warp(100051020, 0, false);
                                                                                                                                                              cm.setStandAloneMode(false);
                                                                                                                                                              cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}