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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 507, 230);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(2074106, "oid=2588776", 550, 178, 8, 500, 600, 1, true, 500, false);
        cm.npc_SetSpecialAction("oid=2588776", "summon", 0, 0);
        cm.npc_ChangeController(2074109, "oid=2588777", 350, 178, 11, 300, 400, 0, false, 500, false);
        cm.npc_SetSpecialAction("oid=2588777", "summon", 0, 0);
        cm.npc_ChangeController(2074100, "oid=2588778", 408, 183, 10, 358, 458, 1, true, 500, false);
        cm.npc_SetSpecialAction("oid=2588778", "summon", 0, 0);
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.npc_SetSpecialAction("oid=2588776", "dies", -1, 1);
        cm.sendNormalTalk_Bottom("#face2#额，额，这是什么味道啊？", 37, 2074100, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face2#哎哟哟哟哟，乐夫大叔的裤子……\r\n天啊！这难道是尿吗……？", 37, 2074100, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face3#是我太过分了吗……", 37, 2074100, true, true);
          } else {
            if (status === V++) {
              cm.npc_SetSpecialAction("oid=2588776", 'calm', -1, 1);
              cm.npc_setForceFlip("oid=2588778", 1);
              cm.inGameDirectionEvent_ForcedFlip(1);
              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2588778"], [0, 0, 0, 1, 0, 1, 0, 0]);
              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
              cm.inGameDirectionEvent_AskAnswerTime(1200);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("……给我让开。", 37, 2074135, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face2#什么？那，那个你先冷静一下。\r\n就算再怎么样，对晕倒的人……", 37, 2074100, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("我不是要做那些……你给我让开。", 37, 2074135, true, true);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_ProcessOnOffLayer('back', "Map/Effect2.img/downtown2015/illust/3", 0, 500, 0, 0, 7, 4, 1);
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("当年我的外号可是尿床鬼……", 37, 2074135, false, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_ProcessOnOffLayer("back2", "Map/Effect2.img/downtown2015/illust/4", 0, 500, 0, 0, 8, 4, 1);
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("男子汉大丈夫还到处尿尿啊，\r\n还不是因为那些家伙欺负你嘛。", 45, 2074137, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("……嘿嘿，嘿。", 37, 2074138, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("你怎么能一天到晚就只知道笑呢？\r\n就知道做个没用的老实人……", 45, 2074137, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("……哥，沉吧？\r\n我下来走吧？", 37, 2074138, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("那什么，算了，小子。\r\n你只管抓紧了，会摔倒的。", 45, 2074137, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_ProcessOnOffLayer('back2', '', 2, 2000, 0, 0, 0, 0, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(2500);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("……从前我们……也没有这样过。", 37, 2074135, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("大哥……也就是看在有旧情的份上才忍着的。", 37, 2074135, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_ProcessOnOffLayer("back3", "Map/Effect2.img/downtown2015/illust/1", 0, 500, 0, 0, 9, 4, 1);
                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_ProcessOnOffLayer("back4", "Map/Effect2.img/downtown2015/illust/2", 0, 500, 0, 0, 10, 4, 1);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face2#哦？怎么回事，兴夫的身上有光！", 37, 2074100, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face2#是宝玉！宝玉掉下来了。\r\n难道兴夫看不到吗？", 37, 2074100, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#g(获得了愤怒宝玉！)#k", 57, 0, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_ProcessOnOffLayer("back3", '', 2, 500, 0, 0, 0, 0, 0);
                                                            cm.fieldEffect_ProcessOnOffLayer("back4", '', 2, 500, 0, 0, 0, 0, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("虽然不知道到底是谁，不过谢谢了。\r\n我原本并不是这种人……是我失礼了。", 37, 2074135, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("特别是，小姑娘，谢谢你能理解我的心情。", 37, 2074135, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face1#嘿嘿，往后兄弟俩之间就不要打架了。", 37, 2074100, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#善事会留为佳话，\r\n恶事可终究会有报应的。", 37, 2074100, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face1#大叔的故事对大家伙而言会成为希望的。", 37, 2074100, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("我这样的人哪儿来的什么故事啊，故事……", 37, 2074135, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("总之，是我多有失礼了，我先走了。\r\n", 37, 2074135, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.npc_setForceFlip("oid=2588778", 1);
                                                                            cm.npc_LeaveField("oid=2588776");
                                                                            cm.npc_LeaveField("oid=2588777");
                                                                            cm.fieldEffect_ProcessOnOffLayer("back", '', 2, 500, 0, 0, 0, 0, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
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
                                                                                  cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 300, 0);
                                                                                  cm.fieldEffect_ProcessOnOffLayer("back3", "Map/Effect2.img/downtown2015/illust/1", 0, 300, 0, 0, 9, 4, 1);
                                                                                  cm.fieldEffect_ProcessOnOffLayer("back4", "Map/Effect2.img/downtown2015/illust/2", 0, 300, 0, 0, 10, 4, 1);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#这就是愤怒宝玉……", 37, 2074100, false, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face2#哦，只是碰了碰，就感觉心情怪怪的呢？\r\n光是摸了下都觉得生气……", 37, 2074100, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#这可不行，得用剩下的药草包好……像这样！OK！\r\n那现在就回到#g朴大爷#k那里吧？", 37, 2074100, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.fieldEffect_ProcessOnOffLayer("back3", '', 2, 500, 0, 0, 0, 0, 0);
                                                                                          cm.fieldEffect_ProcessOnOffLayer("back4", '', 2, 500, 0, 0, 0, 0, 0);
                                                                                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.updateInfoQuest(30900, "05=1;06=1");
                                                                                            cm.updateInfoQuest(30406, "gExpCheck=1");
                                                                                            cm.forceStartQuest(30406, '');
                                                                                            cm.gainExp(142059);
                                                                                            cm.forceCompleteQuest(30406);
                                                                                            cm.forceStartQuest(30913, '2');
                                                                                            cm.forceStartQuest(30914, '2');
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                            cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                                                                          } else if (status === V++) {
                                                                                            cm.dispose();
                                                                                            cm.warp(224000000, 21, true);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;