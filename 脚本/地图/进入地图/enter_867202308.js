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
      cm.npc_ChangeController(9400635, "oid=204547", -1176, 106, 5, -1226, -1126, 0, true, false);
      cm.npc_ChangeController(9400636, "oid=204548", -1244, 103, 5, -1294, -1194, 0, true, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -1050, 70);
      cm.npc_ChangeController(9400590, "oid=7538537", -1000, 50, 6, -1050, -950, 0, true, false);
      cm.npc_SetSpecialAction("oid=7538537", "summon", 0, 0);
      cm.npc_ChangeController(9400597, "oid=7538538", -900, 50, 7, -950, -850, 0, true, false);
      cm.npc_SetSpecialAction("oid=7538538", 'summon', 0, 0);
      cm.npc_ChangeController(9400592, "oid=7538539", -150, 70, 11, -200, -100, 1, true, false);
      cm.npc_SetSpecialAction("oid=7538539", "summon", 0, 0);
      cm.npc_ChangeController(9400587, "oid=7538540", -100, 70, 11, -150, -50, 1, true, false);
      cm.npc_SetSpecialAction("oid=7538540", 'summon', 0, 0);
      cm.npc_ChangeController(9400589, "oid=7538541", -50, 70, 11, -100, 0, 1, true, false);
      cm.npc_SetSpecialAction("oid=7538541", "summon", 0, 0);
      cm.npc_ChangeController(9400601, "oid=7538542", -5, 70, 11, -55, 45, 1, true, false);
      cm.npc_SetSpecialAction("oid=7538542", 'summon', 0, 0);
      cm.npc_ChangeController(9400591, "oid=7538543", 50, 70, 28, 0, 100, 1, true, false);
      cm.npc_SetSpecialAction("oid=7538543", 'summon', 0, 0);
      cm.npc_ChangeController(9400598, "oid=7538544", 100, 70, 28, 50, 150, 1, true, false);
      cm.npc_SetSpecialAction("oid=7538544", "summon", 0, 0);
      cm.sendNewEffects(17, [0, 1000, 2000, -850, 120]);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_SetForceMove("oid=7538537", 1, 50, 50);
        cm.npc_SetForceMove("oid=7538538", 1, 50, 50);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.npc_SetForceMove("oid=7538539", -1, 400, 80);
          cm.npc_SetForceMove("oid=7538540", -1, 400, 80);
          cm.npc_SetForceMove("oid=7538541", -1, 400, 80);
          cm.npc_SetForceMove("oid=7538542", -1, 400, 80);
          cm.npc_SetForceMove("oid=7538543", -1, 400, 80);
          cm.npc_SetForceMove("oid=7538544", -1, 400, 80);
          cm.sendNormalTalk_Bottom("#face0#快点向可汗村长道歉！", 37, 9400590, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#什么？你这虚有其表的家伙！", 37, 9400597, true, true);
          } else {
            if (status === V++) {
              cm.npc_setForceFlip("oid=7538538", -1);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/angry", "oid=7538538"], [2000, 0, 0, 1, 0, 1, 0, 0]);
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#…别这样", 37, 9400590, false, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=7538537"], [2000, 0, 0, 1, 0, 1, 0, 0]);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#别哪样？", 37, 9400597, false, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/angry", "oid=7538538"], [2000, 0, 0, 1, 0, 1, 0, 0]);
                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/angry", "oid=7538537"], [2000, 0, 0, 1, 0, 1, 0, 0]);
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.sendNewEffects(12, [2000, -650, 120, 0, 0]);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_同时移动镜头和人(2, 300);
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#b阿尔西！", 57, 0, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#我，我吗？怎么突然…", 37, 9400592, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_SetForceMove("oid=7538539", -1, 50, 60);
                                        cm.sendNormalTalk_Bottom("#b我在森林里…", 57, 0, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom('#b找到了这个。', 57, 0, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                              cm.effect_OnUserEff("Effect/OnUserEff.img/questEffect/PL_MONAD1/7");
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#这…这个…", 37, 9400592, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/questEffect/PL_MONAD1/7", "oid=7538539"], [5000, 0, 0, 1, 0, 1, 0, 0]);
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#这个是…他们带过的…", 37, 9400592, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#抓走我女儿和妻子的…", 37, 9400592, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#b阿尔西见到的是这个吗？", 57, 0, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#……是…", 37, 9400592, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#…是！！…对！", 37, 9400592, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#没错…呜… 看！快看！", 37, 9400592, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_setForceFlip("oid=7538539", 1);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#即便这样，你们也认为我说的是假话吗？！", 37, 9400592, false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#即便这样，你们也认为我是在耍酒疯吗！！！！！！！呜呜", 37, 9400592, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.npc_SetForceMove("oid=7538540", -1, 50, 60);
                                                                        cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_同时移动镜头和人(1, 200);
                                                                          cm.npc_SetForceMove("oid=7538537", -1, 200, 50);
                                                                          cm.npc_SetForceMove("oid=7538538", -1, 200, 50);
                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/shade", "oid=7538540"], [5000, 0, 0, 1, 0, 1, 0, 0]);
                                                                          cm.sendNormalTalk_Bottom("#face0#…阿尔西…", 37, 9400587, false, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#呜呜呃呃呃… 我没说错吧…", 37, 9400592, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#…对不起…是我…", 37, 9400587, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.npc_ChangeController(9400617, "oid=7538713", -1100, 80, 6, -1150, -1050, 0, true, false);
                                                                                cm.npc_SetSpecialAction("oid=7538713", "summon", 0, 0);
                                                                                cm.npc_ChangeController(9400596, "oid=7538714", -1150, 80, 6, -1200, -1100, 0, true, false);
                                                                                cm.npc_SetSpecialAction("oid=7538714", "summon", 0, 0);
                                                                                cm.npc_ChangeController(9400618, "oid=7538715", -1200, 80, 5, -1250, -1150, 0, true, false);
                                                                                cm.npc_SetSpecialAction("oid=7538715", "summon", 0, 0);
                                                                                cm.npc_SetForceMove("oid=7538541", -1, 60, 50);
                                                                                cm.npc_SetForceMove("oid=7538543", -1, 120, 50);
                                                                                cm.inGameDirectionEvent_ForcedFlip(1);
                                                                                cm.sendNormalTalk_Bottom("阿尔西…", 37, 9400591, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face0#…我也没能相信你说的话…", 37, 9400589, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#呜哇啊啊啊啊啊…", 37, 9400592, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face0#对不起，我们没能信任你…", 37, 9400587, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.npc_SetForceMove("oid=7538713", 1, 360, 80);
                                                                                        cm.sendNormalTalk_Bottom("#face0#对不起… 对不起", 37, 9400589, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.npc_SetForceMove("oid=7538714", 1, 360, 80);
                                                                                          cm.sendNormalTalk_Bottom("#face0#我也觉得很奇怪… 但还是没有相信你的话…", 37, 9400589, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.npc_SetForceMove("oid=7538715", 1, 360, 80);
                                                                                            cm.sendNormalTalk_Bottom("#face0#呜哇啊啊啊啊啊… 呜呜呜呜！", 37, 9400592, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0#我… 我为什么要说谎？呜呜…", 37, 9400592, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#我比任何人都想找回… 我的妻子和女儿！呜呜…", 37, 9400592, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face0#呜呜… 呜！", 37, 9400592, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#对不起，非常对不起… 真的很对不起…", 37, 9400587, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face0#是我…是我错了… 是我做错了…", 37, 9400587, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#现在… 才明白，是我错了…", 37, 9400587, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_同时移动镜头和人(2, 900);
                                                                                                            cm.sendNewEffects(12, [3000, -100, 120, 0, 0]);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.forceCompleteQuest(64122);
                                                                                                              cm.forceCompleteQuest(64125);
                                                                                                              cm.npc_ChangeController(9400580, "oid=7538729", 200, -90, 29, 150, 250, 1, true, false);
                                                                                                              cm.npc_SetSpecialAction("oid=7538729", "summon", 0, 0);
                                                                                                              cm.npc_ChangeController(9400582, "oid=7538730", 250, -90, 29, 200, 300, 1, true, false);
                                                                                                              cm.npc_SetSpecialAction("oid=7538730", 'summon', 0, 0);
                                                                                                              cm.npc_SetForceMove("oid=7538729", -1, 100, 50);
                                                                                                              cm.npc_SetForceMove("oid=7538730", -1, 100, 50);
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face0#这个头盔… 是在森林里发现的吗？", 37, 9400580, false, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#b是的，是从另一个独眼触须怪的藏宝库里发现的。", 57, 0, true, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face0#啊…？原来并不只有一只啊。", 37, 9400580, true, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("#b好像是的。森林里不知道有多少地底洞穴… ", 57, 0, true, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#b除了头盔，还有其他的一些东西。", 57, 0, true, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face0#那也是人们丢失的珍贵物品吧… ", 37, 9400580, true, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#b对了！上一次找到的东西放哪里了？", 57, 0, true, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("#face0#我放到杂货店了，因为那里是所有居民们常去的地方。", 37, 9400580, true, true);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face0#艾尔巴也欣然接受了。", 37, 9400580, true, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#我找回了我的胸针。那独眼触须怪… 看它那奔跑的样子我就不喜欢！", 37, 9400582, true, true);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#b太好了。那么这次找到的东西也一起放到杂货店里吧。", 57, 0, true, true);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#一起去吧，上一次的东西不知道有没有人领回去，我也很想知道。", 37, 9400580, true, true);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.npc_setForceFlip("oid=7538729", 1);
                                                                                                                                        cm.npc_setForceFlip("oid=7538730", 1);
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.npc_SetForceMove("oid=7538730", 1, 300, 100);
                                                                                                                                          cm.npc_SetForceMove("oid=7538729", 1, 300, 100);
                                                                                                                                          cm.inGameDirectionEvent_同时移动镜头和人(2, 300);
                                                                                                                                          cm.sendNewEffects(12, [3000, 400, 120, 0, 0]);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.npc_LeaveField("oid=7538539");
                                                                                                                                              cm.npc_LeaveField("oid=7538539");
                                                                                                                                              cm.npc_LeaveField("oid=7538540");
                                                                                                                                              cm.npc_LeaveField("oid=7538540");
                                                                                                                                              cm.npc_LeaveField("oid=7538541");
                                                                                                                                              cm.npc_LeaveField("oid=7538541");
                                                                                                                                              cm.npc_LeaveField("oid=7538542");
                                                                                                                                              cm.npc_LeaveField("oid=7538542");
                                                                                                                                              cm.npc_LeaveField("oid=7538543");
                                                                                                                                              cm.npc_LeaveField("oid=7538543");
                                                                                                                                              cm.npc_LeaveField("oid=7538544");
                                                                                                                                              cm.npc_LeaveField("oid=7538544");
                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                              cm.npc_LeaveField('oid=204547');
                                                                                                                                              cm.npc_LeaveField("oid=204548");
                                                                                                                                              cm.npc_LeaveField("oid=7538537");
                                                                                                                                              cm.npc_LeaveField("oid=7538538");
                                                                                                                                              cm.npc_LeaveField("oid=7538714");
                                                                                                                                              cm.npc_LeaveField("oid=7538715");
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.npc_ChangeController(9400588, "oid=7538824", -50, 70, 11, -100, 0, 0, true, false);
                                                                                                                                                cm.npc_SetSpecialAction("oid=7538824", 'summon', 0, 0);
                                                                                                                                                cm.forceStartQuest(64161, '');
                                                                                                                                                cm.npc_ChangeController(9400587, "oid=7538825", -100, 70, 11, -150, -50, 0, true, false);
                                                                                                                                                cm.npc_SetSpecialAction("oid=7538825", "summon", 0, 0);
                                                                                                                                                cm.npc_ChangeController(9400591, "oid=7538826", -150, 70, 11, -200, -100, 0, true, false);
                                                                                                                                                cm.npc_SetSpecialAction("oid=7538826", 'summon', 0, 0);
                                                                                                                                                cm.npc_ChangeController(9400592, "oid=7538827", -200, 70, 10, -250, -150, 0, true, false);
                                                                                                                                                cm.npc_SetSpecialAction("oid=7538827", "summon", 0, 0);
                                                                                                                                                cm.npc_ChangeController(9400596, "oid=7538828", -250, 70, 10, -300, -200, 0, true, false);
                                                                                                                                                cm.npc_SetSpecialAction("oid=7538828", "summon", 0, 0);
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.npc_SetForceMove("oid=7538824", 1, 300, 150);
                                                                                                                                                  cm.npc_SetForceMove("oid=7538825", 1, 300, 80);
                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.npc_SetForceMove("oid=7538826", 1, 300, 80);
                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.npc_SetForceMove("oid=7538827", 1, 300, 80);
                                                                                                                                                      cm.npc_SetForceMove("oid=7538828", 1, 300, 80);
                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("勇士…！姐姐！凯恩骑士…！", 37, 9400588, false, true);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                                                                                                          cm.npc_setForceFlip("oid=7538729", -1);
                                                                                                                                                          cm.npc_setForceFlip("oid=7538730", -1);
                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("你们… 是要去杂货店吗？", 37, 9400588, false, true);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#嗯，对呀，郁兰。", 37, 9400580, true, true);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("… 我们… 也正好要去杂货店。", 37, 9400588, true, true);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#你需要什么吗？", 37, 9400580, true, true);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.sendNormalTalk_Bottom("不… 是要去见莎娜安婆婆… ", 37, 9400588, true, true);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.sendNormalTalk_Bottom("#b你终于下定决心了啊。", 57, 0, true, true);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom("…是的！我们大家决定一起去。", 37, 9400588, true, true);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#应该再早点过去的… 太晚了，只是对愧对女儿罢了… ", 37, 9400587, true, true);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.sendNormalTalk_Bottom("#b不不，现在还不晚。快去找莎娜安吧。", 57, 0, true, true);
                                                                                                                                                                          } else if (status === V++) {
                                                                                                                                                                            cm.forceStartQuest(64126, '');
                                                                                                                                                                            cm.dispose();
                                                                                                                                                                            cm.warp(867202309, 0, true);
                                                                                                                                                                          }
                                                                                                                                                                        }
                                                                                                                                                                      }
                                                                                                                                                                    }
                                                                                                                                                                  }
                                                                                                                                                                }
                                                                                                                                                              }
                                                                                                                                                            }
                                                                                                                                                          }
                                                                                                                                                        }
                                                                                                                                                      }
                                                                                                                                                    }
                                                                                                                                                  }
                                                                                                                                                }
                                                                                                                                              }
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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