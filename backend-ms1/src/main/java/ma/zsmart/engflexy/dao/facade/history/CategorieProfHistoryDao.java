package ma.zsmart.engflexy.dao.facade.history;

import ma.zsmart.engflexy.zynerator.repository.AbstractHistoryRepository;
import ma.zsmart.engflexy.bean.history.CategorieProfHistory;
import org.springframework.stereotype.Repository;

@Repository
public interface CategorieProfHistoryDao extends AbstractHistoryRepository<CategorieProfHistory,Long> {

}
