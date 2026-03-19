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
        cm.npc_ChangeController(2074132, "oid=2588162", 650, 178, 7, 600, 700, 1, false, 500, false);
        cm.npc_SetSpecialAction("oid=2588162", "summon", 0, 0);
        cm.npc_ChangeController(2074107, "oid=2588163", 400, 178, 10, 350, 450, 0, true, 500, false);
        cm.npc_SetSpecialAction("oid=2588163", "summon", 0, 0);
        cm.fieldEffect_PlayFieldSound("Aran/down", 100);
        cm.sendNormalTalk_Bottom('额额额……', 37, 2074132, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("晕，晕倒了吗？", 37, 2074107, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("我会就此，我会就此啊啊啊……", 37, 2074132, true, true);
          } else {
            if (status === V++) {
              cm.npc_LeaveField("oid=2588162");
              cm.npc_ChangeController(2074106, "oid=2588169", 610, 178, 8, 560, 660, 1, true, 500, false);
              cm.npc_SetSpecialAction("oid=2588169", "summon", 0, 0);
              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
              cm.sendNormalTalk_Bottom("……我绝对不能倒下啊啊啊！！", 37, 2074106, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("该死！", 57, 0, true, true);
              } else {
                if (status === V++) {
                  cm.npc_SetSpecialAction("oid=2588169", "attack1", -1, 1);
                  cm.inGameDirectionEvent_AskAnswerTime(700);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(200);
                    cm.effect_Voice("Skill.img/0000100/Hit", 100);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(700);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_PlayFieldSound('Aran/down', 100);
                          cm.inGameDirectionEvent_ForcedFlip(1);
                          cm.inGameDirectionEvent_同时移动镜头和人(1, 70);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_MoveAction(4);
                            cm.emotion(7, 99999);
                            cm.setNpcSpecialActionReset("oid=2588169");
                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(1400);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("额额……", 57, 0, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("额额额额！头好痛！啊啊啊！\r\n大哥！觉悟吧！", 37, 2074106, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("咦咦咦咦！", 37, 2074107, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face2#等一下！", 37, 2074100, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_ChangeController(2074100, "oid=2588240", 550, 183, 8, 500, 600, 0, true, 500, false);
                                        cm.npc_SetSpecialAction("oid=2588240", "summon", 0, 0);
                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2588169"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2588163"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face2#兴夫大叔，等下，你等一下。", 37, 2074100, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("你又是哪儿冒出来的家伙？\r\n你跟那些人是一伙的吗……啊……哼哼！", 37, 2074106, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_SetSpecialAction("oid=2588240", 'pain3', -1, 1);
                                              cm.sendNormalTalk_Bottom("#face3#哎哟？等下……\r\n额……为什么会，突然……觉得……心痛呢？", 37, 2074100, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face3#额……为什么，为什么会这样……\r\n#b#h0##k，我突然变得好奇怪。\r\n到底，到底为什么会突然#g发火呢？#k", 37, 2074100, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                    cm.sendNormalTalk_Bottom("#b(将万花筒放在眼睛上。)#k", 57, 0, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(250);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
                                                        cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/Downtown2015/DarkEffectEL", "oid=2588169"], [6000, 0, 0, 1, 0, 1, 0, 0]);
                                                        cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/Downtown2015/DarkEffectM", "oid=2588240"], [6000, 0, 0, 1, 0, 1, 0, 0]);
                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(600);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
                                                          cm.inGameDirectionEvent_AskAnswerTime(700);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#b(小可爱在吸收宝玉气息！)#k", 57, 0, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(250);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_InsertCanvas11(0, 0, 0, 0, 0, 0);
                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(600);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("额……越来越……没力气了……", 37, 2074106, false, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face3#额，#b#h0##k，虽然不知道发生了什么事情，\r\n但兴夫现在很泄气，必须拦住他才行。", 37, 2074100, true, true);
                                                                      } else if (status === V++) {
                                                                        cm.dispose();
                                                                        cm.warp(224005100, 0, true);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;