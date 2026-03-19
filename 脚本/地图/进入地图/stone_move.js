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
      cm.getMap().resetReactors();
      cm.getMap().spawnReactorIfNotExist(8659079, 0, 486, -297, 0, 'tombstone3');
      cm.getMap().spawnReactorIfNotExist(8659077, 0, -276, -298, 0, "tombstone1");
      cm.getMap().spawnReactorIfNotExist(8659078, 0, 97, -295, 0, 'tombstone2');
      cm.getMap().spawnReactorIfNotExist(8659081, 0, 1063, -291, 0, 'tombstone5');
      cm.getMap().spawnReactorIfNotExist(8659080, 0, 800, -295, 0, "tombstone4");
      cm.updateInfoQuest(63108, "num=0");
      cm.sendNormalTalk("#b哦哦……这里是哪里？", 3, 0, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("这不是在天上吗！！你怎么老是问些废话！", 5, 9400320, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("#b不不，我不是不知道……怎么会飞到天上……", 3, 0, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("闭嘴，把墓碑放到那边标记好的地方。", 5, 9400320, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("#b你说的是那边标记好的地区对吧？", 3, 0, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("没时间啰嗦，快点！！！", 5, 9400320, true, false);
              } else if (status === V++) {
                cm.dispose();
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