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
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.setAmbience("SoundEff.img/blackHeaven/crusherStay", 100, 60);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_MoveAction(4);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 200, 0);
      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/koong", 100);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("额！！脚！！", 57, 0, false, true);
      } else {
        if (status === V++) {
          cm.npc_ChangeController(2052042, "oid=39471229", 1350, 0, 7, 1300, 1400, 1, false, false);
          cm.npc_SetSpecialAction("oid=39471229", "summon", 0, 0);
          cm.npc_SetSpecialAction("oid=39471229", 'special3', -1, 1);
          cm.Hidden_background("omega1", 1, 0, 0, 0);
          cm.Hidden_background("omega2", 1, 0, 0, 0);
          cm.Hidden_background('omega3', 1, 0, 0, 0);
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1400);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("这样一来……算是争取了足够的时间了吗？", 57, 0, false, true);
            } else {
              if (status === V++) {
                cm.npc_ChangeController(2052027, "oid=39471965", 851, 13, 1, 801, 901, 0, true, false);
                cm.npc_SetSpecialAction("oid=39471965", "summon", 0, 0);
                cm.inGameDirectionEvent_头顶图片(["Map/Effect3.img/omegaSector/teleport", "oid=39471965"], [0, 0, 0, 1, 0, 1, 0, 0]);
                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/omega/UFOtel.mp3", 100);
                cm.inGameDirectionEvent_AskAnswerTime(1500);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face3#快逃，#h0#", 37, 2052027, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom('阿琳？！！', 57, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("你怎么会来这里！赶紧躲开！", 57, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face3#你曾经说过啊，我们是同伴。", 37, 2052027, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face3#我就是个傻瓜。", 37, 2052027, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face3#明明想要当冒险勇士，\r\n却忘了自己当初为什么会下定这个决心。", 37, 2052027, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face3##fs17#就是因为阿敏姐姐即便满身疮痍，却依然坚持战斗到最后，", 37, 2052027, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face3##fs20#我就是出于对阿敏姐姐的憧憬！！", 37, 2052027, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face2#阿琳！！赶紧逃！！！", 37, 2052011, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face3##fs18#姐姐曾经说过。", 37, 2052027, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face3##fs21#不要犹豫！不要退却！", 37, 2052027, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face1#阿琳！不行！快躲开！", 37, 2052009, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#呵呵呵！不要太陷进去了！", 37, 2052008, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face3##fs23#这样！！！只有这样！！", 37, 2052027, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.npcMove(2052042, 500, 0, 1000);
                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/waddler/pre_attack", 100);
                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                            } else {
                                              if (status === V++) {
                                                cm.npcMove(2052042, -1000, 0, 600);
                                                cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 300, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                              } else if (status === V++) {
                                                cm.dispose();
                                                cm.warp(221030803, 0);
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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