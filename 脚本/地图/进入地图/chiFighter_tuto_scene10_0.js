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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, false);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.npc_ChangeController(9330205, "oid=844099", 69, 3, 1, 19, 119, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=844099", "summon", 0, 0);
      cm.setSessionValue("Sunyo", "844099");
      cm.npc_ChangeController(9330202, "oid=844100", 389, 3, 1, 339, 439, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=844100", "summon", 0, 0);
      cm.setSessionValue("zhizonbo0", '844100');
      cm.inGameDirectionEvent_AskAnswerTime(500);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_头顶图片(["Effect/Direction100.img/effect/tuto/balloonMsg10/0"], [2000, 550, -120, 0, 0, 0, 0, 0, 0]);
        cm.inGameDirectionEvent_AskAnswerTime(2000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_头顶图片(["Effect/Direction100.img/effect/tuto/balloonMsg10/1"], [2000, 250, -120, 0, 0, 0, 0, 0, 0]);
          cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_头顶图片(["Effect/Direction100.img/effect/tuto/balloonMsg10/2"], [2000, 250, -120, 0, 0, 0, 0, 0, 0]);
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_头顶图片(["Effect/Direction100.img/effect/tuto/balloonMsg10/3"], [2000, 550, -120, 0, 0, 0, 0, 0, 0]);
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_头顶图片(["Effect/Direction100.img/effect/tuto/balloonMsg10/4"], [2000, 550, -120, 0, 0, 0, 0, 0, 0]);
                cm.inGameDirectionEvent_AskAnswerTime(2000);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction100.img/effect/tuto/balloonMsg10/9"], [2000, 550, -120, 0, 0, 0, 0, 0, 0]);
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction100.img/effect/tuto/balloonMsg10/5"], [2000, 250, -120, 0, 0, 0, 0, 0, 0]);
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_头顶图片(["Effect/Direction100.img/effect/tuto/balloonMsg10/10"], [2000, 550, -150, 0, 0, 0, 0, 0, 0]);
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                    } else {
                      if (status === V++) {
                        cm.npc_SetSpecialAction("oid=844100", 'attack0', 0, 1);
                        cm.inGameDirectionEvent_AskAnswerTime(720);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction100.img/effect/tuto/DaddysSkill0/0"], [1000, 530, 0, 0, 0, 0, 0, 0, 0]);
                          cm.fieldEffect_PlayFieldSound("chivalrousFighter/arkAttack0", 100);
                          cm.inGameDirectionEvent_AskAnswerTime(240);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction100.img/effect/tuto/BossHit/0"], [600, 250, 0, 0, 0, 0, 0, 0, 0]);
                            cm.npc_SetSpecialAction('oid=844099', 'hit1', 0, 1);
                            cm.npc_SetSpecialAction('oid=844100', "hit0", 0, 1);
                            cm.inGameDirectionEvent_AskAnswerTime(100);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_头顶图片(["Effect/Direction100.img/effect/tuto/BossHit/0"], [600, 235, -10, 0, 0, 0, 0, 0, 0]);
                              cm.inGameDirectionEvent_AskAnswerTime(100);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_PlayFieldSound("demonSlayer/arkAttack0", 100);
                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction100.img/effect/tuto/BossHit/0"], [600, 259, -20, 0, 0, 0, 0, 0, 0]);
                                cm.inGameDirectionEvent_AskAnswerTime(120);
                              } else {
                                if (status === V++) {
                                  cm.npc_SetSpecialAction("oid=844099", "hit1", 0, 1);
                                  cm.fieldEffect_PlayFieldSound("demonSlayer/arkAttack1", 100);
                                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction100.img/effect/tuto/BossHit/0"], [600, 235, -10, 0, 0, 0, 0, 0, 0]);
                                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction100.img/effect/tuto/BossHit/0"], [600, 259, -20, 0, 0, 0, 0, 0, 0]);
                                  cm.inGameDirectionEvent_AskAnswerTime(120);
                                } else {
                                  if (status === V++) {
                                    cm.npc_SetSpecialAction("oid=844099", 'attack1', 0, 1);
                                    cm.npc_SetSpecialAction("oid=844100", "attack0", 0, 1);
                                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction100.img/effect/tuto/DaddysSkill0/1"], [1000, 550, 0, 0, 0, 0, 0, 0, 0]);
                                    cm.fieldEffect_PlayFieldSound("chivalrousFighter/arkAttack1", 100);
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_头顶图片(["Effect/Direction100.img/effect/tuto/BossSkill10-1/3"], [320, 250, 30, 0, 0, 0, 0, 0, 0]);
                                      cm.npc_SetSpecialAction('oid=844100', 'hit0', 0, 1);
                                      cm.inGameDirectionEvent_AskAnswerTime(290);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction100.img/effect/tuto/BossHit/0"], [600, 530, -30, 0, 0, 0, 0, 0, 0]);
                                        cm.fieldEffect_PlayFieldSound("demonSlayer/arkAttack1", 100);
                                        cm.inGameDirectionEvent_AskAnswerTime(100);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction100.img/effect/tuto/BossHit/0"], [600, 510, -20, 0, 0, 0, 0, 0, 0]);
                                          cm.fieldEffect_PlayFieldSound("demonSlayer/arkAttack0", 100);
                                          cm.inGameDirectionEvent_AskAnswerTime(120);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction100.img/effect/tuto/BossHit/0"], [600, 570, 0, 0, 0, 0, 0, 0, 0]);
                                            cm.inGameDirectionEvent_AskAnswerTime(50);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_头顶图片(["Effect/Direction100.img/effect/tuto/BossHit/0"], [600, 540, 15, 0, 0, 0, 0, 0, 0]);
                                              cm.inGameDirectionEvent_AskAnswerTime(120);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_SetSpecialAction("oid=844099", "move", 0, 1);
                                                cm.npc_SetForceMove('oid=844099', 1, 40, 100);
                                                cm.inGameDirectionEvent_AskAnswerTime(800);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_SetSpecialAction("oid=844099", "attack1", 0, 1);
                                                  cm.npc_SetSpecialAction('oid=844100', "teleportation", 0, 1);
                                                  cm.inGameDirectionEvent_AskAnswerTime(720);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_LeaveField('oid=844100');
                                                    cm.fieldEffect_PlayFieldSound("chivalrousFighter/dragonSkillUse", 100);
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_头顶图片(["Effect/Direction100.img/effect/tuto/DaddysSkill0/2"], [2000, 380, 0, 0, 0, 0, 0, 0, 0]);
                                                      cm.inGameDirectionEvent_头顶图片(["Effect/Direction100.img/effect/tuto/BossSkill10-1/0"], [3000, 510, 0, 0, 0, 0, 0, 0, 0]);
                                                      cm.fieldEffect_PlayFieldSound("chivalrousFighter/dragonSkillBlast", 100);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1300);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction100.img/effect/tuto/BossHit/0"], [600, 290, -50, 0, 0, 0, 0, 0, 0]);
                                                        cm.npc_SetSpecialAction('oid=844099', "hit1", 0, 1);
                                                        cm.npc_ChangeController(9330202, "oid=844107", 350, 3, 1, 300, 400, 1, true, 0, false);
                                                        cm.npc_SetSpecialAction("oid=844107", 'summon', 0, 0);
                                                        cm.setSessionValue("zhizonbo1", "844107");
                                                        cm.npc_SetSpecialAction("oid=844107", "hit0", 0, 1);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1300);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction100.img/effect/tuto/BossHit/0"], [600, 550, 0, 0, 0, 0, 0, 0, 0]);
                                                          cm.inGameDirectionEvent_AskAnswerTime(720);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk("比想象中更强\u3000!!!", 1, 9330205, false, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk("真的是皇帝的话，不会使用出这种邪恶的力量，你这假货!!!!", 1, 9330202, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction100.img/effect/tuto/balloonMsg10/6"], [2000, 0, -100, 0, 0, 0, 0, 0, 0]);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_MoveAction(2);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_MoveAction(0);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction100.img/effect/tuto/balloonMsg10/7"], [2000, 450, -130, 0, 0, 0, 0, 0, 0]);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction100.img/effect/tuto/balloonMsg10/8"], [2000, 200, -150, 0, 0, 0, 0, 0, 0]);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.npc_SetSpecialAction("oid=844099", 'move', 0, 1);
                                                                            cm.npc_SetForceMove("oid=844099", -1, 10, 100);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk("不行!!!!!!!!!!!", 1, 9330202, false, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.npc_SetSpecialAction("oid=844099", 'attack1', 0, 1);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(720);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction100.img/effect/tuto/BossSkill10-1/4"], [1600, 250, 30, 0, 0, 0, 0, 0, 0]);
                                                                                  cm.fieldEffect_PlayFieldSound("chivalrousFighter/dragonSkillUse", 100);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(180);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.npc_SetSpecialAction('oid=844107', "teleportation", 0, 1);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(720);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.npc_LeaveField('oid=844107');
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(50);
                                                                                    } else if (status === V++) {
                                                                                      cm.npc_LeaveField('oid=844099');
                                                                                      cm.dispose();
                                                                                      cm.warp(743020300, 0, false);
                                                                                      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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