var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  if (cm.getNumberFromQuestInfo(39921, "dir") == 1) {
    action1(f, E, e);
  } else {
    action2(f, E, e);
  }
}
function action1(f, E, e) {
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
      cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
      cm.curNodeEventEnd(true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 1550, 330);
      cm.effect_Text(["#fn黑体##fs18#不久后，冒险岛世界新前哨基地"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
      cm.npc_ChangeController(3003750, "oid=502137", 1487, 339, 135, 1437, 1537, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=502137", 'summon', 0, 0);
      cm.npc_ChangeController(3004092, "oid=502138", 1628, 312, 136, 1578, 1678, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=502138", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=502138", "sit", -1, 1);
      cm.npc_ChangeController(3004431, "oid=502139", 1698, 329, 136, 1648, 1748, 1, true, 0, false);
      cm.npc_SetSpecialAction('oid=502139', "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=502139", "sit", -1, 1);
      cm.npc_ChangeController(3004089, 'oid=502140', 1771, 327, 136, 1721, 1821, 1, false, 0, false);
      cm.npc_SetSpecialAction('oid=502140', "summon", 0, 0);
      cm.npc_ChangeController(3004067, "oid=502141", 1420, 327, 135, 1370, 1470, 0, false, 0, false);
      cm.npc_SetSpecialAction('oid=502141', "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=502141", "sit", -1, 1);
      cm.npc_ChangeController(3004114, "oid=502142", 1333, 330, 134, 1283, 1383, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=502142", 'summon', 0, 0);
      cm.npc_ChangeController(3004116, 'oid=502143', 1258, 329, 133, 1208, 1308, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=502143", "summon", 0, 0);
      cm.npc_ChangeController(3004081, "oid=3004081", 1385, 358, -1, 1208, 1408, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3004081", 'summon', 0, 0);
      cm.npcMove(3003750, 0, -20, 0);
      cm.npcMove(3004092, 0, -50, 0);
      cm.npcMove(3004067, 0, -35, 0);
      cm.npcMove(3004431, 0, -30, 0);
      cm.npcMove(3004089, 0, -30, 0);
      cm.npcMove(3004116, 0, -30, 0);
      cm.npcMove(3004114, 0, -30, 0);
      cm.npcMove(3004081, 0, -15, 0);
    } else {
      if (status === V++) {
        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/text", 100);
        cm.inGameDirectionEvent_AskAnswerTime(5000);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1300);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face2#最后变成这样的结果吗。", 37, 1540451, false, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#我们本想先保护好对抗者……\r\n没想到所有人顷刻间便全被击倒了。", 37, 3004431, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#之后，对抗者和守护者展开了一场激战…… ", 37, 3004431, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face2#结果，双方全都重伤倒地。", 37, 1540451, true, true);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_PlayBGM("Bgm53/RedMoon", 0, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#古代神之力非常强悍。\r\n如果塞伦在那一瞬间，没能振作精神……", 37, 3004431, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#所以，如果不是她在那瞬间收起圣剑之光，结果可能会截然不同。", 37, 3004431, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face2#就算如此也太让人震惊了。没想到圣剑居然这么容易就被折断了。", 37, 1540451, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#而且，#r只有神之力才能与神对抗#k。", 37, 3004431, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#因为是持有封印石的对抗者，所以才有能力做到这一点。", 37, 3004431, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#对方盯上的也正是这一点。", 37, 3004431, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face2#难道是互相都消灭了对自己构成威胁的对手吗……", 37, 1540451, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#守护者……怎么样了？", 37, 3003750, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#她……", 37, 3004431, false, true);
                                          } else if (status === V++) {
                                            cm.dispose();
                                            cm.warp(993151030, 0, true);
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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
      cm.setStandAloneMode(true);
      cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
      cm.curNodeEventEnd(true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(3003750, 'oid=502137', 1487, 339, 135, 1437, 1537, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=502137", "summon", 0, 0);
      cm.npc_ChangeController(3004092, "oid=502138", 1628, 312, 136, 1578, 1678, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=502138", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=502138", "sit", -1, 1);
      cm.npc_ChangeController(3004431, "oid=502139", 1698, 329, 136, 1648, 1748, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=502139", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=502139", "sit", -1, 1);
      cm.npc_ChangeController(3004089, 'oid=502140', 1771, 327, 136, 1721, 1821, 1, false, 0, false);
      cm.npc_SetSpecialAction('oid=502140', "summon", 0, 0);
      cm.npc_ChangeController(3004067, 'oid=502141', 1420, 327, 135, 1370, 1470, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=502141", "summon", 0, 0);
      cm.npc_SetSpecialAction('oid=502141', "sit", -1, 1);
      cm.npc_ChangeController(3004114, "oid=502142", 1333, 330, 134, 1283, 1383, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=502142", "summon", 0, 0);
      cm.npc_ChangeController(3004116, "oid=502143", 1258, 329, 133, 1208, 1308, 0, true, 0, false);
      cm.npc_SetSpecialAction('oid=502143', 'summon', 0, 0);
      cm.npc_ChangeController(3004081, "oid=3004081", 1385, 358, -1, 1208, 1408, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3004081", "summon", 0, 0);
      cm.npcMove(3003750, 0, -20, 0);
      cm.npcMove(3004092, 0, -50, 0);
      cm.npcMove(3004067, 0, -35, 0);
      cm.npcMove(3004431, 0, -30, 0);
      cm.npcMove(3004089, 0, -30, 0);
      cm.npcMove(3004116, 0, -30, 0);
      cm.npcMove(3004114, 0, -30, 0);
      cm.npcMove(3004081, 0, -15, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 1550, 330);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1500);
      } else {
        if (status === V++) {
          cm.fieldEffect_Hero9(0, 1500);
          cm.sendNormalTalk_Bottom("#face0#她的消息我只知道这么多了。之后我们就像是被人赶着似的，急忙逃回来了。", 37, 3004431, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#虽然王子殿下努力为我们辩白，\r\n但是对于导致圣剑折断的我们，众人的态度唯有敌视。", 37, 3004431, true, true);
          } else {
            if (status === V++) {
              cm.fieldEffect_Hero9(100, 100);
              cm.inGameDirectionEvent_AskAnswerTime(1500);
            } else {
              if (status === V++) {
                cm.fieldEffect_PlayBGM("Bgm53/RedMoon", 0, 0);
                cm.sendNormalTalk_Bottom("#face2#结果……千辛万苦确认的古代神的力量没了，也没有成功和塞尔提乌结盟……\r\n甚至连对抗者#h0#大人的力量也失去了。", 37, 1540451, false, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face2#字面意义上的惨败啊。", 37, 1540451, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#是啊，非常完美地被摆了一道。", 37, 3004431, true, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face2#艾伦，不……#r吉伦·达勒莫尔……", 37, 3004431, false, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#但我实在想不通。\r\n已经做到那一步了，为什么还会放过#h0#大人和联盟成员呢？", 37, 3003672, false, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#还有那座被烧毁的图书馆……\r\n为什么非要耗费时间精力恢复它呢？", 37, 3003672, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#这不是等同于留下有关古代神的信息吗？", 37, 3003672, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("他是认为再也没有人能与之匹敌了吗？", 37, 1540453, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face2#那就不知道了。我们这些凡人哪有资格揣测伟大的神明呢？", 37, 3004431, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#但是……他的行为似乎并非源于傲慢。", 37, 3004431, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#我也不知道为什么……初次见面时他说的话，一直在我脑海中挥之不去。", 37, 3004431, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#说不定……那只是用来逃避现实的谎言吧…… ", 37, 3004431, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_ProcessOnOffLayer('03', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#虽然身为高等翼人……", 37, 3004434, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#但若论及对这种族的憎恶，我绝不亚于你。", 37, 3004434, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                              } else if (status === V++) {
                                                                cm.eventSKill(0);
                                                                cm.setStringForQuestInfo(39900, '16', 'h1');
                                                                cm.warp(410000800, 1, true);
                                                                cm.setInGameDirectionMode(false, true, false);
                                                                cm.setStandAloneMode(false);
                                                                cm.forceStartQuest(39921);
                                                                cm.npc_LeaveField("oid=63741993");
                                                                cm.npc_LeaveField("oid=63741993");
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