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
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("你好，#h0#！这段时间过的怎么样？\r\n多亏了#h0#，我和匹比，还有#b拟真机器人#k们度过了非常幸福的时光。", 36, 9401071, 0, 1);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("这是我听到的最好的消息。大家都过的怎么样？", 56, 0, 1, 1);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#b拟真机器人#k们正在做走向世界的准备。\r\n为了独当一面，或有助于他人，他们每天都在忙着学习和练习各种各样的技术。", 36, 9401071, 1, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("按照约定，我和匹比埋头研究真正的#b类人体#k智能机器人。\r\n虽然现在还没有什么进展啦……嘿嘿……", 36, 9401071, 1, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("但是，#b拍摄#k我们，并说要播放#b阿特利埃#k残酷举动的人，前不久又来取材了！", 36, 9401071, 1, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("可是……拍摄时我发现了一个超级#r可怕的现象#k。\r\n在阿特利埃#b地下工厂#k……", 36, 9401071, 1, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("地下工厂？那个地方不是被封锁了吗？\r\n一定要让它停止运作才行。", 56, 0, 1, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("我们原本也是这样想的！克拉尼亚离开后，我和匹比明明切断了所有设施的电源，破坏了系统来着。", 36, 9401071, 1, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("但是……你看这个。#h0#。\r\n这是来取材的人#b拍摄的视频#k。看了这个，你就知道我为什么又来找你了。", 36, 9401071, 1, 1);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                          cm.playVideoByScript("PL_Beautyroid2.avi ");
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("这……这么多……长相骇人的智能机器人到底……是什么情况？", 56, 0, 0, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("我们现在也不太清楚。我们太害怕了，就紧急撤走了媒体采访团……匹比和我现在正努力搞清楚他的真面目。", 36, 9401071, 1, 1);
                            } else {
                              if (status === V++) {
                                cm.askYesNo_Bottom("#h0#，拜托你了。#b#e你可以再次来到阿特利埃帮助我们吗？#k#n", 36, 9401071);
                              } else if (status === V++) {
                                cm.updateInfoQuest(64947, 's3=start');
                                cm.forceCompleteQuest(64909);
                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                cm.warp(cm.getNumberFromQuestInfo(63483, 'map'), 0, false);
                                cm.eventSKill(0);
                                cm.setInGameDirectionMode(false, true, false);
                                cm.setStandAloneMode(false);
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