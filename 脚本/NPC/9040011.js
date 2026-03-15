function action(f, W, U) {
  cm.sendNormalTalk("<公告事项>\r\n靠着勇气和信念凝聚起来的家族成员们！快来挑战家族对抗赛吧！\r\n\r\n#b参加条件：#k\r\n1。6名以上的家族成员并肩作战！\r\n2。以家族管理员或副管理员为队长参加！\r\n3。注意，参加过程中如果家族成员不足6人，或队长中止游戏，则无法继续进行！", 0, 9040011, false, false);
  cm.dispose();
}
var status = -1;
function start() {
  status = -1;
  action(1, 0, 0);
}
;