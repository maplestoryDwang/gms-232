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
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, -80, -180);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(3003270, "oid=1754672", 0, -150, 27, -50, 50, 1, true, false);
        cm.npc_SetSpecialAction("oid=1754672", "summon", 0, 0);
        cm.npc_ChangeController(3003278, "oid=1754673", -205, -150, 27, -255, -155, 0, true, false);
        cm.npc_SetSpecialAction("oid=1754673", "summon", 0, 0);
        cm.npc_ChangeController(3003291, "oid=1754674", -110, -150, 8, -160, -60, 1, false, false);
        cm.npc_SetSpecialAction("oid=1754674", "summon", 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
          cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("哈啊，好久没有听见这么动听的声音了。我的心一下子放松了下来。", 37, 3003278, false, true);
          } else {
            if (status === V++) {
              cm.effect_PlayMusic("Game/QueenOfElf");
              cm.sendNormalTalk_Bottom("#face0#我制作这个是希望你能做个好梦。", 37, 3003270, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("真是手艺太棒了，路西德。", 37, 3003278, true, true);
              } else {
                if (status === V++) {
                  cm.npc_ChangeController(3003275, "oid=1754682", 140, -190, 70, 90, 190, 1, false, 1000, false);
                  cm.npc_SetSpecialAction("oid=1754682", "summon", 0, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("这动听的声音是什么？好像所有的疲劳都消散了。感觉像是做了个美梦。", 37, 3003275, false, true);
                  } else {
                    if (status === V++) {
                      cm.npc_ChangeController(3003277, "oid=1754683", -280, -150, 27, -330, -230, 0, false, 500, false);
                      cm.npc_SetSpecialAction("oid=1754683", "summon", 0, 0);
                      cm.npc_ChangeController(3003281, "oid=1754684", 80, -145, 27, 30, 130, 1, false, 1000, false);
                      cm.npc_SetSpecialAction("oid=1754684", "summon", 0, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("哇，好漂亮的音乐盒。", 37, 3003281, false, true);
                      } else {
                        if (status === V++) {
                          cm.npc_ChangeController(3003279, "oid=1754685", -350, -150, 27, -400, -300, 0, false, 1000, false);
                          cm.npc_SetSpecialAction("oid=1754685", "summon", 0, 0);
                          cm.npc_ChangeController(3003280, "oid=1754686", -210, -320, 18, -260, -160, 0, false, 500, false);
                          cm.npc_SetSpecialAction("oid=1754686", "summon", 0, 0);
                          cm.npc_ChangeController(3003282, "oid=1754687", -270, -320, 17, -320, -220, 0, false, 1000, false);
                          cm.npc_SetSpecialAction("oid=1754687", "summon", 0, 0);
                          cm.sendNormalTalk_Bottom("你看因为音乐盒的声音而聚集的人群。这个音乐盒说不定会成为埃欧雷的宝物。", 37, 3003278, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("如果听着这个音乐，所有人应该都能做个美梦。", 37, 3003278, true, true);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
                              cm.fieldEffect_InsertCanvas(1, 50, 0, 0, 0, 1300, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(1600);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face3#(不… 这不是我想要的… 这是我为双弩精灵一个人准备的… 这样…)", 37, 3003270, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face3#(还是不够吗？这不是我想要的… 应该有更大的反应才对！)", 37, 3003270, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face3#(…我要做出更棒的东西。精打细磨… 让你有必须占据它的欲望…不愿与其他人分享…)", 37, 3003270, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/butterfly0", 200);
                                      cm.fieldEffect_复合图片动画(["Map/Effect3.img/BossLucid/butterfly/005", "animation", '', ''], [1, 0, 0, 0, 0, 0, 0, 0]);
                                      cm.inGameDirectionEvent_AskAnswerTime(5000);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else if (status === V++) {
                                        cm.dispose();
                                        cm.warp(450003000, 0, true);
                                        cm.inGameDirectionEvent_SetHideEffect(0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;