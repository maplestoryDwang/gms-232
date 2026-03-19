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
  } else if (status === V++) {
    cm.getMap().spawnReactorIfNotExist(2119008, 0, 1036, 39, 0, "木箱1");
    cm.getMap().spawnReactorIfNotExist(2119008, 0, 1396, 39, 0, "木箱2");
    cm.getMap().spawnReactorIfNotExist(2119008, 0, 1756, 39, 0, '木箱3');
    cm.getMap().spawnReactorIfNotExist(2119008, 0, 1936, 39, 0, "木箱4");
    cm.getMap().spawnReactorIfNotExist(2119008, 0, 2296, 39, 0, "木箱5");
    cm.getMap().spawnReactorIfNotExist(2119008, 0, 2117, 39, 0, "木箱6");
    cm.getMap().spawnReactorIfNotExist(2119007, 0, 1216, 39, 0, '木箱7');
    cm.getMap().spawnReactorIfNotExist(2119008, 0, 1578, 39, 0, '木箱8');
    cm.updateInfoQuest(38075, '');
    cm.updateInfoQuest(38075, '');
    cm.forceStartQuest(38075, '');
    cm.sendNormalTalk("虽然你都找对了, 可是箱子怎么这么多? 是其中的哪一只呢......先一个个砸开再说吧。", 3, 0, false, true);
    cm.dispose();
  }
}