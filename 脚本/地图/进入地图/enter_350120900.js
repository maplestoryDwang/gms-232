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
      cm.npc_ChangeController(1540795, "oid=58183", -142, 268, 2, -192, -92, 1, false, 0, false);
      cm.updateInfoQuest(33915, "act1=350112400;act2=350120900");
      cm.updateInfoQuest(33970, "check2=1;check4=1;check=1");
      cm.forceStartQuest(33900, '4');
      cm.mapleHeroBecomeNpc(7, 0);
      cm.getPlayer().makeDragon(2217);
      cm.onActionBarResult(6, -1);
      cm.onActionBarResult(5, 30);
      cm.mapleHeroSetList([4]);
      cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) * 2);
      cm.forceCompleteQuest(33972);
      cm.gainExp(Math.pow(cm.getLevel(), 3) * 2);
      cm.updateInfoQuest(33962, "33971=1;33972=1");
      cm.npc_ChangeController(1540801, "oid=287953519", 250, 200, 4, 200, 300, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=287953519", 'summon', 0, 0);
      cm.npc_ChangeController(1540844, "oid=287953520", 500, 200, 13, 450, 550, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=287953520", 'summon', 0, 0);
      cm.npc_ChangeController(1540807, "oid=287953521", 100, 200, 1, 50, 150, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=287953521", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.onSetMapTagedObjectVisible(1, "HofM_DO", 512);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 450, 115);
      cm.curNodeEventEnd(true);
      cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
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
            cm.sendNormalTalk_Bottom("#face0#这怎么可能，居然能让我屈服……", 37, 1540844, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face3#我最后再问你一遍，你是否愿意开门？", 37, 1540801, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#……我做不到。", 37, 1540844, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face3#那我只能完全毁了你，解开门上的封印了。", 37, 1540801, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#……我接受。", 37, 1540844, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face3#等一下，你是这里的看守吧？并不是怪物？", 37, 1540805, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#没错，我是看守！不要将我和那些怪物作比较！", 37, 1540844, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("那我想要得到你的允许再进去，我该怎么办？", 37, 1540805, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face3#等一下，怎么会聊到这个问题的？我不需要什么允许。", 37, 1540801, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("双弩精灵可不是这里的王啊。", 37, 1540805, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom('#face2#什么！', 37, 1540801, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("事已至此，得到允许再进去不是更好吗？\r\n如果这是弗里德给我的考验，我很想通过。", 37, 1540805, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#等等！这位少年，莫非你是龙神弗里德的后人？", 37, 1540844, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("没错。", 37, 1540805, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#哈哈哈，怪不得觉得眼熟呢！时隔数百年，后代终于找上门来了！", 37, 1540844, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#好的，少年。那我问你一个问题。\r\n如果你能答对，我就破例让你通过这里。", 37, 1540844, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#该不会是早上四条腿中午两条腿……\r\n那种老套的问题吧。", 37, 1540807, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face2#咳咳！你怎么知道那个题目的？", 37, 1540844, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom('……', 37, 1540807, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face2#不是，虽然有些相似，但不一样！我要出的题目不同！", 37, 1540844, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#来，我出题了！#b早上长，中午短，晚上又变长的是什么？", 37, 1540844, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face5#这算什么问题，该不会是你临时想出来的吧？", 37, 1540801, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face2#……告诉我正确答案吧。", 37, 1540844, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.askText("#face0##b早上长，中午短，晚上又变长的是什么？", '', 1540844, 0, 1000);
                                                          } else {
                                                            if (status === V++) {
                                                              var O = cm.getText();
                                                              if (O === '影子') {
                                                                cm.sendNormalTalk_Bottom("#face0#哦，是正确答案。", 37, 1540844, false, true);
                                                              } else {
                                                                cm.sendNormalTalk_Bottom("#face0#哦，是吗？你确定吗？", 37, 1540844, false, true);
                                                                status -= 2;
                                                              }
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#不愧是弗里德的后代啊，真是个聪明的少年！", 37, 1540844, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#我就让你过吧。", 37, 1540844, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#谢谢！", 37, 1540805, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face1#你是获得正当的许可才进去的，\r\n这会对你决定性的瞬间起到帮助的。", 37, 1540844, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.onSetMapTagedObjectVisible(1, "HofM_DO", 0);
                                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act2/DoorLight", 100);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.onSetMapObjectMove('HofM_door', "open_ani", [2, 0]);
                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act2/DoorOpen", 100);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                          } else {
                                                                            if (status === V++) {
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
                                                                                  cm.npc_LeaveField("oid=287953519");
                                                                                  cm.npc_LeaveField("oid=287953519");
                                                                                  cm.npc_LeaveField("oid=287953521");
                                                                                  cm.npc_LeaveField("oid=287953521");
                                                                                  cm.mapleHeroSetList([0, 4]);
                                                                                  cm.setInGameDirectionMode(false, true, false);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;