package ma.zsmart.engflexy.dao.facade.history;

import ma.zsmart.engflexy.zynerator.repository.AbstractHistoryRepository;
import ma.zsmart.engflexy.bean.history.InteretEtudiantHistory;
import org.springframework.stereotype.Repository;

@Repository
public interface InteretEtudiantHistoryDao extends AbstractHistoryRepository<InteretEtudiantHistory,Long> {

}
