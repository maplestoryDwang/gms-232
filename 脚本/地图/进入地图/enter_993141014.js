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
      cm.npc_ChangeController(3004430, "oid=559051", -220, 23, 42, -270, -170, 1, true, 0, false);
      cm.npc_SetSpecialAction('oid=559051', "summon", 0, 0);
      cm.sendNormalTalk_Bottom("跑去哪里了？分明看到往这边来了……", 57, 0, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -279, -450);
      } else {
        if (status === V++) {
          cm.fieldEffect_PlayBGM("Bgm53/GraveyardOfSword", 0, 0);
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
                cm.inGameDirectionEvent_PushScaleInfo(4000, 0, 1500, 4000, -279, 20);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(5500);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom('啊！', 57, 0, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face4##h0#？你来这儿有什么事？", 37, 3004430, true, true);
                      cm.effect_Voice("Voice5.img/CH2/Seren/30", 128);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("我跟踪了一个形迹可疑的家伙。", 57, 0, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#……是吗？估计你追的是“那个人”。", 37, 3004430, true, true);
                          cm.effect_Voice("Voice5.img/CH2/Seren/31", 128);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("你知道是谁吗？", 57, 0, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#不，我只知道除了我之外，还有个人也经常来这里。\r\n但我从没实际见过他。", 37, 3004430, true, true);
                              cm.effect_Voice("Voice5.img/CH2/Seren/32", 128);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("是不是什么奇怪的人？", 57, 0, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#不用担心。\r\n如果是和这座坟墓的主人有关系的人，不会是什么危险人物。", 37, 3004430, true, true);
                                  cm.effect_Voice("Voice5.img/CH2/Seren/33", 128);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom('原来如此。', 57, 0, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("可是……这是谁的坟墓呢？", 57, 0, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#是我战友们的坟墓。\r\n他们都是在近天峰的圣剑运送任务中牺牲的。", 37, 3004430, true, true);
                                          cm.effect_Voice("Voice5.img/CH2/Seren/34", 128);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("这样一看……伤亡惨重呢。", 57, 0, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#是的。活着到达圣地的人就只有我一个。", 37, 3004430, true, true);
                                              cm.effect_Voice("Voice5.img/CH2/Seren/35", 128);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom('啊……！', 57, 0, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#不管怎样，至少我能活着完成任务，就是万幸。", 37, 3004430, true, true);
                                                  cm.effect_Voice("Voice5.img/CH2/Seren/36", 128);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#也不负那么多人的牺牲。", 37, 3004430, true, true);
                                                    cm.effect_Voice("Voice5.img/CH2/Seren/37", 128);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#而且……如今还有我可以追悼他们。", 37, 3004430, true, true);
                                                      cm.effect_Voice("Voice5.img/CH2/Seren/38", 128);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("战友纷纷牺牲，你应该很难过吧？", 57, 0, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#他们为主神密特拉英勇殉教。这是可喜的事。", 37, 3004430, true, true);
                                                          cm.effect_Voice("Voice5.img/CH2/Seren/39", 128);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom('……', 57, 0, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#我听说联盟的人大部分都不信神。", 37, 3004430, false, true);
                                                                cm.effect_Voice("Voice5.img/CH2/Seren/40", 128);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#在与堕落超越者的交战中，许多人牺牲的时候，你是什么心情？", 37, 3004430, true, true);
                                                                  cm.effect_Voice("Voice5.img/CH2/Seren/41", 128);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.askMenu_Bottom("我……\r\n\r\n#b#L0#很伤心。#l\r\n#L1#我也说不清。", 57, 0);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      if (e == 0) {
                                                                        cm.sendNormalTalk_Bottom("#face5#是吗……", 37, 3004430, false, true);
                                                                        cm.effect_Voice("Voice5.img/CH2/Seren/42", 128);
                                                                      } else {
                                                                        cm.sendNormalTalk_Bottom("#face5#是我多此一问……", 37, 3004430, false, true);
                                                                      }
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face5#你见到伊黛娜的话，请代我跟她说声抱歉。", 37, 3004430, false, true);
                                                                          cm.effect_Voice("Voice5.img/CH2/Seren/43", 128);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom('嗯？', 57, 0, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#正如伊黛娜所说，这时候要找天族人是件很困难的事情。\r\n只能另外想其他办法……", 37, 3004430, true, true);
                                                                              cm.effect_Voice("Voice5.img/CH2/Seren/44", 128);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ark/wind", 100);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=559051"], [0, 0, -20, 1, 0, 1, 0, 0]);
                                                                                  cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
                                                                                  cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction23.img/illust2/1", 0, 1000, 0, 0, 1, 4, 0, -1, 0, 0, 0);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#分叉的羽毛……？", 37, 3004430, false, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
                                                                                      cm.sendNormalTalk_Bottom('#face4#啊！！', 37, 3004430, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("（难道除了塞伦，还有其他的天族？）", 57, 0, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 700, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission3", 100);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.npc_ChangeController(3004446, "oid=560326", 621, 75, 41, 571, 671, 1, true, 0, false);
                                                                                              cm.npc_SetSpecialAction("oid=560326", "summon", 0, 0);
                                                                                              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                              cm.inGameDirectionEvent_PushScaleInfo(1500, 0, 3000, 1500, 526, 55);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                    cm.effect_NormalSpeechBalloon('……', 1, 0, 0, 2000, 1, 0, 0, 0, 4, 3004432, null, cm.getPlayer().getId());
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.npc_SetForceMove("oid=560326", 1, 300, 70);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.Npc_Fadeout("oid=560326", 0, 2000);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                          } else if (status === V++) {
                                                                                                            cm.forceCompleteQuest(39813);
                                                                                                            cm.gainExp(25 * Math.pow(cm.getLevel(), 3));
                                                                                                            cm.warp(993141023, 0, false);
                                                                                                            cm.eventSKill(0);
                                                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                                                            cm.setStandAloneMode(false);
                                                                                                            cm.npc_LeaveField('oid=559051');
                                                                                                            cm.npc_LeaveField("oid=559051");
                                                                                                            cm.npc_LeaveField("oid=560326");
                                                                                                            cm.npc_LeaveField("oid=560326");
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