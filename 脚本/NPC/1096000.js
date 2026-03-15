var status = -1;
function action(f, W, U) {
  if (f == 1) {
    status++;
  } else {
    cm.dispose();
    return;
  }
  if (status == 0) {
    cm.curNodeEventEnd(true);
    cm.setInGameDirectionMode(true, true);
    cm.setStandAloneMode(true);
    cm.npc_ChangeController(1096000, 2209, -107);
    cm.npc_SetSpecialAction(1096000, 'summon');
    cm.npc_ChangeController(1096001, 2046, -62);
    cm.npc_SetSpecialAction(1096001, 'summon');
    cm.inGameDirectionEvent_MoveAction(2);
    cm.sendNextNoESC("你为什么要离开这里，到冒险岛去？从这里去冒险岛的人并不多……而且看你的打扮，好像不是单纯去旅行的。");
    cm.effect_Direction("Effect/Direction4.img/cannonshooter/face03");
  } else {
    if (status == 1) {
      cm.sendNextSNoESC("想到冒险岛去继续修炼。听说在那里修炼之后，再到金银岛去，就能成为帅气的冒险家。");
    } else {
      if (status == 2) {
        cm.sendNextNoESC("哦，你知道得很清楚嘛。为了成为冒险家，第一步最好在冒险岛开始。那里有很多其他地方来的新手，可以和他们交朋友，同时那里也没什么危险的怪物。但是在这之后才是冒险的真正开始。在金银岛和神秘岛之类的大路上，到处都是你难以想象的强大怪物。当然，那里也更好玩。");
      } else {
        if (status == 3) {
          cm.sendNextSNoESC("强大的怪物！那是成为帅气冒险家的必要因素。只要勤于修行，就可以让自己变得更强，因此我一定要努力修炼。在出发之前，我做了很多功课。我是有准备的冒险家，哈哈哈！");
        } else {
          if (status == 4) {
            cm.sendNextNoESC("哦，还挺有自信的。是的，决心是最最重要的。但是以后不知道会发生什么事！但是不管发生什么事，只要牢记#b不怕入蝙蝠怪洞穴,只要不慌神#k这句俗话，就可以战胜一切困难。");
          } else {
            if (status == 5) {
              cm.sendNextNoESC("等等……？你有没有听到什么声音？我感觉到了奇怪的气息……这里应该是没有怪物的和平海域啊……小心！");
            } else {
              if (status == 6) {
                cm.inGameDirectionEvent_MoveAction(2);
                cm.curNodeEventEnd(true);
                cm.npc_ChangeController(1096011, 2000, -20);
                cm.npc_SetSpecialAction(1096011, "summon");
                cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/15", "oid=12806037"], [0, 0, 0, 1, 0, 1, 0, 0]);
                cm.fieldEffect_PlayFieldSound("cannonshooter/summon");
                cm.inGameDirectionEvent_AskAnswerTime(2000);
              } else {
                if (status == 7) {
                  cm.npc_LeaveField(1096000);
                  cm.npc_LeaveField(1096001);
                  cm.npc_ChangeController(1096008, 2000, -20);
                  cm.npc_SetSpecialAction(1096008, "summon");
                  cm.npc_ChangeController(1096002, 2108, -82);
                  cm.npc_SetSpecialAction(1096002, "summon");
                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction4.img/effect/cannonshooter/balog/0", "oid=12806042"], [2000, 0, -200, 1, 0, 1, 0, 0]);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status == 8) {
                    cm.npc_SetSpecialAction(1096008, "attack2");
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status == 9) {
                      cm.inGameDirectionEvent_头顶图片(["Effect/Direction4.img/effect/cannonshooter/npc/0", "oid=12806042"], [2000, 0, -160, 1, 0, 1, 0, 0]);
                      cm.npc_SetSpecialAction(1096008, 'attack1');
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status == 10) {
                        cm.fieldEffect_PlayFieldSound("Party1/Failed");
                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction4.img/effect/cannonshooter/User/0"], [2000, 0, -100, 1, 0, 1, 0, 0]);
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status == 11) {
                          cm.inGameDirectionEvent_MoveAction(1);
                          cm.inGameDirectionEvent_AskAnswerTime(150);
                        } else {
                          if (status == 12) {
                            cm.inGameDirectionEvent_MoveAction(0);
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                            cm.effect_Direction("Effect/Direction4.img/cannonshooter/face02");
                          } else {
                            if (status == 13) {
                              cm.npc_SetSpecialAction(1096008, 'attack2');
                              cm.inGameDirectionEvent_头顶图片(["Effect/Direction4.img/effect/cannonshooter/npc/1", "oid=12806043"], [2000, 0, -160, 1, 0, 1, 0, 0]);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                              cm.effect_Direction("Effect/Direction4.img/cannonshooter/face02");
                            } else {
                              if (status == 14) {
                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction4.img/effect/cannonshooter/User/1"], [2000, 0, -100, 1, 0, 0, 0, 0]);
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                cm.effect_Direction("Effect/Direction4.img/cannonshooter/face05");
                              } else {
                                if (status == 15) {
                                  cm.inGameDirectionEvent_MoveAction(0);
                                  cm.inGameDirectionEvent_AskAnswerTime(100);
                                  cm.effect_Direction("Effect/Direction4.img/cannonshooter/face05");
                                } else {
                                  if (status == 16) {
                                    cm.npc_SetSpecialAction(1096008, "attack2");
                                    cm.fieldEffect_PlayFieldSound("cannonshooter/Attack1");
                                    cm.inGameDirectionEvent_AskAnswerTime(100);
                                    cm.effect_Direction("Effect/Direction4.img/cannonshooter/face05");
                                  } else {
                                    if (status == 17) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      cm.effect_Direction("Effect/Direction4.img/cannonshooter/face05");
                                    } else {
                                      if (status == 18) {
                                        cm.npc_SetSpecialAction(1096008, "attack1");
                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction4.img/effect/cannonshooter/balog/0", "oid=12806042"], [2000, 0, -200, 1, 0, 1, 0, 0]);
                                        cm.inGameDirectionEvent_头顶图片(["Mob/8150000.img/attack2/info/effect", "oid=12806042"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                        cm.fieldEffect_PlayFieldSound("cannonshooter/Attack1");
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status == 19) {
                                          cm.inGameDirectionEvent_头顶图片(["Mob/8150000.img/attack2/info/hit"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction4.img/effect/cannonshooter/User/2"], [2000, 0, -100, 1, 0, 0, 0, 0]);
                                          cm.inGameDirectionEvent_MoveAction(6);
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                          cm.effect_Direction("Effect/Direction4.img/cannonshooter/face02");
                                        } else {
                                          if (status == 20) {
                                            cm.inGameDirectionEvent_MoveAction(0);
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                            cm.effect_Direction("Effect/Direction4.img/cannonshooter/face02");
                                          } else {
                                            if (status == 21) {
                                              cm.npc_SetSpecialAction(1096008, "attack2");
                                              cm.inGameDirectionEvent_头顶图片(["Mob/8130100.img/attack1/info/effect", "oid=12806042"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                              cm.effect_Direction("Effect/Direction4.img/cannonshooter/face02");
                                            } else {
                                              if (status == 22) {
                                                inGameDirectionEvent_头顶图片(["Mob/8130100.img/attack1/info/hit"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                cm.fieldEffect_PlayFieldSound("cannonshooter/Attack1");
                                                cm.inGameDirectionEvent_MoveAction(6);
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                cm.effect_Direction("Effect/Direction4.img/cannonshooter/face01");
                                              } else {
                                                if (status == 23) {
                                                  cm.inGameDirectionEvent_头顶图片(["Mob/8130100.img/attack1/info/effect", "oid=12806042"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                  cm.inGameDirectionEvent_MoveAction(2);
                                                  cm.inGameDirectionEvent_AskAnswerTime(200);
                                                } else {
                                                  if (status == 24) {
                                                    cm.inGameDirectionEvent_MoveAction(1);
                                                    cm.inGameDirectionEvent_AskAnswerTime(200);
                                                  } else {
                                                    if (status == 25) {
                                                      cm.inGameDirectionEvent_MoveAction(2);
                                                      cm.inGameDirectionEvent_AskAnswerTime(200);
                                                    } else {
                                                      if (status == 26) {
                                                        cm.inGameDirectionEvent_MoveAction(1);
                                                        cm.inGameDirectionEvent_AskAnswerTime(200);
                                                      } else {
                                                        if (status == 27) {
                                                          cm.inGameDirectionEvent_MoveAction(2);
                                                          cm.inGameDirectionEvent_AskAnswerTime(200);
                                                        } else {
                                                          if (status == 28) {
                                                            cm.inGameDirectionEvent_MoveAction(1);
                                                            cm.inGameDirectionEvent_AskAnswerTime(200);
                                                          } else {
                                                            if (status == 29) {
                                                              cm.inGameDirectionEvent_MoveAction(2);
                                                              cm.inGameDirectionEvent_AskAnswerTime(150);
                                                            } else {
                                                              if (status == 30) {
                                                                cm.inGameDirectionEvent_MoveAction(0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                              } else {
                                                                if (status == 31) {
                                                                  cm.npc_SetSpecialAction(1096008, 'attack');
                                                                  cm.fieldEffect_PlayFieldSound("cannonshooter/Attack2");
                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction4.img/effect/cannonshooter/balog/1", "oid=12806042"], [2000, 0, -200, 1, 0, 1, 0, 0]);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                } else {
                                                                  if (status == 32) {
                                                                    cm.inGameDirectionEvent_MoveAction(2);
                                                                    inGameDirectionEvent_头顶图片(["Effect/Direction4.img/effect/cannonshooter/User/3"], [2000, 0, -100, 1, 0, 0, 0, 0]);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                    cm.effect_Direction("Effect/Direction4.img/cannonshooter/face02");
                                                                  } else if (status == 33) {
                                                                    cm.npc_SetSpecialAction(1096008, "stand");
                                                                    cm.npc_LeaveField(1096008);
                                                                    cm.npc_LeaveField(1096002);
                                                                    cm.npc_LeaveField(1096011);
                                                                    cm.curNodeEventEnd(true);
                                                                    cm.warp(912060100, 0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;