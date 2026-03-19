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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(1530626, "oid=39866433", 1156, -201, 7, 1106, 1206, 1, true, false);
      cm.npc_SetSpecialAction("oid=39866433", "summon", 0, 0);
      cm.npc_ChangeController(1530627, "oid=39866434", 1034, -90, 5, 984, 1084, 1, true, false);
      cm.npc_SetSpecialAction("oid=39866434", "summon", 0, 0);
      cm.npc_ChangeController(1530628, "oid=39866435", 1223, -120, 11, 1173, 1273, 1, true, false);
      cm.npc_SetSpecialAction("oid=39866435", 'summon', 0, 0);
      cm.npc_ChangeController(1530624, "oid=39866436", 1295, -34, 4, 1245, 1345, 1, true, false);
      cm.npc_SetSpecialAction("oid=39866436", 'summon', 0, 0);
      cm.npc_ChangeController(1530632, "oid=39866437", 1165, 34, 16, 1115, 1215, 1, false, false);
      cm.npc_SetSpecialAction("oid=39866437", "summon", 0, 0);
      cm.npc_ChangeController(1530110, "oid=39866438", 520, 50, 21, 470, 570, 1, true, false);
      cm.npc_SetSpecialAction("oid=39866438", "summon", 0, 0);
      cm.npc_ChangeController(1530100, "oid=39866439", 610, 50, 21, 560, 660, 1, true, false);
      cm.npc_SetSpecialAction("oid=39866439", "summon", 0, 0);
      cm.npc_ChangeController(1530090, "oid=39866440", 700, 50, 18, 650, 750, 1, true, false);
      cm.npc_SetSpecialAction("oid=39866440", "summon", 0, 0);
      cm.inGameDirectionEvent_MoveAction(4);
      cm.emotion(7, 900000);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 530, 80);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_PlayBGM("Bgm42.img/TheBeast2", 0, 0);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("啊啊，#b#h0##k！", 37, 1530110, false, true);
            } else {
              if (status === V++) {
                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                } else {
                  if (status === V++) {
                    cm.npc_setForceFlip("oid=39866439", 1);
                    cm.npc_setForceFlip("oid=39866440", 1);
                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("那家伙，实力不是一般的强！", 37, 1530100, false, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_PushMoveInfo(0, 200, 880, 6);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(2810);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("可笑的家伙，居然敢以吉他和戴米安大人进行较量。", 37, 1530627, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("等一下，明明是你们先……", 57, 0, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("明明输了，话还这么多。呵呵呵呵。", 37, 1530628, true, true);
                              } else {
                                if (status === V++) {
                                  cm.npc_setForceFlip("oid=39866438", 1);
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("你们太过分了！为什么要来我们学校做出这样的事情！", 37, 1530110, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("不要担心，庆典结束后，我们就要去正式舞台上演出了。你们只不过是我们的垫脚石。", 37, 1530624, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("不过，和这家伙战斗还挺有趣的。我觉得也没必要把那个原声吉他创作室还是什么的消灭掉呢。", 37, 1530624, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("啊啊，那个家伙！就那种无聊的曲子还想拿到庆典上去演出，哈哈哈哈哈！真是勇气可嘉啊！", 37, 1530627, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("这些人真得谢谢我们。因为我们让他们的耳朵免受那种劣质音乐的污染。", 37, 1530628, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("是吗？现在你们这种没礼貌的语气正在污染我的耳朵。", 37, 1530090, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("伊卡尔特好可怕~", 37, 1530110, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face6#在音乐里，实力就是礼貌，笨蛋。", 37, 1530621, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("是啊，回去和#b原声吉他创作室那些笨蛋#k一起开个失败者大会吧，哈哈哈！", 37, 1530627, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#fs30#现在就收回你的那句话！", 37, 1530604, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/thunder2", 100);
                                                        cm.npc_ChangeController(1530120, "oid=39874144", 310, 0, 19, 260, 360, 0, true, false);
                                                        cm.npc_SetSpecialAction("oid=39874144", "summon", 0, 0);
                                                        cm.npc_setForceFlip("oid=39866438", -1);
                                                        cm.npc_setForceFlip("oid=39866439", -1);
                                                        cm.npc_setForceFlip("oid=39866440", -1);
                                                        cm.inGameDirectionEvent_PushScaleInfo(700, 2000, 700, 400, 80);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("什么啊，你是谁？", 37, 1530627, false, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_SetForceMove("oid=39874144", 1, 450, 120);
                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_PushMoveInfo(0, 2000, 880, 6);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(231);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.npc_setForceFlip("oid=39866438", 1);
                                                                        cm.npc_setForceFlip("oid=39866439", 1);
                                                                        cm.npc_setForceFlip("oid=39866440", 1);
                                                                        cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(5500);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#你们是什么人？穿着衣服，还有尾巴……是从魔界来的？", 37, 1530120, false, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("什，什么！", 37, 1530628, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("还有，你们真是越说越无耻了，就那种三脚猫的演奏还想在正式舞台出道？哈！我们用脚演奏都比这个强！", 37, 1530604, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/thunder", 100);
                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=39866433"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=39866434"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=39866435"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=39866436"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=39866437"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face7#三脚猫……？", 37, 1530621, false, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.npc_SetForceMove("oid=39866433", -1, 200, 120);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 880, 80);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face6#你应该能为刚才说的话负责吧。", 37, 1530621, false, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("当然了，你们连我们乐队的一根手指头都比不上！", 37, 1530604, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("那个……伊莉娜，等一下。", 37, 1530100, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_PushScaleInfo(1000, 2500, 1000, 880, 80);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face4#就在庆典的最后演出中看看谁输谁赢吧。", 37, 1530621, false, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("哼，好啊，我们会用实力打败你的，笨蛋！", 37, 1530604, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("这……伊莉娜姐姐……？", 37, 1530110, true, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_PushScaleInfo(1000, 3000, 1000, 880, 80);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face4#只是输赢是不行的，我们来赌上什么吧？", 37, 1530621, false, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face0#真是的，你啰里啰嗦，话还真多！那就堵上我们剩下的校园生活吧！要是我们输了，我们就在全校学生面前，用屁股写名字！行吗？！", 37, 1530604, true, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/thunder", 100);
                                                                                                                    cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                                    cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.inGameDirectionEvent_PushMoveInfo(0, 2000, 880, 6);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(231);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                                            cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                                            cm.setAmbience("Ambience.img/wind", 100, 60);
                                                                                                                            cm.setAmbience("Ambience.img/crow", 100, 60);
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.playSoundEffDirectly("Ambience.img/wind");
                                                                                                                              cm.playSoundEffDirectly("Ambience.img/crow");
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.fieldEffect_PlayBGM("Bgm38.img/LifeIsComedy", 0, 0);
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("#face1##fs30#什么么么么~~~~？！？！", 37, 1530110, false, true);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.fieldEffect_ProcessOnOffLayer("masking_up", "Map/Effect2.img/blackHeavenCinematic/masking", 0, 0, 0, 0, 30, 1, 1);
                                                                                                                                      cm.fieldEffect_ProcessOnOffLayer("masking_down", "Map/Effect2.img/blackHeavenCinematic/masking", 0, 0, 0, 0, 30, 7, 1);
                                                                                                                                      cm.fieldEffect_ProcessOnOffLayer('1', "Map/Effect2.img/spinoff2/shame_irina", 0, 2000, 0, 0, 12, 4, 0);
                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/shout", 100);
                                                                                                                                        cm.fieldEffect_ProcessOnOffLayer('2', "Map/Effect2.img/spinoff2/shame_crowd1", 0, 2000, 0, 100, 14, 4, 0);
                                                                                                                                        cm.fieldEffect_ProcessOnOffLayer('3', "Map/Effect2.img/spinoff2/shame_crowd2", 0, 2000, 0, 100, 16, 4, 0);
                                                                                                                                        cm.fieldEffect_ProcessOnOffLayer('2', '', 1, 2500, 0, -100, 0, 0, 0);
                                                                                                                                        cm.fieldEffect_ProcessOnOffLayer('3', '', 1, 2500, 0, -100, 0, 0, 0);
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.fieldEffect_ProcessOnOffLayer('2', '', 1, 1000, 0, 100, 0, 0, 0);
                                                                                                                                          cm.fieldEffect_ProcessOnOffLayer('3', '', 1, 1000, 0, 100, 0, 0, 0);
                                                                                                                                          cm.fieldEffect_ProcessOnOffLayer('1', '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                                          cm.fieldEffect_ProcessOnOffLayer('2', '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                                          cm.fieldEffect_ProcessOnOffLayer('3', '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.fieldEffect_ProcessOnOffLayer("masking_up", '', 2, 500, 0, 0, 0, 0, 0);
                                                                                                                                            cm.fieldEffect_ProcessOnOffLayer("masking_down", '', 2, 500, 0, 0, 0, 0, 0);
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
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
                                                                                                                                                  cm.sendNormalTalk_Bottom("#face4#好，你就等着为侮辱我的音乐付出代价吧，不要逃。", 37, 1530621, false, true);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.npc_SetForceMove("oid=39866433", -1, 300, 130);
                                                                                                                                                    cm.npc_SetForceMove("oid=39866434", -1, 300, 130);
                                                                                                                                                    cm.npc_SetForceMove("oid=39866435", -1, 300, 130);
                                                                                                                                                    cm.npc_SetForceMove("oid=39866436", -1, 300, 130);
                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.npc_LeaveField("oid=39866433");
                                                                                                                                                        cm.npc_LeaveField("oid=39866433");
                                                                                                                                                        cm.npc_LeaveField("oid=39866434");
                                                                                                                                                        cm.npc_LeaveField("oid=39866434");
                                                                                                                                                        cm.npc_LeaveField("oid=39866435");
                                                                                                                                                        cm.npc_LeaveField("oid=39866435");
                                                                                                                                                        cm.npc_LeaveField("oid=39866436");
                                                                                                                                                        cm.npc_LeaveField("oid=39866436");
                                                                                                                                                        cm.npc_LeaveField("oid=39866437");
                                                                                                                                                        cm.npc_LeaveField("oid=39866437");
                                                                                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("伊莉娜姐姐……你怎么……", 37, 1530607, false, true);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#我们可是菜鸟乐队啊……怎么能赢呢？", 37, 1530100, true, true);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.npc_setForceFlip("oid=39874144", -1);
                                                                                                                                                                cm.inGameDirectionEvent_PushMoveInfo(0, 200, 600, 6);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2901);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.sendNormalTalk_Bottom(" 哈哈……那要怎么办呢？", 37, 1530120, false, true);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=39866439"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=39866438"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=39866440"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                      cm.effect_OnUserEff("Effect/OnUserEff.img/emotion/ddam");
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                                                                                          cm.setAmbience("Ambience.img/bird", 100, 60);
                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                                                                                                                          cm.effect_Text(["#fn黑体##fs26#第二天"], [100, 2500, 4, 0, 0, 1, 4, 0, 0, 0]);
                                                                                                                                                                        } else if (status === V++) {
                                                                                                                                                                          cm.gainExp(Math.pow(cm.getLevel(), 3));
                                                                                                                                                                          cm.forceCompleteQuest(33507);
                                                                                                                                                                          cm.dispose();
                                                                                                                                                                          cm.warp(330000000, 0);
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
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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