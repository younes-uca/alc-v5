package ma.zsmart.engflexy.dao.facade.core;

import org.springframework.data.jpa.repository.Query;
import ma.zsmart.engflexy.zynerator.repository.AbstractRepository;
import ma.zsmart.engflexy.bean.core.TeacherLocality;
import org.springframework.stereotype.Repository;
import ma.zsmart.engflexy.bean.core.TeacherLocality;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;


@Repository
public interface TeacherLocalityDao extends AbstractRepository<TeacherLocality,Long>  {
    TeacherLocality findByCode(String code);
    int deleteByCode(String code);


    @Query("SELECT NEW TeacherLocality(item.id,item.libelle) FROM TeacherLocality item")
    List<TeacherLocality> findAllOptimized();
    @Query(value = "SELECT MAX(item.ordre) FROM TeacherLocality item where item.etablissementId = :etablissementId")
    Long findMaxOrdreByEtablissementIdOrder(@Param("etablissementId") Long etablissementId);
}
