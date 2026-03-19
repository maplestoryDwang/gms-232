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
      cm.npc_ChangeController(1540502, "oid=22219225", 1900, 49, 31, 1850, 1950, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=22219225", 'summon', 0, 0);
      cm.npc_ChangeController(1540503, "oid=22219226", 2000, 49, 33, 1950, 2050, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=22219226", "summon", 0, 0);
      cm.npc_ChangeController(1540650, "oid=22219227", 600, 49, 11, 550, 650, 0, true, 500, false);
      cm.npc_SetSpecialAction("oid=22219227", "summon", 0, 0);
      cm.npc_ChangeController(1540651, "oid=22219228", 430, 49, 12, 380, 480, 0, true, 500, false);
      cm.npc_SetSpecialAction("oid=22219228", "summon", 0, 0);
      cm.fieldEffect_PlayBGM("Bgm40.img/SecretMissionBase", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_MoveAction(1);
      cm.inGameDirectionEvent_AskAnswerTime(10);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_MoveAction(0);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.askMenu_Bottom("我有一个方法。\r\n为了骗过系统，#b“必须要用头”。#k\r\n#b#L0#那是什么意思啊？#l", 37, 1540651);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("什么什么啊？当然是我们来制作一个机器人的头部！\r\n就像#b头盔#k！然后你把它戴上。", 37, 1540650, false, true);
          } else {
            if (status === V++) {
              cm.askMenu_Bottom("这样你就能顺利通过传送装置了。\r\n你只要准备好材料就行了。\r\n#b#L0#你们要帮助我吗？#l", 37, 1540650);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("那样是行不通的。\r\n这只是一场轻率的赌博而已。", 37, 1540652, false, true);
                } else {
                  if (status === V++) {
                    cm.npc_setForceFlip("oid=22219228", -1);
                    cm.npc_setForceFlip("oid=22219227", -1);
                    cm.askMenu_Bottom("天啊，我的女儿——不高兴来啦！\r\n\r\n\r\n#b#L0#……不高兴？？#l", 37, 1540651);
                  } else {
                    if (status === V++) {
                      cm.playSoundEffDirectly("Ambience.img/secretmissionbase");
                      cm.fieldEffect_PlayBGM("Bgm40.img/JunkYard", 0, 0);
                      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 500, -8, -101);
                    } else {
                      if (status === V++) {
                        cm.npc_ChangeController(1540652, "oid=22219605", -265, 49, 15, -315, -215, 0, true, 500, false);
                        cm.npc_SetSpecialAction("oid=22219605", 'summon', 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.npc_SetForceMove("oid=22219605", 1, 710, 200);
                          cm.inGameDirectionEvent_AskAnswerTime(300);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 200, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(200);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 600, 109);
                              } else {
                                if (status === V++) {
                                  cm.npc_setForceFlip("oid=22219228", 1);
                                  cm.npc_setForceFlip("oid=22219227", 1);
                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 200, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(3500);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("我来介绍一下，这是我们的女儿，它叫做不高兴！\r\n它原本一直在等待报废处理，后来被我们带出来了。", 37, 1540650, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("这孩子我真是含在嘴里怕化，捧在手里怕碎，放进眼睛里都不觉得疼。\r\n虽然我已经掉了一个眼睛！哈哈哈！", 37, 1540650, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("即使成功，肯定也会立刻在黑色天堂被抓。\r\n无论如何，结果只有失败。", 37, 1540652, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(200);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_setForceFlip("oid=22219227", -1);
                                              cm.npc_setForceFlip("oid=22219228", 1);
                                              cm.fieldEffect_PlayFieldSound("Sound/Game.img/Jump", 100);
                                              cm.npcMove(1540650, 0, -10, 100);
                                              cm.npcMove(1540651, 0, -10, 100);
                                              cm.inGameDirectionEvent_AskAnswerTime(120);
                                            } else {
                                              if (status === V++) {
                                                cm.npcMove(1540650, 0, 10, 100);
                                                cm.npcMove(1540651, 0, 10, 100);
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_PlayFieldSound("Sound/Field.img/Cokeplay/Fall", 100);
                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/love", "oid=22219228"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/love", "oid=22219227"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("老公，我们的不高兴又开始了。\r\n它这是像谁啊，居然这么可爱！", 37, 1540651, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("哎呦，我不高兴的小宝贝！哈哈哈！", 37, 1540650, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_PlayFieldSound("Sound/FarmSE.img/btAllow", 100);
                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/love", "oid=22219228"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/love", "oid=22219227"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=22219605"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                        cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                        cm.effect_OnUserEff("Effect/OnUserEff.img/emotion/ddam");
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom('………………', 37, 1540652, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_setForceFlip("oid=22219227", 1);
                                                            cm.sendNormalTalk_Bottom("总之，为了制作你需要的头盔，我需要一些材料。\r\n正好我妻子杉顺的手艺非常好。", 37, 1540650, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("吼吼吼！我现在的手艺也不亚于我四只手时。", 37, 1540651, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_PushScaleInfo(2000, 2000, 2000, 700, 109);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_ChangeController(1540504, "oid=22220364", 1000, 49, 19, 950, 1050, 0, true, 1000, false);
                                                                  cm.npc_SetSpecialAction("oid=22220364", "summon", 0, 0);
                                                                  cm.npc_SetForceMove("oid=22220364", -1, 100, 200);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("队长，这附近好像出现了追踪部队！", 37, 1540504, false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("该死，巡查部队好像找到了这里。\r\n这个问题你能解决吗？我刚刚看你好像挺会战斗的。", 37, 1540650, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("所需配件中的#b“电脑芯片”#k我们就有。\r\n小软柿，你只要准备好其他配件就行了。", 37, 1540651, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("首先，请去搜集#b铁板和螺丝钉#k。\r\n我会先用它们做出头盔的大概框架。", 37, 1540650, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                          } else if (status === V++) {
                                                                            cm.forceCompleteQuest(33210);
                                                                            cm.forceStartQuest(33202, '');
                                                                            cm.dispose();
                                                                            cm.warp(350040100, 0, true);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;