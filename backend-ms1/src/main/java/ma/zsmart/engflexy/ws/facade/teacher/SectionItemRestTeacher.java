package  ma.zsmart.engflexy.ws.facade.teacher;


import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import ma.zsmart.engflexy.bean.core.SectionItem;
import ma.zsmart.engflexy.bean.history.SectionItemHistory;
import ma.zsmart.engflexy.dao.criteria.core.SectionItemCriteria;
import ma.zsmart.engflexy.dao.criteria.history.SectionItemHistoryCriteria;
import ma.zsmart.engflexy.service.facade.teacher.SectionItemTeacherService;
import ma.zsmart.engflexy.ws.converter.SectionItemConverter;
import ma.zsmart.engflexy.ws.dto.SectionItemDto;
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

@Api("Manages sectionItem services")
@RestController
@RequestMapping("/api/teacher/sectionItem/")
public class SectionItemRestTeacher  extends AbstractController<SectionItem, SectionItemDto, SectionItemHistory, SectionItemCriteria, SectionItemHistoryCriteria, SectionItemTeacherService, SectionItemConverter> {



    @RequestMapping(value = "upload", method = RequestMethod.POST, consumes = "multipart/form-data")
    public ResponseEntity<FileTempDto> uploadFileAndGetChecksum(@RequestBody MultipartFile file) throws Exception {
        return super.uploadFileAndGetChecksum(file);
    }

    @RequestMapping(value = "upload-multiple", method = RequestMethod.POST, consumes = "multipart/form-data")
    public ResponseEntity<List<FileTempDto>> uploadMultipleFileAndGetChecksum(@RequestBody MultipartFile[] files) throws Exception {
        return super.uploadMultipleFileAndGetChecksum(files);
    }

    @ApiOperation("Finds a list of all sectionItems")
    @GetMapping("")
    public ResponseEntity<List<SectionItemDto>> findAll() throws Exception {
        return super.findAll();
    }


    @ApiOperation("Finds a sectionItem by id")
    @GetMapping("id/{id}")
    public ResponseEntity<SectionItemDto> findById(@PathVariable Long id, String[] includes, String[] excludes) throws Exception {
        return super.findById(id, includes, excludes);
    }
    @ApiOperation("Saves the specified  sectionItem")
    @PostMapping("")
    public ResponseEntity<SectionItemDto> save(@RequestBody SectionItemDto dto) throws Exception {
        return super.save(dto);
    }

    @ApiOperation("Updates the specified  sectionItem")
    @PutMapping("")
    public ResponseEntity<SectionItemDto> update(@RequestBody SectionItemDto dto) throws Exception {
        return super.update(dto);
    }

    @ApiOperation("Delete list of sectionItem")
    @PostMapping("multiple")
    public ResponseEntity<List<SectionItemDto>> delete(@RequestBody List<SectionItemDto> listToDelete) throws Exception {
        return super.delete(listToDelete);
    }
    @ApiOperation("Delete the specified sectionItem")
    @DeleteMapping("")
    public ResponseEntity<SectionItemDto> delete(@RequestBody SectionItemDto dto) throws Exception {
            return super.delete(dto);
    }

    @ApiOperation("Delete the specified sectionItem")
    @DeleteMapping("id/{id}")
    public ResponseEntity<Long> deleteById(@PathVariable Long id) throws Exception {
        return super.deleteById(id);
    }
    @ApiOperation("Delete multiple sectionItems by ids")
    @DeleteMapping("multiple/id")
    public ResponseEntity<List<Long>> deleteByIdIn(@RequestBody List<Long> ids) throws Exception {
            return super.deleteByIdIn(ids);
     }


    @ApiOperation("find by section id")
    @GetMapping("section/id/{id}")
    public List<SectionItem> findBySectionId(@PathVariable Long id){
        return service.findBySectionId(id);
    }
    @ApiOperation("delete by section id")
    @DeleteMapping("section/id/{id}")
    public int deleteBySectionId(@PathVariable Long id){
        return service.deleteBySectionId(id);
    }
    @ApiOperation("Finds sectionItems by criteria")
    @PostMapping("find-by-criteria")
    public ResponseEntity<List<SectionItemDto>> findByCriteria(@RequestBody SectionItemCriteria criteria) throws Exception {
        return super.findByCriteria(criteria);
    }

    @ApiOperation("Finds paginated sectionItems by criteria")
    @PostMapping("find-paginated-by-criteria")
    public ResponseEntity<PaginatedList> findPaginatedByCriteria(@RequestBody SectionItemCriteria criteria) throws Exception {
        return super.findPaginatedByCriteria(criteria);
    }

    @ApiOperation("Exports sectionItems by criteria")
    @PostMapping("export")
    public ResponseEntity<InputStreamResource> export(@RequestBody SectionItemCriteria criteria) throws Exception {
        return super.export(criteria);
    }

    @ApiOperation("Gets sectionItem data size by criteria")
    @PostMapping("data-size-by-criteria")
    public ResponseEntity<Integer> getDataSize(@RequestBody SectionItemCriteria criteria) throws Exception {
        return super.getDataSize(criteria);
    }

    @ApiOperation("Gets sectionItem history by id")
    @GetMapping("history/id/{id}")
    public ResponseEntity<AuditEntityDto> findHistoryById(@PathVariable("id") Long id) throws Exception {
        return super.findHistoryById(id);
    }

    @ApiOperation("Gets sectionItem paginated history by criteria")
    @PostMapping("history-paginated-by-criteria")
    public ResponseEntity<PaginatedList> findHistoryPaginatedByCriteria(@RequestBody SectionItemHistoryCriteria criteria) throws Exception {
        return super.findHistoryPaginatedByCriteria(criteria);
    }

    @ApiOperation("Exports sectionItem history by criteria")
    @PostMapping("export-history")
    public ResponseEntity<InputStreamResource> exportHistory(@RequestBody SectionItemHistoryCriteria criteria) throws Exception {
        return super.exportHistory(criteria);
    }

    @ApiOperation("Gets sectionItem history data size by criteria")
    @PostMapping("history-data-size")
    public ResponseEntity<Integer> getHistoryDataSize(@RequestBody SectionItemHistoryCriteria criteria) throws Exception {
        return super.getHistoryDataSize(criteria);
    }
    public SectionItemRestTeacher (SectionItemTeacherService service, SectionItemConverter converter) {
        super(service, converter);
    }


}