package dwang.script.js.api.unwork;
import dwang.script.DwangScriptBaseApi;

public interface 痛苦迷宫API extends DwangScriptBaseApi {

    /**
         * 泰捏布利斯，痛苦迷宫地图事件
         * @出自类 痛苦迷宫API
         */
    default void enterMaze() { }



    /**
         * 通过传送门
         * @出自类 痛苦迷宫API
         */
    default void enterMazePortal(int type) { }



    /**
         * 泰捏布利斯，痛苦迷宫，获得终点所对应的地图
         *
         * @return
         * @出自类 痛苦迷宫API
         */
    default void getMazeDestination() { }



    /**
         * 泰捏布里斯，痛苦迷宫，点燃蜡烛
         *
         * @param v1
         * @param v2
         * @param v3
         * @param v4
         * @param v5
         * @return
         * @出自类 痛苦迷宫API
         */
    default void lightUpCandle(int v1, int v2, int v3, int v4, int v5) { }



}
