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
      if (!cm.isQuestActive(34316)) {
        cm.dispose();
        return;
      }
      cm.sendNormalTalk('这究竟是怎么回事？', 5, 3003238, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk('我在做什么啊？', 5, 3003236, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("我的记忆…。咳，我的头…… ", 5, 3003201, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("防毒面具？？你没事吧？究竟发生了什么事？", 3, 0, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("我没事，还是把居民们…… 送到安全的地方……可是去哪里呢？", 5, 3003201, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("要不要把他们带到据点？", 3, 0, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("不，不行。音乐盒被摧毁后，清道夫立刻就消失了。说不定没有音乐盒的地方更加安全…… ", 5, 3003201, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk('我们先回到据点吧。', 3, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("喂，我说！一起走吧！", 5, 3003221, true, true);
                    } else if (status === V++) {
                      cm.updateInfoQuest(34340, "enter=3");
                      cm.dispose();
                      cm.warp(450003740, 0, true);
                    }
                  }
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