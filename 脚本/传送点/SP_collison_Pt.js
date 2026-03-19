function start() {
    try {
        var a = cm.getMapId();
        if (a == 340000010) {
            if (cm.getPortal().getName().startsWith("center01_2")) {
                cm.playerMessage(-1, "涓?澶?骞垮?衡??瑗夸晶?ュ??");
                cm.warp(cm.getMapId() + 1, 1)
            } else {
                if (cm.getPortal().getName().startsWith("west01_")) {
                    cm.playerMessage(-1, "涓?澶?骞垮?衡??涓诲?ュ??");
                    cm.warp(cm.getMapId() + 2, 5)
                } else {
                    if (cm.getPortal().getName().startsWith("east01_1")) {
                        cm.playerMessage(-1, "涓?澶?骞垮?衡??涓?渚у?ュ??");
                        cm.warp(cm.getMapId() + 3, 4)
                    } else {
                        if (cm.getPortal().getName().startsWith("west00_1")) {
                            cm.playerMessage(-1, "涓?澶?骞垮?衡??瑗胯竟澶ч??");
                            cm.warp(cm.getMapId() + 4, 6)
                        } else {
                            if (cm.getPortal().getName().endsWith("east00_0")) {
                                cm.playerMessage(-1, "涓?澶?骞垮?衡??涓?杈瑰ぇ??");
                                cm.warp(cm.getMapId() + 5, 4)
                            }
                        }
                    }
                }
            }
        } else {
            if (a == 340000012) {
                cm.playerMessage(-1, "涓诲?ュ??");
                if (cm.getPortal().getName().startsWith("north00_")) {
                    cm.playerMessage(-1, "涓诲?ュ?ｂ??涓?澶?骞垮??");
                    cm.warp(340000010, 20)
                }
            } else {
                if (a == 340000011) {
                    cm.playerMessage(-1, "瑗夸晶?ュ??");
                    if (cm.getPortal().getName().startsWith("north01_")) {
                        cm.playerMessage(-1, "瑗夸晶?ュ?ｂ??涓?澶?骞垮??");
                        cm.warp(340000010, 30)
                    }
                } else {
                    if (a == 340000013) {
                        cm.playerMessage(-1, "涓?渚у?ュ??");
                        if (cm.getPortal().getName().startsWith("north01_")) {
                            cm.playerMessage(-1, "涓?渚у?ュ?ｂ??涓?澶?骞垮??");
                            cm.warp(340000010, 35)
                        }
                    } else {
                        if (a == 340000014) {
                            cm.playerMessage(-1, "瑗胯竟澶ч??");
                            if (cm.getPortal().getName().startsWith("east00_")) {
                                cm.playerMessage(-1, "瑗胯竟澶ч????涓?澶?骞垮??");
                                cm.warp(340000010, 23)
                            }
                        } else {
                            if (a == 340000015) {
                                cm.playerMessage(-1, "涓?杈瑰ぇ??");
                                if (cm.getPortal().getName().startsWith("west00_2")) {
                                    cm.playerMessage(-1, "涓?杈瑰ぇ????涓?澶?骞垮??");
                                    cm.warp(340000010, 14)
                                } else {
                                    if (cm.getPortal().getName().endsWith("north00_1")) {
                                        cm.playerMessage(-1, "涓?杈瑰ぇ????????绔????哄?板??");
                                        cm.warp(340000016, 11)
                                    }
                                }
                            } else {
                                if (a == 340000016) {
                                    cm.playerMessage(-1, "????绔????哄?板??");
                                    if (cm.getPortal().getName().startsWith("east00_3")) {
                                        cm.playerMessage(-1, "????绔????哄?板?锯??涓?杈瑰ぇ??");
                                        cm.warp(340000015, 11)
                                    }
                                } else {
                                    if (a == 340000017) {
                                        cm.playerMessage(-1, "????绔?????")
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        cm.playerMessage(-1, "Portal Name : " + cm.getPortal().getName() + " ID : " + cm.getPortal().getId())
    } catch (b) {
        cm.getPlayer().dropMessage(5, "Portal Name : " + cm.getPortal().getName() + " ID : " + cm.getPortal().getId() + "Error: " + b)
    }
};