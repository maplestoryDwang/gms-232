function start() {
    var c = cm.getEventInstance();
    if (cm.getMapId() == 932200100) {
        var d = c.getMapInstance(932200100);
        if (em.getProperty("gate") == "0" || em.getProperty("gate") == "null" || em.getProperty("gate") == null) {
            cm.playerMessage("副本未开启，请联系管理员。");
            return
        } else {
            if (em.getProperty("Round" + cm.getPlayer().getName()) == "0" && em.getProperty("gate") != "4") {
                em.setProperty("Round" + cm.getPlayer().getName(), "1");
                cm.playerMessage(5, "玩家" + cm.getPlayer().getName() + "跑完第一圈！");
                cm.playerMessage(-1, "玩家" + cm.getPlayer().getName() + "跑完第一圈！");
                d.startMapEffect("玩家" + cm.getPlayer().getName() + "跑完第一圈！", 5121050);
                cm.onTeleport(0, 3, cm.getPlayer().getId(), -1974, 2558)
            } else {
                if (em.getProperty("Round" + cm.getPlayer().getName()) == "1" && em.getProperty("gate") != "4") {
                    em.setProperty("Round" + cm.getPlayer().getName(), "2");
                    cm.playerMessage(5, "玩家" + cm.getPlayer().getName() + "就剩最后一圈啦！大家快加油哦");
                    cm.playerMessage(-1, "玩家" + cm.getPlayer().getName() + "就剩最后一圈啦！大家快加油哦");
                    d.startMapEffect("玩家" + cm.getPlayer().getName() + "就剩最后一圈啦！大家快加油哦", 5121050);
                    cm.onTeleport(0, 3, cm.getPlayer().getId(), -1974, 2558)
                } else {
                    if (em.getProperty("Round" + cm.getPlayer().getName()) == "2" && em.getProperty("gate") != "4") {
                        em.setProperty("Round" + cm.getPlayer().getName(), "3");
                        em.setProperty("rank", "" + (parseInt(em.getProperty("rank")) + 1));
                        var e = em.getProperty("rank");
                        cm.onTeleport(0, 3, cm.getPlayer().getId(), -2096, 818);
                        d.startMapEffect("玩家" + cm.getPlayer().getName() + "跑完了！此次排第" + e + "名", 5121050);
                        cm.playerMessage(-1, "玩家" + cm.getPlayer().getName() + "跑完了！此次排第" + e + "名");
                        cm.playerMessage(5, "玩家" + cm.getPlayer().getName() + "跑完了！此次排第" + e + "名");
                        for (var b = 1; b < 6; b++) {
                            if (em.getProperty("rank" + b) == "null" || em.getProperty("rank" + b) == "0" || em.getProperty("rank" + b) == null) {
                                em.setProperty("rank" + b, "" + cm.getPlayer().getName());
                                break
                            }
                        }
                        cm.warp(932200002, 0);
                        if (e == "5") {
                            em.setProperty("gate", "4");
                            em.setProperty("time", "3");
                            em.schedule("setup", 1000, c);
                            d.startMapEffect("跑旗赛活动结束啦，30秒后传送出去。", 5121050)
                        }
                        return
                    } else {
                        if (em.getProperty("gate") == "4") {
                            cm.playerMessage(5, "已经结束啦！");
                            return
                        } else {
                            cm.playerMessage(-1, "其他错误！")
                        }
                    }
                }
            }
        }
    } else {
        if (cm.getMapId() == 932200200) {
            var d = c.getMapInstance(932200200);
            if (em.getProperty("gate") == "0" || em.getProperty("gate") == "null" || em.getProperty("gate") == null) {
                cm.playerMessage("副本未开启，请联系管理员。");
                return
            } else {
                if (em.getProperty("Round" + cm.getPlayer().getName()) == "0" && em.getProperty("gate") != "4") {
                    em.setProperty("Round" + cm.getPlayer().getName(), "1");
                    cm.playerMessage(5, "玩家" + cm.getPlayer().getName() + "跑完第一圈！");
                    cm.playerMessage(-1, "玩家" + cm.getPlayer().getName() + "跑完第一圈！");
                    d.startMapEffect("玩家" + cm.getPlayer().getName() + "跑完第一圈！", 5121050);
                    cm.onTeleport(0, 3, cm.getPlayer().getId(), -573, 2498)
                } else {
                    if (em.getProperty("Round" + cm.getPlayer().getName()) == "1" && em.getProperty("gate") != "4") {
                        em.setProperty("Round" + cm.getPlayer().getName(), "2");
                        cm.playerMessage(5, "玩家" + cm.getPlayer().getName() + "就剩最后一圈啦！大家快加油哦");
                        cm.playerMessage(-1, "玩家" + cm.getPlayer().getName() + "就剩最后一圈啦！大家快加油哦");
                        d.startMapEffect("玩家" + cm.getPlayer().getName() + "就剩最后一圈啦！大家快加油哦", 5121050);
                        cm.onTeleport(0, 3, cm.getPlayer().getId(), -573, 2498)
                    } else {
                        if (em.getProperty("Round" + cm.getPlayer().getName()) == "2" && em.getProperty("gate") != "4") {
                            em.setProperty("Round" + cm.getPlayer().getName(), "3");
                            em.setProperty("rank", "" + (parseInt(em.getProperty("rank")) + 1));
                            var e = em.getProperty("rank");
                            cm.onTeleport(0, 3, cm.getPlayer().getId(), -4, 818);
                            d.startMapEffect("玩家" + cm.getPlayer().getName() + "跑完了！此次排第" + e + "名", 5121050);
                            cm.playerMessage(-1, "玩家" + cm.getPlayer().getName() + "跑完了！此次排第" + e + "名");
                            cm.playerMessage(5, "玩家" + cm.getPlayer().getName() + "跑完了！此次排第" + e + "名");
                            for (var b = 1; b < 6; b++) {
                                if (em.getProperty("rank" + b) == "null" || em.getProperty("rank" + b) == "0" || em.getProperty("rank" + b) == null) {
                                    em.setProperty("rank" + b, "" + cm.getPlayer().getName());
                                    break
                                }
                            }
                            cm.warp(932200004, 0);
                            if (e == "5") {
                                em.setProperty("gate", "4");
                                em.setProperty("time", "3");
                                em.schedule("setup", 1000, c);
                                d.startMapEffect("跑旗赛活动结束啦，30秒后传送出去。", 5121050)
                            }
                            return
                        } else {
                            if (em.getProperty("gate") == "4") {
                                cm.playerMessage(5, "已经结束啦！");
                                return
                            } else {
                                cm.playerMessage(-1, "其他错误！")
                            }
                        }
                    }
                }
            }
        }
    }
    if (em.getProperty("Round") < 2) {
        em.setProperty(cm.getPlayer().getName(), "0")
    } else {
        var a = cm.getChannelServer().getMapFactory().getMap(932200100).getCharacters();
        for (var b = 0; b < a.lenth; b++) {
            if (em.getProperty("reward") == "" + b) {
                em.setProperty("reward", "i + 1");
                break
            }
        }
    }
};