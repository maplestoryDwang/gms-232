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
      cm.npc_ChangeController(2052042, "oid=39478454", 1500, 0, 22, 1450, 1550, 1, false, false);
      cm.npc_SetSpecialAction("oid=39478454", 'summon', 0, 0);
      cm.npc_SetSpecialAction("oid=39478454", "special4", -1, 1);
      cm.npc_ChangeController(2052044, "oid=39478456", 1230, 0, 19, 1180, 1280, 1, true, false);
      cm.npc_SetSpecialAction("oid=39478456", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=39478456", "die", -1, 1);
      cm.npc_ChangeController(2052000, "oid=39478457", 800, 0, 16, 750, 850, 0, true, false);
      cm.npc_SetSpecialAction("oid=39478457", "summon", 0, 0);
      cm.npc_ChangeController(2052001, "oid=39478458", 850, 0, 16, 800, 900, 0, true, false);
      cm.npc_SetSpecialAction("oid=39478458", "summon", 0, 0);
      cm.npc_ChangeController(2052002, "oid=39478459", 900, 0, 16, 850, 950, 0, true, false);
      cm.npc_SetSpecialAction("oid=39478459", "summon", 0, 0);
      cm.npc_ChangeController(2052003, "oid=39478460", 950, 0, 19, 900, 1000, 0, true, false);
      cm.npc_SetSpecialAction("oid=39478460", 'summon', 0, 0);
      cm.npc_ChangeController(2052004, "oid=39478461", 1000, 0, 19, 950, 1050, 0, true, false);
      cm.npc_SetSpecialAction("oid=39478461", "summon", 0, 0);
      cm.npc_ChangeController(2052005, "oid=39478462", 1070, 0, 19, 1020, 1120, 0, true, false);
      cm.npc_SetSpecialAction("oid=39478462", "summon", 0, 0);
      cm.npc_ChangeController(2052032, "oid=39478463", 700, 0, 16, 650, 750, 0, true, false);
      cm.npc_SetSpecialAction("oid=39478463", "summon", 0, 0);
      cm.npcMove(2052000, 0, -100, 1000);
      cm.npcMove(2052002, 0, -70, 1000);
      cm.npcMove(2052004, 0, -40, 1000);
      cm.npcMove(2052005, 0, -80, 1000);
      cm.npcMove(2052032, 0, -50, 1000);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face1#额，这帮家伙……", 37, 2052008, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face1#再怎么挣扎也无济于事的……\r\n你们不过就花生豆那么大点，怎么可能是我们士兵的对手？", 37, 2052008, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#我们是冒险勇士！！就算面对再强大的敌人也不会逃跑的！", 37, 2052000, true, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/stopswitch", 100);
                  cm.inGameDirectionEvent_AskAnswerTime(100);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/stopswitch", 100);
                    cm.inGameDirectionEvent_AskAnswerTime(100);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/stopswitch", 100);
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face3#嗯？是谁在这个当口开了微波炉？", 37, 2052002, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#不，看来应该是“恢复原状光线枪”充好电了。", 37, 2052005, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face2#这家伙什么时候把我的光线枪？！", 37, 2052008, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#该死，这玩意儿可就只剩一发子弹了？", 37, 2052005, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face1#我我！", 37, 2052001, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face1#我我我我我！", 37, 2052003, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face2#射向我！！", 37, 2052002, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face2#射我！", 37, 2052000, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_PushScaleInfo(500, 2000, 500, 1110, 30);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#好，那我就开射了~", 37, 2052005, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_setForceFlip("oid=39478462", -1);
                                            cm.npc_SetSpecialAction("oid=39478462", "special", 1, 1);
                                            cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9500373/Attack1", 200);
                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face1#你到底对着哪儿开射呢！！", 37, 2052000, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#嗯？射在块头最大的朋友身上啊。", 37, 2052005, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face2#难……难道？！！！", 37, 2052000, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_PushScaleInfo(500, 1000, 500, 1110, -50);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_头顶图片(["Map/Effect3.img/omegaSector/bbagic", "oid=39478463"], [0, 0, -50, 1, 0, 1, 0, 0]);
                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/electric1", 100);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.setAmbience("SoundEff.img/urus/bombCountDown", 100, 60);
                                                            cm.npcSetSize("oid=39478463", 300, 5000);
                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                              } else if (status === V++) {
                                                                cm.dispose();
                                                                cm.warp(221030805, 0);
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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