package dwang.script.js.api.unwork;

import dwang.script.DwangScriptBaseApi;

public interface 冒险岛英雄API extends DwangScriptBaseApi {

    default void showMapleHero() { }

    default void mapleHeroSandRising(int action, int speed, int y) { }

    default void mapleHeroDressing(int value0, int value1, int value2, int value3) { }

    default void mapleHeroJigsaw(int v1, int v2, int v3, Object jigsaws) { }

    default void mapleHeroSetList(Object heros) { }

    default void snowStormRepeat() { }

    default void mapleHeroBecomeNpc(int npc, int action) { }

}
