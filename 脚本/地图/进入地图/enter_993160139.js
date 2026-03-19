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
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.npc_ChangeController(3001654, "oid=7905603", 232, -7, 2, 182, 282, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=7905603", 'summon', 0, 0);
      cm.setNPC_Fadein(3001654, 1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -32, -140);
      cm.curNodeEventEnd(true);
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
            cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1500, 2000, 161, -8);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(3000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face7#师父为什么会在这里……", 36, 3001674 + cm.getPlayer().getGender(), false, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（师父在离开之前，为了植入了用道力做成的思念体，\r\n为了以防我陷入危机。）", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#师父，这段时间您都在哪儿？", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face1#这……我不能说。", 36, 3001654, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#为什么不来呢？", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face1#……对不起了。", 36, 3001654, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#切，师父老是这个样子。", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face1#虎影，你听好了，眼下尘世之中乌云密布，\r\n相信你也多多少少感觉到了。", 36, 3001654, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face1#现实总是比故事更残酷。", 36, 3001654, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#……", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face1#可即便如此，你依然选择了回到尘世之路，\r\n不过我愿意再给你一个机会。", 36, 3001654, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#机会？", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.askAcceptDecline_Bottom("#face1#来，决定吧，你打算离开这座道观，重新回到尘世吗？\r\n怎么选都要看你自己。", 36, 3001654, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face2#可我还是想去碰碰运气，虽然有时我会犯下一些莫名其妙的失误，\r\n事情不如意时我也会伤心难过……", 36, 3001674 + cm.getPlayer().getGender(), false, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#直到现在我才开始觉得自己是被这个世界需要的，\r\n这也让我倍感意义深重……", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#虽然也有过一些危险的时刻，不过现在总不能视若无睹了，\r\n实在没办法再回到从前的生活了……", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face1#我会祝愿你安然无事的，虎影……", 36, 3001654, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face1#那，啰嗦鬼我这就先过去看看了。", 36, 3001654, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face7#这，这么快！？别走啊，师父！", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face1#你以为思念体能撑那么久吗！？\r\n别固执了，就在这里道别吧，虎影。", 36, 3001654, true, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face12#切，我知道了，以后要是再碰到面，可千万别忘了礼物啊，\r\n一定要记得陪我念《太乙真人传》的精彩片段哦？", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face1#这家伙真是……", 36, 3001654, true, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face1#一定要帮忙一起念书，只不过，礼物嘛……就用这个代替吧。", 36, 3001654, true, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（师父从他穿的衣服里取出一卷卷轴\r\n递给了我，这难道是！？）", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face7#道术集？", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face1#下次相遇时，可要做个更出色的道士。", 36, 3001654, true, true, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face1#你像是和你身旁的那个家伙……变成好友了嘛……", 36, 3001654, true, true, 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face7#啊，这件事可就说来话长了……", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/wind", 100);
                                                                          cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                cm.npc_LeaveField("oid=7905603");
                                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 161, -8);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1500, 2000, 94, -143);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/D_appear", 100);
                                                                                      cm.npc_ChangeController(3001651, "oid=7908198", 66, -161, 12, 16, 116, 1, true, 0, false);
                                                                                      cm.npc_SetSpecialAction("oid=7908198", "summon", 0, 0);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom('#face0#哼……', 36, 3001651, false, true, 1);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face7#师父走掉了呢。", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#额……谁能想到你所谓的师父就是那个家伙。", 36, 3001651, true, true, 1);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face7#你认识师父？", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#是封印我的那个家伙。", 36, 3001651, true, true, 1);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face7#封印饕餮……如此说来师父就是那个太乙真人吗？\r\n我的偶像太乙真人！？", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face7#好像既有点开心，又有点幻灭的感觉，\r\n额……好吧，还是不知道为好啊。", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face0#早知道是徒弟，我就猛踩一顿了……", 36, 3001651, true, true, 1);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face12#哈，哈哈……真不够坦率，可爱的家伙。", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom('#face0#哎！', 36, 3001651, true, true, 1);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.npc_SetSpecialAction("oid=7908198", "special0", 2000, 1);
                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/D_skill", 100);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/hoyoung/do_hit"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                                                                                                              cm.inGameDirectionEvent_OneTimeAction(25, 999999);
                                                                                                              cm.emotion(1, 1000);
                                                                                                              cm.sendNormalTalk_Bottom("#face7#啊，干嘛又这样！？所以说谁要那么可爱啦？\r\n既然都找回原本的模样了！？", 36, 3001674 + cm.getPlayer().getGender(), false, true, 1);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face0#哼……这个样子也挺满意的。", 36, 3001651, true, true, 1);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.inGameDirectionEvent_OneTimeAction(2, 999999);
                                                                                                                  cm.sendNormalTalk_Bottom("#face0#嘿咻！", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face11#呼……虽然突然发生了这么多事情，但我们的旅途依然会继续下去，\r\n这不会有变，你说是不是，饕餮？", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("#face0#虽说我并无心助你一臂之力……不过与其遭遇他人，被再次封印，\r\n倒不如和你一起踏上旅途。", 36, 3001651, true, true, 1);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face11#别否认了，你也沉醉在我这个天才道士的魅力里了吧？\r\n操控四凶之力的道士，虎影！咩哈哈！", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face0#操控我饕餮的力量！？没门儿。\r\n哼！就算你整日埋首于修炼，也早了一百万年。", 36, 3001651, true, true, 1);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face5#哦，是嘛！？这话听起来倒是让人斗志昂扬啊！？", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("#face5#好吧，不妨就赌赌看要花多久吧，乘着筋斗云出发！", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.inGameDirectionEvent_PushScaleInfo(3500, 0, 1000, 3500, 171, -415);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
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
                                                                                                                                              cm.warp(cm.getNumberFromQuestInfo(39576, "rMap"), 0, false);
                                                                                                                                              cm.setStandAloneMode(false);
                                                                                                                                              cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                                              cm.setInGameDirectionMode(false, true, false);
                                                                                                                                              cm.forceStartQuest(39568, '');
                                                                                                                                              cm.npc_LeaveField("oid=7908198");
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