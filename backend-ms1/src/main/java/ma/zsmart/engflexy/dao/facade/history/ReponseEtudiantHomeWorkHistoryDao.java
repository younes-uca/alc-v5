package ma.zsmart.engflexy.dao.facade.history;

import ma.zsmart.engflexy.zynerator.repository.AbstractHistoryRepository;
import ma.zsmart.engflexy.bean.history.ReponseEtudiantHomeWorkHistory;
import org.springframework.stereotype.Repository;

@Repository
public interface ReponseEtudiantHomeWorkHistoryDao extends AbstractHistoryRepository<ReponseEtudiantHomeWorkHistory,Long> {

}
