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
      cm.setNumberForQuestCustomData(867200400, cm.getMapId());
      cm.npc_ChangeController(9400603, "oid=7530764", 430, -185, 37, 380, 480, 1, true, false);
      cm.npc_SetSpecialAction("oid=7530764", "summon", 0, 0);
      cm.npc_ChangeController(9400603, "oid=7530765", 380, -185, 37, 330, 430, 1, true, false);
      cm.npc_SetSpecialAction("oid=7530765", "summon", 0, 0);
      cm.npc_ChangeController(9400601, "oid=7530766", 330, -185, 37, 280, 380, 1, true, false);
      cm.npc_SetSpecialAction("oid=7530766", "summon", 0, 0);
      cm.npc_ChangeController(9400600, "oid=7530767", 270, -185, 36, 220, 320, 1, true, false);
      cm.npc_SetSpecialAction("oid=7530767", "summon", 0, 0);
      cm.npc_ChangeController(9400586, "oid=7530768", 220, -185, 36, 170, 270, 1, true, false);
      cm.npc_SetSpecialAction("oid=7530768", "summon", 0, 0);
      cm.npc_ChangeController(9400580, "oid=7530769", -110, -185, 24, -160, -60, 0, true, false);
      cm.npc_SetSpecialAction("oid=7530769", "summon", 0, 0);
      cm.npc_ChangeController(9400589, "oid=7530770", -275, -185, 22, -325, -225, 0, true, false);
      cm.npc_SetSpecialAction("oid=7530770", 'summon', 0, 0);
      cm.npc_ChangeController(9400587, "oid=7530771", -275, -185, 22, -325, -225, 0, true, false);
      cm.npc_SetSpecialAction("oid=7530771", "summon", 0, 0);
      cm.npc_ChangeController(9400597, "oid=7530772", -275, -185, 22, -325, -225, 0, true, false);
      cm.npc_SetSpecialAction("oid=7530772", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.sendNewEffects(17, [0, 1000, 2000, 90, -160]);
      cm.curNodeEventEnd(true);
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
            cm.npc_SetForceMove("oid=7530769", 1, 70, 50);
            cm.inGameDirectionEvent_AskAnswerTime(250);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_同时移动镜头和人(2, 100);
              cm.npc_SetForceMove("oid=7530768", -1, 40, 30);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("真是万万没想到… ", 37, 9400586, false, true);
              } else {
                if (status === V++) {
                  cm.npc_SetForceMove("oid=7530770", 1, 300, 120);
                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#莎娜安！你能安然无恙真是太好了… 真是太好了！", 37, 9400589, false, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                    } else {
                      if (status === V++) {
                        cm.npc_setForceFlip("oid=7530770", -1);
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.npc_setForceFlip("oid=7530770", 1);
                          cm.sendNormalTalk_Bottom("#face0#啊啊，因为我太高兴了，所以就… ", 37, 9400589, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("不，非常感谢你还能惦记着我。", 37, 9400586, true, true);
                          } else {
                            if (status === V++) {
                              cm.npc_SetForceMove("oid=7530771", 1, 130, 50);
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.npc_SetForceMove("oid=7530772", 1, 90, 50);
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#…好久…不见，莎娜安。", 37, 9400587, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#咳咳！好久不见啊！怎么不早说呢？", 37, 9400597, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom('说什么？', 37, 9400586, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#那个，啥… 嗯！咳咳！", 37, 9400597, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#… 那次那件事因为是村里的决定！咳！", 37, 9400597, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("还提那些封尘往事做什么。", 37, 9400586, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_SetForceMove("oid=7530767", -1, 30, 50);
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("以前不是教导过你们，我们是一个民族，一个地区的人… 怎么一会儿功夫又给忘了？既然要这样再次见面，当初何必反目成仇呢？", 37, 9400600, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("如果大家都能够体谅一点，不就没有那些事情了吗… ", 37, 9400600, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("就你那么狭隘的胸怀，怎么能代领整个村子，啧啧！", 37, 9400600, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=7530771"], [2000, 0, 0, 1, 0, 1, 0, 0]);
                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=7530772"], [2000, 0, 0, 1, 0, 1, 0, 0]);
                                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#维尔纳村长… 我们也早已不是当初听村长讲述阿布鲁历史的那些小孩子了。", 37, 9400587, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#居民们正在听呢，请您稍微注意一下… ", 37, 9400587, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#我… 我就是说！", 37, 9400597, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("我分明以村长的身份尊敬过你们，可汗村长，古纳德村长。", 37, 9400600, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_setForceFlip("oid=7530772", -1);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_SetForceMove("oid=7530772", -1, 100, 80);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.npc_setForceFlip("oid=7530768", 1);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("都是过去的事情，维尔纳。我早已放下了，你也别再为难他们了。", 37, 9400586, false, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.npc_setForceFlip("oid=7530768", -1);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.npc_setForceFlip("oid=7530770", 1);
                                                                              cm.npc_SetForceMove("oid=7530768", -1, 40, 50);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.npc_SetForceMove("oid=7530770", 1, 190, 80);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.npc_LeaveField("oid=7530772");
                                                                                  cm.npc_LeaveField("oid=7530772");
                                                                                  cm.sendNormalTalk_Bottom("真是万万没想到… 你竟然收到了我的信。", 37, 9400586, false, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom('来的正好。', 37, 9400586, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_同时移动镜头和人(2, 80);
                                                                                      cm.sendNormalTalk_Bottom("#b您平安无事… 真是太好了。不过我来晚了，老婆婆。", 57, 0, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("不，还没有。", 37, 9400586, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("真是位了不起的年轻人。竟然能把这么闭塞的村长和这么无礼的村长带到这里来。", 37, 9400600, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#b把他们聚在一起并带过来的人不是我，而是这位。", 57, 0, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.npc_setForceFlip("oid=7530770", -1);
                                                                                              cm.sendNormalTalk_Bottom("#face0#你好，我是亚皮纳斯派遣队的学者，我叫艾丽卡。", 37, 9400580, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("欢迎你，我是斯库亚斯的村长，叫维尔纳。", 37, 9400600, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("你们两位我都要感谢。", 37, 9400600, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("来这里的路上肯定受了不少苦吧？", 37, 9400586, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#b没有，因为亚皮纳斯派遣队和居民的帮助，还是比较顺利。", 57, 0, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.npc_ChangeController(9400588, "oid=7531097", -275, -185, 22, -325, -225, 0, true, false);
                                                                                                        cm.npc_SetSpecialAction("oid=7531097", "summon", 0, 0);
                                                                                                        cm.npc_SetForceMove("oid=7531097", 1, 80, 50);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("呵呵… 谢谢你，太感谢你了… 除了感谢还真不知道该用什么语言来表达。", 37, 9400586, false, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("我的孙女消失之后，我在阿布鲁到处寻找孙女的踪迹。", 37, 9400586, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("直到有一天，森林里的风突然安静了下来，之后四处开始结冰，就连怪物们也感到奇怪。", 37, 9400586, true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("我甚至都不知道是什么情况，就在那时这位艾尔巴把我从危险中救了出来。", 37, 9400586, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("就那样来到了斯库亚斯，但是无法再去寻找孙女，也不能回到我的小屋。所以我只能写信求救。", 37, 9400586, true, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("不过来到这里之后我写了数百封的信，但只有你一个人来到了这里。", 37, 9400586, true, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("#b… 但是我也没看到孙女的踪迹… ", 57, 0, true, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("不不，我不是要你帮我找孙女才写的信，你没必要自责。", 37, 9400586, true, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face0#我… 从小屋里拿来了照片。", 37, 9400580, true, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.npc_SetForceMove("oid=7530769", 1, 50, 50);
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/questEffect/PL_MONAD1/6", "oid=7530769"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.npc_setForceFlip("oid=7530769", -1);
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.npc_SetForceMove("oid=7530769", -1, 50, 50);
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.npc_setForceFlip("oid=7530769", 1);
                                                                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/questEffect/PL_MONAD1/6", "oid=7530768"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                                    cm.sendNormalTalk_Bottom("… 真是太谢谢你了… 因为出来的太匆忙，我都没想到要拿照片，你不知道我有多后悔… ", 37, 9400586, false, true);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#… 孙女的事情真是让人过意不去。", 37, 9400580, true, true);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("那孩子很坚强，不会就这么结束的，她一定会回来的。", 37, 9400586, true, true);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("#b您的孙女… 看起来很特别。", 57, 0, true, true);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("对，没有比我们家布兰茜特别的孩子了… ", 37, 9400586, true, true);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation", "oid=7531097"], [1000, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.sendNormalTalk_Bottom("布兰茜… 姐姐？连布兰茜姐姐也被抓走了吗？", 37, 9400588, false, true);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.npc_setForceFlip("oid=7530771", -1);
                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.npc_setForceFlip("oid=7530769", -1);
                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("#b对。之前我说过的帮忙寻找失踪少女的信，写那封信的老婆婆就是莎娜安。", 57, 0, false, true);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#其实是莎娜安救了我们大家。", 37, 9400589, true, true);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/shade", "oid=7531097"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.sendNormalTalk_Bottom("…布…布兰茜姐姐… 布兰茜姐姐… 我… 我们？", 37, 9400588, false, true);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/shade", "oid=7531097"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.npc_setForceFlip("oid=7531097", -1);
                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.npc_SetForceMove("oid=7531097", -1, 100, 140);
                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#… ", 37, 9400587, false, true);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.npc_SetForceMove("oid=7530771", -1, 150, 140);
                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.inGameDirectionEvent_ForcedFlip(1);
                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.npc_setForceFlip("oid=7530769", 1);
                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                      cm.npc_LeaveField("oid=7531097");
                                                                                                                                                                                      cm.npc_LeaveField("oid=7531097");
                                                                                                                                                                                      cm.npc_LeaveField("oid=7530771");
                                                                                                                                                                                      cm.npc_LeaveField("oid=7530771");
                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#b郁兰，你突然怎么了？", 57, 0, false, true);
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                        cm.sendNormalTalk_Bottom("也没什么，都是过去的事情罢了… ", 37, 9400586, true, true);
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#… ", 37, 9400589, true, true);
                                                                                                                                                                                        } else {
                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                            cm.sendNormalTalk_Bottom("那么小的孩子，好像还能记得一些… ", 37, 9400586, true, true);
                                                                                                                                                                                          } else {
                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                              cm.sendNormalTalk_Bottom("… 沉迷于过去，是无法对获得带来希望的。", 37, 9400586, true, true);
                                                                                                                                                                                            } else {
                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                cm.sendNormalTalk_Bottom("但是，逃避并不能解决问题… ", 37, 9400586, true, true);
                                                                                                                                                                                              } else {
                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("好像大家都忘记了那件事情了。", 37, 9400586, true, true);
                                                                                                                                                                                                } else {
                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#… 是的… ", 37, 9400589, true, true);
                                                                                                                                                                                                  } else {
                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("但是必须要承认自己过往的错误，才能改变自我，不是吗？", 37, 9400600, true, true);
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("虽然为时已晚，但我们只能从这里开始。", 37, 9400600, true, true);
                                                                                                                                                                                                      } else {
                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                          cm.npc_ChangeController(9400581, "oid=7531293", -400, -85, 18, -450, -350, 0, true, false);
                                                                                                                                                                                                          cm.npc_SetSpecialAction("oid=7531293", "summon", 0, 0);
                                                                                                                                                                                                          cm.npc_ChangeController(9400582, "oid=7531294", -480, -85, 18, -530, -430, 0, true, false);
                                                                                                                                                                                                          cm.npc_SetSpecialAction("oid=7531294", "summon", 0, 0);
                                                                                                                                                                                                          cm.npc_ChangeController(9400583, "oid=7531295", -540, -85, 18, -590, -490, 0, true, false);
                                                                                                                                                                                                          cm.npc_SetSpecialAction("oid=7531295", 'summon', 0, 0);
                                                                                                                                                                                                          cm.npc_SetForceMove("oid=7531293", 1, 250, 80);
                                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                            cm.npc_SetForceMove("oid=7531294", 1, 250, 80);
                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                                                                                          } else {
                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                              cm.npc_SetForceMove("oid=7531295", 1, 250, 80);
                                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                cm.sendNewEffects(12, [1000, -250, -100, 0, 0]);
                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("有很多的故事想告诉 #h0#，不过看来找你的人更多。", 37, 9400586, false, true);
                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("先解决这件事情之后再告诉你吧。", 37, 9400586, true, true);
                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                                                            cm.monadEndingScene(135 * Math.pow(cm.getLevel(), 3), 50 * Math.pow(cm.getLevel(), 2), [2439159, 2439150, 0, 0, 0, 0]);
                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#h0#！真是由衷的感谢你，这是我的小小心意。\r\n感谢你来到了这里，也感谢你帮助了阿布鲁的人民…", 37, 9400586, false, true);
                                                                                                                                                                                                                            cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                                                                                                                                                                                                          } else if (status === V++) {
                                                                                                                                                                                                                            cm.forceCompleteQuest(64103);
                                                                                                                                                                                                                            cm.gainExp(135 * Math.pow(cm.getLevel(), 3));
                                                                                                                                                                                                                            cm.gainMeso(50 * Math.pow(cm.getLevel(), 2));
                                                                                                                                                                                                                            cm.gainItem(2439159, 1);
                                                                                                                                                                                                                            cm.gainItem(2439150, 1);
                                                                                                                                                                                                                            cm.dispose();
                                                                                                                                                                                                                            cm.monadEndingScene(-1, -1, null);
                                                                                                                                                                                                                            cm.warp(867202303, 0, true);
                                                                                                                                                                                                                          }
                                                                                                                                                                                                                        }
                                                                                                                                                                                                                      }
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                  }
                                                                                                                                                                                                                }
                                                                                                                                                                                                              }
                                                                                                                                                                                                            }
                                                                                                                                                                                                          }
                                                                                                                                                                                                        }
                                                                                                                                                                                                      }
                                                                                                                                                                                                    }
                                                                                                                                                                                                  }
                                                                                                                                                                                                }
                                                                                                                                                                                              }
                                                                                                                                                                                            }
                                                                                                                                                                                          }
                                                                                                                                                                                        }
                                                                                                                                                                                      }
                                                                                                                                                                                    }
                                                                                                                                                                                  }
                                                                                                                                                                                }
                                                                                                                                                                              }
                                                                                                                                                                            }
                                                                                                                                                                          }
                                                                                                                                                                        }
                                                                                                                                                                      }
                                                                                                                                                                    }
                                                                                                                                                                  }
                                                                                                                                                                }
                                                                                                                                                              }
                                                                                                                                                            }
                                                                                                                                                          }
                                                                                                                                                        }
                                                                                                                                                      }
                                                                                                                                                    }
                                                                                                                                                  }
                                                                                                                                                }
                                                                                                                                              }
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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