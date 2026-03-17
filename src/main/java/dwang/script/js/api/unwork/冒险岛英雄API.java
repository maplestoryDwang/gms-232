package dwang.script.js.api.unwork;
import dwang.script.DwangScriptBaseApi;

public interface 冒险岛英雄API extends DwangScriptBaseApi {

    /**
         * 冒险岛英雄，变成指定NPC模样
         * 
    
         * 注意：如果在正常情况下触发了参数(-1,1) 会导致键盘被清空！
         *
         * @param npc    -1=恢复原样
         * @param action 0=不切换键盘 1=切换键盘
         * @出自类 冒险岛英雄API
         */
    default void mapleHeroBecomeNpc(int npc, int action) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 冒险岛英雄 act3 变装小游戏
         * @出自类 冒险岛英雄API
         */
    default void mapleHeroDressing(int value0, int value1, int value2, int value3) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 冒险岛英雄里的拼图小游戏
         * @出自类 冒险岛英雄API
         */
    default void mapleHeroJigsaw(int v1, int v2, int v3, Object jigsaws) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 冒险岛英雄 act2 遗迹逃亡，沙堆升高
         *
         * @param action
         * @param speed
         * @param y
         * @出自类 冒险岛英雄API
         */
    default void mapleHeroSandRising(int action, int speed, int y) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 冒险岛英雄，设置可用英雄列表
         *
         * @param heros
         * @出自类 冒险岛英雄API
         */
    default void mapleHeroSetList(Object heros) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 加载冒险岛英雄数据
         * @出自类 冒险岛英雄API
         */
    default void showMapleHero() {
        throw new RuntimeException("not implemented");
    }



    /**
         * 冒险岛英雄 act1 暴风雪
         * @出自类 冒险岛英雄API
         */
    default void snowStormRepeat() {
        throw new RuntimeException("not implemented");
    }



}
