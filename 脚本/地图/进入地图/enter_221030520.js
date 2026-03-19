var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (cm.getQuestStatus(3478) > 0 && !cm.isQuestFinished(3487)) {
    cm.setPartner(1, 2052032, 80002245, 0);
  }
  if (cm.isQuestFinished(3481) && cm.getQuestStatus(3482) == 0) {
    action1(f, E, e);
  } else {
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
      cm.updateInfoQuest(3481, "enter2=1");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_MoveAction(4);
      cm.emotion(5, 10000);
      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/koong", 100);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 30, 20);
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
            cm.sendNormalTalk_Bottom("#face3#哎哟喂……我的屁股……", 37, 2052002, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#有人受伤了吗？", 37, 2052000, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face3#除了阿海坐在我身上之外，其他人似乎没什么大碍。", 37, 2052005, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#怪不得觉得这么软绵绵的呢。", 37, 2052001, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face3#橱柜里的东西全都掉出来了啊！驾驶舱更是一团乱。", 37, 2052003, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face1#啊！我的零食！阿亮，你！原来都藏在这里了啊！", 37, 2052002, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face2#不是，那个……嘀嘀咕咕~", 37, 2052005, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#来，首先我们也算是渗透成功了，现在该怎么办呢？", 37, 2052000, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#从现在起就由我来负责，有#b人能够帮助#k我们，不对，应该是有个#b外星人#k。", 37, 2052002, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face2##b外星人？？#k啊，有人过来了。", 37, 2052003, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#先躲到那个箱子里面去吧，以后再慢慢解释。", 37, 2052002, true, true);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 0, 0);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face2#啊呀！驾驶舱下面这是什么啊？\r\n难道是刚刚从上面掉下来的吗？", 37, 2052004, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face2#咦？这是……", 37, 2052004, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_ProcessOnOffLayer('0', "Map/Effect3.img/omegaSector/badge/2/1", 0, 500, 0, 0, 18, 4, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_ProcessOnOffLayer('1', "Map/Effect3.img/omegaSector/badge/2/2", 0, 1000, 0, 0, 19, 4, 0);
                                              cm.fieldEffect_ProcessOnOffLayer('2', "Map/Effect3.img/omegaSector/badge/2/3", 0, 1000, 0, 0, 20, 4, 0);
                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Fever", 100);
                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face2#这不是#b冒险勇士徽章#k嘛？", 37, 2052004, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#阿哲哥哥也真是的~既然要给，何苦要藏起来呢。", 37, 2052004, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#嗯……那什么，反正都是我的了，我就先收起来吧？嘿嘿。", 37, 2052004, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_ProcessOnOffLayer('0', '', 2, 1000, 0, 0, 0, 0, 0);
                                                      cm.fieldEffect_ProcessOnOffLayer('1', '', 2, 1000, 0, 0, 0, 0, 0);
                                                      cm.fieldEffect_ProcessOnOffLayer('2', '', 2, 1000, 0, 0, 0, 0, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/door_open", 100);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/door_close", 100);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("啊！没想到这么会儿功夫，又到了这么多快递啊！\r\n这些得什么时候才能派送完啊。", 37, 2052029, false, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("宅宅这家伙到底订什么了？怎么这么沉？！", 37, 2052029, true, true);
                                                            } else if (status === V++) {
                                                              cm.dispose();
                                                              cm.warp(221030500, 0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;