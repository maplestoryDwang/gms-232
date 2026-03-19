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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.setStandAloneMode(true);
      cm.setAmbience("Ambience.img/blizzard_soft", 200, 60);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -303, -545);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.emotion(1, 7000);
          cm.inGameDirectionEvent_ForcedFlip(-1);
          cm.inGameDirectionEvent_AskAnswerTime(2000);
          cm.effect_Text(["#fn黑体##fs18#几天后，商队避难处入口"], [100, 2200, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 1000, 3000, -303, 70);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(4000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face1#（呃，呃呃……我昏迷了多久啊？倒下的地方是沙漠……好像还听到了吵闹的声音……）", 37, 3001500 + cm.getPlayer().getGender(), 0, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face1#（奇怪的事情实在太多了。我为什么会失去了记忆，倒在沙漠里呢？手臂上的这个东西又是什么呢……）", 37, 3001500 + cm.getPlayer().getGender(), 1, 1);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_OneTimeAction(0, 300);
                    cm.inGameDirectionEvent_AskAnswerTime(300);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_ForcedFlip(1);
                      cm.inGameDirectionEvent_OneTimeAction(0, 300);
                      cm.inGameDirectionEvent_AskAnswerTime(300);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_ForcedFlip(-1);
                        cm.inGameDirectionEvent_OneTimeAction(0, 300);
                        cm.inGameDirectionEvent_AskAnswerTime(300);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_ForcedFlip(0);
                          cm.sendNormalTalk_Bottom("#face2#（啊，被绑起来了？到底是谁……这是什么地方……是想害我吗？还是另有所图？）", 37, 3001500 + cm.getPlayer().getGender(), 0, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face3#（不，好像不是坏蛋。虽然身上好像有好几处伤口……）", 37, 3001500 + cm.getPlayer().getGender(), 1, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#（……他们没有杀我。那到底是为什么……）", 37, 3001500 + cm.getPlayer().getGender(), 1, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face5#（不知道。希望他们比较好说话……要不然……）", 37, 3001500 + cm.getPlayer().getGender(), 1, 1);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_ForcedFlip(-1);
                                  cm.inGameDirectionEvent_OneTimeAction(0, 300);
                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#（绳子好像可以想办法弄断……虽然需要花费一点时间。）", 37, 3001500 + cm.getPlayer().getGender(), 0, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face3#（在附近感觉到的气息……大概有二十个人？这么多人应该有机会逃出去。）", 37, 3001500 + cm.getPlayer().getGender(), 1, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#（……现在只能期待能通过对话解决了……）", 37, 3001500 + cm.getPlayer().getGender(), 1, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face2#（啊，有人往这边来了。）", 37, 3001500 + cm.getPlayer().getGender(), 1, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_ChangeController(3001509, "oid=143759639", -1250, 90, 63, -1300, -1200, 0, true, 0, false);
                                            cm.npc_SetSpecialAction("oid=143759639", "summon", 0, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.OverlapScreenDetail19(0, 300, 300, 1);
                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_RemoveOverlapScreenDetail(300);
                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -1200, 150);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_SetForceMove("oid=143759639", 1, 150, 70);
                                                    cm.inGameDirectionEvent_PushScaleInfo(3500, 0, 2000, 3500, -950, 150);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face2#咚次咚次，今天唱的歌一定很不错。", 37, 3001509, 0, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.npc_setForceFlip("oid=143759639", -1);
                                                          cm.inGameDirectionEvent_PushScaleInfo(5000, 0, 2000, 5000, -730, 150);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_SetForceMove("oid=143759639", 1, 150, 70);
                                                            cm.sendNormalTalk_Bottom("#face2#哦，跳得还不错嘛？这就是绚烂的舞步？", 37, 3001509, 0, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.npc_setForceFlip("oid=143759639", -1);
                                                                cm.npc_SetForceMove("oid=143759639", 1, 430, 100);
                                                                cm.sendNormalTalk_Bottom("#face3#哦，今天是我巴克巴克当班！哦，大家还好吗？切克！切克！", 37, 3001509, 0, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face4#哦，要今天引爆吗，我的定时炸弹！哦，你的状态切克！切克！", 37, 3001509, 0, 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Falldown", 100);
                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=143759639"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                        cm.userSetFieldFloating(402090001, 10, 10, 50);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.userSetFieldFloating(402090001, 0, 0, 0);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -430, 150);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.npc_setForceFlip("oid=143759639", 1);
                                                                              cm.npc_SetForceMove("oid=143759639", -1, 60, 220);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face1#怪，怪，怪，怪物醒来了！！！！！！！", 37, 3001509, 0, 1);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.userSetFieldFloating(402090001, 20, 20, 50);
                                                                                  cm.npc_LeaveField("oid=143759639");
                                                                                  cm.npc_ChangeController(3001509, "oid=143763977", -490, 90, 102, -540, -440, 0, true, 0, false);
                                                                                  cm.npc_SetSpecialAction("oid=143763977", "summon", 0, 0);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.userSetFieldFloating(402090001, 0, 0, 0);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -450, 150);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.npc_ChangeController(3001508, "oid=143764044", -185, 76, 7, -235, -135, 1, true, 500, false);
                                                                                        cm.npc_SetSpecialAction("oid=143764044", 'summon', 0, 0);
                                                                                        cm.npc_ChangeController(3001510, "oid=143764045", -122, 76, 10, -172, -72, 1, true, 1000, false);
                                                                                        cm.npc_SetSpecialAction("oid=143764045", "summon", 0, 0);
                                                                                        cm.npc_ChangeController(3001514, "oid=143764046", -30, 76, 10, -80, 20, 1, false, 1000, false);
                                                                                        cm.npc_SetSpecialAction("oid=143764046", 'summon', 0, 0);
                                                                                        cm.npc_ChangeController(3001515, "oid=143764047", 10, 127, 9, -40, 60, 1, false, 1000, false);
                                                                                        cm.npc_SetSpecialAction("oid=143764047", "summon", 0, 0);
                                                                                        cm.npc_ChangeController(3001516, "oid=143764048", 70, 127, 11, 20, 120, 1, false, 2000, false);
                                                                                        cm.npc_SetSpecialAction("oid=143764048", "summon", 0, 0);
                                                                                        cm.npc_ChangeController(3001512, "oid=143764049", -570, 76, 102, -620, -520, 0, true, 2000, false);
                                                                                        cm.npc_SetSpecialAction("oid=143764049", "summon", 0, 0);
                                                                                        cm.npc_ChangeController(3001513, "oid=143764050", -620, 76, 102, -670, -570, 0, true, 500, false);
                                                                                        cm.npc_SetSpecialAction("oid=143764050", "summon", 0, 0);
                                                                                        cm.npc_ChangeController(3001520, "oid=143764051", -570, 127, 8, -620, -520, 0, false, 1000, false);
                                                                                        cm.npc_SetSpecialAction("oid=143764051", 'summon', 0, 0);
                                                                                        cm.npc_ChangeController(3001519, "oid=143764052", -640, 127, 73, -690, -590, 0, false, 500, false);
                                                                                        cm.npc_SetSpecialAction("oid=143764052", "summon", 0, 0);
                                                                                        cm.npc_ChangeController(3001517, "oid=143764053", -670, 76, 102, -720, -620, 0, false, 1000, false);
                                                                                        cm.npc_SetSpecialAction("oid=143764053", "summon", 0, 0);
                                                                                        cm.npc_ChangeController(3001518, "oid=143764054", -720, 76, 102, -770, -670, 0, false, 2000, false);
                                                                                        cm.npc_SetSpecialAction("oid=143764054", "summon", 0, 0);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face4#……怪，怪物，你是说……我吗？", 37, 3001500 + cm.getPlayer().getGender(), 0, 1);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1000, 1000, -300, 70);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=143764044"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=143764045"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=143764046"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=143764047"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=143764048"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=143764049"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=143764050"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=143764051"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=143764052"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=143764053"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=143764054"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=143763977"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face2#原来你会说话，叽勒……好像和那些东西不一样。但是……哎呀，我感觉到了不祥的电波，叽勒，叽勒楞……", 37, 3001510, 0, 1);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face4#首先申明，我不是怪物。我一点都不想伤害你们。所以……能先把我放开吗？", 37, 3001500 + cm.getPlayer().getGender(), 1, 1);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face0#喂，怪物，想让我们放开你，就说明你的来历……或者听听我的音乐。", 37, 3001509, 1, 1);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1100);
                                                                                                        cm.effect_NormalSpeechBalloon("从来没见过……你是什么种族呢？", 0, 0, 0, 1000, 0, 0, 0, 0, 4, 3001512, null, cm.getPlayer().getId());
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1100);
                                                                                                          cm.effect_NormalSpeechBalloon("你，来自哪里呢？", 0, 0, 0, 1000, 0, 0, 0, 0, 4, 3001514, null, cm.getPlayer().getId());
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1100);
                                                                                                            cm.effect_NormalSpeechBalloon("手臂上那个是什么东西？", 0, 0, 0, 1000, 0, 0, 0, 0, 4, 3001513, null, cm.getPlayer().getId());
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face3#我，我……其实我也不知道……我是谁……我还想问你们呢！", 37, 3001500 + cm.getPlayer().getGender(), 0, 1);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face3#我想不起来了。能想起来的只有噩梦……还有……这也许是我的名字……亚克，好像有人这样叫过我。", 37, 3001500 + cm.getPlayer().getGender(), 1, 1);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face4#嗯，从电波来看，不像是在说谎，叽勒。", 37, 3001510, 1, 1);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face2#好吧……好像可以对话……如果不是敌人，就没必要绑着了吧……大家怎么认为……", 37, 3001508, 1, 1);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 3000, 0);
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face1#No，NoNo！还没搞清楚他是谁呢！哦，哦哦！也许会发生突变也说不定！", 37, 3001509, 0, 1);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face0#巴克巴克说得对。", 37, 3001512, 1, 1);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face0#避难处已经到极限了。继续倒塌的话……", 37, 3001513, 1, 1);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1100);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face3#（他们的警惕性好像很强。看来暂时是不会放我走了。怎么办……要挣开绳子逃走吗？）", 37, 3001500 + cm.getPlayer().getGender(), 0, 1);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 300, 0);
                                                                                                                                    cm.userSetFieldFloating(402090001, 10, 10, 10);
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.userSetFieldFloating(402090001, 0, 0, 0);
                                                                                                                                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -300, 70);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.userSetFieldFloating(402090001, 3, 3, 3);
                                                                                                                                          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -300, 70);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.setAmbience("Ambience.img/warning", 200, 60);
                                                                                                                                            cm.sendNormalTalk_Bottom("#face2#空，空袭警报……？怪物们又……有武器的商队成员跟着干部走！保卫避难处！", 37, 3001508, 0, 1);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.sendNormalTalk_Bottom("#face2#伤……伤员和孩子们找安全的地方躲起来！好了，快跟我来！", 37, 3001508, 1, 1);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.userSetFieldFloating(402090001, 30, 30, 30);
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.userSetFieldFloating(402090001, 3, 3, 3);
                                                                                                                                                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -300, 70);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.playSoundEffDirectly("Ambience.img/warning");
                                                                                                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission3", 100);
                                                                                                                                                      cm.fieldEffect_PlayBGM("Bgm28.img/helisiumWarcry", 0, 0);
                                                                                                                                                      cm.sendNormalTalk_Bottom("#face2#等，等一下……看那边，叽勒！", 37, 3001510, 0, 1);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.userSetFieldFloating(402090001, 0, 0, 0);
                                                                                                                                                          cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 2000, 1000, -1000, 70);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.userSetFieldFloating(402090001, 3, 3, 3);
                                                                                                                                                              cm.npc_LeaveField("oid=143763977");
                                                                                                                                                              cm.npc_LeaveField("oid=143764049");
                                                                                                                                                              cm.npc_LeaveField("oid=143764050");
                                                                                                                                                              cm.npc_LeaveField("oid=143764051");
                                                                                                                                                              cm.npc_LeaveField("oid=143764052");
                                                                                                                                                              cm.npc_LeaveField("oid=143764053");
                                                                                                                                                              cm.npc_LeaveField("oid=143764054");
                                                                                                                                                              cm.npc_ChangeController(3001527, "oid=143770630", -1450, -273, 85, -1500, -1400, 0, true, 0, false);
                                                                                                                                                              cm.npc_SetSpecialAction("oid=143770630", "summon", 0, 0);
                                                                                                                                                              cm.npc_ChangeController(3001528, "oid=143770631", -1430, -273, 86, -1480, -1380, 0, true, 0, false);
                                                                                                                                                              cm.npc_SetSpecialAction("oid=143770631", 'summon', 0, 0);
                                                                                                                                                              cm.npc_ChangeController(3001527, "oid=143770632", -1420, -273, 86, -1470, -1370, 0, true, 0, false);
                                                                                                                                                              cm.npc_SetSpecialAction("oid=143770632", "summon", 0, 0);
                                                                                                                                                              cm.npc_ChangeController(3001528, "oid=143770633", -1400, -273, 86, -1450, -1350, 0, true, 0, false);
                                                                                                                                                              cm.npc_SetSpecialAction("oid=143770633", "summon", 0, 0);
                                                                                                                                                              cm.npc_ChangeController(3001527, "oid=143770634", -1380, -273, 87, -1430, -1330, 0, true, 0, false);
                                                                                                                                                              cm.npc_SetSpecialAction("oid=143770634", "summon", 0, 0);
                                                                                                                                                              cm.npc_ChangeController(3001528, "oid=143770635", -1370, -273, 87, -1420, -1320, 0, true, 0, false);
                                                                                                                                                              cm.npc_SetSpecialAction("oid=143770635", 'summon', 0, 0);
                                                                                                                                                              cm.npc_ChangeController(3001527, "oid=143770636", -1350, -273, 87, -1400, -1300, 0, true, 0, false);
                                                                                                                                                              cm.npc_SetSpecialAction("oid=143770636", "summon", 0, 0);
                                                                                                                                                              cm.npc_ChangeController(3001528, "oid=143770637", -1300, -273, 89, -1350, -1250, 0, true, 0, false);
                                                                                                                                                              cm.npc_SetSpecialAction("oid=143770637", "summon", 0, 0);
                                                                                                                                                              cm.npc_ChangeController(3001527, "oid=143770638", -1450, -78, 76, -1500, -1400, 0, true, 0, false);
                                                                                                                                                              cm.npc_SetSpecialAction("oid=143770638", 'summon', 0, 0);
                                                                                                                                                              cm.npc_ChangeController(3001528, "oid=143770639", -1430, -78, 77, -1480, -1380, 0, true, 0, false);
                                                                                                                                                              cm.npc_SetSpecialAction("oid=143770639", "summon", 0, 0);
                                                                                                                                                              cm.npc_ChangeController(3001527, "oid=143770640", -1420, -78, 77, -1470, -1370, 0, true, 0, false);
                                                                                                                                                              cm.npc_SetSpecialAction("oid=143770640", "summon", 0, 0);
                                                                                                                                                              cm.npc_ChangeController(3001528, "oid=143770641", -1410, -78, 78, -1460, -1360, 0, true, 0, false);
                                                                                                                                                              cm.npc_SetSpecialAction("oid=143770641", "summon", 0, 0);
                                                                                                                                                              cm.npc_ChangeController(3001527, "oid=143770642", -1350, -78, 69, -1400, -1300, 0, true, 0, false);
                                                                                                                                                              cm.npc_SetSpecialAction("oid=143770642", "summon", 0, 0);
                                                                                                                                                              cm.npc_ChangeController(3001528, "oid=143770643", -1320, -78, 69, -1370, -1270, 0, true, 0, false);
                                                                                                                                                              cm.npc_SetSpecialAction("oid=143770643", 'summon', 0, 0);
                                                                                                                                                              cm.npc_ChangeController(3001527, "oid=143770644", -1300, -78, 69, -1350, -1250, 0, true, 0, false);
                                                                                                                                                              cm.npc_SetSpecialAction("oid=143770644", 'summon', 0, 0);
                                                                                                                                                              cm.npc_ChangeController(3001528, "oid=143770645", -1280, -78, 69, -1330, -1230, 0, true, 0, false);
                                                                                                                                                              cm.npc_SetSpecialAction("oid=143770645", "summon", 0, 0);
                                                                                                                                                              cm.npc_ChangeController(3001527, "oid=143770646", -1350, 150, 71, -1400, -1300, 0, true, 0, false);
                                                                                                                                                              cm.npc_SetSpecialAction("oid=143770646", "summon", 0, 0);
                                                                                                                                                              cm.npc_ChangeController(3001528, "oid=143770647", -1120, 150, 72, -1170, -1070, 0, true, 0, false);
                                                                                                                                                              cm.npc_SetSpecialAction("oid=143770647", "summon", 0, 0);
                                                                                                                                                              cm.npc_ChangeController(3001527, "oid=143770648", -1200, 150, 71, -1250, -1150, 0, true, 0, false);
                                                                                                                                                              cm.npc_SetSpecialAction("oid=143770648", 'summon', 0, 0);
                                                                                                                                                              cm.npc_ChangeController(3001528, "oid=143770649", -1480, 150, 104, -1530, -1430, 0, true, 0, false);
                                                                                                                                                              cm.npc_SetSpecialAction("oid=143770649", 'summon', 0, 0);
                                                                                                                                                              cm.npc_SetForceMove("oid=143770630", 1, 600, 300);
                                                                                                                                                              cm.npc_SetForceMove("oid=143770631", 1, 400, 300);
                                                                                                                                                              cm.npc_SetForceMove("oid=143770632", 1, 500, 300);
                                                                                                                                                              cm.npc_SetForceMove("oid=143770633", 1, 400, 300);
                                                                                                                                                              cm.npc_SetForceMove("oid=143770634", 1, 600, 300);
                                                                                                                                                              cm.npc_SetForceMove("oid=143770635", 1, 400, 300);
                                                                                                                                                              cm.npc_SetForceMove("oid=143770636", 1, 700, 300);
                                                                                                                                                              cm.npc_SetForceMove("oid=143770637", 1, 400, 300);
                                                                                                                                                              cm.npc_SetForceMove("oid=143770638", 1, 500, 300);
                                                                                                                                                              cm.npc_SetForceMove("oid=143770639", 1, 400, 300);
                                                                                                                                                              cm.npc_SetForceMove("oid=143770640", 1, 400, 300);
                                                                                                                                                              cm.npc_SetForceMove("oid=143770641", 1, 500, 300);
                                                                                                                                                              cm.npc_SetForceMove("oid=143770642", 1, 400, 300);
                                                                                                                                                              cm.npc_SetForceMove("oid=143770643", 1, 600, 300);
                                                                                                                                                              cm.npc_SetForceMove("oid=143770644", 1, 400, 300);
                                                                                                                                                              cm.npc_SetForceMove("oid=143770645", 1, 700, 300);
                                                                                                                                                              cm.npc_SetForceMove("oid=143770646", 1, 300, 300);
                                                                                                                                                              cm.npc_SetForceMove("oid=143770647", 1, 200, 300);
                                                                                                                                                              cm.npc_SetForceMove("oid=143770648", 1, 400, 300);
                                                                                                                                                              cm.npc_SetForceMove("oid=143770649", 1, 400, 300);
                                                                                                                                                              cm.npc_SetSpecialAction("oid=143770630", "move", -1, 1);
                                                                                                                                                              cm.npc_SetSpecialAction("oid=143770631", "move", -1, 1);
                                                                                                                                                              cm.npc_SetSpecialAction("oid=143770632", "move", -1, 1);
                                                                                                                                                              cm.npc_SetSpecialAction("oid=143770633", "move", -1, 1);
                                                                                                                                                              cm.npc_SetSpecialAction("oid=143770634", "move", -1, 1);
                                                                                                                                                              cm.npc_SetSpecialAction("oid=143770635", "move", -1, 1);
                                                                                                                                                              cm.npc_SetSpecialAction("oid=143770636", "move", -1, 1);
                                                                                                                                                              cm.npc_SetSpecialAction("oid=143770637", "move", -1, 1);
                                                                                                                                                              cm.npc_SetSpecialAction("oid=143770638", "move", -1, 1);
                                                                                                                                                              cm.npc_SetSpecialAction("oid=143770639", "move", -1, 1);
                                                                                                                                                              cm.npc_SetSpecialAction("oid=143770640", "move", -1, 1);
                                                                                                                                                              cm.npc_SetSpecialAction("oid=143770641", 'move', -1, 1);
                                                                                                                                                              cm.npc_SetSpecialAction("oid=143770642", "move", -1, 1);
                                                                                                                                                              cm.npc_SetSpecialAction("oid=143770643", "move", -1, 1);
                                                                                                                                                              cm.npc_SetSpecialAction("oid=143770644", "move", -1, 1);
                                                                                                                                                              cm.npc_SetSpecialAction("oid=143770645", "move", -1, 1);
                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.userSetFieldFloating(402090001, 0, 0, 0);
                                                                                                                                                                cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 2000, 1000, -750, 150);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.userSetFieldFloating(402090001, 3, 3, 3);
                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face1#大家快逃！！！！！！！", 37, 3001508, 0, 1);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face2#嗯……抱歉，误会了。我马上放你走。你也快逃吧！", 37, 3001508, 0, 1);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                                                                                                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
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
                                                                                                                                                                                        cm.setStandAloneMode(false);
                                                                                                                                                                                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                                                                                        cm.warp(402000615, 0, false);
                                                                                                                                                                                        cm.eventSKill(0);
                                                                                                                                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                        cm.npc_LeaveField("oid=143764044");
                                                                                                                                                                                        cm.npc_LeaveField("oid=143764045");
                                                                                                                                                                                        cm.npc_LeaveField("oid=143764046");
                                                                                                                                                                                        cm.npc_LeaveField("oid=143764047");
                                                                                                                                                                                        cm.npc_LeaveField("oid=143764048");
                                                                                                                                                                                        cm.npc_LeaveField("oid=143770630");
                                                                                                                                                                                        cm.npc_LeaveField("oid=143770631");
                                                                                                                                                                                        cm.npc_LeaveField("oid=143770632");
                                                                                                                                                                                        cm.npc_LeaveField("oid=143770633");
                                                                                                                                                                                        cm.npc_LeaveField("oid=143770634");
                                                                                                                                                                                        cm.npc_LeaveField("oid=143770635");
                                                                                                                                                                                        cm.npc_LeaveField("oid=143770636");
                                                                                                                                                                                        cm.npc_LeaveField("oid=143770637");
                                                                                                                                                                                        cm.npc_LeaveField("oid=143770638");
                                                                                                                                                                                        cm.npc_LeaveField("oid=143770639");
                                                                                                                                                                                        cm.npc_LeaveField("oid=143770640");
                                                                                                                                                                                        cm.npc_LeaveField("oid=143770641");
                                                                                                                                                                                        cm.npc_LeaveField("oid=143770642");
                                                                                                                                                                                        cm.npc_LeaveField("oid=143770643");
                                                                                                                                                                                        cm.npc_LeaveField("oid=143770644");
                                                                                                                                                                                        cm.npc_LeaveField("oid=143770645");
                                                                                                                                                                                        cm.npc_LeaveField("oid=143770646");
                                                                                                                                                                                        cm.npc_LeaveField("oid=143770647");
                                                                                                                                                                                        cm.npc_LeaveField("oid=143770648");
                                                                                                                                                                                        cm.npc_LeaveField("oid=143770649");
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