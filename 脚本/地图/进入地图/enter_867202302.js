var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (cm.isQuestFinished(64102)) {
    action2(f, E, e);
  } else {
    action1(f, E, e);
  }
}
function action2(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else if (status === V++) {
    cm.npc_ChangeController(9400600, "oid=204478", -49, -175, 24, -99, -20, 1, true, false);
    cm.npc_ChangeController(9400601, 'oid=204479', 7, -175, 35, 7, 57, 1, true, false);
    cm.npc_ChangeController(9400604, "oid=204480", 1596, -508, 47, 1546, 1646, 1, true, false);
    cm.npc_ChangeController(9400603, "oid=204481", 93, -175, 35, 43, 143, 1, true, false);
    cm.npc_ChangeController(9400603, "oid=204482", 443, -175, 37, 393, 493, 1, true, false);
    cm.npc_ChangeController(9400603, "oid=204483", 330, -175, 37, 280, 380, 1, true, false);
    cm.npc_ChangeController(9400604, 'oid=204484', 260, -175, 36, 210, 310, 1, true, false);
    cm.npc_ChangeController(9400582, "oid=204485", -30, -65, 18, -80, -20, 1, true, false);
    cm.npc_ChangeController(9400589, "oid=204486", -320, -65, 18, -370, -270, 0, true, false);
    cm.npc_ChangeController(9400591, "oid=204487", -441, -65, 18, -491, -391, 0, true, false);
    cm.npc_ChangeController(9400592, "oid=204488", -504, -65, 18, -554, -454, 0, true, false);
    cm.npc_ChangeController(9400593, "oid=204489", -389, -65, 18, -439, -339, 0, true, false);
    cm.npc_ChangeController(9400598, 'oid=204490', -279, 99, 10, -329, -229, 0, true, false);
    cm.npc_ChangeController(9400599, "oid=204491", -220, 101, 10, -270, -170, 0, true, false);
    cm.npc_ChangeController(9400581, "oid=204492", -209, -176, 23, -259, -159, 0, true, false);
    cm.npc_ChangeController(9400583, "oid=204493", -15, 84, 11, -65, -15, 1, true, false);
    cm.npc_ChangeController(9400584, "oid=204494", 44, 83, 28, 20, 94, 1, true, false);
    cm.npc_ChangeController(9400585, 'oid=204495', 105, 85, 28, 55, 155, 1, true, false);
    cm.npc_ChangeController(9400585, "oid=204496", 167, 81, 29, 117, 217, 1, true, false);
    cm.npc_ChangeController(9400585, 'oid=204497', 231, 72, 29, 181, 281, 1, true, false);
    cm.npc_ChangeController(9400585, "oid=204498", 294, 67, 30, 244, 344, 1, true, false);
    cm.npc_ChangeController(9400585, "oid=204499", 357, 65, 30, 307, 407, 1, true, false);
    cm.npc_ChangeController(9400585, "oid=204500", 408, 57, 31, 358, 458, 1, true, false);
    cm.npc_ChangeController(9400599, "oid=204501", -335, 97, 10, -385, -285, 0, true, false);
    cm.npc_ChangeController(9400599, "oid=204502", -392, 96, 10, -442, -342, 0, true, false);
    cm.npc_ChangeController(9400596, "oid=204503", -562, -65, 18, -612, -512, 0, true, false);
    cm.npc_ChangeController(9400596, "oid=204504", -621, -65, 18, -671, -571, 0, true, false);
    cm.npc_ChangeController(9400604, "oid=204505", 384, -175, 37, 334, 434, 1, true, false);
    cm.npc_ChangeController(9400617, 'oid=204506', -460, 95, 9, -510, -410, 0, true, false);
    cm.npc_ChangeController(9400618, 'oid=204507', -509, 95, 9, -559, -459, 0, true, false);
    cm.npc_ChangeController(9400619, "oid=204508", -560, 95, 9, -610, -510, 0, true, false);
    cm.npc_ChangeController(9400596, "oid=204509", -673, 97, 8, -723, -623, 0, true, false);
    cm.npc_ChangeController(9400629, "oid=204510", -613, 95, 9, -663, -563, 0, true, false);
    cm.npc_ChangeController(9400635, "oid=204511", 141, -175, 36, 91, 191, 1, true, false);
    cm.npc_ChangeController(9400570, "oid=204512", 1365, 15, 33, 1315, 1415, 1, false, false);
    cm.npc_ChangeController(9400580, "oid=7530523", -145, -180, 24, -195, -95, 0, true, false);
    cm.npc_SetSpecialAction("oid=7530523", "summon", 0, 0);
    cm.npc_ChangeController(9400586, "oid=7530524", 50, -180, 35, 0, 100, 1, true, false);
    cm.npc_SetSpecialAction("oid=7530524", "summon", 0, 0);
    cm.npc_ChangeController(9400587, "oid=7530525", -185, -75, 18, -235, -135, 0, true, false);
    cm.npc_SetSpecialAction("oid=7530525", "summon", 0, 0);
    cm.npc_ChangeController(9400588, "oid=7530526", -240, -75, 18, -290, -190, 0, true, false);
    cm.npc_SetSpecialAction("oid=7530526", "summon", 0, 0);
    cm.npc_ChangeController(9400597, "oid=7530527", -145, 85, 11, -195, -95, 0, true, false);
    cm.npc_SetSpecialAction("oid=7530527", 'summon', 0, 0);
    cm.forceCompleteQuest(64208);
    cm.dispose();
  }
}
function action1(f, E, e) {
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
      cm.npc_ChangeController(9400600, 'oid=204478', -49, -175, 24, -99, -20, 5, true, false);
      cm.npc_ChangeController(9400601, "oid=204479", 7, -175, 35, 7, 57, 5, true, false);
      cm.npc_ChangeController(9400604, "oid=204480", 1596, -508, 47, 1546, 1646, 5, true, false);
      cm.npc_ChangeController(9400603, "oid=204481", 93, -175, 35, 43, 143, 5, true, false);
      cm.npc_ChangeController(9400603, "oid=204482", 443, -175, 37, 393, 493, 5, true, false);
      cm.npc_ChangeController(9400603, "oid=204483", 330, -175, 37, 280, 380, 5, true, false);
      cm.npc_ChangeController(9400604, "oid=204484", 260, -175, 36, 210, 310, 5, true, false);
      cm.npc_ChangeController(9400582, "oid=204485", -30, -65, 18, -80, -20, 5, true, false);
      cm.npc_ChangeController(9400589, "oid=204486", -320, -65, 18, -370, -270, 4, true, false);
      cm.npc_ChangeController(9400591, "oid=204487", -441, -65, 18, -491, -391, 4, true, false);
      cm.npc_ChangeController(9400592, "oid=204488", -504, -65, 18, -554, -454, 4, true, false);
      cm.npc_ChangeController(9400593, "oid=204489", -389, -65, 18, -439, -339, 4, true, false);
      cm.npc_ChangeController(9400598, 'oid=204490', -279, 99, 10, -329, -229, 4, true, false);
      cm.npc_ChangeController(9400599, "oid=204491", -220, 101, 10, -270, -170, 4, true, false);
      cm.npc_ChangeController(9400581, "oid=204492", -209, -175, 23, -259, -159, 4, true, false);
      cm.npc_ChangeController(9400583, "oid=204493", -15, 83, 11, -65, -15, 5, true, false);
      cm.npc_ChangeController(9400584, "oid=204494", 44, 83, 28, 20, 94, 5, true, false);
      cm.npc_ChangeController(9400585, 'oid=204495', 105, 85, 28, 55, 155, 5, true, false);
      cm.npc_ChangeController(9400585, 'oid=204496', 167, 80, 29, 117, 217, 5, true, false);
      cm.npc_ChangeController(9400585, "oid=204497", 231, 71, 29, 181, 281, 5, true, false);
      cm.npc_ChangeController(9400585, "oid=204498", 294, 66, 30, 244, 344, 5, true, false);
      cm.npc_ChangeController(9400585, "oid=204499", 357, 64, 30, 307, 407, 5, true, false);
      cm.npc_ChangeController(9400585, 'oid=204500', 408, 56, 31, 358, 458, 5, true, false);
      cm.npc_ChangeController(9400599, "oid=204501", -335, 97, 10, -385, -285, 4, true, false);
      cm.npc_ChangeController(9400599, "oid=204502", -392, 96, 10, -442, -342, 4, true, false);
      cm.npc_ChangeController(9400596, 'oid=204503', -562, -65, 18, -612, -512, 4, true, false);
      cm.npc_ChangeController(9400596, 'oid=204504', -621, -65, 18, -671, -571, 4, true, false);
      cm.npc_ChangeController(9400604, "oid=204505", 384, -175, 37, 334, 434, 5, true, false);
      cm.npc_ChangeController(9400617, "oid=204506", -460, 95, 9, -510, -410, 4, true, false);
      cm.npc_ChangeController(9400618, "oid=204507", -509, 95, 9, -559, -459, 4, true, false);
      cm.npc_ChangeController(9400619, "oid=204508", -560, 95, 9, -610, -510, 4, true, false);
      cm.npc_ChangeController(9400596, "oid=204509", -673, 96, 8, -723, -623, 4, true, false);
      cm.npc_ChangeController(9400629, "oid=204510", -613, 95, 9, -663, -563, 4, true, false);
      cm.npc_ChangeController(9400635, "oid=204511", 141, -175, 36, 91, 191, 5, true, false);
      cm.npc_ChangeController(9400570, 'oid=204512', 1365, 15, 33, 1315, 1415, 1, false, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9400580, "oid=7642424", -80, -118, 20, -130, -30, 1, true, false);
      cm.npc_SetSpecialAction("oid=7642424", "summon", 0, 0);
      cm.npc_ChangeController(9400586, "oid=7642425", 200, -180, 36, 150, 250, 1, true, false);
      cm.npc_SetSpecialAction("oid=7642425", 'summon', 0, 0);
      cm.npc_ChangeController(9400587, "oid=7642426", -185, -75, 18, -235, -135, 0, true, false);
      cm.npc_SetSpecialAction("oid=7642426", "summon", 0, 0);
      cm.npc_ChangeController(9400588, "oid=7642427", -240, -75, 18, -290, -190, 0, true, false);
      cm.npc_SetSpecialAction("oid=7642427", "summon", 0, 0);
      cm.npc_ChangeController(9400597, "oid=7642428", -145, 85, 11, -195, -95, 0, true, false);
      cm.npc_SetSpecialAction("oid=7642428", 'summon', 0, 0);
      cm.forceStartQuest(64167, "sober");
      cm.sendNewEffects(12, [0, -120, 50, 0, 0]);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("我们都到齐了。", 37, 9400600, false, true);
            } else {
              if (status === V++) {
                cm.npc_setForceFlip("oid=7642424", 1);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.npc_setForceFlip("oid=7642424", -1);
                  cm.sendNormalTalk_Bottom("#face0#卡夫塔佩、斯巴乐缇、还有亚皮纳斯派遣队… 大家都到齐了。", 37, 9400580, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#首先，由衷的感谢在这种艰难的条件下，还欣然接纳我们的维尔纳村长和斯库亚斯居民们。", 37, 9400580, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#还有，感谢相信我，和我一同赶过来的大家。", 37, 9400580, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#我们聚在一起能有什么用？我们不是奔着那牢固的城墙来的吗。", 37, 9400597, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#古纳德村长，这是我们自己的事，不是别人的事。", 37, 9400587, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#可汗村长说的对，我们是来帮助你们的！", 37, 9400581, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("我们聚集在这里的目的，不就是为了迎击敌人吗？还是先听听他们的想法吧！", 37, 9400600, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#… 非常感谢。", 37, 9400580, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#这位 #h0# 来这的目的，是因为收到了一位老婆婆的信，信里说让他拯救阿布鲁。他既不属于亚皮纳斯，也非出身阿布鲁。", 37, 9400580, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#我和 #h0# 一起找到了森林里那位老婆婆居住的小屋，但是在那里却遭遇了率领大批怪物军团的巨大怪兽。", 37, 9400580, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNewEffects(17, [3000, 1000, 2000, -120, -70]);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#b…然后我们就知道了。", 57, 0, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#b这不是凭一己之力就能够解决的。", 57, 0, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#b我是一个喜欢游荡的勇士。", 57, 0, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#b喜欢一个人到这到那，甚至还去过脱离了冒险岛世界的地方。我的目标就是周游这些危险的地方，去帮助他人，同时也能让自己变的更强。", 57, 0, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#b所以我早已习惯了一个人。", 57, 0, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#b但是来到这里之后才发现，很多事情不是能够靠我自己的力量就能解决的。", 57, 0, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#b在森林里碰到了此次事件的主谋，但是我也无能为力，只能急于逃命。", 57, 0, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#b我愧对自己的懦弱，在不知所措中彷徨的时候，", 57, 0, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#b艾丽卡对我说了一句话。", 57, 0, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#b其实一个人能做的事情非常有限… ", 57, 0, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#b后来我仔细想了一下，我所认为的凭借自身力量帮助别人的事情，其实也有很多人同时在帮助我。", 57, 0, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#b我只是没注意到罢了。", 57, 0, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#b现在我明白了，我们在一起的时候能做很多的事情。", 57, 0, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#b所有人当中，没有一位能够有能力单独解决本次事态。", 57, 0, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#b只要我们能互相帮助，互相弥补不足之处，", 57, 0, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#b我们肯定能做到，我们能解决这个事态。", 57, 0, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#b不要再妄想着有人会来帮我们。", 57, 0, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#b我们不能等待这种侥幸，而只能通过我们自己的双手去努力解决这个事态。", 57, 0, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#b… 这里是最后的堡垒。我们要把所有力量团结在一起才能解除危机。", 57, 0, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNewEffects(17, [0, 2000, 2000, -400, -80]);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("但是… 这里很多人都不会打仗，甚至连刀都没有握过。", 37, 9400591, false, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNewEffects(17, [0, 2000, 2000, 110, -170]);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("我们也一样，我们也没有遇到过那么大规模的怪物… ", 37, 9400603, false, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNewEffects(17, [0, 2000, 2000, -200, 120]);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("… 我们顶多能消灭一些鱼和小的花花象而已。", 37, 9400598, false, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#与其在这里浪费时间，还不如乘坐大篷车到冰峰雪域避难，不就能活下来了吗？", 37, 9400597, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNewEffects(17, [0, 2000, 2000, -500, -80]);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("这位勇士也只能勉强逃生而已… 凭我们的本事还能逃到哪里？", 37, 9400596, false, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0#现在大家不是自己一个人！", 37, 9400589, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("但是… 但是我们根本帮不上什么忙。亚皮纳斯的骑士就另当别论… ", 37, 9400596, true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("… 对啊。亚皮纳斯！亚皮纳斯骑士团们什么时候还会再来？会来救我们吧？", 37, 9400591, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNewEffects(17, [3000, 2000, 2000, -50, -180]);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.npc_SetForceMove("oid=7642425", -1, 100, 50);
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("你们到底在说些什么！", 37, 9400586, false, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("这件事情和这位勇士，和亚皮纳斯派遣队，和那位姑娘都没有任何关系！", 37, 9400586, true, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("这纯粹是我们自己的事情，因为这里是我们的家园！", 37, 9400586, true, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("难道你们要离开这里吗？那我们的家园怎么办，那些还没有回来的家人们又怎么办？", 37, 9400586, true, true);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNewEffects(12, [1000, -120, -90, 0, 0]);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                    cm.effect_NormalSpeechBalloon("#b(信件… 老婆婆…？)", 0, 0, 1, 2000, 0, cm.getPlayer().getId());
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                      cm.effect_NormalSpeechBalloon("(森林小屋的老婆婆！)", 0, 0, 1, 2000, 9400580, cm.getPlayer().getId());
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNewEffects(14, [1000, 2000, 1000, 0, 0]);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.npc_setForceFlip("oid=7642427", -1);
                                                                                                                                            cm.sendNormalTalk_Bottom("这位老婆婆说的对！阿尔西叔叔，你不是还要找女儿嘛！我也得回家等我的母亲回来！", 37, 9400588, false, true);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#… 我… 我……！", 37, 9400592, true, true);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#… 我… 我能做什么… ", 37, 9400592, true, true);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.sendNormalTalk_Bottom("#b当然，有很多事情需要大家帮忙。", 57, 0, true, true);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.npc_setForceFlip("oid=7642427", 1);
                                                                                                                                                    cm.sendNormalTalk_Bottom("#b不一定非得要奔赴战场才是对抗敌人。", 57, 0, true, true);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.sendNormalTalk_Bottom("那么… 我也能帮忙吗？", 37, 9400591, true, true);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("#b当然！", 57, 0, true, true);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.sendNormalTalk_Bottom("那… 我也！", 37, 9400598, true, true);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                              cm.effect_NormalSpeechBalloon("卡夫塔佩愿意和 #h0# 一同作战。", 0, 0, 0, 3000, 9400587, cm.getPlayer().getId());
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                                cm.effect_NormalSpeechBalloon("当然，我们大家都有增添一份力量！", 0, 0, 0, 3000, 9400589, cm.getPlayer().getId());
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                                                                                                                  cm.effect_NormalSpeechBalloon("让我也加入吧！", 0, 0, 0, 3000, 9400588, cm.getPlayer().getId());
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.setMobImage("PL_MONAD.img/EP1/ACT3/talking", 100);
                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.npc_setForceFlip("oid=7642428", -1);
                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                      cm.effect_NormalSpeechBalloon("切… 我能帮到什么忙不？", 1, 0, 0, 3000, 9400597, cm.getPlayer().getId());
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                        cm.effect_NormalSpeechBalloon("村长！并不一定要去前线和怪物对抗，\r\n刚才 #h0# 不是说过了吗？", 1, 0, 0, 3000, 9400598, cm.getPlayer().getId());
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                                          cm.effect_NormalSpeechBalloon("那也太有损我形象了吧！？", 1, 0, 0, 3000, 9400597, cm.getPlayer().getId());
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                                            cm.effect_NormalSpeechBalloon("我能帮什么吗？\r\n顶多会用这木头弓而已…", 1, 0, 0, 3000, 9400629, cm.getPlayer().getId());
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                                              cm.effect_NormalSpeechBalloon("我们彼此彼此…", 1, 0, 0, 3000, 9400635, cm.getPlayer().getId());
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.npc_setForceFlip("oid=7642428", 1);
                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                                                  cm.effect_NormalSpeechBalloon("咳呵~~！那什么，\r\n非要鼓动这些无辜的人！", 1, 0, 0, 3000, 9400597, cm.getPlayer().getId());
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                                                    cm.effect_NormalSpeechBalloon('不是那样子吧？', 1, 0, 0, 3000, 9400598, cm.getPlayer().getId());
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                      cm.npc_setForceFlip("oid=7642428", -1);
                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                                                        cm.effect_NormalSpeechBalloon("你到底站在哪一边？", 1, 0, 0, 3000, 9400597, cm.getPlayer().getId());
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                          cm.playSoundEffDirectly("PL_MONAD.img/EP1/ACT3/talking");
                                                                                                                                                                                          cm.sendNewEffects(17, [2000, 1000, 2000, -120, -90]);
                                                                                                                                                                                        } else {
                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                          } else {
                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#人们比想象中还算是配合… 但还是… ", 37, 9400580, false, true);
                                                                                                                                                                                            } else {
                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#b不能一开始就奢望所有人都能一条心吧。", 57, 0, true, true);
                                                                                                                                                                                              } else {
                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#b现在还有时间，大家多磨合一下就可以了。", 57, 0, true, true);
                                                                                                                                                                                                } else {
                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0##h0#……", 37, 9400580, true, true);
                                                                                                                                                                                                  } else {
                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#b…在那之前… ", 57, 0, true, true);
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                        cm.sendNormalTalk_Bottom('#b老婆婆！！！', 57, 0, true, true);
                                                                                                                                                                                                      } else {
                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                          cm.npc_setForceFlip("oid=7642424", 1);
                                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                            cm.sendNewEffects(17, [0, 2000, 3000, -50, -170]);
                                                                                                                                                                                                          } else {
                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                cm.sendNewEffects(17, [0, 2000, 3000, -120, -80]);
                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                  cm.npc_setForceFlip("oid=7642424", -1);
                                                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                                                                                                                                  cm.effect_NormalSpeechBalloon("是你吧？这照片里的人。", 1, 0, 0, 2000, 9400580, cm.getPlayer().getId());
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                                                                                    cm.effect_NormalSpeechBalloon("#b就是她！", 1, 0, 0, 2000, 0, cm.getPlayer().getId());
                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                      cm.sendNewEffects(14, [0, 3000, 1000, 0, 0]);
                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                        cm.sendNewEffects(19, [0]);
                                                                                                                                                                                                                      } else if (status === V++) {
                                                                                                                                                                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                                                        cm.forceCompleteQuest(64102);
                                                                                                                                                                                                                        cm.forceCompleteQuest(64012);
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
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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