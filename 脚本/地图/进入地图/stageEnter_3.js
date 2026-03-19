var status = -1;
function action(f, E, e) {
  status++;
  var V = cm.getEventManager("副本_起源之塔");
  var O = V == null ? null : V.getProperty('stage' + parseInt('03'));
  if (O === "start") {
    cm.dispose();
    return;
  }
  if (cm.getNumberFromQuestInfo(42001, "noHelp") == 1) {
    startMap(V);
    return;
  }
  var b = -1;
  if (status <= b++) {
    cm.dispose();
  } else {
    if (status === b++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_AskAnswerTime(30);
    } else {
      if (status === b++) {
        cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 800, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === b++) {
          cm.inGameDirectionEvent_Monologue("#fn黑体##fs32#B - 03 F\r\n\r\n#fs22#在你之前来的探险家们正在展开精彩的对决！用蛋……蛋攻击？！\r\n\r\n把古代乌龟蛋押注在你信任的人身上吧。如果他能在比试中取胜的话，你将获得几倍于押注数量的龟蛋。\r\n\r\n那么，这一层有1000个古代乌龟蛋，就用你搜集到的来下注吧。我相信你是聪明人。", 30000);
        } else {
          if (status === b++) {
            cm.askYesNo("#b(什么呀，这家伙…………既然这一层没什么特别的，让他直接下去不就行了，为何非要…………怎么想都觉得奇怪。)#k", 3, 2540000);
          } else {
            if (status === b++) {
              cm.sendNormalTalk('…………都听到了。', 1, 2540000, false, true);
            } else {
              if (status === b++) {
                cm.sendNormalTalk("#b？！#k", 17, 2540000, true, true);
              } else {
                if (status === b++) {
                  cm.sendNormalTalk("…………我说都听到了！你个笨蛋！你以为我是平白无故让他去搜集的吗？我是说古代乌龟蛋！古代乌龟蛋是…………", 1, 2540000, true, true);
                } else {
                  if (status === b++) {
                    cm.sendNormalTalk("#b古代乌龟蛋…………是用在什么地方的呢？#k", 17, 2540000, true, true);
                  } else {
                    if (status === b++) {
                      cm.sendNormalTalk("…………好吃。", 1, 2540000, true, true);
                    } else {
                      if (status === b++) {
                        cm.sendNormalTalk("#b是啊！当然了！…………嗯？！你说什么？！古代乌龟蛋…………#e吃掉？！#k", 17, 2540000, true, true);
                      } else {
                        if (status === b++) {
                          cm.sendNormalTalk("思念体不是需要能量吗…………又要吃饭，又要喝水，又要…………又要…………", 1, 2540000, true, true);
                        } else {
                          if (status === b++) {
                            cm.sendNormalTalk("#b够了。我不想再听了。#k", 17, 2540000, true, true);
                          } else {
                            if (status === b++) {
                              cm.sendNormalTalk("你眼中的我的身体虽然是个能量体，但实际上却是这座巨塔的整体。所以我需要非常多的能量来维持这一身体。", 1, 2540000, true, true);
                            } else {
                              if (status === b++) {
                                cm.sendNormalTalk('#b真的好胖啊。#k', 17, 2540000, true, true);
                              } else {
                                if (status === b++) {
                                  cm.sendNormalTalk("你找死吗？！赶快把蛋搜集来！只要你动动脑筋很快就会搜集到的。", 1, 2540000, true, true);
                                } else if (status === b++) {
                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 1000, 0, 0);
                                  cm.curNodeEventEnd(true);
                                  cm.setInGameDirectionMode(false, true);
                                  cm.setStandAloneMode(false);
                                  startMap(V);
                                } else {
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
function startMap(f) {
  cm.dispose();
  cm.updateHeaderUI(1, 2, f.getTimeLeft(), 0, f.getTimeLeft(), 42011);
  f.setProperty('stage' + parseInt('03'), "start");
  var E = cm.getMap().getPortal(1).getPosition();
  cm.onTeleport(1, cm.getPlayer().getId(), E.getX(), E.getY());
  cm.getMap().getWeatherEffectNotice("请搜集1000个古代乌龟蛋。", 147, 60000, 1);
  cm.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/start");
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;