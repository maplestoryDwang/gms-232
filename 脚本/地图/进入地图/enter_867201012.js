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
      cm.npc_ChangeController(9400583, 'oid=202237', -14, -1, 6, -64, 36, 1, true, false);
      cm.npc_ChangeController(9400584, "oid=202238", 35, 6, 6, -15, 85, 1, true, false);
      cm.npc_ChangeController(9400617, "oid=202239", -513, -48, 3, -563, -463, 1, true, false);
      cm.npc_ChangeController(9400618, "oid=202240", -375, -46, 4, -425, -325, 0, true, false);
      cm.npc_ChangeController(9400596, "oid=202241", -448, -48, 3, -498, -398, 1, true, false);
      cm.npc_ChangeController(9400585, "oid=202242", -647, -49, 2, -697, -597, 1, true, false);
      cm.npc_ChangeController(9400585, "oid=202243", -701, -52, 2, -751, -651, 1, true, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.sendNewEffects(17, [0, 1000, 2000, 1400, 120]);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(9400598, "oid=3712971", 1790, 60, 12, 1740, 1840, 1, true, false);
        cm.npc_SetSpecialAction("oid=3712971", "summon", 0, 0);
        cm.npc_ChangeController(9400587, "oid=3712972", 1140, 60, 12, 1090, 1190, 1, true, false);
        cm.npc_SetSpecialAction("oid=3712972", "summon", 0, 0);
        cm.npc_ChangeController(9400596, "oid=3712973", 1070, 60, 12, 1020, 1120, 0, true, false);
        cm.npc_SetSpecialAction("oid=3712973", "summon", 0, 0);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_ForcedFlip(1);
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_同时移动镜头和人(2, 250);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.sendNewEffects(17, [2000, 2000, 2000, 1600, 120]);
              } else {
                if (status === V++) {
                  cm.forceStartQuest(64061, '');
                  cm.sendNormalTalk_Bottom('#b有什么事吗？', 57, 0, false, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(250);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=3712971"], [0, 0, 0, 1, 0, 1, 0, 0]);
                      cm.npc_SetForceMove("oid=3712971", -1, 120, 80);
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("啊，没没没！你好！我是斯巴乐缇村的托尔逊！古纳德村长的远房侄子！", 37, 9400598, false, true);
                      } else {
                        if (status === V++) {
                          cm.npc_setForceFlip("oid=3712972", 1);
                          cm.inGameDirectionEvent_AskAnswerTime(250);
                        } else {
                          if (status === V++) {
                            cm.npc_SetForceMove("oid=3712972", 1, 320, 150);
                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#难道你在监视我们？", 37, 9400587, false, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("不，不不不！", 37, 9400598, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#哈！难道这里有什么可以偷的东西？", 37, 9400587, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("不，真的不是！我只是……！", 37, 9400598, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#只是……", 37, 9400587, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("我是因为觉得外乡人很神奇……", 37, 9400598, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#你把我们当成小丑了吗？", 37, 9400587, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_ForcedFlip(-1);
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#b可汗村长，他应该不是这个意思，请冷静一下。", 57, 0, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#……从他们平常看我们的眼神和之前对我们的态度来看，当然有可能就是把我们当小丑看的。", 37, 9400587, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("不不不！真的没有！我只是，出生以后还是第一回一次见到这么多人……", 37, 9400598, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("真的！村长应该都不知道我来这里了！", 37, 9400598, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_ForcedFlip(1);
                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#b嗯……现在大家都很敏感。虽然不知道你看到了没有，但是刚才你们村长说的话可以算是在侮辱卡夫塔佩的居民了……", 57, 0, false, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom('哎……', 37, 9400598, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("那个……哎……", 37, 9400598, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("……我们的情况其实真的也不好……", 37, 9400598, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("请看看这里，如此空空荡荡的！我们真的已经快要饿死了……", 37, 9400598, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("因为突然出现了大量怪物，在放牧的时候所有的家畜都……江水突然冻住了，所以连鱼也抓不了。", 37, 9400598, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("好不容易凿开冰，天啊！一条鱼也见不到，真不知道都跑到哪儿去了 ", 37, 9400598, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#b原来如此……虽然我们也知道斯巴乐缇的情况也不容乐观……", 57, 0, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#如果你说的是真的，那就不该把我们当做无知的猎人，而应该好好招待下我们啊？！", 37, 9400587, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("嗯……哎……但是，平常卡夫塔佩会偷我们的家畜……", 37, 9400598, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#没有！我要说几遍不是我们啊？！", 37, 9400587, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("啊，哎呀！吓死我了！不是就不是呗，为什么要这么大声啊！", 37, 9400598, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#这里本来就需要别人的帮助，居然还怀疑我们……", 37, 9400587, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.forceCompleteQuest(64061);
                                                                                      cm.updateInfoQuest(64061, "dirchk=1");
                                                                                      cm.npc_setForceFlip("oid=3712972", -1);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.npc_SetForceMove("oid=3712972", -1, 300, 150);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                        } else if (status === V++) {
                                                                                          cm.warp(867201100, 3, true);
                                                                                          cm.setInGameDirectionMode(false, true, false);
                                                                                          cm.npc_LeaveField("oid=3712971");
                                                                                          cm.npc_LeaveField("oid=3712971");
                                                                                          cm.npc_LeaveField("oid=3712972");
                                                                                          cm.npc_LeaveField("oid=3712972");
                                                                                          cm.npc_LeaveField("oid=3712973");
                                                                                          cm.npc_LeaveField("oid=3712973");
                                                                                          cm.dispose();
                                                                                          cm.updateInfoQuest(64061, 'dirchk=2');
                                                                                          cm.onTeleport(0, 3, cm.getPlayer().getId(), 1508, -5);
                                                                                          cm.npc_SetForceMove("oid=3715001", -1, 1000, 100);
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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