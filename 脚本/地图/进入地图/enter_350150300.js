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
      cm.npc_ChangeController(1540839, "oid=286408329", -196, -130, 2, -246, -146, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=286408329", "summon", 0, 0);
      cm.npc_ChangeController(1540840, "oid=286408330", -196, -130, 2, -246, -146, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=286408330", "summon", 0, 0);
      cm.npc_ChangeController(1540788, "oid=286408331", -196, -130, 2, -246, -146, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=286408331", "summon", 0, 0);
      cm.npc_ChangeController(1540791, "oid=286408332", -196, -130, 2, -246, -146, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=286408332", 'summon', 0, 0);
      cm.npcMove(1540788, 1900, 200, 0);
      cm.npcMove(1540791, 40, 205, 0);
      cm.npcMove(1540839, 1800, 270, 0);
      cm.npcMove(1540840, 100, 275, 0);
      cm.npc_ChangeController(1540804, "oid=286408333", -450, -80, 67, -500, -400, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=286408333", "summon", 0, 0);
      cm.npc_ChangeController(1540798, "oid=286408334", -500, -80, 68, -550, -450, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=286408334", "summon", 0, 0);
      cm.npc_ChangeController(1540798, "oid=286408335", -560, -80, 69, -610, -510, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=286408335", "summon", 0, 0);
      cm.npc_ChangeController(1540798, "oid=286408336", -620, -80, 70, -670, -570, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=286408336", "summon", 0, 0);
      cm.npc_ChangeController(1540798, "oid=286408337", -680, -80, 70, -730, -630, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=286408337", 'summon', 0, 0);
      cm.npc_ChangeController(1540798, "oid=286408338", -760, -80, 71, -810, -710, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=286408338", 'summon', 0, 0);
      cm.npc_ChangeController(1540798, "oid=286408339", -800, -8, 71, -850, -750, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=286408339", "summon", 0, 0);
      cm.npc_ChangeController(1540798, "oid=286408340", -840, -8, 72, -890, -790, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=286408340", "summon", 0, 0);
      cm.npc_ChangeController(1540798, "oid=286408341", 180, 8, 61, 130, 230, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=286408341", "summon", 0, 0);
      cm.npc_ChangeController(1540798, "oid=286408342", 240, 8, 61, 190, 290, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=286408342", "summon", 0, 0);
      cm.npc_ChangeController(1540798, "oid=286408343", 300, 8, 60, 250, 350, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=286408343", "summon", 0, 0);
      cm.npc_ChangeController(1540798, "oid=286408344", 360, 8, 59, 310, 410, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=286408344", 'summon', 0, 0);
      cm.npc_ChangeController(1540798, "oid=286408345", 420, 8, 59, 370, 470, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=286408345", "summon", 0, 0);
      cm.npc_ChangeController(1540798, "oid=286408346", 480, 8, 58, 430, 530, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=286408346", "summon", 0, 0);
      cm.npc_ChangeController(1540798, "oid=286408347", 540, 8, 58, 490, 590, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=286408347", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_SetSpecialAction("oid=286408334", "die3", -1, 1);
      cm.npc_SetSpecialAction("oid=286408335", "die3", -1, 1);
      cm.npc_SetSpecialAction("oid=286408336", "die", -1, 1);
      cm.npc_SetSpecialAction("oid=286408337", "die", -1, 1);
      cm.npc_SetSpecialAction("oid=286408338", "die3", -1, 1);
      cm.npc_SetSpecialAction("oid=286408339", 'die', -1, 1);
      cm.npc_SetSpecialAction("oid=286408340", 'die', -1, 1);
      cm.npc_SetSpecialAction("oid=286408341", 'die3', -1, 1);
      cm.npc_SetSpecialAction("oid=286408342", "die3", -1, 1);
      cm.npc_SetSpecialAction("oid=286408343", "die", -1, 1);
      cm.npc_SetSpecialAction("oid=286408344", 'die', -1, 1);
      cm.npc_SetSpecialAction("oid=286408345", "die3", -1, 1);
      cm.npc_SetSpecialAction("oid=286408346", "die", -1, 1);
      cm.npc_SetSpecialAction("oid=286408347", "die3", -1, 1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -175, 20);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.showMapleHero();
        cm.Hidden_background("HofM_03", 1, 0, 0, 0);
        cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_Monologue("在最后的瞬间，封印了黑魔法师的魔法师。", 0);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_Monologue("同时拥有光明与黑暗力量的他", 0);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_Monologue("为了得到内心的平静，隐居在森林中。", 1);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(2000);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(1600);
                } else {
                  if (status === V++) {
                    cm.npc_SetForceMove("oid=286408333", 1, 250, 120);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face3#夜光法师，等一等！", 37, 1540805, false, true);
                    } else {
                      if (status === V++) {
                        cm.npc_ChangeController(1540807, "oid=286416543", -530, -80, 69, -580, -480, 0, true, 0, false);
                        cm.npc_SetSpecialAction("oid=286416543", "summon", 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_同时移动镜头和人(2, 220);
                          cm.npc_SetForceMove("oid=286416543", 1, 150, 100);
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                        } else {
                          if (status === V++) {
                            cm.npc_setForceFlip("oid=286408333", -1);
                            cm.sendNormalTalk_Bottom("我已经没什么好多说的了。", 37, 1540804, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face3#你为什么就不愿意和我们在一起呢？", 37, 1540805, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("我并不赞成弗里德的方式。\n我会用我的方式与黑魔法师一决高下。", 37, 1540804, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face3#但是！", 37, 1540805, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("我就开门见山地说了，弗里德的作战具有不确定性。", 37, 1540804, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("第一，光靠抽象的预言就推断了未来的灾难；\r\n第二，我认为即便将同伴们都聚集到了一起结果也未可知，还有……", 37, 1540804, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("第三，最关键的是，将如此重要的事情交给你这么生疏的继承人，\r\n这是最为致命的。", 37, 1540804, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face3#我和弗里德，是玛瑙龙的主人。", 37, 1540805, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face5#玛瑙龙的大小与主人的力量成正比，\r\n将阿弗利埃和你的龙比较，就能够知晓力量的差别有多大了。", 37, 1540804, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face6#额……", 37, 1540805, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("虽然这话说得没错，但我怎么这么上火呢。", 37, 1540807, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("你说说看，你打算用什么来填补你和弗里德之间的力量悬殊？", 37, 1540804, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.askMenu_Bottom("(来，该怎么办呢？)\r\n#b#L0#合作#l\r\n#L1#努力#l\r\n#L2#我自己的方式#l", 37, 1540805);
                                                  } else {
                                                    if (status === V++) {
                                                      selectionLog[100] = e;
                                                      cm.setNumberForQuestInfo(33952, 'p5', selectionLog[100]);
                                                      if (selectionLog[100] == 0) {
                                                        cm.sendNormalTalk_Bottom("夜光法师，你难道已经恢复了数百年前的所有力量了吗？我们全都是不完整的。\r\n双弩精灵和幻影也是如此。", 37, 1540805, false, true);
                                                      } else if (selectionLog[100] == 1) {
                                                        cm.sendNormalTalk_Bottom("夜光法师，你难道已经恢复了数百年前的所有力量了吗？我们全都是不完整的。\r\n双弩精灵和幻影也是如此。", 37, 1540805, false, true);
                                                      } else {
                                                        cm.sendNormalTalk_Bottom("夜光法师，你难道已经恢复了数百年前的所有力量了吗？我们全都是不完整的。\r\n双弩精灵和幻影也是如此。", 37, 1540805, false, true);
                                                      }
                                                    } else {
                                                      if (status === V++) {
                                                        if (selectionLog[100] == 0) {
                                                          cm.sendNormalTalk_Bottom("但是敌人也是如此，所以只要我们能够齐心协力，就能够获胜。", 37, 1540805, true, true);
                                                        } else if (selectionLog[100] == 1) {
                                                          cm.sendNormalTalk_Bottom("但是敌人也是如此，所以只要我们能够齐心协力，就能够获胜。", 37, 1540805, true, true);
                                                        } else {
                                                          cm.sendNormalTalk_Bottom("但是敌人也是如此，所以只要我们能够齐心协力，就能够获胜。", 37, 1540805, true, true);
                                                        }
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("你那不过是狡辩，你看看周围。", 37, 1540804, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_PushScaleInfo(2000, 1000, 2000, -175, -120);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npcMove(1540788, 700, 0, 6000);
                                                              cm.npcMove(1540791, -700, 0, 5500);
                                                              cm.npcMove(1540839, 700, 0, 6500);
                                                              cm.npcMove(1540840, -700, 0, 7000);
                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("额，什么时候这么……", 37, 1540807, false, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face4#至少弗里德还没有愚蠢到允许自己被别人跟踪。", 37, 1540804, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face4#你甚至都没有发现自己什么时候触发了我的魔法陷阱，\r\n我说的有错吗？", 37, 1540804, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/die1", 100);
                                                                          cm.npc_SetSpecialAction("oid=286408334", "die2", -1, 1);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/die1", 100);
                                                                            cm.npc_SetSpecialAction("oid=286408335", "die2", -1, 1);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/die2", 100);
                                                                              cm.npc_SetSpecialAction("oid=286408336", 'die4', -1, 1);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/die1", 100);
                                                                                cm.npc_SetSpecialAction("oid=286408337", "die2", -1, 1);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/die2", 100);
                                                                                  cm.npc_SetSpecialAction("oid=286408338", "die4", -1, 1);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/die1", 100);
                                                                                    cm.npc_SetSpecialAction("oid=286408339", "die2", -1, 1);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/die1", 100);
                                                                                      cm.npc_SetSpecialAction("oid=286408340", 'die2', -1, 1);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/die2", 100);
                                                                                        cm.npc_SetSpecialAction("oid=286408341", 'die4', -1, 1);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/die2", 100);
                                                                                          cm.npc_SetSpecialAction("oid=286408342", "die4", -1, 1);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/die1", 100);
                                                                                            cm.npc_SetSpecialAction("oid=286408343", 'die2', -1, 1);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/die1", 100);
                                                                                              cm.npc_SetSpecialAction("oid=286408344", 'die2', -1, 1);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/die2", 100);
                                                                                                cm.npc_SetSpecialAction("oid=286408345", "die4", -1, 1);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/die1", 100);
                                                                                                  cm.npc_SetSpecialAction("oid=286408346", 'die2', -1, 1);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/die2", 100);
                                                                                                    cm.npc_SetSpecialAction("oid=286408347", "die4", -1, 1);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -175, 20);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face4#……", 37, 1540805, false, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("我不拦着你以弗里德的继承人的身份自居，\r\n毕竟你确实是玛瑙龙的主人。", 37, 1540804, true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("但是，你可千万不要以为你能够代替他，\r\n既然你听懂了，就请回……？！", 37, 1540804, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("光光？", 37, 1540828, true, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.npc_setForceFlip("oid=286408333", 0);
                                                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=286408333"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                    cm.npc_ChangeController(1540828, "oid=286439783", 350, -8, 59, 300, 400, 1, true, 0, false);
                                                                                                                    cm.npc_SetSpecialAction("oid=286439783", 'summon', 0, 0);
                                                                                                                    cm.npc_SetForceMove("oid=286439783", -1, 350, 100);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("拉尼娅，我不是让你里面待着嘛。", 37, 1540804, false, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("哇！是有客人吗？幸会！你是光光的朋友吗？", 37, 1540828, true, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face2#(……光光？)", 37, 1540805, true, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("(刚刚是叫光光了吗……？)", 37, 1540807, true, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("辛苦你们远道而来，赶紧进来吧。", 37, 1540828, true, true);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("没这个必要了，拉尼娅。这些家伙现在就回去了。", 37, 1540804, true, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("光光！这么久没来客人，你可不能怠慢了啊！", 37, 1540828, true, true);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face1#拉尼娅……", 37, 1540804, true, true);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("夜光法师你给我老实待着！这是我的家，我的客人，来，进来吧。", 37, 1540828, true, true);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.askMenu_Bottom("(来，该怎么办呢？)\r\n#b#L0#进入。#l\r\n#L1#结束和夜光法师的对话。#l", 37, 1540805);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          selectionLog[101] = e;
                                                                                                                                          cm.setNumberForQuestInfo(33952, 'p6', selectionLog[101]);
                                                                                                                                          if (selectionLog[101] == 0) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face1#那我就失礼了，光光。", 37, 1540805, false, true);
                                                                                                                                          } else {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face1#那我就失礼了，光光。", 37, 1540805, false, true);
                                                                                                                                          }
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            if (selectionLog[101] == 0) {
                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#那我就不客气了，光光。", 37, 1540807, true, true);
                                                                                                                                            } else {
                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#那我就不客气了，光光。", 37, 1540807, true, true);
                                                                                                                                            }
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.npc_SetForceMove("oid=286439783", 1, 400, 130);
                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.inGameDirectionEvent_同时移动镜头和人(2, 600);
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.npc_SetForceMove("oid=286416543", 1, 400, 130);
                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#……", 37, 1540804, false, true);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.fieldEffect_Hero8(1);
                                                                                                                                                        cm.fieldEffect_Hero9(40, 2000);
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                                                                          cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, -430, -1650);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.onSetMapObjectCreateLayerMore('HofM_03', 2, "animation", 1);
                                                                                                                                                            cm.fieldEffect_PlayBGM("Bgm34.img/TheFairyForest", 0, 0);
                                                                                                                                                            cm.sendNormalTalk_Bottom("夜光法师，这么晚你在看什么呢？", 37, 1540828, false, true);
                                                                                                                                                            cm.effect_Voice("Voice3.img/HofM/INTERLUDE/LM2/1", 128);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.sendNormalTalk_Bottom("我在找弗里德留下了什么。", 37, 1540804, true, true);
                                                                                                                                                              cm.effect_Voice("Voice3.img/HofM/INTERLUDE/LM2/2", 128);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.sendNormalTalk_Bottom("他居然说是封印石难以比拟的重要物品……\r\n我实在是猜不到那到底是什么东西。", 37, 1540804, false, true);
                                                                                                                                                                    cm.effect_Voice("Voice3.img/HofM/INTERLUDE/LM2/3", 128);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.sendNormalTalk_Bottom("既然你这么想知道，去帮助龙神不就好了吗？", 37, 1540828, true, true);
                                                                                                                                                                      cm.effect_Voice("Voice3.img/HofM/INTERLUDE/LM2/4", 128);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom('……', 37, 1540804, true, true);
                                                                                                                                                                        cm.effect_Voice("Voice3.img/HofM/INTERLUDE/LM2/5", 128);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.sendNormalTalk_Bottom("白天来的客人真有趣，\r\n不管是龙神还是米乐，他们看上去心地都很善良。", 37, 1540828, true, true);
                                                                                                                                                                          cm.effect_Voice("Voice3.img/HofM/INTERLUDE/LM2/6", 128);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.sendNormalTalk_Bottom("心地善良并不能造就出优秀的魔法师，拉尼娅。", 37, 1540804, true, true);
                                                                                                                                                                            cm.effect_Voice("Voice3.img/HofM/INTERLUDE/LM2/7", 128);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.sendNormalTalk_Bottom("夜光法师难道讨厌龙神吗？", 37, 1540828, true, true);
                                                                                                                                                                              cm.effect_Voice("Voice3.img/HofM/INTERLUDE/LM2/8", 128);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.sendNormalTalk_Bottom("我并不是讨厌，\r\n弗里德是我直到最后都没能企及的唯一的魔法师。\r\n他的空位并不是随随便便就能够填补的。", 37, 1540804, true, true);
                                                                                                                                                                                cm.effect_Voice("Voice3.img/HofM/INTERLUDE/LM2/9", 128);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.sendNormalTalk_Bottom("呵呵……虽然你嘴上这么说，但你还是会帮他们的忙吧？", 37, 1540828, true, true);
                                                                                                                                                                                  cm.effect_Voice("Voice3.img/HofM/INTERLUDE/LM2/10", 128);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.sendNormalTalk_Bottom("……哎，我不想和那个毛贼一起作战。", 37, 1540804, true, true);
                                                                                                                                                                                    cm.effect_Voice("Voice3.img/HofM/INTERLUDE/LM2/11", 128);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                      cm.sendNormalTalk_Bottom("切，最终问题还出在这儿吗？", 37, 1540828, true, true);
                                                                                                                                                                                      cm.effect_Voice("Voice3.img/HofM/INTERLUDE/LM2/12", 128);
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                        cm.sendNormalTalk_Bottom("不，最大的问题是我要丢下拉尼娅。", 37, 1540804, true, true);
                                                                                                                                                                                        cm.effect_Voice("Voice3.img/HofM/INTERLUDE/LM2/13", 128);
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                          cm.sendNormalTalk_Bottom("嘿嘿……你不是很快就会回来的嘛？", 37, 1540828, true, true);
                                                                                                                                                                                          cm.effect_Voice("Voice3.img/HofM/INTERLUDE/LM2/14", 128);
                                                                                                                                                                                        } else {
                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                            cm.sendNormalTalk_Bottom("恩，走之前我会将结界强化好的。", 37, 1540804, true, true);
                                                                                                                                                                                            cm.effect_Voice("Voice3.img/HofM/INTERLUDE/LM2/15", 128);
                                                                                                                                                                                          } else {
                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                              cm.sendNormalTalk_Bottom("呵呵，那我去准备便当咯。", 37, 1540828, true, true);
                                                                                                                                                                                              cm.effect_Voice("Voice3.img/HofM/INTERLUDE/LM2/16", 128);
                                                                                                                                                                                            } else {
                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                              } else {
                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                  cm.updateInfoQuest(33907, "check0=1;check1=1;check2=1;check3=1");
                                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                                } else {
                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                    cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3));
                                                                                                                                                                                                    cm.forceCompleteQuest(33949);
                                                                                                                                                                                                    cm.gainExp(Math.pow(cm.getLevel(), 3));
                                                                                                                                                                                                    cm.updateInfoQuest(33961, "33947=1;33948=1;33949=1");
                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                                    cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                                                                                                                                                                                  } else if (status === V++) {
                                                                                                                                                                                                    cm.dispose();
                                                                                                                                                                                                    cm.warp(350150000, 0, true);
                                                                                                                                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                                    cm.npc_LeaveField("oid=286408329");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=286408329");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=286408330");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=286408330");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=286408331");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=286408331");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=286408332");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=286408332");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=286408333");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=286408333");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=286408334");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=286408334");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=286408335");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=286408335");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=286408336");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=286408336");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=286408337");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=286408337");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=286408338");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=286408338");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=286408339");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=286408339");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=286408340");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=286408340");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=286408341");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=286408341");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=286408342");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=286408342");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=286408343");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=286408343");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=286408344");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=286408344");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=286408345");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=286408345");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=286408346");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=286408346");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=286408347");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=286408347");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=286416543");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=286416543");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=286439783");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=286439783");
                                                                                                                                                                                                  }
                                                                                                                                                                                                }
                                                                                                                                                                                              }
                                                                                                                                                                                            }
                                                                                                                                                                                          }
                                                                                                                                                                                        }
                                                                                                                                                                                      }
                                                                                                                                                                                    }
                                                                                                                                                                                  }
                                                                                                                                                                                }
                                                                                                                                                                              }
                                                                                                                                                                            }
                                                                                                                                                                          }
                                                                                                                                                                        }
                                                                                                                                                                      }
                                                                                                                                                                    }
                                                                                                                                                                  }
                                                                                                                                                                }
                                                                                                                                                              }
                                                                                                                                                            }
                                                                                                                                                          }
                                                                                                                                                        }
                                                                                                                                                      }
                                                                                                                                                    }
                                                                                                                                                  }
                                                                                                                                                }
                                                                                                                                              }
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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