package ma.zsmart.engflexy.dao.facade.history;

import ma.zsmart.engflexy.zynerator.repository.AbstractHistoryRepository;
import ma.zsmart.engflexy.bean.history.ProfHistory;
import org.springframework.stereotype.Repository;

@Repository
public interface ProfHistoryDao extends AbstractHistoryRepository<ProfHistory,Long> {

}
