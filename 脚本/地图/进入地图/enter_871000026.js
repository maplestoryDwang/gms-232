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
      cm.updateInfoQuest(64698, "flower=0");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9400928, "oid=1706900", -150, 270, 1, -200, -100, 1, true, false);
      cm.npc_SetSpecialAction("oid=1706900", "summon", 0, 0);
      cm.npc_ChangeController(9400932, "oid=1706901", -100, 270, 1, -150, -50, 1, true, false);
      cm.npc_SetSpecialAction("oid=1706901", "summon", 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -50, 270);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.npc_ChangeController(9400931, "oid=1706902", 100, 270, 1, 50, 150, 1, true, false);
      cm.npc_SetSpecialAction("oid=1706902", "summon", 0, 0);
      cm.npc_ChangeController(9400929, "oid=1706903", 50, 270, 1, 0, 100, 1, true, false);
      cm.npc_SetSpecialAction("oid=1706903", "summon", 0, 0);
      cm.npc_ChangeController(9400933, "oid=1706904", 0, 270, 1, -50, 50, 1, true, false);
      cm.npc_SetSpecialAction("oid=1706904", "summon", 0, 0);
      cm.npc_ChangeController(9400934, "oid=1706905", 150, 270, 1, 100, 200, 1, true, false);
      cm.npc_SetSpecialAction("oid=1706905", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.sendNewEffects(17, [0, 1000, 2000, -450, 320]);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(1500);
      } else {
        if (status === V++) {
          cm.effect_Text(["#fn黑体##fs20#入夜时分，凯尼斯的万圣节大宅……"], [50, 2000, 6, -50, -50, 1, 4, 0, 0, 0]);
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.sendNewEffects(12, [3000, -100, 320, 0, 0]);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face2#呃啊啊昂，怎么办怎么办！", 37, 9400920, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face1#你安静一会儿，搞得我也紧张了。", 37, 9400923, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face2#哎呀，忘记拿照相机了！", 37, 9400921, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face1#我带来了。", 37, 9400924, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face1#唔，我再最后确认一次。", 37, 9400922, true, true);
                    } else {
                      if (status === V++) {
                        cm.npc_setForceFlip("oid=1706902", 1);
                        cm.sendNewEffects(13, [3000, 300, 0, 0, 0]);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.sendNewEffects(12, [0, 250, 120, 0, 0]);
                            } else {
                              if (status === V++) {
                                cm.sendNewEffects(13, [3000, -350, 0, 0, 0]);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNewEffects(12, [0, -100, 320, 0, 0]);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                        cm.sendNormalTalk_Bottom('#face1#好！', 37, 9400922, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_setForceFlip("oid=1706902", -1);
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face2#呀啊啊啊！", 37, 9400920, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1706900"], [1500, 0, 0, 1, 0, 1, 0, 0]);
                                              cm.sendNormalTalk_Bottom("#face2#嘘！", 37, 9400921, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_ChangeController(9400935, "oid=1707200", -255, 270, 1, -305, -205, 0, true, false);
                                                cm.npc_SetSpecialAction("oid=1707200", "summon", 0, 0);
                                                cm.npc_ChangeController(9400936, "oid=1707201", -280, 270, 1, -330, -230, 0, true, false);
                                                cm.npc_SetSpecialAction("oid=1707201", "summon", 0, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_SetForceMove("oid=1707200", 1, 30, 100);
                                                  cm.npc_SetForceMove("oid=1707201", 1, 20, 100);
                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face1#不给糖就捣蛋！", 37, 9400926, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face1#不给点心就捣蛋！", 37, 9400926, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1706900"], [1500, 0, 0, 1, 0, 1, 0, 0]);
                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1706901"], [1500, 0, 0, 1, 0, 1, 0, 0]);
                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [1500, 0, 0, 1, 0, 0, 0, 0]);
                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1706902"], [1500, 0, 0, 1, 0, 1, 0, 0]);
                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1706903"], [1500, 0, 0, 1, 0, 1, 0, 0]);
                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1706904"], [1500, 0, 0, 1, 0, 1, 0, 0]);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/love", "oid=1706900"], [3000, 0, 0, 1, 0, 1, 0, 0]);
                                                            cm.sendNormalTalk_Bottom("#face2#呀啊啊！特鲁迪太可爱了！", 37, 9400920, false, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face1#嗬嗬……我的心……心脏……", 37, 9400923, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face1#啊啊，好可怕！哈哈哈，品克缤竟然来到我家了！", 37, 9400922, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face1#给我糖！", 37, 9400926, false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face1#……快给品克缤大人拿糖……", 37, 9400924, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/questEffect/myHome/3", "oid=1706904"], [1500, 0, 0, 1, 0, 1, 0, 0]);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/questEffect/myHome/2", "oid=1706901"], [1500, 0, 0, 1, 0, 1, 0, 0]);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face2#给你~品克缤大人~~你可千万别捣乱哟！", 37, 9400920, false, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/questEffect/myHome/0", "oid=1706900"], [1500, 0, 0, 1, 0, 1, 0, 0]);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/questEffect/myHome/1", "oid=1706903"], [1500, 0, 0, 1, 0, 1, 0, 0]);
                                                                                cm.sendNormalTalk_Bottom("#face1#呀吼吼吼！", 37, 9400926, false, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face1#特鲁迪拿到了好多糖果！", 37, 9400926, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face2#哎，那不是品克缤，是特鲁迪啊？", 37, 9400920, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face1#呀哈哈哈！", 37, 9400926, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/love", "oid=1706901"], [1500, 0, 0, 1, 0, 1, 0, 0]);
                                                                                        cm.sendNormalTalk_Bottom("#face1#可、可爱爆棚了！", 37, 9400923, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#对了，凯尼斯大叔，送你个礼物。", 37, 9400926, false, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face1#礼物？特鲁迪给我准备了礼物吗？", 37, 9400922, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.fieldEffect_PlayBGM("BgmPL.img/HiddenTales_Sorrow", 0, 0);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(600);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/questEffect/myHome/4", "oid=1707200"], [1500, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                  cm.sendNormalTalk_Bottom("#face0#嗯，勇士和艾丹大人帮我准备的。", 37, 9400926, false, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#诶，我其实没帮上什么忙，啊哈哈。", 37, 9400923, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom('#b快拆开看看吧！', 57, 0, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face1#我看看……", 37, 9400922, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(600);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/questEffect/myHome/5", "oid=1706902"], [3000, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                            cm.sendNormalTalk_Bottom("#face1#……是金盏花！真漂亮。", 37, 9400922, false, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face1#这是献给雪莉大婶的。", 37, 9400926, true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.npc_SetForceMove("oid=1707200", 1, 345, 100);
                                                                                                                cm.sendNewEffects(13, [3000, 200, 0, 0, 0]);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.npc_setForceFlip("oid=1706900", 1);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(600);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.npc_setForceFlip("oid=1706901", 1);
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(600);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.inGameDirectionEvent_ForcedFlip(1);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(600);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.npc_setForceFlip("oid=1706904", 1);
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(600);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.npc_setForceFlip("oid=1706903", 1);
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(600);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.npc_setForceFlip("oid=1706902", 1);
                                                                                                                              cm.npc_setForceFlip("oid=1706905", 1);
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.npc_setForceFlip("oid=1707200", -1);
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.updateInfoQuest(64698, "flower=1");
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/flower", "oid=1707200"], [3000, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#雪莉大婶说不定会在万圣节回家呢……大婶要是看见这束花，一定会开心吧？", 37, 9400926, false, true);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("#face1#那样凯尼斯就也会开心了吧？嘿嘿。", 37, 9400926, true, true);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#……特鲁迪。", 37, 9400922, true, true);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#谢谢你，特鲁迪。你是我们之中对万圣节理解得最为透彻的人。", 37, 9400922, true, true);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face1#嗯……？是勇士告诉我会有幽灵出来的嘛。", 37, 9400926, true, true);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.sendNormalTalk_Bottom("#b可是……我也没想到我们的家人也会回来。", 57, 0, true, true);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#b谢谢你让我能从全新的视角看待万圣节。", 57, 0, true, true);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.sendNormalTalk_Bottom("#face1#嘿嘿……特鲁迪，我也要谢谢你。你让万圣节变成了一个对我来说很特别的日子。", 37, 9400922, true, true);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#呃嗯……我不太明白。", 37, 9400926, true, true);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#啊！对了勇士，特鲁迪的糖果呢？", 37, 9400926, true, true);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("#b呃……嗯？", 57, 0, true, true);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl"], [2000, 0, 0, 1, 0, 0, 0, 0]);
                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("#face1#勇士不给我糖！我要去大闹勇士家啦。", 37, 9400926, false, true);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.sendNormalTalk_Bottom("#face1#凯蒂，我们走！", 37, 9400926, true, true);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.npc_SetForceMove("oid=1707200", -1, 250, 100);
                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.Npc_Fadeout("oid=1707200", 0, 1200);
                                                                                                                                                                    cm.sendNewEffects(13, [1500, -100, 0, 0, 0]);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.Npc_Fadeout("oid=1707201", 0, 1200);
                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.npc_setForceFlip("oid=1706904", -1);
                                                                                                                                                                        cm.npc_setForceFlip("oid=1706903", -1);
                                                                                                                                                                        cm.npc_setForceFlip("oid=1706902", -1);
                                                                                                                                                                        cm.npc_setForceFlip("oid=1706905", -1);
                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face2#哈哈哈，你快回去看看吧。不知道特鲁迪要怎么捣蛋呢。", 37, 9400920, false, true);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face1#嘿嘿，#h0#要准备好应付特鲁迪了。", 37, 9400922, true, true);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.forceCompleteQuest(64698);
                                                                                                                                                                              cm.updateInfoQuest(500841, "end=1;name=" + cm.getPlayer().getName());
                                                                                                                                                                              cm.updateInfoQuest(64699, "reward=1");
                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face1#给你。有了你丰富的想象力帮忙，我一定能打造出一栋壮观的万圣节大宅。敬请期待吧！", 37, 9400922, true, true);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.gainItem(2631049, 1);
                                                                                                                                                                                cm.gainItem(2672093, 1);
                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face1##h0#，这是我的报酬，你一起拿着吧。", 37, 9400924, true, true);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#b谢谢你，凯尼斯！谢谢你，米兰达！我们一会儿见！", 57, 0, true, true);
                                                                                                                                                                                } else if (status === V++) {
                                                                                                                                                                                  cm.warp(871000001, 1);
                                                                                                                                                                                  cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                  cm.npc_LeaveField("oid=1706900");
                                                                                                                                                                                  cm.npc_LeaveField("oid=1706901");
                                                                                                                                                                                  cm.npc_LeaveField("oid=1706902");
                                                                                                                                                                                  cm.npc_LeaveField("oid=1706903");
                                                                                                                                                                                  cm.npc_LeaveField("oid=1706904");
                                                                                                                                                                                  cm.npc_LeaveField("oid=1706905");
                                                                                                                                                                                  cm.npc_LeaveField("oid=1707200");
                                                                                                                                                                                  cm.npc_LeaveField("oid=1707201");
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