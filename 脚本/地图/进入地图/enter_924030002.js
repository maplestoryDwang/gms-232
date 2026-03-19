var status = -1;
var selectionLog = [];
var quit = 0;
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
      cm.npc_ChangeController(2210013, "oid=294947", 284, 95, 1, 234, 334, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, false);
      cm.sendNormalTalk("爬到高处之后，要注意自己的状态。耳朵已经开始，鼓膜已经开始有点疼了。", 1, 2210004, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("……？什么东西过来了！", 1, 2210004, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("啊，你看上面！怎么来了这么多虫子？还以为已经消灭掉了不少呢……。", 1, 2210004, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("对了！为了应对这种情况，我制造了特制的炸弹！可以引爆那个，然后一口气飞上去。", 1, 2210004, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("不过为了保护周围的环境，不建议轻易使用这种方法……。", 1, 2210004, true, true);
            } else {
              if (status === V++) {
                cm.askYesNo("怎么办？要一边清理虫子，一边上去吗？", 1, 2210004);
              } else {
                if (status === V++) {
                  quit = f == 0;
                  if (quit) {
                    cm.sendNormalTalk("好的，那就等你准备好了再出发吧！", 1, 2210004, false, true);
                  } else {
                    cm.sendNormalTalk("好的，明白了。那就上去吧！", 1, 2210004, false, true);
                  }
                } else if (status === V++) {
                  if (quit) {
                    cm.warp(240091500, 0, false);
                  } else {
                    cm.warp(924030300, 0, false);
                  }
                  cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                  cm.setInGameDirectionMode(false, true, false);
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