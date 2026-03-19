var status = -1;
var selectionLog = [];
function start() {
  status = -1;
  action(1, 0, 0);
}
;
function action(f, E, e) {
  if (cm.getInfoQuest(34801) == "019=1;hunt1=1;gate=1;020=1;021=1;exp=1") {
    action34801(f, E, e);
  } else if (cm.getInfoQuest(34806) == "scene=1;train=1;item1=1;item2=1;exp=1") {
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
      cm.sendNormalTalk_Bottom("#face1#今天也辛苦你了！那我先走了。", 37, 3001301, false, true, 1);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face0#嗯！明天见。", 37, 3001351, true, true, 1);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#主人,今天的日常全部结束了。", 37, 3001300, true, true, 1);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#现在做什么？不如去图书室写作业吧？", 37, 3001351, true, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face2#呃啊！谁来救救我啊！", 37, 3001307, true, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#有事吗？", 37, 3001351, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#声音的来源貌似是左上角的教室。确定要马上过去吗？", 37, 3001300, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#好,那快走吧。", 37, 3001351, true, true, 1);
                  } else if (status === V++) {
                    cm.updateInfoQuest(34806, "scene=1;d=1;train=1;item1=1;item2=1;exp=1");
                    cm.dispose();
                    cm.warp(402000532, 2, true);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function action34801(f, E, e) {
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
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(300);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 0, -1500);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(300);
        } else {
          if (status === V++) {
            cm.npc_ChangeController(3001301, "oid=912556", 93, 0, 6, 43, 143, 1, true, 0, false);
            cm.npc_SetSpecialAction("oid=912556", "summon", 0, 0);
            cm.npc_ChangeController(3001300, "oid=912557", -80, -92, 6, -130, -30, 1, true, 0, false);
            cm.npc_SetSpecialAction('oid=912557', 'summon', 0, 0);
            cm.inGameDirectionEvent_PushScaleInfo(8000, 0, 1000, 8000, 0, -70);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face2#哇……这就是水晶学院啊……好壮观……", 37, 3001351, false, true, 1);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(900);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#水晶学院是平民翼人的顶级魔法师培养学校,年轻学子们可以在这里学到包括水晶魔法在内的各种知识,提升自身教养……", 37, 3001300, false, true, 1);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(900);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face3#利奥…", 37, 3001351, false, true, 1);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(300);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face1#正如小朋友所说,水晶学院只接受#b生来就懂得操控水晶的学生#k。", 37, 3001301, false, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#伊利温,我知道你生来并不懂得使用水晶魔法。", 37, 3001301, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face8#嗯……", 37, 3001351, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#所以才会发生昨天的事。", 37, 3001301, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#……！？", 37, 3001351, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#我确实也无法肯定。如果我猜得没错……假如伊利温你能使用魔法……", 37, 3001301, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#擅自使用尚未成熟的魔法,对于自己和身边的人都很危险。所以我特意叫你到这来。", 37, 3001301, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face1#哎呀,马上就到上课时间了。我先带你了解一下课程表和水晶学院内部环境吧。", 37, 3001301, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#地图学习完毕。使用快捷键可以查看地图。", 37, 3001300, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face1#放心让小朋友带路吧。我会再联系你的,再见。", 37, 3001301, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.effect_OnUserEff("UI/tutorial.img/illium/worldMap");
                                                cm.npc_SetSpecialAction("oid=912556", "disappear", 0, 1);
                                                cm.inGameDirectionEvent_AskAnswerTime(750);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_LeaveField("oid=912556");
                                                  cm.sendNormalTalk_Bottom("#face8#不完整的魔法能力……？你说……我能使用魔法？", 37, 3001351, false, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#稍后#b第一堂课#k马上开始了。快点出发吧。", 37, 3001300, true, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face4#呃啊,第一节课就迟到！？我的天啊！快走吧！", 37, 3001351, true, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#浮在中央的水晶柱散发出强大的魔法气息。\r\n貌似可以#b通过跳跃移动#k。", 37, 3001300, true, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0##b跳跃后移动#k对吧？", 37, 3001351, true, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0##b跳跃#k后,使用#b水晶传送口#k技能,就能移动到更远的地方。", 37, 3001300, true, true, 1);
                                                          } else if (status === V++) {
                                                            cm.updateInfoQuest(34801, "019=1;guide=1;hunt1=1;gate=1;020=1;021=1;exp=1");
                                                            cm.npc_LeaveField("oid=912557");
                                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                            cm.setStandAloneMode(false);
                                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                            cm.setInGameDirectionMode(false, true, false);
                                                            cm.OnStartNavigation(402000526, 0, '', 0);
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