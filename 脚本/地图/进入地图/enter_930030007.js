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
      cm.setInGameDirectionMode(true, true, false);
      cm.inGameDirectionEvent_SetHideEffect(0);
      cm.fieldEffect_PlayBGM("Bgm02.img/EvilEyes", 0, 0);
      cm.npc_ChangeController(2159435, "oid=1136602", 260, 10, 5, 210, 310, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=1136602", "summon", 0, 0);
      cm.npc_ChangeController(2159436, "oid=1136603", 350, 10, 3, 300, 400, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=1136603", 'summon', 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(500);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk("可恶，又白跑了一趟！", 1, 2159435, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("#b(那个人……一定是人偶师弗朗西斯。这里是人偶师的房间吗？)#k", 17, 2159435, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("由于冒险骑士团的那些家伙，到现在为止一事无成！那些家伙为什么总针对我啊？", 1, 2159435, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("针对你的可不止冒险骑士团，弗朗西斯。", 1, 2159436, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("我知道，我知道……\r\n\r\n为什么大家只针对我呢？你也来烦我！他也来烦我！我已经烦透了。我只是想获得#e“那个人”#n的宠信罢了。什么时候变成这样了，呜呜……", 1, 2159435, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("任务失败了，一定会被主人臭骂一顿。你是害怕这个，所以才偷偷从秘密通道溜进来，一个人躲在房间里吗？", 1, 2159436, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("没有，被主人骂不算什么。我只是不想碰到那个老头。讨厌讨厌讨厌！", 1, 2159435, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("老头？你是说#r格里梅尔#k？", 1, 2159436, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("是的，那个让人不爽的科学狂人！\r\n\r\n和那个老头在一起，怎么说呢……没错！感觉我也变成了坏蛋一样。", 1, 2159435, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("……我们是坏蛋没错，弗朗西斯。", 1, 2159436, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk('嗯？我们是坏蛋吗？', 1, 2159435, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("#b(格里梅尔？没听说过这个名字。要再听听看吗……？)#k", 17, 2159435, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("其实我也信不过格里梅尔。感觉他好像在打别的主意。最近格里梅尔惹得主人大发脾气。", 1, 2159436, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("你说什么？他惹主人生气了？不可原谅！到底是怎么回事？", 1, 2159435, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("说是复活的日程延迟了。\r\n\r\n结果火烧到了我身上。他说要不是我没能偷到圣地的封印石，就不会发生这种事……", 1, 2159436, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("啊，那是我的错，巴洛克。", 1, 2159435, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("哎呀，你这家伙，朋友之间干嘛这样。", 1, 2159436, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("#b(复活……？他们的实验由一个名叫“格里梅尔”的科学家负责，并且和复活有关……是说黑魔法师的复活吗？还是别的……？)#k", 17, 2159436, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk("总之暂时……嗯？哪里好像有声音？", 1, 2159436, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_PlayBGM("Bgm18.img/BlackWing", 0, 0);
                                              cm.sendNormalTalk("#b(哎呀……！)#k", 17, 2159436, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk("怎，怎么回事？谁在那里？", 1, 2159435, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk("#b(哎呀……没办法了！)#k", 17, 2159435, true, true);
                                                } else if (status === V++) {
                                                  cm.forceStartQuest(20944, '');
                                                  cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                  cm.setInGameDirectionMode(false, true, false);
                                                  cm.npc_LeaveField("oid=1136602");
                                                  cm.npc_LeaveField("oid=1136603");
                                                  cm.dispose();
                                                  cm.warp(930030008, 0, false);
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}