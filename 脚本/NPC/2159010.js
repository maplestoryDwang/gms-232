var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.sendNormalTalk("我真的好久没到实验室外面来了……", 0, 2159007, false, false);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("呼……好像好不容易甩掉了。虽然我想我不会输给席勒那样的家伙，但我没有自信可以保护好你们。你们怎么在这种地方？我不是跟村民们说了吗？矿山这边很危险，不要随便到这里来。", 8, 2159010, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("对，对不起。#h0#什么都没有做错。他反倒是救了我。", 4, 2159007, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("嗯？这么说来……你好像不是村里人吧？你的衣服怎么这么奇怪？难道你是被黑色之翼抓住的人吗？", 8, 2159010, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("#b(贝比蒂说明了刚刚发生的一切。)#k", 4, 2159007, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("……呼……嗯……我们推测黑色之翼也许在做某种危险的实验，没想到居然是真的……真是可怕。必须尽快通知大家，准备好对策。", 8, 2159010, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("嗯……你到底是谁啊？你到底是什么人，为什么会突然在那里出现？为什么要救我们呢？", 2, 2159010, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("……那个嘛……你也好像长大了。既然发生了这种事，我也好像很难再隐藏下去了……好吧，我就告诉你吧。我们村埃德尔斯坦被黑色之翼支配着，这你应该知道吧？", 8, 2159010, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("被夺走的矿山、被占领的议会、监视者的存在……我们村的人只能像奴隶一样，默默地听从他们的命令。但是就算是黑色之翼，也无法支配我们的心。", 8, 2159010, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("我是反抗者。是和同伴们一起对抗黑色之翼的埃德尔斯坦的反抗者之一。虽然我不能把名字告诉你，但我的代号是J。现在你明白了吧？", 8, 2159010, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("明白了的话，就快点回村里去吧。这里很危险，别再到这里来了。那个被当作实验体的孩子，如果放着不管的话，很可能会被他们抓回去。我会把他带到我的同伴们那里去。看到我的事情，一定要帮我保密。", 8, 2159010, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("请再告诉我一件事。我也能加入反抗者吗？", 2, 2159010, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("呵呵……你也想和黑色之翼战斗吗？如果你有这份心的话，也不是不能加入反抗者。但不是现在。等你达到10级之后，反抗者组织那边会主动接近你的。如果我们成为了同伴，也许还会见面。再见。", 8, 2159010, true, true);
                            } else if (status === V++) {
                              cm.forceCompleteQuest(23007);
                              cm.gainExp(90);
                              cm.setStandAloneMode(false);
                              cm.gainItem(2000000, 3);
                              cm.gainItem(2000003, 3);
                              cm.dispose();
                              cm.warp(310000000, 8, false);
                              cm.addPopupSay(0, 5000, "接受校长的任务吧！");
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}