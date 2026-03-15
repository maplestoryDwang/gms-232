var status;
var GQItems = Array(1032033, 4001024, 4001025, 4001026, 4001027, 4001028, 4001031, 4001032, 4001033, 4001034, 4001035, 4001037);
function start() {
  status = -1;
  action(1, 0, 0);
}
function action(f, W, U) {
  if (f == 0 && status == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  if (status == 0) {
    cm.askMenu("你好！我是遗址发掘部队员修安。我管理<圣瑞尼亚>遗址家族对抗战的申请。有关资格条件的详细内容请参考左边 \r\n#b#L0# 勘探队登记申请 #l \r\n#b#L1# 勘探队登记现状#l\r\n#b#L2# 取消勘探队登记#l ", 0, 9040000);
  } else {
    if (status == 1) {
      if (U == 0) {
        if (cm.getPlayerStat("GID") == 0 || cm.getPlayerStat("GRANK") >= 3) {
          cm.sendNext("Only a Master or Jr. Master of the guild can start an instance.");
          cm.dispose();
        } else {
          var V = cm.getEventManager('GuildQuest');
          if (V == null) {
            cm.sendOk("This trial is currently under construction.");
          } else {
            var w = V.getProperty("started");
            if ((w.equals("false") || w == null) && V.getInstance('GuildQuest') == null) {
              for (var N = 0; N < GQItems.length; N++) {
                cm.removeAll(GQItems[N]);
              }
              V.startInstance(cm.getPlayer(), cm.getPlayer().getName());
              V.setProperty("state", '0');
              cm.guildMessage("The guild has been entered into the Guild Quest. Please report to Shuang at the Excavation Camp on channel " + cm.getClient().getChannel() + '.');
            } else {
              cm.sendOk("Someone is already attempting on the guild quest.");
            }
          }
          cm.dispose();
        }
      } else {
        if (U == 1) {
          if (cm.getPlayerStat("GID") == 0) {
            cm.sendNext("You must be in a guild to join.");
            cm.dispose();
          } else {
            var V = cm.getEventManager("GuildQuest");
            if (V == null) {
              cm.sendOk("This trial is currently under construction.");
            } else {
              var u = V.getInstance("GuildQuest");
              if (u == null) {
                cm.sendOk("Your guild is currently not registered for an instance.");
              } else {
                if (V.getProperty("guildid") != null && !V.getProperty("guildid").equalsIgnoreCase('' + cm.getPlayerStat("GID"))) {
                  if (cm.getPlayer().isGM()) {
                    cm.sendOk("This instance is not your guild. Instance Guild: " + V.getProperty("guildid") + ", Your Guild: " + cm.getPlayerStat("GID"));
                  } else {
                    cm.sendOk("This instance is not your guild.");
                  }
                } else {
                  if (V.getProperty("started").equals('false')) {
                    for (var N = 0; N < GQItems.length; N++) {
                      cm.removeAll(GQItems[N]);
                    }
                    u.registerPlayer(cm.getPlayer());
                  } else {
                    cm.sendOk("I'm sorry, but the guild has gone on without you. Try again later.");
                  }
                }
              }
            }
            cm.dispose();
          }
        }
      }
    }
  }
}
var status = -1;