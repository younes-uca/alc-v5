package ma.zsmart.engflexy.dao.facade.history;

import ma.zsmart.engflexy.zynerator.repository.AbstractHistoryRepository;
import ma.zsmart.engflexy.bean.history.FreeTrialDetailHistory;
import org.springframework.stereotype.Repository;

@Repository
public interface FreeTrialDetailHistoryDao extends AbstractHistoryRepository<FreeTrialDetailHistory,Long> {

}
