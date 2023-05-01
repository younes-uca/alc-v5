package ma.zsmart.engflexy.service.facade.admin;

import java.util.List;
import ma.zsmart.engflexy.bean.core.ClassRoom;
import ma.zsmart.engflexy.dao.criteria.core.ClassRoomCriteria;
import ma.zsmart.engflexy.dao.criteria.history.ClassRoomHistoryCriteria;
import ma.zsmart.engflexy.zynerator.service.IService;

public interface ClassRoomAdminService extends  IService<ClassRoom,ClassRoomCriteria, ClassRoomHistoryCriteria>  {

    List<ClassRoom> findByProfId(Long id);
    int deleteByProfId(Long id);



}
