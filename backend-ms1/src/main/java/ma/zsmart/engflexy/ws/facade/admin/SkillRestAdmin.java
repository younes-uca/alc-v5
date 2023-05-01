package  ma.zsmart.engflexy.ws.facade.admin;


import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import ma.zsmart.engflexy.bean.core.Skill;
import ma.zsmart.engflexy.bean.history.SkillHistory;
import ma.zsmart.engflexy.dao.criteria.core.SkillCriteria;
import ma.zsmart.engflexy.dao.criteria.history.SkillHistoryCriteria;
import ma.zsmart.engflexy.service.facade.admin.SkillAdminService;
import ma.zsmart.engflexy.ws.converter.SkillConverter;
import ma.zsmart.engflexy.ws.dto.SkillDto;
import ma.zsmart.engflexy.zynerator.controller.AbstractController;
import ma.zsmart.engflexy.zynerator.dto.AuditEntityDto;
import ma.zsmart.engflexy.zynerator.util.PaginatedList;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import ma.zsmart.engflexy.zynerator.process.Result;

import org.springframework.web.multipart.MultipartFile;
import ma.zsmart.engflexy.zynerator.dto.FileTempDto;

@Api("Manages skill services")
@RestController
@RequestMapping("/api/admin/skill/")
public class SkillRestAdmin  extends AbstractController<Skill, SkillDto, SkillHistory, SkillCriteria, SkillHistoryCriteria, SkillAdminService, SkillConverter> {



    @RequestMapping(value = "upload", method = RequestMethod.POST, consumes = "multipart/form-data")
    public ResponseEntity<FileTempDto> uploadFileAndGetChecksum(@RequestBody MultipartFile file) throws Exception {
        return super.uploadFileAndGetChecksum(file);
    }

    @RequestMapping(value = "upload-multiple", method = RequestMethod.POST, consumes = "multipart/form-data")
    public ResponseEntity<List<FileTempDto>> uploadMultipleFileAndGetChecksum(@RequestBody MultipartFile[] files) throws Exception {
        return super.uploadMultipleFileAndGetChecksum(files);
    }

    @ApiOperation("Finds a list of all skills")
    @GetMapping("")
    public ResponseEntity<List<SkillDto>> findAll() throws Exception {
        return super.findAll();
    }

    @ApiOperation("Finds an optimized list of all skills")
    @GetMapping("optimized")
    public ResponseEntity<List<SkillDto>> findAllOptimized() throws Exception {
        return super.findAllOptimized();
    }

    @ApiOperation("Finds a skill by id")
    @GetMapping("id/{id}")
    public ResponseEntity<SkillDto> findById(@PathVariable Long id, String[] includes, String[] excludes) throws Exception {
        return super.findById(id, includes, excludes);
    }
    @ApiOperation("Saves the specified  skill")
    @PostMapping("")
    public ResponseEntity<SkillDto> save(@RequestBody SkillDto dto) throws Exception {
        return super.save(dto);
    }

    @ApiOperation("Updates the specified  skill")
    @PutMapping("")
    public ResponseEntity<SkillDto> update(@RequestBody SkillDto dto) throws Exception {
        return super.update(dto);
    }

    @ApiOperation("Delete list of skill")
    @PostMapping("multiple")
    public ResponseEntity<List<SkillDto>> delete(@RequestBody List<SkillDto> listToDelete) throws Exception {
        return super.delete(listToDelete);
    }
    @ApiOperation("Delete the specified skill")
    @DeleteMapping("")
    public ResponseEntity<SkillDto> delete(@RequestBody SkillDto dto) throws Exception {
            return super.delete(dto);
    }

    @ApiOperation("Delete the specified skill")
    @DeleteMapping("id/{id}")
    public ResponseEntity<Long> deleteById(@PathVariable Long id) throws Exception {
        return super.deleteById(id);
    }
    @ApiOperation("Delete multiple skills by ids")
    @DeleteMapping("multiple/id")
    public ResponseEntity<List<Long>> deleteByIdIn(@RequestBody List<Long> ids) throws Exception {
            return super.deleteByIdIn(ids);
     }


    @ApiOperation("Finds skills by criteria")
    @PostMapping("find-by-criteria")
    public ResponseEntity<List<SkillDto>> findByCriteria(@RequestBody SkillCriteria criteria) throws Exception {
        return super.findByCriteria(criteria);
    }

    @ApiOperation("Finds paginated skills by criteria")
    @PostMapping("find-paginated-by-criteria")
    public ResponseEntity<PaginatedList> findPaginatedByCriteria(@RequestBody SkillCriteria criteria) throws Exception {
        return super.findPaginatedByCriteria(criteria);
    }

    @ApiOperation("Exports skills by criteria")
    @PostMapping("export")
    public ResponseEntity<InputStreamResource> export(@RequestBody SkillCriteria criteria) throws Exception {
        return super.export(criteria);
    }

    @ApiOperation("Gets skill data size by criteria")
    @PostMapping("data-size-by-criteria")
    public ResponseEntity<Integer> getDataSize(@RequestBody SkillCriteria criteria) throws Exception {
        return super.getDataSize(criteria);
    }

    @ApiOperation("Gets skill history by id")
    @GetMapping("history/id/{id}")
    public ResponseEntity<AuditEntityDto> findHistoryById(@PathVariable("id") Long id) throws Exception {
        return super.findHistoryById(id);
    }

    @ApiOperation("Gets skill paginated history by criteria")
    @PostMapping("history-paginated-by-criteria")
    public ResponseEntity<PaginatedList> findHistoryPaginatedByCriteria(@RequestBody SkillHistoryCriteria criteria) throws Exception {
        return super.findHistoryPaginatedByCriteria(criteria);
    }

    @ApiOperation("Exports skill history by criteria")
    @PostMapping("export-history")
    public ResponseEntity<InputStreamResource> exportHistory(@RequestBody SkillHistoryCriteria criteria) throws Exception {
        return super.exportHistory(criteria);
    }

    @ApiOperation("Gets skill history data size by criteria")
    @PostMapping("history-data-size")
    public ResponseEntity<Integer> getHistoryDataSize(@RequestBody SkillHistoryCriteria criteria) throws Exception {
        return super.getHistoryDataSize(criteria);
    }
    public SkillRestAdmin (SkillAdminService service, SkillConverter converter) {
        super(service, converter);
    }


}