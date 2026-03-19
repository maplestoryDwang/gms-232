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
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -169, 202);
      cm.curNodeEventEnd(true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("那个女仆也真是奇怪，说什么相信#b幽灵#k吗。", 57, 0, false, true, 1);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("刚刚在#b阁楼#k的那些家伙也是……也看不到邀请我的#b房子的主人#k，#r让人觉得可疑的地方#k不止一两个……？", 57, 0, true, true, 1);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
              if (status === V++) {
                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/knock", 100);
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_ForcedFlip(1);
                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                  cm.sendNormalTalk_Bottom("这声音是？……是谁呢？", 57, 0, false, true, 1);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
                    cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#无论宅子里来了什么人，#b都请你不要和他说话。#k\r\n派对开始前，必须要待在#b房间里#k。\r\n不管房外有#b任何奇怪的声音#k都请不要出来。", 37, 9062264, false, true, 1);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_InsertCanvas11(0, 0, 0, 0, 0, 0);
                        cm.fieldEffect_InsertCanvas(1, 1, 255, 255, 255, 200, 0);
                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1600);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("怎么办……管家明明嘱咐过了……", 57, 0, false, true, 1);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/knock", 100);
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/knock", 100);
                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("不对。不管是这个宅子，还是派对……怎么想都觉得奇怪。\r\n先去走廊瞧瞧。", 57, 0, false, true, 1);
                                  } else if (status === V++) {
                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
                                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                    cm.setInGameDirectionMode(false, true, false);
                                    cm.setStandAloneMode(false);
                                    cm.dispose();
                                    cm.warp(993175400, 16, false);
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}