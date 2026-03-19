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
      cm.npc_ChangeController(1540502, "oid=22214983", 1900, 46, 31, 1850, 1950, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=22214983", "summon", 0, 0);
      cm.npc_ChangeController(1540503, "oid=22214984", 2000, 46, 33, 1950, 2050, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=22214984", "summon", 0, 0);
      cm.npc_ChangeController(1540504, "oid=22214985", 2100, 46, 32, 2050, 2150, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=22214985", "summon", 0, 0);
      cm.setAmbience("Ambience.img/secretmissionbase", 100, 60);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_SetForceMove("oid=22214983", -1, 800, 300);
      cm.npc_SetForceMove("oid=22214984", -1, 800, 300);
      cm.npc_SetForceMove("oid=22214985", -1, 800, 300);
      cm.inGameDirectionEvent_MoveAction(1);
      cm.inGameDirectionEvent_AskAnswerTime(3000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_MoveAction(0);
        cm.sendNormalTalk_Bottom("#face1#嗬嗬……我还以为自己要死了呢！", 37, 1540503, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("都怪哥哥们，差点就糟糕了。", 37, 1540504, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face1#对不起。", 37, 1540502, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("幸好大家都平安无事，队长。\r\n不过，刚刚是谁在喊我们啊？", 37, 1540504, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#是我喊的。你们差点就遭殃了。", 37, 1540650, true, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushMoveInfo(0, 2000, 118, 46);
                } else {
                  if (status === V++) {
                    cm.playSoundEffDirectly("Ambience.img/secretmissionbase");
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                  } else {
                    if (status === V++) {
                      cm.npc_ChangeController(1540650, "oid=22215384", 180, 46, 6, 130, 230, 0, true, 500, false);
                      cm.npc_SetSpecialAction("oid=22215384", "summon", 0, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_PlayBGM("Bgm40.img/JunkYard", 0, 0);
                        cm.npc_SetForceMove("oid=22215384", 1, 500, 200);
                        cm.inGameDirectionEvent_PushMoveInfo(1, 500, 0, 0);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_MoveAction(1);
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_MoveAction(0);
                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face1#智能机器人……？", 37, 1540502, false, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("哈哈哈！看你们那刚刚慌忙逃窜的样子，所幸你们都完好无损。", 37, 1540650, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("可惜我就掉了一个眼睛！哈哈哈！", 37, 1540650, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face1#队长，快下达战斗命令！", 37, 1540502, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("等等，这个机器人好像和其他机器人不一样。", 57, 0, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("我叫#b独眼#k。这是我自己起的名字！\r\n你和那些鸡的名字叫什么？", 37, 1540650, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_PlayFieldSound("Sound/FarmSE.img/1", 100);
                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=22214983"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=22214984"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=22214985"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                          } else {
                                            if (status === V++) {
                                              cm.askMenu_Bottom("嗯嗯？你们叫什么名字？\r\n#b#L0#说出名字。#l", 37, 1540650);
                                            } else {
                                              if (status === V++) {
                                                cm.askMenu_Bottom("#b#h0#？#k世界上还有这么复杂的名字啊？\r\n你先等一下……我来为你起个名字。\r\n\r\n#b#L0#？？还可以啊……#l", 37, 1540650);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_PushScaleInfo(300, 2000, 300, 723, 96);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_PushScaleInfo(2000, 2000, 2000, 823, 96);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_SetSpecialAction("oid=22215384", "shock", 0, 1);
                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/scanner_stand", 100);
                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/franAppear", 100);
                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=22215384"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                          cm.npcMove(1540650, 0, -10, 100);
                                                          cm.inGameDirectionEvent_AskAnswerTime(120);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npcMove(1540650, 0, 10, 100);
                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.emotion(5, 5000);
                                                              cm.askMenu_Bottom("嗯！你看起来软软的，就叫你#b“小软柿”#k吧！！\r\n\r\n#b#L0#等等！！！小软柿好像有点……#l", 37, 1540650);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.emotion(3, 5000);
                                                                cm.askMenu_Bottom("你没必要感谢我。起个名字不算什么。\r\n我家人的名字都是我起的。\r\n\r\n#b#L0#好让人担心。#l", 37, 1540650);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("抱歉问一下，那些智能机器人正在寻找的是你吗？", 37, 1540502, false, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("哈哈哈！那只鸡倒是挺聪明的。\r\n不仅是我，还有我的老婆和女儿。", 37, 1540650, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face1#等等，你也是智能机器人啊？\r\n为什么会被其他智能机器人追赶呢？", 37, 1540503, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.askMenu_Bottom("哈哈哈！这个说来话长了……这个嘛……\r\n\r\n\r\n#b#L0#请大概说一下。#l", 37, 1540650);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.askMenu_Bottom("呃，我这么说或许你们不会相信，但我们了解了#b“感情”#k这东西。\r\n\r\n\r\n#b#L0#感情……？#l", 37, 1540650);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("像我们这样的智能机器人如果有了感情，结果很显然。\r\n由于要将我们报废处理，所以我们就逃出来了。", 37, 1540650, false, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("老公？你有捡回来了什么东西啊！", 37, 1540651, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_PushScaleInfo(300, 1000, 300, 923, -104);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_PushMoveInfo(0, 1000, 1018, -54);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.npc_ChangeController(1540651, "oid=22216550", -265, 46, 15, -315, -215, 0, true, 500, false);
                                                                                      cm.npc_SetSpecialAction("oid=22216550", "summon", 0, 0);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.npc_SetForceMove("oid=22216550", 1, 600, 200);
                                                                                        cm.npc_SetForceMove("oid=22215384", -1, 200, 200);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_PushMoveInfo(0, 500, 1518, -54);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.npc_SetForceMove("oid=22214983", -1, 200, 200);
                                                                                                cm.npc_SetForceMove("oid=22214984", -1, 200, 200);
                                                                                                cm.npc_SetForceMove("oid=22214985", -1, 200, 200);
                                                                                                cm.inGameDirectionEvent_MoveAction(1);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_MoveAction(0);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("？？啊，这是什么啊？\r\n是人吗？那边的是鸡？", 37, 1540651, false, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.fieldEffect_PlayFieldSound("Sound/FarmSE.img/1", 100);
                                                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=22214983"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=22214984"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=22214985"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 200, 0);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 550, 106);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.npc_SetSpecialAction("oid=22215384", 'shock', 0, 1);
                                                                                                                cm.npc_setForceFlip("oid=22215384", 1);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("我来介绍一下。这是我的妻子#b杉顺。#k\r\n杉顺，他们在被侦察队追赶时，是我救了他们。他的名字叫做#b小软柿#k。", 37, 1540650, false, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face1#智能机器人老公的智能机器人妻子……\r\n越来越……？", 37, 1540503, true, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.emotion(3, 5000);
                                                                                                                      cm.fieldEffect_PlayFieldSound("Sound/Field.img/Cokeplay/Fall", 100);
                                                                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/love", "oid=22216550"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                      cm.npcMove(1540651, 0, -10, 100);
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(120);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.npcMove(1540651, 0, 10, 100);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.askMenu_Bottom("天啊，#b小软柿#k！这个名字真是太美了。\r\n不过，软绵绵的人怎么会到这机械之地来呢？\r\n#b#L0#说明事情原由。#l", 37, 1540651);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                              cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 620, -104);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                                                  cm.setAmbience("Ambience.img/gravity", 100, 60);
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("……原来是这样啊。", 37, 1540651, false, true);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("那你可来对地方了。\r\n进入黑色天堂的方法只有一个。", 37, 1540650, true, true);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("……那就是利用机械坟墓正中央高高耸立的#b中央塔#k。", 37, 1540650, false, true);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.inGameDirectionEvent_PushScaleInfo(5000, 2000, 5000, 620, -254);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                } else if (status === V++) {
                                                                                                                                                  cm.dispose();
                                                                                                                                                  cm.warp(350040110, 0, true);
                                                                                                                                                }
                                                                                                                                              }
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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