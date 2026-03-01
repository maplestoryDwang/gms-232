package dwang.script.js.api.unwork;
import dwang.script.DwangScriptBaseApi;

public interface 成就系统API extends DwangScriptBaseApi {

    default void 成就检查_火热的兄弟情() { }

    default void finishAchievement(int achievementId) { }

    default void gainSubAchievement(int achievementId, int sub) { }

    default void updateAchievement(int achievementId, int sub, int cur, int goal) { }

}
