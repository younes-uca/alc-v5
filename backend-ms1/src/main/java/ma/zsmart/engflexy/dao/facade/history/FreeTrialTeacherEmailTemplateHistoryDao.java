package ma.zsmart.engflexy.dao.facade.history;

import ma.zsmart.engflexy.zynerator.repository.AbstractHistoryRepository;
import ma.zsmart.engflexy.bean.history.FreeTrialTeacherEmailTemplateHistory;
import org.springframework.stereotype.Repository;

@Repository
public interface FreeTrialTeacherEmailTemplateHistoryDao extends AbstractHistoryRepository<FreeTrialTeacherEmailTemplateHistory,Long> {

}
