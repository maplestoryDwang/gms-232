function start() {
    try {
        var a = cm.getMapId();
        if (!cm.getMap().getNumMonsters() == 0 && cm.getPortal().getName().startsWith("in") && a != 863010100 && a != 863010500 && a != 863010240 && a != 863010330 && a != 863010430) {
            cm.getTopMsgFont("必须将区域内的怪物消灭才能前往下个关卡。", 3, 20, 4, 0, 0);
            return
        }
        if (a == 863010100) {
            if (cm.getPortal().getId() == 8) {
                cm.warp(863010200, 1)
            } else {
                if (cm.getPortal().getId() == 7) {
                    cm.warp(863010400, 2)
                } else {
                    if (cm.getPortal().getId() == 6) {
                        cm.warp(863010300, 2)
                    } else {
                        if (cm.getPortal().getId() == 9) {
                            cm.warp(863010220, 1)
                        }
                    }
                }
            }
        } else {
            if (a == 863010300) {
                if (cm.getPortal().getId() == 2) {
                    cm.warp(863010100, 6)
                } else {
                    if (cm.getPortal().getId() == 1) {
                        cm.warp(863010310, 1)
                    }
                }
            } else {
                if (a == 863010310) {
                    if (cm.getPortal().getId() == 1) {
                        cm.warp(863010300, 1)
                    } else {
                        if (cm.getPortal().getId() == 2) {
                            cm.warp(863010320, 2)
                        }
                    }
                } else {
                    if (a == 863010420) {
                        if (cm.getPortal().getId() == 1) {
                            cm.warp(863010410, 2)
                        } else {
                            if (cm.getPortal().getId() == 2) {
                                cm.warp(863010500, 5)
                            } else {
                                if (cm.getPortal().getId() == 3) {
                                    cm.warp(863010430, 1)
                                }
                            }
                        }
                    } else {
                        if (a == 863010430) {
                            if (cm.getPortal().getId() == 1) {
                                cm.warp(863010420, 3)
                            } else {
                                if (cm.getPortal().getId() == 3) {
                                    cm.warp(863010500, 6)
                                }
                            }
                        } else {
                            if (a == 863010330) {
                                if (cm.getPortal().getId() == 1) {
                                    cm.warp(863010320, 3)
                                } else {
                                    if (cm.getPortal().getId() == 3) {
                                        cm.warp(863010500, 4)
                                    }
                                }
                            } else {
                                if (a == 863010500) {
                                    if (cm.getPortal().getId() == 5) {
                                        cm.warp(863010420, 2)
                                    } else {
                                        if (cm.getPortal().getId() == 2) {
                                            cm.warp(863010240, 3)
                                        } else {
                                            if (cm.getPortal().getId() == 3) {
                                                cm.warp(863010600, 2)
                                            } else {
                                                if (cm.getPortal().getId() == 6) {
                                                    cm.warp(863010430, 3)
                                                } else {
                                                    if (cm.getPortal().getId() == 1) {
                                                        cm.warp(863010320, 1)
                                                    } else {
                                                        if (cm.getPortal().getId() == 4) {
                                                            cm.warp(863010330, 3)
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                } else {
                                    if (a == 863010240) {
                                        if (cm.getPortal().getId() == 2) {
                                            cm.warp(863010210, 2)
                                        } else {
                                            if (cm.getPortal().getId() == 1) {
                                                cm.warp(863010230, 2)
                                            } else {
                                                if (cm.getPortal().getId() == 3) {
                                                    cm.warp(863010500, 2)
                                                }
                                            }
                                        }
                                    } else {
                                        if (a == 863010210) {
                                            if (cm.getPortal().getId() == 1) {
                                                cm.warp(863010200, 2)
                                            } else {
                                                if (cm.getPortal().getId() == 2) {
                                                    cm.warp(863010240, 2)
                                                }
                                            }
                                        } else {
                                            if (a == 863010200) {
                                                if (cm.getPortal().getId() == 1) {
                                                    cm.warp(863010100, 8)
                                                } else {
                                                    if (cm.getPortal().getId() == 2) {
                                                        cm.warp(863010210, 1)
                                                    }
                                                }
                                            } else {
                                                if (a == 863010400) {
                                                    if (cm.getPortal().getId() == 1) {
                                                        cm.warp(863010410, 1)
                                                    } else {
                                                        if (cm.getPortal().getId() == 2) {
                                                            cm.warp(863010100, 7)
                                                        }
                                                    }
                                                } else {
                                                    if (a == 863010410) {
                                                        if (cm.getPortal().getId() == 2) {
                                                            cm.warp(863010420, 1)
                                                        } else {
                                                            if (cm.getPortal().getId() == 1) {
                                                                cm.warp(863010400, 1)
                                                            }
                                                        }
                                                    } else {
                                                        if (a == 863010320) {
                                                            if (cm.getPortal().getId() == 2) {
                                                                cm.warp(863010310, 2)
                                                            } else {
                                                                if (cm.getPortal().getId() == 1) {
                                                                    cm.warp(863010500, 1)
                                                                } else {
                                                                    if (cm.getPortal().getId() == 3) {
                                                                        cm.warp(863010330, 1)
                                                                    }
                                                                }
                                                            }
                                                        } else {
                                                            if (a == 863010230) {
                                                                if (cm.getPortal().getId() == 1) {
                                                                    cm.warp(863010220, 2)
                                                                } else {
                                                                    if (cm.getPortal().getId() == 2) {
                                                                        cm.warp(863010240, 1)
                                                                    }
                                                                }
                                                            } else {
                                                                if (a == 863010220) {
                                                                    if (cm.getPortal().getId() == 1) {
                                                                        cm.warp(863010100, 9)
                                                                    } else {
                                                                        if (cm.getPortal().getId() == 2) {
                                                                            cm.warp(863010230, 1)
                                                                        }
                                                                    }
                                                                } else {
                                                                    if (a == 863010600) {
                                                                        if (cm.getPortal().getId() == 2) {
                                                                            cm.warp(863010500, 3)
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
        cm.effect_NormalSpeechBalloon(" #m" + cm.getMapId() + "# ", 1, 0, 0, 3000, 0, 0)
    } catch (b) {
        cm.getPlayer().dropMessage(5, "Portal Name : " + cm.getPortal().getName() + " ID : " + cm.getPortal().getId() + "Error: " + b)
    }
};