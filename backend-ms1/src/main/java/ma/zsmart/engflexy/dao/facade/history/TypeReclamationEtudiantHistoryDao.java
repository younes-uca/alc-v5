package ma.zsmart.engflexy.dao.facade.history;

import ma.zsmart.engflexy.zynerator.repository.AbstractHistoryRepository;
import ma.zsmart.engflexy.bean.history.TypeReclamationEtudiantHistory;
import org.springframework.stereotype.Repository;

@Repository
public interface TypeReclamationEtudiantHistoryDao extends AbstractHistoryRepository<TypeReclamationEtudiantHistory,Long> {

}
