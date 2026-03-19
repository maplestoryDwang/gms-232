var status = -1;
function action(f, E, e) {
  status++;
  if (cm.isQuestFinished(34252) && !cm.isQuestFinished(34253)) {
    action1(f, E, e);
  } else if (cm.isQuestFinished(34253) && !cm.isQuestFinished(34254)) {
    action2(f, E, e);
  } else {
    action10(f, E, e);
  }
}
function action1(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.npc_ChangeController(3003410, "oid=49574", 1438, 24, 98, 1422, 1488, 1, false, false);
      cm.npc_ChangeController(3003426, 'oid=49575', 1984, -449, 89, 1934, 2034, 1, false, false);
      cm.npc_ChangeController(3003427, 'oid=49576', 1812, 24, 98, 1762, 1849, 1, false, false);
      cm.npc_ChangeController(9000124, "oid=49577", 976, -773, 8, 926, 1026, 1, false, false);
      cm.npc_ChangeController(3003105, 'oid=49578', -1074, 24, 96, -1124, -1024, 1, false, false);
      cm.npc_ChangeController(3003106, "oid=49579", -1235, 24, 96, -1285, -1185, 0, false, false);
      cm.npc_ChangeController(9010022, "oid=49580", -2144, 24, 94, -2194, -2094, 1, false, false);
      cm.npc_ChangeController(9010109, "oid=49581", -1941, 24, 94, -1991, -1891, 0, false, false);
      cm.npc_ChangeController(9000123, "oid=49582", 868, -773, 8, 818, 918, 1, false, false);
      cm.npc_ChangeController(9010106, "oid=49583", -1810, 24, 95, -1847, -1760, 1, false, false);
      cm.npc_ChangeController(3003460, "oid=49584", 1107, 24, 97, 1057, 1157, 1, false, false);
      cm.npc_ChangeController(3003461, "oid=49585", 1264, 24, 97, 1214, 1314, 1, false, false);
      cm.npc_ChangeController(3003451, "oid=49586", 843, 24, 90, 793, 893, 1, false, false);
      cm.npc_ChangeController(3003451, 'oid=49587', -609, 24, 93, -659, -559, 1, false, false);
      cm.npc_ChangeController(3003451, 'oid=49588', 1949, 24, 99, 1899, 1999, 1, false, false);
      cm.npc_ChangeController(3003452, 'oid=49589', 556, -116, 78, 506, 598, 1, false, false);
      cm.npc_ChangeController(3003451, "oid=49590", 818, -773, 8, 768, 868, 1, false, false);
      cm.npc_ChangeController(3003452, "oid=49591", 909, -773, 8, 859, 959, 1, false, false);
      cm.npc_ChangeController(3003452, "oid=49592", 465, -446, 85, 415, 515, 0, false, false);
      cm.npc_ChangeController(3003418, 'oid=49593', 2195, -449, 89, 2145, 2245, 5, true, false);
      cm.npc_ChangeController(3003418, 'oid=49594', 2102, -449, 89, 2052, 2152, 5, true, false);
      cm.npc_ChangeController(3003432, "oid=49595", 222, 24, 91, 172, 272, 0, false, false);
      cm.npc_ChangeController(3003462, "oid=49596", -2305, 24, 94, -2314, -2255, 0, false, false);
      cm.npc_ChangeController(3003466, "oid=49597", -114, 24, 92, -164, -64, 1, false, false);
      cm.npc_ChangeController(3003465, "oid=49598", -523, 24, 93, -573, -486, 1, false, false);
      cm.npc_ChangeController(3003467, "oid=49599", -856, 24, 93, -906, -806, 0, false, false);
      cm.npc_ChangeController(3003468, "oid=49600", 1701, -449, 87, 1651, 1751, 1, false, false);
      cm.npc_ChangeController(3003425, "oid=49601", -201, 24, 92, -251, -151, 1, false, false);
      cm.Hidden_background("130_stone", 1, 1, 0, 0);
      cm.Hidden_background("130_stone2", 1, 1, 0, 0);
      cm.Hidden_background("130_candle", 1, 0, 0, 0);
      cm.Hidden_background("130_candle2", 1, 0, 0, 0);
      cm.Hidden_background("130_building", 1, 0, 0, 0);
      cm.updateInfoQuest(34252, "enter2=1;enter3=1;enter4=1;enter=1");
      cm.updateInfoQuest(34271, "20=h1;21=h0;30=h0;31=h0;23=h2;32=h0;33=h0;52=h1;34=h0;35=h0;36=h0;29=h1");
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.setStandAloneMode(true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 300, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 500, -800);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(4000);
      } else {
        if (status === V++) {
          cm.effect_Text(["#fn黑体##fs18#海加顿历52年，特鲁埃博广场"], [100, 2200, 6, -50, -50, 1, 4, 0, 0, 0]);
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(2200);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("？？？", 57, 0, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#右边，再往右边点~", 37, 3003408, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#慢点，慢点。", 37, 3003451, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushScaleInfo(6000, 1000, 6000, 1600, -100);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#天气真好啊。", 37, 3003411, false, true);
                    } else {
                      if (status === V++) {
                        cm.npc_ChangeController(3003406, "oid=1819604", 152, -55, 91, 102, 202, 1, true, false);
                        cm.npc_SetSpecialAction("oid=1819604", "summon", 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#爸爸，你看~", 37, 3003414, false, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#士兵你不热啊？", 37, 3003412, false, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#别提了……", 37, 3003451, true, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                } else {
                                  if (status === V++) {
                                    cm.OverlapScreenDetail19(0, 2000, 3000, 1);
                                    cm.inGameDirectionEvent_PushScaleInfo(3000, 2000, 30000, 21, 44);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_RemoveOverlapScreenDetail(3000);
                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA##fs18#这里……", 57, 0, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA##fs18#到底在哪？明明乘坐飞鱼……慢着，飞鱼？", 57, 0, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA##fs18#明明刚刚还在海底……肩负重要使命的……神秘之影……", 57, 0, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA##fs18#没错……本来沿着神秘河追踪黑魔法师……", 57, 0, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_SetForceMove("oid=1819604", -1, 270, 140);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                } else {
                                                  if (status === V++) {
                                                    cm.userSetFieldFloating(450006130, 30, 30, 50);
                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/omega/hit", 100);
                                                    cm.inGameDirectionEvent_ForcedFlip(-1);
                                                    cm.inGameDirectionEvent_AskAnswerTime(200);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.userSetFieldFloating(450006130, 0, 0, 50);
                                                      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                      cm.sendNormalTalk_Bottom("呃啊！小心……", 57, 0, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.npc_SetForceMove("oid=1819604", 1, 10, 100);
                                                          cm.inGameDirectionEvent_AskAnswerTime(200);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#说你是傻瓜~嘿嘿嘿！！谢谢你#fs18##b夏伊#k！！#fs16#这钱包我会好好用的！", 37, 3003406, false, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#隐身术！", 37, 3003406, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.Npc_Fadeout("oid=1819604", 200, 1000);
                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_SetForceMove("oid=1819604", -1, 1000, 200);
                                                                  cm.sendNormalTalk_Bottom("啊！我的钱包！！#fs18##b江！！#k#fs16#我饶不了你！！", 57, 0, false, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_同时移动镜头和人(1, 500);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#这些家伙，又来了。", 37, 3003413, false, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#江！夏伊！在路上乱跑是很危险的！", 37, 3003412, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.OnStartNavigation(450006110, 1, "3003423", 0);
                                                                          cm.npc_LeaveField("oid=1819604");
                                                                          cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                          cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                            } else if (status === V++) {
                                                                              cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                              cm.setStandAloneMode(false);
                                                                              cm.setInGameDirectionMode(false, true, false);
                                                                              cm.fieldEffect_PlayBGM("Bgm48.img/MemoryOfKritias", 0, 0);
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
function action2(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.npc_ChangeController(3003410, 'oid=49574', 1438, 24, 98, 1422, 1488, 1, false, false);
      cm.npc_ChangeController(3003426, "oid=49575", 1984, -449, 89, 1934, 2034, 1, false, false);
      cm.npc_ChangeController(3003427, "oid=49576", 1812, 24, 98, 1762, 1849, 1, false, false);
      cm.npc_ChangeController(9000124, "oid=49577", 976, -773, 8, 926, 1026, 1, false, false);
      cm.npc_ChangeController(3003105, "oid=49578", -1074, 24, 96, -1124, -1024, 1, false, false);
      cm.npc_ChangeController(3003106, "oid=49579", -1235, 24, 96, -1285, -1185, 0, false, false);
      cm.npc_ChangeController(9010022, "oid=49580", -2144, 24, 94, -2194, -2094, 1, false, false);
      cm.npc_ChangeController(9010109, "oid=49581", -1941, 24, 94, -1991, -1891, 0, false, false);
      cm.npc_ChangeController(9000123, "oid=49582", 868, -773, 8, 818, 918, 1, false, false);
      cm.npc_ChangeController(9010106, 'oid=49583', -1810, 24, 95, -1847, -1760, 1, false, false);
      cm.npc_ChangeController(3003460, 'oid=49584', 1107, 24, 97, 1057, 1157, 1, false, false);
      cm.npc_ChangeController(3003461, 'oid=49585', 1264, 24, 97, 1214, 1314, 1, false, false);
      cm.npc_ChangeController(3003451, "oid=49586", 843, 24, 90, 793, 893, 1, false, false);
      cm.npc_ChangeController(3003451, 'oid=49587', -609, 24, 93, -659, -559, 1, false, false);
      cm.npc_ChangeController(3003451, "oid=49588", 1949, 24, 99, 1899, 1999, 1, false, false);
      cm.npc_ChangeController(3003452, "oid=49589", 556, -116, 78, 506, 598, 1, false, false);
      cm.npc_ChangeController(3003451, 'oid=49590', 818, -773, 8, 768, 868, 1, false, false);
      cm.npc_ChangeController(3003452, "oid=49591", 909, -773, 8, 859, 959, 1, false, false);
      cm.npc_ChangeController(3003452, "oid=49592", 465, -446, 85, 415, 515, 0, false, false);
      cm.npc_ChangeController(3003418, "oid=49593", 2195, -449, 89, 2145, 2245, 5, true, false);
      cm.npc_ChangeController(3003418, "oid=49594", 2102, -449, 89, 2052, 2152, 5, true, false);
      cm.npc_ChangeController(3003432, "oid=49595", 222, 24, 91, 172, 272, 0, false, false);
      cm.npc_ChangeController(3003462, 'oid=49596', -2305, 24, 94, -2314, -2255, 0, false, false);
      cm.npc_ChangeController(3003466, "oid=49597", -114, 24, 92, -164, -64, 1, false, false);
      cm.npc_ChangeController(3003465, "oid=49598", -523, 24, 93, -573, -486, 1, false, false);
      cm.npc_ChangeController(3003467, "oid=49599", -856, 24, 93, -906, -806, 0, false, false);
      cm.npc_ChangeController(3003468, "oid=49600", 1701, -449, 87, 1651, 1751, 1, false, false);
      cm.npc_ChangeController(3003425, "oid=49601", -201, 24, 92, -251, -151, 1, false, false);
      cm.Hidden_background("130_stone", 1, 0, 0, 0);
      cm.Hidden_background("130_stone2", 1, 0, 0, 0);
      cm.Hidden_background("130_candle", 1, 1, 0, 0);
      cm.Hidden_background("130_candle2", 1, 1, 0, 0);
      cm.Hidden_background("130_building", 1, 1, 0, 0);
      cm.updateInfoQuest(34271, "20=h1;30=h0;21=h0;31=h0;32=h0;23=h0;33=h0;34=h0;52=h0;35=h0;36=h0;29=h1");
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.setStandAloneMode(true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 30, 20);
    } else {
      if (status === V++) {
        cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(4000);
      } else {
        if (status === V++) {
          cm.effect_Text(["#fn黑体##fs18#海加顿历54年，特鲁埃博广场"], [100, 2200, 6, -50, -50, 1, 4, 0, 0, 0]);
          cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1500, 0);
          cm.inGameDirectionEvent_AskAnswerTime(3500);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("你刚刚说什么？！！到底什么意思……", 57, 0, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0##h0#。快醒醒。", 37, 3003409, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("嗯？嗯？？谁啊？谁在说话？啊，这声音是？？", 57, 0, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#是我，飞鱼。", 37, 3003409, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("出什么事了？我为什么……这里是克里蒂亚斯吗？", 57, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("我的名字叫#b夏伊？#h0#？#k这是哪？", 57, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face1#你果然忘了。明明警告过你。", 37, 3003409, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("我有些记不得了……", 57, 0, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#你被吸入塔纳的记忆中了。\r\n现在你已经是#b她记忆中的一名#k了。", 37, 3003409, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("是她把我关起来的吗？", 57, 0, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#不，她也被人关进了记忆沼泽。", 37, 3003409, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("说到……沼泽……", 57, 0, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#关押在#b莫拉斯的珊瑚森林#k的人最终会被过去的记忆残蚀，忘记眼前的现实。", 37, 3003409, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#原本一直在记忆里徘徊\r\n最后变回了平静状态的艾尔达。", 37, 3003409, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("什么？！我要是知道，还来这干嘛？", 57, 0, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face1#你不是信誓旦旦地说这是了解塔纳身份的好机会嘛。", 37, 3003409, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("是、是吗？应该有办法出去吧？", 57, 0, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0##fc0xFFAAAAAA##fs18#这是塔纳的记忆……最终全靠……塔纳……", 37, 3003409, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("我听不清你说什么！飞鱼啊？飞鱼！", 57, 0, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_PlayBGM("Bgm48.img/MemoryOfKritias", 0, 0);
                                                    cm.sendNormalTalk_Bottom("啊！#b(怀中闪闪发光。)", 57, 0, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("克里蒂亚斯，有关无法挽回的那天的回忆录？", 57, 0, true, true);
                                                      cm.gainItem(4161097, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.updateInfoQuest(34254, 'enter=1');
                                                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                                          } else if (status === V++) {
                                                            cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                            cm.setStandAloneMode(false);
                                                            cm.setInGameDirectionMode(false, true, false);
                                                            cm.dispose();
                                                          } else {
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
function action10(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else if (status === V++) {
    cm.Hidden_background("130_stone", 1, 1, 0, 0);
    cm.Hidden_background("130_stone2", 1, 1, 0, 0);
    cm.Hidden_background("130_candle", 1, 0, 0, 0);
    cm.Hidden_background("130_candle2", 1, 0, 0, 0);
    cm.Hidden_background("130_building", 1, 0, 0, 0);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;