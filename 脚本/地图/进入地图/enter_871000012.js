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
      cm.npc_ChangeController(9400929, "oid=11111133", -830, 300, 0);
      cm.npc_SetSpecialAction("oid=11111133", 'summon', 0, 0);
      cm.npc_ChangeController(9400928, "oid=11111134", -350, 300, 0);
      cm.npc_SetSpecialAction("oid=11111134", "summon", 0, 0);
      cm.npc_ChangeController(9400933, "oid=11111135", 70, 300, 1);
      cm.npc_SetSpecialAction("oid=11111135", "summon", 0, 0);
      cm.npc_ChangeController(9400932, "oid=11111136", 500, 300, 1);
      cm.npc_SetSpecialAction("oid=11111136", 'summon', 0, 0);
      cm.npc_SetSpecialAction("oid=11111135", "special", -1, 0);
      cm.npc_ChangeController(9400935, "oid=11111137", 1300, 300, 1);
      cm.npc_SetSpecialAction("oid=11111137", "summon", 0, 0);
      cm.npc_ChangeController(9400936, "oid=11111138", 1350, 300, 1);
      cm.npc_SetSpecialAction("oid=11111138", "summon", 0, 0);
      cm.sendNewEffects(17, [0, 1000, 600, -800, 150]);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNewEffects(13, [5000, 1500, 0, 0, 0]);
      } else {
        if (status === V++) {
          cm.effect_Text(["#fn黑体##fs20#凯兰西亚广场"], [50, 2000, 6, -50, -50, 1, 4, 0, 0, 0]);
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1400);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(4000);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                  cm.sendNewEffects(17, [0, 500, 1000, 900, -450]);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                        cm.sendNewEffects(12, [0, 800, 150, 0, 0]);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                              cm.sendNewEffects(12, [0, -290, 150, 0, 0]);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                              } else {
                                if (status === V++) {
                                  cm.sendNewEffects(17, [0, 1000, 2000, -330, 320]);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", 'oid=0'], [0, 0, 0, 1, 0, 0, 0, 0]);
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#b！！！", 57, 0, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNewEffects(13, [0, -300, 0, 0, 0]);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#b等，等一下？！", 57, 0, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_同时移动镜头和人(2, 400);
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNewEffects(13, [2000, 300, 0, 0, 0]);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_setForceFlip("oid=11111134", -1);
                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl", "oid=11111134"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=11111134"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_setForceFlip("oid=11111134", 1);
                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_SetForceMove("oid=11111134", 1, 100, 100);
                                                        cm.sendNormalTalk_Bottom("#b哎，哎！我们来聊一下！", 57, 0, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face3#你……你干嘛呀！怎么了？！", 37, 9400920, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_setForceFlip("oid=11111134", -1);
                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_setForceFlip("oid=11111134", 1);
                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.npc_SetForceMove("oid=11111134", 1, 50, 100);
                                                                cm.inGameDirectionEvent_同时移动镜头和人(2, 170);
                                                                cm.sendNewEffects(13, [2000, 150, 0, 0, 0]);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom('#b抓住了！', 57, 0, false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.npc_setForceFlip("oid=11111134", -1);
                                                                      cm.sendNormalTalk_Bottom("#face3#哼，哼。怎么了？", 37, 9400920, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#b你还记得我吧？\r\n这房屋和宣传单上的也太不一样了！", 57, 0, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.npc_LeaveField("oid=11111133");
                                                                          cm.npc_ChangeController(9400929, "oid=11111299", -550, 300, 0);
                                                                          cm.npc_SetSpecialAction("oid=11111299", "summon", 0, 0);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.npc_SetForceMove("oid=11111299", 1, 250, 100);
                                                                            cm.sendNormalTalk_Bottom("#face3#虽然照片里看起来有点~大……但我不是说过了是个小巧朴素的家嘛！", 37, 9400920, false, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face3#艾米……？把房屋卖给#h0#的人是艾米？", 37, 9400921, false, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=11111134"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                  cm.sendNormalTalk_Bottom("#face3#哥……哥哥？！哥哥你怎么在这里！？", 37, 9400920, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#b你们俩认识？", 57, 0, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face3#这是我双胞胎妹妹。", 37, 9400921, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face4#等一下，艾米！那根本不是我们的房子，你怎么能卖给其他人呢？", 37, 9400921, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face4#是我的房子！我买下来的！", 37, 9400920, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face4#你哪里来的房屋……", 37, 9400921, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face4#之前买了这房屋的姐姐以5万金币的价格私下转手卖给了我呢！", 37, 9400920, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#b5万金币……？5万金币买进然后50万金币卖出吗？", 57, 0, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face4#你这人看来不明白啊！不动产投资本来就是这样的！", 37, 9400920, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face3#艾米……我可不是这么养育你的啊……", 37, 9400921, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face4#等一下，哥哥你又在说什么啊！我是自己长大的，可不是哥哥养我长大的哦？啊，又来了！别做出这种悲伤的表情啊！", 37, 9400920, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face4#艾米……把钱还给人家。", 37, 9400921, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face4#… ", 37, 9400920, true, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face4#… ", 37, 9400921, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#b… ", 57, 0, true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face3#等一下，这可是正当交易啊~！还写了合同呢！", 37, 9400920, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face4#但是……哥哥我还是觉得应该把差额还给人家。", 37, 9400921, true, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.askMenu_Bottom("#face3#… \r\n#b#L0#把差额45万金币还给我。#l\r\n#L1#合同就是合同，即使不返还45万金币也可以。#l", 37, 9400920);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      selectionLog[666] = e;
                                                                                                                      if (selectionLog[666] == 0) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face3#……切，给你。这可真是赔本买卖，我还把它清理干净了来着！", 37, 9400920, false, true);
                                                                                                                      } else {
                                                                                                                        cm.sendNormalTalk_Bottom("#face2#真的吗？果然！勇士大人太帅了！我最初看到你的时候，就一下子感觉到了你的帅气哦！", 37, 9400920, false, true);
                                                                                                                      }
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        if (selectionLog[666] == 0) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face1#哎呀，你真是善良呢，艾米。", 37, 9400921, true, true);
                                                                                                                          status++;
                                                                                                                        } else {
                                                                                                                          cm.sendNormalTalk_Bottom("#face2#以后我一定会对你很好的！", 37, 9400920, true, true);
                                                                                                                        }
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face3#……不用对我很好也没关系。", 37, 9400921, true, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            if (selectionLog[666] == 0) {
                                                                                                                              cm.sendNormalTalk_Bottom("#face1#现在再来参观下广场吧？", 37, 9400921, true, true);
                                                                                                                            } else {
                                                                                                                              cm.sendNormalTalk_Bottom("#face2#啊！你是来参观广场的吧？让我来带路吧！我们一起去！", 37, 9400920, true, true);
                                                                                                                            }
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.npc_setForceFlip("oid=11111134", 1);
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.npc_SetForceMove("oid=11111134", 1, 100, 100);
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.inGameDirectionEvent_同时移动镜头和人(2, 110);
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.npc_SetForceMove("oid=11111299", 1, 100, 100);
                                                                                                                                    cm.sendNewEffects(13, [1000, 150, 0, 0, 0]);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face1#你好，米兰达。你今天也在画素描啊！今天的天气让人很容易迸发灵感吧？", 37, 9400921, false, true);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#你好，埃尔宾。你好，艾米。\r\n多亏了你们，我想到了一个好主意。你们觉得说谎警示钟怎么样？", 37, 9400924, true, true);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face3#呃……呃……你都看到了啊！", 37, 9400920, true, true);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.sendNormalTalk_Bottom("#face1#能，能帮到米兰达的工作可真好呢……如果你画好了，一定要给我看看。", 37, 9400920, true, true);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face1#对了，来打个招呼吧！这位是#h0#。今天刚搬到我们隔壁。", 37, 9400921, true, true);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.sendNormalTalk_Bottom("#face1##h0#，这位是米兰达。她是个多才多艺的艺术家，最近正在制作装修物品，对吧？", 37, 9400921, true, true);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#(点头) ", 37, 9400924, true, true);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#很高兴见到你，#h0# ", 37, 9400924, true, true);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("#face1#你有新做什么吗？我很喜欢米兰达的作品，让我们看看吧！", 37, 9400921, true, true);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#今天没有呢。", 37, 9400924, true, true);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("#face1#可惜了，那就下次再参观吧！再见", 37, 9400921, true, true);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.npc_SetForceMove("oid=11111134", 1, 380, 100);
                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.inGameDirectionEvent_同时移动镜头和人(2, 420);
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.npc_SetForceMove("oid=11111299", 1, 350, 100);
                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.sendNewEffects(13, [3000, 450, 0, 0, 0]);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face1#咳，今天米兰达也很漂亮吧？", 37, 9400923, false, true);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#要是被米兰达听见了，你就要被打了~", 37, 9400920, true, true);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face2#真是的，才不会呢。", 37, 9400923, true, true);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#别幼稚了，打个招呼吧！这是新搬到我们隔壁的#h0#。", 37, 9400920, true, true);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face1#哈哈哈，你好，我是凯兰西亚最棒的木匠，我叫艾丹，哈哈", 37, 9400923, true, true);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#b哇！很高兴见到你，我叫#h0#。正好我家里需要很多家具，比如桌子……", 57, 0, true, true);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#……啊！对了！我忘记了我还有事儿呢。那你们就慢慢参观，注意安全啊。哈哈。", 37, 9400923, true, true);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                      cm.npc_SetForceMove("oid=11111136", -1, 500, 100);
                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                        cm.npc_setForceFlip("oid=11111134", -1);
                                                                                                                                                                                        cm.npc_LeaveField("oid=11111138");
                                                                                                                                                                                        cm.npc_ChangeController(9400936, "oid=11111379", 50, 300, 0);
                                                                                                                                                                                        cm.npc_SetSpecialAction("oid=11111379", "summon", 0, 0);
                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                          cm.npc_SetForceMove("oid=11111379", 1, 200, 100);
                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face3#艾丹这个傻瓜，说谎也太明显了！", 37, 9400920, false, true);
                                                                                                                                                                                        } else {
                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#艾米，你可不能这么说。", 37, 9400921, true, true);
                                                                                                                                                                                          } else {
                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                              cm.npc_setForceFlip("oid=11111134", 1);
                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                            } else {
                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                cm.npc_SetForceMove("oid=11111134", 1, 450, 100);
                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(600);
                                                                                                                                                                                              } else {
                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                  cm.inGameDirectionEvent_同时移动镜头和人(2, 500);
                                                                                                                                                                                                  cm.npc_SetForceMove("oid=11111299", 1, 450, 100);
                                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                                                                } else {
                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                    cm.npc_SetForceMove("oid=11111379", 1, 400, 100);
                                                                                                                                                                                                    cm.sendNewEffects(13, [4000, 500, 0, 0, 0]);
                                                                                                                                                                                                  } else {
                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face1#很遗憾，艾丹还只是个学徒，所以不能制作家具售卖。", 37, 9400921, false, true);
                                                                                                                                                                                                      } else {
                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#他的师父卡朋特现在不在工坊，所以暂时由艾丹运营，修理一些破家具。", 37, 9400921, true, true);
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#b真是可惜呢。", 57, 0, true, true);
                                                                                                                                                                                                          } else {
                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face1#这里是特鲁迪家的面包店。", 37, 9400920, true, true);
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#这里是建筑家凯尼斯的家。是向居民们开放的空间。", 37, 9400921, true, true);
                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                  cm.sendNewEffects(13, [3000, 0, -650, 0, 0]);
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#嗯~~现在凯尼斯好像不在，之后再给你介绍吧。", 37, 9400921, false, true);
                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                          cm.sendNewEffects(13, [0, 0, 650, 0, 0]);
                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#只要再走一点就是艾丹家的家具工坊，过了工坊就是前往森林的入口。广场就差不多是这样了！", 37, 9400921, false, true);
                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                              cm.npc_SetForceMove("oid=11111137", -1, 250, 100);
                                                                                                                                                                                                                              cm.sendNewEffects(13, [2000, 100, 0, 0, 0]);
                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face1#哥哥啊啊啊啊~！姐姐啊啊啊啊~~！凯蒂~~！", 37, 9400926, false, true);
                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face2#特鲁迪~小心不要跌倒了~", 37, 9400921, true, true);
                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#这是谁~？", 37, 9400926, false, true);
                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face1#这是今天搬到哥哥家隔壁的勇士大人。", 37, 9400921, true, true);
                                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#勇……士大人？", 37, 9400926, true, true);
                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                                            cm.npc_SetSpecialAction("oid=11111137", "eye", 5000, 0);
                                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#b见到你很高兴，特鲁迪？", 57, 0, true, true);
                                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/flower", "oid=11111137"], [10000, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                                                                                                                                              cm.sendNormalTalk_Bottom('#face1#啊啊啊', 37, 9400926, true, true);
                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                                                  cm.npc_setForceFlip("oid=11111137", 1);
                                                                                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                                                    cm.npc_SetForceMove("oid=11111137", 1, 500, 100);
                                                                                                                                                                                                                                                    cm.npc_SetForceMove("oid=11111379", 1, 1000, 100);
                                                                                                                                                                                                                                                    cm.npc_LeaveField("oid=11111136");
                                                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face2#怎，怎么了。特鲁迪现在是在害羞吗？啊啊啊！真可爱！", 37, 9400920, false, true);
                                                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face1#看来是因为你是陌生人吧。这个村子已经很久没有外人来过了。我也觉得很激动，很开心呢！总觉得会有什么更开心的事情发生呢。", 37, 9400921, true, true);
                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                                                        cm.npc_setForceFlip("oid=11111134", -1);
                                                                                                                                                                                                                                                        cm.sendNewEffects(13, [2000, -100, 0, 0, 0]);
                                                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face2#这~都是因为我啊。", 37, 9400920, false, true);
                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face2#哈哈，那就重新回到家里去吧？", 37, 9400921, true, true);
                                                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                                                cm.inGameDirectionEvent_ForcedFlip(1);
                                                                                                                                                                                                                                                                cm.npc_setForceFlip("oid=11111299", -1);
                                                                                                                                                                                                                                                                cm.sendNewEffects(13, [3000, -1000, 0, 0, 0]);
                                                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                                                                                  } else if (status === V++) {
                                                                                                                                                                                                                                                                    cm.warp(871000000, 0);
                                                                                                                                                                                                                                                                    cm.forceCompleteQuest(64595);
                                                                                                                                                                                                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                                                                                                    cm.npc_LeaveField("oid=11111134");
                                                                                                                                                                                                                                                                    cm.npc_LeaveField("oid=11111135");
                                                                                                                                                                                                                                                                    cm.npc_LeaveField("oid=11111137");
                                                                                                                                                                                                                                                                    cm.npc_LeaveField("oid=11111299");
                                                                                                                                                                                                                                                                    cm.npc_LeaveField("oid=11111379");
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
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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