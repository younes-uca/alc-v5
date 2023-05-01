package ma.zsmart.engflexy.dao.facade.core;

import org.springframework.data.jpa.repository.Query;
import ma.zsmart.engflexy.zynerator.repository.AbstractRepository;
import ma.zsmart.engflexy.bean.core.Faq;
import org.springframework.stereotype.Repository;
import java.util.List;


@Repository
public interface FaqDao extends AbstractRepository<Faq,Long>  {

    List<Faq> findByFaqTypeId(Long id);
    int deleteByFaqTypeId(Long id);

    @Query("SELECT NEW Faq(item.id,item.libelle) FROM Faq item")
    List<Faq> findAllOptimized();
}
