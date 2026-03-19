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
      cm.setSessionValue("kill_count", '0');
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.forceCompleteQuest(2573);
      cm.npc_ChangeController(1096000, "oid=4254158", 2209, -107, 10, 2159, 2259, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=4254158", "summon", 0, 0);
      cm.setSessionValue("skeeper", '4254158');
      cm.npc_ChangeController(1096001, "oid=4254159", 2046, -62, 53, 1996, 2096, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=4254159", 'summon', 0, 0);
      cm.setSessionValue("rating", "4254159");
      cm.inGameDirectionEvent_MoveAction(2);
      cm.updateInfoQuest(26011, '');
      cm.sendNormalTalk("你为什么要离开这里，到冒险岛去？从这里去冒险岛的人并不多……而且看你的打扮，好像不是单纯去旅行的。", 1, 1096000, false, true);
    } else {
      if (status === V++) {
        cm.effect_Direction("Effect/Direction4.img/cannonshooter/face03", 0, 0, 0);
        cm.sendNormalTalk("想到冒险岛去继续修炼。听说在那里修炼之后，再到金银岛去，就能成为帅气的冒险家。", 3, 1096000, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("哦，你知道得很清楚嘛。为了成为冒险家，第一步最好在冒险岛开始。那里有很多其他地方来的新手，可以和他们交朋友，同时那里也没什么危险的怪物。但是在这之后才是冒险的真正开始。在金银岛和神秘岛之类的大路上，到处都是你难以想象的强大怪物。当然，那里也更好玩。", 1, 1096000, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("强大的怪物！那是成为帅气冒险家的必要因素。只要勤于修行，就可以让自己变得更强，因此我一定要努力修炼。在出发之前，我做了很多功课。我是有准备的冒险家，哈哈哈！", 3, 1096000, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("哦，还挺有自信的。是的，决心是最最重要的。但是以后不知道会发生什么事！但是不管发生什么事，只要牢记#b不怕入蝙蝠怪洞穴，只要不慌神#k这句俗话，就可以战胜一切困难。", 1, 1096000, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("等等……？你有没有听到什么声音？我感觉到了奇怪的气息……这里应该是没有怪物的和平海域啊……小心！", 1, 1096000, true, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_MoveAction(2);
                  cm.curNodeEventEnd(true);
                  cm.npc_ChangeController(1096011, "oid=4259025", 2000, -20, 81, 1950, 2050, 1, false, 0, false);
                  cm.npc_SetSpecialAction("oid=4259025", "summon", 0, 0);
                  cm.setSessionValue("dummyNpc", "4259025");
                  cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/15", "oid=4259025"], [0, 0, 0, 1, 0, 1, 0, 0]);
                  cm.fieldEffect_PlayFieldSound("cannonshooter/summon", 100);
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.npc_LeaveField("oid=4254158");
                    cm.npc_LeaveField("oid=4254158");
                    cm.npc_LeaveField("oid=4254159");
                    cm.npc_LeaveField("oid=4254159");
                    cm.npc_ChangeController(1096008, "oid=4259355", 2000, -20, 81, 1950, 2050, 0, false, 0, false);
                    cm.npc_SetSpecialAction("oid=4259355", "summon", 0, 0);
                    cm.setSessionValue("balog", "4259355");
                    cm.npc_ChangeController(1096002, "oid=4259356", 2108, -82, 48, 2058, 2158, 1, false, 0, false);
                    cm.npc_SetSpecialAction("oid=4259356", "summon", 0, 0);
                    cm.setSessionValue("skeeper_rating", '4259356');
                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction4.img/effect/cannonshooter/balog/0", "oid=4259355"], [2000, 0, -200, 1, 0, 1, 0, 0]);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.npc_SetSpecialAction("oid=4259355", "attack2", 0, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction4.img/effect/cannonshooter/npc/0", "oid=4259356"], [2000, 0, -160, 1, 0, 1, 0, 0]);
                        cm.npc_SetSpecialAction("oid=4259355", "attack1", 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_PlayFieldSound("Party1/Failed", 100);
                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction4.img/effect/cannonshooter/User/0"], [2000, 0, -100, 1, 0, 0, 0, 0]);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_MoveAction(1);
                            cm.inGameDirectionEvent_AskAnswerTime(150);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_MoveAction(0);
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.effect_Direction("Effect/Direction4.img/cannonshooter/face02", 0, 0, 0);
                                cm.npc_SetSpecialAction("oid=4259355", "attack2", 0, 0);
                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction4.img/effect/cannonshooter/npc/1", "oid=4259356"], [2000, 0, -160, 1, 0, 1, 0, 0]);
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.effect_Direction("Effect/Direction4.img/cannonshooter/face02", 0, 0, 0);
                                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction4.img/effect/cannonshooter/User/1"], [2000, 0, -100, 1, 0, 0, 0, 0]);
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.effect_Direction("Effect/Direction4.img/cannonshooter/face05", 0, 0, 0);
                                    cm.inGameDirectionEvent_MoveAction(0);
                                    cm.inGameDirectionEvent_AskAnswerTime(100);
                                  } else {
                                    if (status === V++) {
                                      cm.effect_Direction("Effect/Direction4.img/cannonshooter/face05", 0, 0, 0);
                                      cm.npc_SetSpecialAction("oid=4259355", "attack2", 0, 0);
                                      cm.fieldEffect_PlayFieldSound("cannonshooter/Attack1", 100);
                                      cm.inGameDirectionEvent_AskAnswerTime(100);
                                    } else {
                                      if (status === V++) {
                                        cm.effect_Direction("Effect/Direction4.img/cannonshooter/face05", 0, 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.effect_Direction("Effect/Direction4.img/cannonshooter/face05", 0, 0, 0);
                                          cm.npc_SetSpecialAction("oid=4259355", "attack1", 0, 0);
                                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction4.img/effect/cannonshooter/balog/0", "oid=4259355"], [2000, 0, -200, 1, 0, 1, 0, 0]);
                                          cm.inGameDirectionEvent_头顶图片(["Mob/8150000.img/attack2/info/effect", "oid=4259355"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                          cm.fieldEffect_PlayFieldSound("cannonshooter/Attack1", 100);
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_头顶图片(["Mob/8150000.img/attack2/info/hit"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction4.img/effect/cannonshooter/User/2"], [2000, 0, -100, 1, 0, 0, 0, 0]);
                                            cm.inGameDirectionEvent_MoveAction(6);
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.effect_Direction("Effect/Direction4.img/cannonshooter/face02", 0, 0, 0);
                                              cm.inGameDirectionEvent_MoveAction(0);
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else {
                                              if (status === V++) {
                                                cm.effect_Direction("Effect/Direction4.img/cannonshooter/face02", 0, 0, 0);
                                                cm.npc_SetSpecialAction("oid=4259355", "attack2", 0, 0);
                                                cm.inGameDirectionEvent_头顶图片(["Mob/8130100.img/attack1/info/effect", "oid=4259355"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else {
                                                if (status === V++) {
                                                  cm.effect_Direction("Effect/Direction4.img/cannonshooter/face02", 0, 0, 0);
                                                  cm.inGameDirectionEvent_头顶图片(["Mob/8130100.img/attack1/info/hit"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                  cm.fieldEffect_PlayFieldSound("cannonshooter/Attack1", 100);
                                                  cm.inGameDirectionEvent_MoveAction(6);
                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.effect_Direction("Effect/Direction4.img/cannonshooter/face01", 0, 0, 0);
                                                    cm.inGameDirectionEvent_头顶图片(["Mob/8130100.img/attack1/info/effect", "oid=4259355"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                    cm.inGameDirectionEvent_MoveAction(2);
                                                    cm.inGameDirectionEvent_AskAnswerTime(200);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_MoveAction(1);
                                                      cm.inGameDirectionEvent_AskAnswerTime(200);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_MoveAction(2);
                                                        cm.inGameDirectionEvent_AskAnswerTime(200);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_MoveAction(1);
                                                          cm.inGameDirectionEvent_AskAnswerTime(200);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_MoveAction(2);
                                                            cm.inGameDirectionEvent_AskAnswerTime(200);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_MoveAction(1);
                                                              cm.inGameDirectionEvent_AskAnswerTime(200);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_MoveAction(2);
                                                                cm.inGameDirectionEvent_AskAnswerTime(150);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_MoveAction(0);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_SetSpecialAction("oid=4259355", "attack", 0, 0);
                                                                    cm.fieldEffect_PlayFieldSound("cannonshooter/Attack2", 100);
                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction4.img/effect/cannonshooter/balog/1", "oid=4259355"], [2000, 0, -200, 1, 0, 1, 0, 0]);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_MoveAction(2);
                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/Direction4.img/effect/cannonshooter/User/3"], [2000, 0, -100, 1, 0, 0, 0, 0]);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                    } else if (status === V++) {
                                                                      cm.effect_Direction("Effect/Direction4.img/cannonshooter/face02", 0, 0, 0);
                                                                      cm.npc_SetSpecialAction("oid=4259355", "stand", 0, 0);
                                                                      cm.npc_LeaveField("oid=4259355");
                                                                      cm.npc_LeaveField("oid=4259355");
                                                                      cm.npc_LeaveField("oid=4259356");
                                                                      cm.npc_LeaveField("oid=4259356");
                                                                      cm.curNodeEventEnd(true);
                                                                      cm.npc_LeaveField("oid=4259025");
                                                                      cm.npc_LeaveField("oid=4259025");
                                                                      cm.dispose();
                                                                      cm.warp(912060100, 0, false);
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}