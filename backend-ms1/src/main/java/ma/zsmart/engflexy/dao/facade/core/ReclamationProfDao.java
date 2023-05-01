package ma.zsmart.engflexy.dao.facade.core;

import org.springframework.data.jpa.repository.Query;
import ma.zsmart.engflexy.zynerator.repository.AbstractRepository;
import ma.zsmart.engflexy.bean.core.ReclamationProf;
import org.springframework.stereotype.Repository;
import ma.zsmart.engflexy.bean.core.ReclamationProf;
import java.util.List;


@Repository
public interface ReclamationProfDao extends AbstractRepository<ReclamationProf,Long>  {
    ReclamationProf findByReference(String reference);
    int deleteByReference(String reference);

    List<ReclamationProf> findByAdminId(Long id);
    int deleteByAdminId(Long id);
    List<ReclamationProf> findByProfId(Long id);
    int deleteByProfId(Long id);
    List<ReclamationProf> findByTypeReclamationProfId(Long id);
    int deleteByTypeReclamationProfId(Long id);

    @Query("SELECT NEW ReclamationProf(item.id,item.reference) FROM ReclamationProf item")
    List<ReclamationProf> findAllOptimized();
}
