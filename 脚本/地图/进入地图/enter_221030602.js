var status = -1;
var selectionLog = [];
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
      cm.npc_ChangeController(2052032, "oid=38382929", 588, -43, 20, 538, 638, 1, true, false);
      cm.npc_SetSpecialAction("oid=38382929", "summon", 0, 0);
      cm.npc_ChangeController(2052029, "oid=38382930", -220, -43, 18, -270, -170, 0, true, false);
      cm.npc_SetSpecialAction("oid=38382930", 'summon', 0, 0);
      cm.npc_ChangeController(2052029, "oid=38382931", -40, -43, 18, -90, 10, 0, true, false);
      cm.npc_SetSpecialAction("oid=38382931", "summon", 0, 0);
      cm.npc_ChangeController(2052029, "oid=38382932", -100, -43, 18, -150, -50, 0, true, false);
      cm.npc_SetSpecialAction("oid=38382932", "summon", 0, 0);
      cm.npc_ChangeController(2052029, "oid=38382933", -160, -43, 18, -210, -110, 0, true, false);
      cm.npc_SetSpecialAction("oid=38382933", 'summon', 0, 0);
      cm.npc_ChangeController(2052008, "oid=38382934", 0, -43, 19, -50, 50, 0, true, false);
      cm.npc_SetSpecialAction("oid=38382934", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 480, -20);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npcSetSize("oid=38382934", 10, 100);
        cm.npcMove(2052008, 0, -65, 0);
        cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.sendNormalTalk_Bottom("#face2#所有人先戴上头盔，还不知道什么时候敌人会冲出来。", 37, 2052010, false, true);
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
              cm.sendNormalTalk_Bottom("太静悄悄了吧？", 37, 2052014, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_头顶图片(["Map/Effect3.img/omegaSector/bbagic"], [0, 0, 0, 1, 0, 0, 0, 0]);
                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/electric1", 100);
                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/droping2", 100);
                  cm.emotion(5, 5000);
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                  cm.resizeCharacterBuff(20, 129600000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("额啊啊啊！", 57, 0, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face2##fs25##b#ho#！#k切！被耍了！！", 37, 2052011, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#哈哈哈！冒险勇士可真是蠢啊！你们以为闹出这么大的动静，我还能不知道吗？", 37, 2052008, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face2##fs25#白外星博士！！", 37, 2052010, true, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_PushScaleInfo(200, 2000, 200, 30, -20);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("？？？", 37, 2052010, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("在这里，这里！！", 37, 2052008, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_PushScaleInfo(200, 6000, 200, 5, 20);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face1#什么情况……你怎么会变小了？", 37, 2052010, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 200, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(800);
                                            cm.effect_Text(["#fn黑体##fs18#昨天晚上……#fs15##fn黑体#UFO，白外星博士的房间"], [100, 2200, 6, -50, -50, 1, 4, 0, 0, 0]);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/text", 100);
                                              cm.inGameDirectionEvent_AskAnswerTime(6200);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_ProcessOnOffLayer('0', "Map/Effect3.img/omegaSector/Dr.G", 0, 1500, 0, 0, 20, 4, 1);
                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("为什么！究竟为什么会没有效果！为什么！！", 37, 2052008, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/stopswitch", 100);
                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/stopswitch", 100);
                                                      cm.inGameDirectionEvent_AskAnswerTime(100);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/stopswitch", 100);
                                                        cm.inGameDirectionEvent_AskAnswerTime(150);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("难道不是这么按的吗？嗯？", 37, 2052008, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/stopswitch", 100);
                                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/stopswitch", 100);
                                                              cm.inGameDirectionEvent_AskAnswerTime(100);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/stopswitch", 100);
                                                                cm.inGameDirectionEvent_AskAnswerTime(100);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/stopswitch", 100);
                                                                  cm.fieldEffect_ProcessOnOffLayer('0', '', 2, 300, 0, 0, 0, 0, 0);
                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/electric1", 100);
                                                                  cm.sendNormalTalk_Bottom("#fs20#额啊！！！", 37, 2052008, false, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 570, -20);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 400, 0);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face1#真叫人寒心啊……", 37, 2052015, false, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face1#真是傻瓜……", 37, 2052011, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face1#几乎等同于#b阿亮#k的水准了嘛~？", 37, 2052013, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face1#寒心……", 37, 2052014, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face1#实在是太叫人寒心了……", 37, 2052010, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face2#……一边说着一边#fs25##b发射终极激光！！！", 37, 2052010, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.setAmbience("SoundEff.img/blackHeaven/scanner_alert", 100, 60);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.npc_SetSpecialAction("oid=38382929", "special", -1, 1);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("天啊！这是什么情况？！金刚怎么会这样？", 37, 2052011, false, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face2#糟糕？？！！", 37, 2052014, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face2#粉狼的冒险能量不足！这是怎么回事？！", 37, 2052012, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face2#你说什么？！！", 37, 2052010, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#哈哈哈！发射缩小光线！！直接变成微生物吧！！", 37, 2052008, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face2#射出！！射出！！", 37, 2052012, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.playSoundEffDirectly("SoundEff.img/blackHeaven/scanner_alert");
                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/flare_fire", 100);
                                                                                                    cm.npc_SetSpecialAction("oid=38382929", "special2", 1, 1);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_头顶图片(["Map/Effect3.img/omegaSector/bbagic", "oid=38382929"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                      cm.npcSetSize("oid=38382929", 20, 1000);
                                                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/electric1", 100);
                                                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/droping2", 100);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#来，就是现在！好好教训一下那些狂妄自大的冒险勇士！", 37, 2052008, false, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.fieldEffect_PlayFieldSound("flowervioleta/spotlight", 100);
                                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face3#什，什么情况？！是谁把灯给关掉的！！", 37, 2052008, false, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face2#就是现在！赶紧逃！", 37, 2052009, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face2#跑去通风口！", 37, 2052010, true, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("别跟丢了！！", 37, 2052008, true, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("#fs15#谢~~    #fs17#谢~~    #fs19#了~~   #fs22#宅~~    #fs24#宅~    #fs26#啊~！！！！", 37, 2052015, true, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#fs22##face1##r怎么能叫我的名字呢，这家伙！！！#k", 37, 2052009, true, true);
                                                                                                                      } else if (status === V++) {
                                                                                                                        cm.dispose();
                                                                                                                        cm.warp(221030701, 2);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;