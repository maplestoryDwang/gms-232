package dwang.script.js.api.unwork;
import dwang.script.DwangScriptBaseApi;

public interface 怪物收藏API extends DwangScriptBaseApi {

    /**
         * 获得所有怪物收藏
         * @出自类 怪物收藏API
         */
    default void gainAllMobCollection() { }



    /**
         * 获得指定怪物的收藏
         *
         * @param mobId 怪物ID
         * @出自类 怪物收藏API
         */
    default void gainOneMobCollection(int mobId) { }



    /**
         * 获得随机的精英怪物收藏
         * @出自类 怪物收藏API
         */
    default void gainRandomEliteMobCollection() { }



    /**
         * 获得随机的怪物收藏
         * @出自类 怪物收藏API
         */
    default void gainRandomMobCollection() { }



    /**
         * 获得指定地区的随机怪物收藏
         * @出自类 怪物收藏API
         */
    default void gainRandomMobCollectionByRegion(int category) { }



    /**
         * 获得随机的一星怪物收藏
         * @出自类 怪物收藏API
         */
    default void gainRandomNormalMobCollection() { }



}
