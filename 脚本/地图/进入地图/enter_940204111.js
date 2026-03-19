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
      cm.monadForceMove("white", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(3002110, "oid=37978654", -130, -40, 1, -180, -80, 0, true, false);
      cm.npc_SetSpecialAction("oid=37978654", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=37978654", "drop", -1, 1);
      cm.npc_ChangeController(3002121, "oid=37978655", 0, -40, 1, -50, 50, 1, false, false);
      cm.npc_SetSpecialAction("oid=37978655", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=37978655", "eyeClosed", -1, 1);
      cm.sendNormalTalk_Bottom("#face2#是我！玛鲁！请睁开眼睛。好吗？", 37, 3002110, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face2#现在村里正在下大雨！\t\r\n拜托……请睁开眼睛，好吗？", 37, 3002110, true, true);
      } else {
        if (status === V++) {
          cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
          cm.sendNormalTalk_Bottom("#face2#……", 37, 3002110, true, true);
        } else {
          if (status === V++) {
            cm.fieldEffect_PlayBGM("Bgm36.img/sadfoxvillage", 0, 0);
            cm.inGameDirectionEvent_PushScaleInfo(6000, 2000, 6000, -70, 50);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face3#我知道了……", 37, 3002110, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face3#您也对我很失望，对吧？", 37, 3002110, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face3#我一直……不想让您失望……", 37, 3002110, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face1#我一直想亲手保护……\r\n您珍爱的尖耳狐狸村……", 37, 3002110, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face1#但是全都失败了……全都……", 37, 3002110, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face1#对不起……呜呜……", 37, 3002110, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#嗯……？", 37, 3002121, true, true);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act4/ak_mom", 100);
                            cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 300, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(400);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 0, -50);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(100);
                              } else {
                                if (status === V++) {
                                  cm.setNpcSpecialActionReset("oid=37978655");
                                  cm.npc_SetSpecialAction("oid=37978655", "stand", -1, 1);
                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 300, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#啊啊啊……有什么事吗……？", 37, 3002121, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0##fc0xFFAAAAAA#（玛鲁……？）", 37, 3002121, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#你到这里来干什么？", 37, 3002121, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face1#闪电……村里在下雨……", 37, 3002110, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#！！！#b村里有洪水！#k", 37, 3002121, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#竟然到了这步田地……#b为何视野被遮蔽了呢？#k", 37, 3002121, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face1#对不起……是我搞砸了……", 37, 3002110, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#你……在哭吗？", 37, 3002121, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#别哭，玛鲁……\r\n多亏了你，我才能尽快看到这一切。", 37, 3002121, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#幸好损失还不是很大。多亏你来得很及时。", 37, 3002121, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face3#多亏了我……？", 37, 3002110, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#你尽了尖耳守备队长的本分。#b谢谢你。#k", 37, 3002121, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face3#您说……感谢我……", 37, 3002110, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#好了，让我们来整理一下情况吧？", 37, 3002121, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act4/alicia", 100);
                                                                cm.setNpcSpecialActionReset("oid=37978655");
                                                                cm.npc_SetSpecialAction("oid=37978655", "lightup", 0, 1);
                                                                cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                    cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/foxvalley/cloud_disappear", 100);
                                                                          cm.fieldEffect_复合图片动画(["Map/Effect3.img/foxvalley/spine/god/skeleton", "animation", '', 'sunshine'], [0, 0, 1, 0, 0, 0, 0, 1]);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(15000);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                            cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                } else if (status === V++) {
                                                                                  cm.dispose();
                                                                                  cm.warp(940204112, 0);
                                                                                  cm.inGameDirectionEvent_SetHideEffect(0);
                                                                                  cm.setInGameDirectionMode(false, true, false);
                                                                                  cm.cancelItem(2210205);
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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