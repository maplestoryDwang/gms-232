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
      cm.getMap().resetReactors();
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9400590, "oid=7537524", 50, 230, 3, 0, 100, 0, true, false);
      cm.npc_SetSpecialAction("oid=7537524", 'summon', 0, 0);
      cm.npc_ChangeController(9400597, "oid=7537525", 130, 230, 4, 80, 180, 0, true, false);
      cm.npc_SetSpecialAction("oid=7537525", 'summon', 0, 0);
      cm.getMap().spawnReactorIfNotExist(8659143, 0, 350, 255, 0, 'box01');
      cm.inGameDirectionEvent_MoveAction(4);
      cm.emotion(38, 5000);
      cm.npc_SetSpecialAction("oid=7537525", 'die', 0, 0);
      cm.npc_SetSpecialAction("oid=7537524", 'die', 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1500);
        cm.effect_NormalSpeechBalloon('咳呃呃啊啊！', 1, 0, 0, 3000, 9400597, cm.getPlayer().getId());
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(0);
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(2000);
            cm.effect_NormalSpeechBalloon("呜喔哦！什么呀，这是？！", 1, 0, 0, 3000, 9400590, cm.getPlayer().getId());
          } else {
            if (status === V++) {
              cm.npc_SetForceMove("oid=7537525", 1, 80, 50);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.npc_SetForceMove("oid=7537524", 1, 30, 40);
                cm.inGameDirectionEvent_AskAnswerTime(2000);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                  cm.effect_NormalSpeechBalloon('这是什么？', 1, 0, 0, 3000, 9400597, cm.getPlayer().getId());
                } else {
                  if (status === V++) {
                    cm.npc_setForceFlip("oid=7537525", -1);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.npc_setForceFlip("oid=7537525", 1);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.npc_setForceFlip("oid=7537525", -1);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                          cm.effect_NormalSpeechBalloon("金银财宝？！", 1, 0, 0, 3000, 9400590, cm.getPlayer().getId());
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#咳哈哈！原来这种地方有独眼触须怪的藏宝库啊！", 37, 9400590, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#难怪我们一直都没找到… 这些个小偷！", 37, 9400590, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNewEffects(17, [2000, 1000, 2000, 180, 240]);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.npc_setForceFlip("oid=7537525", -1);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_SetForceMove("oid=7537525", -1, 20, 50);
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#金表~~~ 金项链~~~ ", 37, 9400597, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#金耳环！银戒指！箭矢？这个扔掉", 37, 9400590, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=7537525"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                              cm.sendNormalTalk_Bottom("#face0#家畜名单~~~哦…？啊？！家畜名单？！", 37, 9400597, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl", "oid=7537524"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                  cm.sendNormalTalk_Bottom('#face0#什么？', 37, 9400590, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#咳呃？为什么这个会在这里？", 37, 9400597, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#还用问吗？！肯定是被怪物吃了之后被丢在森林里的！", 37, 9400590, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#哎呦喂，当时自己的家畜没有了就责怪我们卡夫塔佩，还把我们当成小偷。", 37, 9400590, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#老天呐，这可比窦娥还冤呐？啊？！", 37, 9400590, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#…不… 这个为什么… ", 37, 9400597, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#还不快点道歉！", 37, 9400590, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#… ", 37, 9400597, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.playerMessage(-1, "查看独眼触须怪的宝物箱。");
                                                                  cm.updateInfoQuest(64122, "dir01=1");
                                                                  cm.sendNewEffects(14, [0, 2000, 1000, 0, 0]);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNewEffects(19, [0]);
                                                                  } else if (status === V++) {
                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                    cm.dispose();
                                                                    cm.addNumberForQuestInfo(64272, '2', 1);
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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