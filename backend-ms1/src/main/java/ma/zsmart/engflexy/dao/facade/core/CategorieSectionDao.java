package ma.zsmart.engflexy.dao.facade.core;

import org.springframework.data.jpa.repository.Query;
import ma.zsmart.engflexy.zynerator.repository.AbstractRepository;
import ma.zsmart.engflexy.bean.core.CategorieSection;
import org.springframework.stereotype.Repository;
import ma.zsmart.engflexy.bean.core.CategorieSection;
import java.util.List;


@Repository
public interface CategorieSectionDao extends AbstractRepository<CategorieSection,Long>  {
    CategorieSection findByCode(String code);
    int deleteByCode(String code);

    List<CategorieSection> findBySuperCategorieSectionId(Long id);
    int deleteBySuperCategorieSectionId(Long id);

    @Query("SELECT NEW CategorieSection(item.id,item.code) FROM CategorieSection item")
    List<CategorieSection> findAllOptimized();
}
