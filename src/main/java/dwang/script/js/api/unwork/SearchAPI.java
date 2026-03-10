package dwang.script.js.api.unwork;

import dwang.script.DwangScriptBaseApi;

public interface SearchAPI extends DwangScriptBaseApi {

    /**
         * 根据名称或者ID来模糊匹配
         *
         * @param type   搜索类型 {@link org.bms.common.enums.keepnames.SearchUtilType}
         * @param search 关键词
         * @return 匹配上的ID列表
         * @出自类 SearchAPI
         */
    default void searchForIds(int type, String search) { }



    /**
         * 根据名称或者ID来模糊匹配
         *
         * @param type   搜索类型 {@link org.bms.common.enums.keepnames.SearchUtilType}
         * @param search 关键词
         * @return 带有完整格式的对话文本
         * @出自类 SearchAPI
         */
    default void searchForText(int type, String search) { }



}
