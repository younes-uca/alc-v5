package ma.zsmart.engflexy.dao.facade.history;

import ma.zsmart.engflexy.zynerator.repository.AbstractHistoryRepository;
import ma.zsmart.engflexy.bean.history.VocabularyHistory;
import org.springframework.stereotype.Repository;

@Repository
public interface VocabularyHistoryDao extends AbstractHistoryRepository<VocabularyHistory,Long> {

}
