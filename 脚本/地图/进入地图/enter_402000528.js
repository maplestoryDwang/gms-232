var status = -1;
var selectionLog = [];
function start() {
  status = -1;
  action(1, 0, 0);
}
;
function action(f, E, e) {
  if (!cm.isQuestFinished(34806)) {
    action34806(f, E, e);
  } else {
    cm.dispose();
  }
}
function action34806(f, E, e) {
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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 250, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(3001309, "oid=914603", -20, 63, 6, -70, 30, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=914603", "summon", 0, 0);
      cm.npc_ChangeController(3001300, "oid=914604", 1506, 22, 4, 1456, 1556, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=914604", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.npc_SetForceMove('oid=914604', -1, 1000, 150);
        cm.inGameDirectionEvent_同时移动镜头和人(1, 1000);
        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -100, 63);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#你竟然把违反平民翼人律法,擅自逃离阿叙隆的孩子送进了最高学府水晶学院。", 37, 3001309, false, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face8#……", 37, 3001351, true, true, 1);
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
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#凡事都有个度。这次的事绝不能就这么算了。", 37, 3001309, false, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face4#况且,说不定是高等翼人派来的间谍呢？如果古代水晶的位置暴露了怎么办……", 37, 3001309, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face4#这可不行。看来必须加强安保才行。如果你愿意告知古代水晶的位置,我们守护者会再派遣一些援兵……", 37, 3001309, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#不。古代水晶放在我这保管,放心好了。", 37, 3001301, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face2#啊,你来了,伊利温", 37, 3001301, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 2000, 1000, 336, 63);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face4#啊……？嗯……", 37, 3001351, false, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_setForceFlip('oid=914603', 1);
                                      cm.inGameDirectionEvent_AskAnswerTime(30);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face1#！！！", 37, 3001309, false, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_同时移动镜头和人(1, 300);
                                          cm.npc_SetForceMove("oid=914604", -1, 250, 150);
                                          cm.inGameDirectionEvent_PushScaleInfo(1500, 0, 2000, 1500, -100, 63);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face1#戴尔斯,今天就先聊到这吧。请慢走。", 37, 3001301, false, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_setForceFlip('oid=914603', -1);
                                                cm.inGameDirectionEvent_AskAnswerTime(30);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face4#那……阿加特大人。今天也要保重。", 37, 3001309, false, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_setForceFlip("oid=914603", 1);
                                                    cm.inGameDirectionEvent_AskAnswerTime(30);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_SetForceMove("oid=914603", 1, 850, 150);
                                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_LeaveField("oid=914603");
                                                        cm.sendNormalTalk_Bottom("#face0#伊利温。听到戴尔斯的话了吗？", 37, 3001301, false, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face8#嗯……", 37, 3001351, true, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#我在今天的课堂上也感受到了同年级学生不友善的目光和多少有些排斥的举动。", 37, 3001300, true, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#主人身心遭受重创,目前自信心跌落谷底。", 37, 3001300, true, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face8#……", 37, 3001351, true, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face1#原来如此。突然有陌生人闯入自己的领域,换做是谁都会有些敏感。即便其他同学不太友善,希望你也别太介意。", 37, 3001301, true, true, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#伊利温,你很特别。", 37, 3001301, true, true, 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#(你说……我很特别……？)", 37, 3001351, true, true, 1);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face1#你拥有与生俱来的能力……相信自己的潜力,用心修炼吧。我一直相信你的实力,千万不要气馁。", 37, 3001301, true, true, 1);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#(阿加特大人……)", 37, 3001351, true, true, 1);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face2#好,那现在一起前往进行#b特殊课程#k的体力锻炼室吧？", 37, 3001301, true, true, 1);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#嗯……！", 37, 3001351, true, true, 1);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.updateInfoQuest(34806, "scene=1;item1=1");
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
                                                                                        cm.npc_LeaveField("oid=914604");
                                                                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                      } else if (status === V++) {
                                                                                        cm.dispose();
                                                                                        cm.warp(402000533, 0, true);
                                                                                        cm.setStandAloneMode(false);
                                                                                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                                        cm.setPartner(true, 3001300, 80002330, 0);
                                                                                        cm.updateInfoQuest(34806, "scene=1;item1=1;item2=1");
                                                                                        cm.forceCompleteQuest(34806);
                                                                                        cm.updateInfoQuest(34806, "scene=1;item1=1;item2=1;exp=1");
                                                                                        cm.gainExp(1539);
                                                                                        cm.curNodeEventEnd(true);
                                                                                        cm.setInGameDirectionMode(true, false, false);
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}