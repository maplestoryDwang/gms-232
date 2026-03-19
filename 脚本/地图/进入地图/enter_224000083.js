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
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(2074157, "oid=1943479", 352, 379, 60, 302, 402, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=1943479", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 4000, 0);
        cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 51, 461);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_同时移动镜头和人(2, 150);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 1500, 315, 461);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("该死……", 57, 0, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face3#鬼怪啊！鬼怪啊！……呜呜，呜呜。", 37, 2074100, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face2#……", 37, 2074154, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face4#这次你要抛下我一个人吗！啊！你这个傻瓜！", 37, 2074100, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face2#额……", 37, 2074154, true, true);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 300, 0);
                          cm.fieldEffect_ProcessOnOffLayer("back", "Map/Effect2.img/downtown2015/illust/20", 0, 500, 0, 0, 9, 4, 1);
                          cm.fieldEffect_ProcessOnOffLayer("eye1", "Map/Effect2.img/downtown2015/illust/22", 0, 500, 0, 0, 11, 4, 1);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face2#……你……\r\n没事吗？火……？", 37, 2074154, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face3#呜呜，呜呜……\r\n都灭了，宝玉也……在这里，找到了。", 37, 2074100, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face2#挺好的。", 37, 2074154, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face4#现在是担心这些的时候吗，你这个傻瓜！\r\n你为什么要这么做！我，这明明是我犯下的事……为什么！", 37, 2074100, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face2#……因为是你。", 37, 2074154, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face3#呜呜，呜呜……什么？", 37, 2074100, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face2#因为是你才开始的，\r\n因为是你……才结束的……", 37, 2074154, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face4#呜呜，呜呜……什么啊，你这个傻瓜，\r\n我知道了，你起来，求你了……", 37, 2074100, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face2#……是我想错了，\r\n我以为你变成了人类……\r\n会变得很漂亮……", 37, 2074154, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face4#呜呜，你这个傻瓜！", 37, 2074100, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face2#你比我想的，要漂亮得多，变成人类的你。", 37, 2074154, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face3#呜呜……你在说什么啦，真是个傻子！\r\n别闹了，赶紧起来！", 37, 2074100, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face2#哈，\r\n喂，那边那个，你。", 37, 2074154, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("……。？", 57, 0, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                        cm.sendNormalTalk_Bottom("#face2#拜托你了……我的麻烦精。", 37, 2074154, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face4#呜呜，傻瓜，你为什么要说这些！", 37, 2074100, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face2#还有宝玉的事情……对不起了。", 37, 2074154, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face3#别闹了，呜呜。\r\n你赶紧起来啦，傻子。", 37, 2074100, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face2#哈……突然有点犯困了呢。", 37, 2074154, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face4#喂，喂！喂，不可以，你振作点，喂！", 37, 2074100, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face2#我……睡了……再见……小白……我对你很……", 37, 2074154, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_ProcessOnOffLayer("eye1", '', 2, 500, 0, 0, 0, 0, 0);
                                                                      cm.fieldEffect_ProcessOnOffLayer("eye2", "Map/Effect2.img/downtown2015/illust/21", 0, 500, 0, 0, 10, 4, 1);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face3#……啊，\r\n啊。", 37, 2074100, false, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.fieldEffect_ProcessOnOffLayer("eye2", '', 2, 500, 0, 0, 0, 0, 0);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.npc_ChangeController(2074105, "oid=1943536", 127, 389, 47, 77, 177, 0, false, 0, false);
                                                                            cm.npc_SetSpecialAction("oid=1943536", "summon", 0, 0);
                                                                            cm.npc_ChangeController(2074136, "oid=1943537", 73, 439, 46, 23, 123, 0, false, 0, false);
                                                                            cm.npc_SetSpecialAction("oid=1943537", 'summon', 0, 0);
                                                                            cm.npc_ChangeController(2074158, "oid=1943538", 34, 439, 46, -16, 84, 0, false, 0, false);
                                                                            cm.npc_SetSpecialAction("oid=1943538", "summon", 0, 0);
                                                                            cm.npc_ChangeController(2074150, "oid=1943539", 109, 415, 47, 59, 159, 0, false, 0, false);
                                                                            cm.npc_SetSpecialAction("oid=1943539", 'summon', 0, 0);
                                                                            cm.sendNormalTalk_Bottom("#face3#啊啊，不要。", 37, 2074100, false, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face4#喂，你别闹了，\r\n喂！喂！混蛋！你起来！你起来！喂！", 37, 2074100, false, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.fieldEffect_ProcessOnOffLayer("back", '', 2, 1500, 0, 0, 0, 0, 0);
                                                                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("…………", 57, 0, false, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("…………", 37, 2074105, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom('……呜呜。', 37, 2074150, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom('……嗯，嗯。', 37, 2074158, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face4#不可以！鬼怪啊！\r\n啊啊！啊，啊啊啊啊啊啊啊！", 37, 2074100, false, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 3000, 0);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.forceStartQuest(30929, '1');
                                                                                                    cm.updateInfoQuest(30455, "gExpCheck=1");
                                                                                                    cm.forceStartQuest(30455, '');
                                                                                                    cm.gainExp(397767);
                                                                                                    cm.forceCompleteQuest(30455);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
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
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;